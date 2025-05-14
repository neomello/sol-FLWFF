
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ensureFirebaseInitialized } from '@/lib/firebase'; // Import ensureFirebaseInitialized
import type { StakingFormValues } from '@/lib/schemas/staking-schema';
import { StakingFormSchema } from '@/lib/schemas/staking-schema';

interface StakingSubmissionResult {
  success: boolean;
  stakeId?: string;
  error?: string;
}

export async function submitStakingAction(
  values: StakingFormValues
): Promise<StakingSubmissionResult> {
  try {
    const validatedData = StakingFormSchema.parse(values);
    
    const { db } = ensureFirebaseInitialized(); // Get db instance safely

    const docRef = await addDoc(collection(db, 'staking'), {
      walletAddress: validatedData.walletAddress,
      amount: validatedData.amount,
      durationMonths: validatedData.durationMonths,
      startDate: serverTimestamp(),
      status: 'active', // Initial status
    });

    return { success: true, stakeId: docRef.id };
  } catch (error) {
    console.error('Staking submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados de staking inválidos. Verifique as informações.' };
    }
    // Handle cases where ensureFirebaseInitialized might throw
    if (error instanceof Error && error.message.startsWith("Firebase services are critically unavailable")) {
      return { success: false, error: "Serviço de banco de dados indisponível. Verifique a configuração do Firebase." };
    }
    return { success: false, error: error instanceof Error ? error.message : 'Ocorreu um erro inesperado ao processar o stake.' };
  }
}
