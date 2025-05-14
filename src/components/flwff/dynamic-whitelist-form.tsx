
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import the actual WhitelistForm component with SSR disabled
const ActualWhitelistForm = dynamic(() => import('@/components/flwff/whitelist-form'), {
  ssr: false,
  loading: () => (
    <div className="p-6 md:p-8 rounded-lg shadow-xl border border-primary/50 bg-card w-full max-w-md">
      <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
      <Skeleton className="h-6 w-full mb-6 mx-auto" />
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    </div>
  ),
});

export default function DynamicWhitelistForm() {
  return <ActualWhitelistForm />;
}
