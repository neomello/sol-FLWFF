
'use client';

import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, type SafeEventEmitterProvider } from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { ethers } from 'ethers';
import { ensureFirebaseInitialized, isFirebaseInitialized as getIsFirebaseInitialized } from '@/lib/firebase'; // Firebase Auth instance
import type { User as FirebaseUser, Auth as FirebaseAuthInstanceType } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';

// Define the user type for our context
export interface AppUser {
  id: string; // Firebase UID or Wallet Address
  email?: string | null;
  walletAddress?: string | null;
  authMethod: 'firebase_email' | 'web3auth_wallet';
  provider?: SafeEventEmitterProvider | null; // Web3Auth provider
  firebaseUser?: FirebaseUser | null; // Firebase user object
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  web3auth: Web3Auth | null;
  firebaseReady: boolean;
  loginWithWeb3: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<FirebaseUser | null>;
  signupWithEmail: (email: string, pass: string) => Promise<FirebaseUser | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '';
if (!clientId) {
  console.warn('[AuthContext] NEXT_PUBLIC_WEB3AUTH_CLIENT_ID is not set. Web3Auth will not function properly.');
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [web3authInstance, setWeb3authInstance] = useState<Web3Auth | null>(null);
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [firebaseAuthInstance, setFirebaseAuthInstance] = useState<FirebaseAuthInstanceType | null>(null);
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    console.log('[AuthContext] Initializing Firebase...');
    const initFirebase = () => {
      try {
        if (getIsFirebaseInitialized()) {
          const { auth: authInstance } = ensureFirebaseInitialized();
          setFirebaseAuthInstance(authInstance);
          setFirebaseReady(true);
          console.log('[AuthContext] Firebase initialized successfully.');
        } else {
          console.warn("[AuthContext] Firebase not initialized at AuthProvider mount via getIsFirebaseInitialized. Email/password auth might be unavailable.");
          setFirebaseReady(false);
        }
      } catch (error) {
        console.error("[AuthContext] Failed to ensure Firebase initialization:", error);
        setFirebaseReady(false);
      }
    };
    initFirebase();
  }, []);


  useEffect(() => {
    const initWeb3Auth = async () => {
      if (!clientId) {
        console.warn('[AuthContext] Web3Auth Client ID is missing, skipping Web3Auth initialization.');
        // setLoading(false) will be handled by Firebase auth listener or after all inits
        return;
      }
      console.log('[AuthContext] Initializing Web3Auth...');
      try {
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: 'sapphire_mainnet',
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1', 
            rpcTarget: 'https://rpc.ankr.com/eth',
            displayName: 'Ethereum Mainnet',
            blockExplorer: 'https://etherscan.io',
            ticker: 'ETH',
            tickerName: 'Ethereum',
          },
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["google", "facebook", "twitter", "discord", "email_passwordless"],
            defaultLanguage: "pt-BR",
            modalZIndex: "99999",
          }
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            uxMode: 'popup',
             whiteLabel: {
              name: "FLWFF Collective",
              logoLight: "https://res.cloudinary.com/dgyocpguk/image/upload/v1747181760/2_zucoyt.png",
              logoDark: "https://res.cloudinary.com/dgyocpguk/image/upload/v1747181760/2_zucoyt.png",
              defaultLanguage: "pt-BR",
              dark: true, 
            },
          },
        });
        web3auth.configureAdapter(openloginAdapter);
        
        await web3auth.initModal();
        setWeb3authInstance(web3auth);
        console.log('[AuthContext] Web3Auth initialized successfully.');

        if (web3auth.provider) {
          console.log('[AuthContext] Web3Auth provider found, attempting to set user.');
          const ethersProvider = new ethers.BrowserProvider(web3auth.provider);
          const signer = await ethersProvider.getSigner();
          const address = await signer.getAddress();
          setUser({
            id: address,
            walletAddress: address,
            authMethod: 'web3auth_wallet',
            provider: web3auth.provider,
          });
          console.log('[AuthContext] User set via Web3Auth provider:', address);
        } else {
          console.log('[AuthContext] No active Web3Auth provider on init.');
        }
      } catch (error) {
        console.error('[AuthContext] Web3Auth initialization error:', error);
      } finally {
        // setLoading(false) will be handled by Firebase auth listener or after all inits
      }
    };

    initWeb3Auth();

    // Firebase Auth state listener
    let unsubscribe: (() => void) | null = null;
    if (firebaseAuthInstance) {
      console.log('[AuthContext] Setting up Firebase Auth state listener.');
      unsubscribe = onAuthStateChanged(firebaseAuthInstance, (fbUser) => {
        console.log('[AuthContext] Firebase Auth state changed. Firebase User:', fbUser ? fbUser.uid : null);
        if (fbUser) {
          if (!web3authInstance?.provider) { // Prioritize Web3 if active
             console.log('[AuthContext] Firebase user detected, Web3Auth provider not active. Setting user from Firebase.');
             setUser({
              id: fbUser.uid,
              email: fbUser.email,
              authMethod: 'firebase_email',
              firebaseUser: fbUser,
            });
          } else {
            console.log('[AuthContext] Firebase user detected, but Web3Auth provider is active. Prioritizing Web3Auth user.');
          }
        } else if (user?.authMethod !== 'web3auth_wallet') { 
          console.log('[AuthContext] No Firebase user and not a Web3Auth session. Setting user to null.');
          setUser(null);
        }
        console.log('[AuthContext] Finished processing Firebase Auth state change. Setting loading to false.');
        setLoading(false); // Firebase auth state is now determined
      });
    } else {
      console.warn("[AuthContext] Firebase Auth instance not ready, Firebase auth state listener not set up. This might affect email/password auth and persisted sessions.");
      if(user?.authMethod !== 'web3auth_wallet') {
        console.log('[AuthContext] Firebase Auth instance not ready and not a Web3Auth session. Setting user to null.');
        setUser(null);
      }
      console.log('[AuthContext] Firebase Auth instance not ready. Setting loading to false.');
      setLoading(false); // Still need to stop loading
    }

    return () => {
      if (unsubscribe) {
        console.log('[AuthContext] Unsubscribing Firebase Auth state listener.');
        unsubscribe();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseAuthInstance, firebaseReady]); // Rerun when firebaseAuthInstance becomes available.

  const loginWithWeb3 = async () => {
    if (!web3authInstance) {
      console.error('[AuthContext] Web3Auth not initialized. Cannot login with Web3.');
      return;
    }
    console.log('[AuthContext] Attempting Web3 login...');
    try {
      setLoading(true);
      const web3authProvider = await web3authInstance.connect();
      if (web3authProvider) {
        const ethersProvider = new ethers.BrowserProvider(web3authProvider);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();
        setUser({
          id: address,
          walletAddress: address,
          authMethod: 'web3auth_wallet',
          provider: web3authProvider,
        });
        console.log('[AuthContext] Web3 login successful. Wallet address:', address);
        // If Firebase was active, sign out to avoid conflicts
        if (firebaseAuthInstance?.currentUser) {
          console.log('[AuthContext] Firebase user detected during Web3 login, signing out from Firebase.');
          await firebaseSignOut(firebaseAuthInstance);
        }
      } else {
         console.warn('[AuthContext] Web3Auth connect did not return a provider.');
      }
    } catch (error) {
      console.error('[AuthContext] Web3Auth login error:', error);
    } finally {
      console.log('[AuthContext] Web3 login attempt finished. Setting loading to false.');
      setLoading(false);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    if (!firebaseAuthInstance) {
      console.error("[AuthContext] Firebase Auth not ready for email login.");
      throw new Error("Serviço de autenticação indisponível.");
    }
    console.log('[AuthContext] Attempting Firebase email login for:', email);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuthInstance, email, pass);
      console.log('[AuthContext] Firebase email login successful for UID:', userCredential.user.uid);
      // Auth state listener will update user. If Web3Auth was active, log it out.
      if (web3authInstance?.provider) {
        console.log('[AuthContext] Web3Auth provider active during email login, logging out from Web3Auth.');
        await web3authInstance.logout();
      }
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      console.error("[AuthContext] Firebase email login error:", error);
      setLoading(false);
      throw error;
    }
  };

  const signupWithEmail = async (email: string, pass: string) => {
     if (!firebaseAuthInstance) {
      console.error("[AuthContext] Firebase Auth not ready for email signup.");
      throw new Error("Serviço de autenticação indisponível.");
    }
    console.log('[AuthContext] Attempting Firebase email signup for:', email);
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuthInstance, email, pass);
      console.log('[AuthContext] Firebase email signup successful for UID:', userCredential.user.uid);
      // Auth state listener will update user. If Web3Auth was active, log it out.
      if (web3authInstance?.provider) {
        console.log('[AuthContext] Web3Auth provider active during email signup, logging out from Web3Auth.');
        await web3authInstance.logout();
      }
      setLoading(false);
      return userCredential.user;
    } catch (error) {
      console.error("[AuthContext] Firebase email signup error:", error);
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    console.log('[AuthContext] Attempting logout. Current user auth method:', user?.authMethod);
    setLoading(true);
    if (user?.authMethod === 'web3auth_wallet' && web3authInstance?.provider) {
      console.log('[AuthContext] Logging out from Web3Auth.');
      await web3authInstance.logout();
    }
    if ((user?.authMethod === 'firebase_email' || firebaseAuthInstance?.currentUser) && firebaseAuthInstance) {
       console.log('[AuthContext] Logging out from Firebase.');
       await firebaseSignOut(firebaseAuthInstance);
    }
    setUser(null);
    console.log('[AuthContext] Logout successful. User set to null.');
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, web3auth: web3authInstance, firebaseReady, loginWithWeb3, loginWithEmail, signupWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

