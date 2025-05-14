
import HeroSection from '@/components/flwff/hero-section';
import PageFooter from '@/components/layout/page-footer';
import { Button } from '@/components/ui/button'; 
import DynamicPageHeader from '@/components/layout/dynamic-page-header';


// import PriceDisplay from '@/components/flwff/price-display'; // Placeholder
// import WhitelistForm from '@/components/flwff/whitelist-form'; // Placeholder
// import StakingSection from '@/components/flwff/staking-section'; // Placeholder

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <DynamicPageHeader />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 flex flex-col items-center space-y-16">

        <HeroSection />

        <section id="price" className="w-full max-w-2xl mb-12 md:mb-16 text-center">
          <div className="bg-card border-2 border-primary text-secondary font-mono p-6 rounded-lg shadow-lg">
            <div className="text-left mb-4">
              <div>FLWFF | Valor Atual: $0.4761</div>
              <div>{`<<< Atualizado em tempo real >>>`}</div>
            </div>
            <div className="text-sm italic text-muted-foreground text-center">
              “Transparência em cada bloco. O valor da sua confiança, ancorado na tecnologia.”
            </div>
          </div>
        </section>

        <section id="whitelist" className="w-full max-w-md mb-12 md:mb-16">
          <div className="p-6 md:p-8 rounded-lg shadow-xl border border-border bg-card">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
              PARTICIPE DO ECOSSISTEMA FLWFF
            </h2>
            <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
              Cadastre-se para acesso prioritário às funcionalidades.
            </p>
            <div className="bg-input p-4 rounded-md border border-border">
              <input type="email" placeholder="Seu melhor e-mail" className="w-full p-2 bg-transparent border-b border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
              <Button className="w-full mt-6 bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                ENTRAR NA WHITELIST
              </Button>
            </div>
            <p className="text-muted-foreground/80 mt-4 text-center text-xs">
              Você receberá notificações sobre os próximos passos diretamente em seu e-mail.
            </p>
          </div>
        </section>

        <section id="staking" className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Trave seus FLWFF e amplie seu impacto no ecossistema.
          </h2>
          <p className="text-muted-foreground mb-8 text-center text-sm md:text-base">
            Quanto mais tempo você contribui, maior sua participação nos retornos e decisões.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border text-center">Status Card 1 (Disponível)</div>
            <div className="p-6 bg-card rounded-lg border border-border text-center opacity-40 grayscale">Status Card 2 (Encerrado)</div>
            <div className="p-6 bg-card rounded-lg border border-border text-center opacity-50">Status Card 3 (Em Resgate)</div>
            <div className="p-6 bg-card rounded-lg border border-border text-center opacity-40">Status Card 4 (Finalizado)</div>
          </div>
        </section>

      </main>

      <PageFooter />
    </div>
  );
}
