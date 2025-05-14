
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// Define a loading skeleton for the AppHeader
const HeaderLoadingSkeleton = () => (
  <header className="py-4 md:py-6 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center space-x-3 rtl:space-x-reverse group">
        <Skeleton className="h-[60px] w-[60px] rounded-full" />
        <Skeleton className="h-8 w-20" />
      </div>
      <Skeleton className="h-10 w-32" /> {/* Placeholder for AuthModal or User Dropdown */}
    </div>
  </header>
);

// Dynamically import the actual AppHeader component
const ActualAppHeader = dynamic(() => import('@/components/layout/app-header'), {
  ssr: false, // Ensure this component is not server-side rendered
  loading: () => <HeaderLoadingSkeleton />,
});

export default function DynamicAppHeader() {
  return <ActualAppHeader />;
}
