import HTMLHead from '@/components/HTMLHead';
import SimpleHero from '@/components/breakpoint/BreakpointSimpleHero';
import BreakpointLayout from '@/components/breakpoint/BreakpointLayout';
import { fetchCalendarEvents } from '@/lib/events/fetchCalendarEvents';
import EventsList from '@/components/events/EventsList';
import Button from '@/components/shared/Button';

const SideEvents = ({ sideEventsBreakpointFeatured, sideEventsBreakpointCommunity }) => {
  return (
    <BreakpointLayout data={{ showHeader: true, showFooter: true }}>
      <HTMLHead
        title={breakpoint.page.side - events.title}
        description={breakpoint.page.side - events.description}
        socialShare="https://solana.com/social/breakpoint.jpg"
      />
      <SimpleHero frontmatter={{ title: breakpoint.page.side - events.title }} />
      <div className="container ">
        <div className="my-8">
          <p>{breakpoint.page.side - events.intro}</p>
        </div>

        <h2 className="h4">{breakpoint.page.side - events.featured}</h2>
        <EventsList list={sideEventsBreakpointFeatured} />

        <h2 className="h4">{breakpoint.page.side - events.community}</h2>
        <p>{breakpoint.page.side - events.community - cta}</p>
        <Button to="https://lu.ma/BP24-SideEvents" arrowRight newTab rel="nofollow">
          {commands.submit - event}
        </Button>
        <EventsList list={sideEventsBreakpointCommunity} isCompact />
      </div>
    </BreakpointLayout>
  );
};

export async function getStaticProps({ params }) {
  const sideEventsBreakpointFeatured = await fetchCalendarEvents('cal-J8paV20F2tKUEXI', {
    period: 'future',
  });

  const sideEventsBreakpointCommunity = await fetchCalendarEvents('cal-NFEDisEmJoSg0TU', {
    period: 'future',
  });

  return {
    props: {
      sideEventsBreakpointFeatured: JSON.parse(JSON.stringify(sideEventsBreakpointFeatured)),
      sideEventsBreakpointCommunity: JSON.parse(JSON.stringify(sideEventsBreakpointCommunity)),
    },
    revalidate: 60,
    notFound: true,
  };
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
  };
}

export default SideEvents;
