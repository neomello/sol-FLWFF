
import { z } from 'zod';

export const StakingFormSchema = z.object({
  walletAddress: z.string().min(26, { message: 'Endereço da carteira inválido.' }),
  amount: z.number().positive({ message: 'O montante deve ser positivo.' }),
  durationMonths: z.coerce.number().min(1, { message: 'A duração deve ser de pelo menos 1 mês.' }),
});

export type StakingFormValues = z.infer<typeof StakingFormSchema>;
