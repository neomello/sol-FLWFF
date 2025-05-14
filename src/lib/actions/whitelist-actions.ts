
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ensureFirebaseInitialized } from '@/lib/firebase'; // Import ensureFirebaseInitialized
import { storeJson } from '@/lib/web3storage';

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um endereço de email válido.' }),
  walletAddress: z.string().min(26, { 
    message: 'O endereço da carteira parece muito curto.',
  }).max(44, {
    message: 'O endereço da carteira parece muito longo.'
  }).regex(/^[a-zA-Z0-9]+$/, {
    message: 'O endereço da carteira contém caracteres inválidos.'
  }),
});

interface WhitelistSubmissionResult {
  success: boolean;
  ipfsHash?: string;
  error?: string;
}

export async function submitWhitelistAction(
  values: z.infer<typeof formSchema>
): Promise<WhitelistSubmissionResult> {
  try {
    const validatedData = formSchema.parse(values);
    
    const { db } = ensureFirebaseInitialized(); // Get db instance safely

    const docRef = await addDoc(collection(db, 'whitelist'), {
      walletAddress: validatedData.walletAddress,
      email: validatedData.email,
      timestamp: serverTimestamp(),
    });

    const ipfsData = { 
      walletAddress: validatedData.walletAddress,
      email: validatedData.email,
      firestoreDocId: docRef.id,
      submissionTimestamp: new Date().toISOString(),
    };
    
    const ipfsHash = await storeJson(ipfsData, `whitelist-${docRef.id}.json`);

    return { success: true, ipfsHash };
  } catch (error) {
    console.error('Whitelist submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados fornecidos inválidos. Verifique os campos e tente novamente.' };
    }
    
    let errorMessage = 'Ocorreu um erro inesperado durante o envio.';
    if (error instanceof Error) {
        if (error.message.startsWith("Firebase services are critically unavailable")) {
            errorMessage = "Serviço de banco de dados indisponível. Verifique a configuração do Firebase.";
        } else if (error.message.includes('NEXT_PUBLIC_WEB3_STORAGE_TOKEN')) {
            errorMessage = 'Erro de configuração do armazenamento IPFS. Contate o suporte.';
        } else {
            errorMessage = error.message;
        }
    }
    return { success: false, error: errorMessage };
  }
}
