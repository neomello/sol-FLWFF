
'use client';

import dynamic from 'next/dynamic';

// Dynamically import PageHeader with SSR disabled
const PageHeader = dynamic(() => import('@/components/layout/page-header'), {
  ssr: false,
  // Optional: loading state
  // loading: () => <p>Loading header...</p>,
});

export default function DynamicPageHeader() {
  return <PageHeader />;
}
