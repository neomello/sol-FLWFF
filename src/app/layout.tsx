import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseProvider } from '@/components/firebase-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '700'], // Specify weights for Space Grotesk
});

export const metadata: Metadata = {
  title: 'FLWFF Stablecoin Info',
  description: 'Enter the Abyss. Track $FLWFF. Join the Inner Circle.',
  icons: {
    icon: 'https://res.cloudinary.com/dgyocpguk/image/upload/v1747184999/ico_myg1kz.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}>
        <FirebaseProvider>
          {children}
          <Toaster />
        </FirebaseProvider>
      </body>
    </html>
  );
}
