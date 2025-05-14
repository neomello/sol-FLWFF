
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import HeroSection from '@/components/flwff/hero-section';
import PageFooter from '@/components/layout/page-footer';
// import DynamicPageHeader from '@/components/layout/dynamic-page-header'; // Removed
import PriceDisplay from '@/components/flwff/price-display';
import DynamicWhitelistForm from '@/components/flwff/dynamic-whitelist-form';
import DynamicStakingSection from '@/components/flwff/dynamic-staking-section';
import { Separator } from '@/components/ui/separator';
import { Coins, ShieldCheck, ListPlus } from 'lucide-react';

const HeaderLoadingSkeleton = () => (
  <header className="py-4 md:py-6 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  </header>
);

const AppHeaderDynamic = dynamic(() => import('@/components/layout/app-header'), {
  ssr: false,
  loading: () => <HeaderLoadingSkeleton />,
});


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <AppHeaderDynamic />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 flex flex-col items-center space-y-12 md:space-y-20">

        <HeroSection />

        <Separator className="my-8 md:my-12 w-3/4 max-w-2xl bg-border/50" />

        <section id="price" className="w-full max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center font-mono uppercase tracking-tight flex items-center justify-center">
            <Coins className="mr-3 h-8 w-8" /> Cotação $FLWFF
          </h2>
          <PriceDisplay tokenGeckoId="flow" tokenSymbol="FLWFF" />
          <p className="text-xs text-muted-foreground mt-3 italic">
            (Simulando preço $FLWFF com $FLOW via CoinGecko API)
          </p>
        </section>

        <Separator className="my-8 md:my-12 w-3/4 max-w-2xl bg-border/50" />

        <section id="whitelist" className="w-full max-w-md">
          <div className="p-6 md:p-8 rounded-lg shadow-xl border border-primary/50 bg-card">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center font-mono uppercase tracking-tight flex items-center justify-center">
              <ListPlus className="mr-3 h-8 w-8" /> Entre na Whitelist
            </h2>
            <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
              Garanta seu acesso antecipado e benefícios exclusivos no ecossistema FLWFF.
            </p>
            <DynamicWhitelistForm />
          </div>
        </section>
        
        <Separator className="my-8 md:my-12 w-3/4 max-w-2xl bg-border/50" />

        <DynamicStakingSection />

      </main>

      <PageFooter />
    </div>
  );
}
