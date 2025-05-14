'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { submitWhitelistAction } from '@/lib/actions/whitelist-actions';
import { useState, useTransition } from 'react';
import { Loader2, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';

const formSchema = z.object({
  walletAddress: z.string().min(26, { // Basic check, can be more specific for ETH/SOL
    message: 'Wallet address seems too short.',
  }).max(44, { // Solana addresses are typically 44 chars, ETH 42.
    message: 'Wallet address seems too long.'
  }).regex(/^[a-zA-Z0-9]+$/, {
    message: 'Wallet address contains invalid characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

type WhitelistFormValues = z.infer<typeof formSchema>;

export default function WhitelistForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [submissionResult, setSubmissionResult] = useState<{ ipfsHash: string; gatewayUrl: string } | null>(null);

  const form = useForm<WhitelistFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      walletAddress: '',
      email: '',
    },
  });

  function onSubmit(values: WhitelistFormValues) {
    setSubmissionResult(null);
    startTransition(async () => {
      try {
        const result = await submitWhitelistAction(values);
        if (result.success && result.ipfsHash) {
          toast({
            title: (
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                <span className="font-bold">Pact Sealed!</span>
              </div>
            ),
            description: `Your entry is immortalized. IPFS Hash: ${result.ipfsHash.substring(0,12)}...`,
            variant: 'default',
            className: 'bg-card border-secondary text-foreground',
          });
          setSubmissionResult({ 
            ipfsHash: result.ipfsHash,
            gatewayUrl: `https://ipfs.io/ipfs/${result.ipfsHash}` // Generic IPFS gateway
          });
          form.reset();
        } else {
          throw new Error(result.error || 'An unknown error occurred.');
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Submission failed. Please try again.';
        toast({
          title: (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
              <span className="font-bold">Error</span>
            </div>
          ),
          description: errorMessage,
          variant: 'destructive',
        });
      }
    });
  }

  if (submissionResult) {
    return (
      <div className="text-center p-6 bg-input rounded-md shadow-inner">
        <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Submission Recorded</h3>
        <p className="text-muted-foreground mb-1 text-sm">Your data has been processed.</p>
        <p className="text-muted-foreground mb-4 text-sm">
          IPFS Hash: <span className="text-secondary font-mono break-all">{submissionResult.ipfsHash}</span>
        </p>
        <Button
          variant="outline"
          className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          onClick={() => window.open(submissionResult.gatewayUrl, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View on IPFS Gateway
        </Button>
         <Button variant="link" className="text-primary mt-4" onClick={() => setSubmissionResult(null)}>
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="walletAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Wallet Address (ETH/SOL)</FormLabel>
              <FormControl>
                <Input
                  placeholder="0x... or Sol..."
                  {...field}
                  className="bg-input border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/50 h-12 text-base"
                  aria-describedby="wallet-address-help"
                />
              </FormControl>
              <p id="wallet-address-help" className="text-xs text-muted-foreground/70 pt-1">Your public key to the new world.</p>
              <FormMessage className="text-destructive/80" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground uppercase text-xs tracking-wider">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.signal@domain.com"
                  {...field}
                  className="bg-input border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/50 h-12 text-base"
                  aria-describedby="email-help"
                />
              </FormControl>
              <p id="email-help" className="text-xs text-muted-foreground/70 pt-1">For vital transmissions only.</p>
              <FormMessage className="text-destructive/80" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 h-14 text-lg uppercase tracking-wider"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Seal the Covenant'
          )}
        </Button>
      </form>
    </Form>
  );
}
