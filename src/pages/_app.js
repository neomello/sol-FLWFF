import { ThemeProvider } from '@/components/ThemeProvider';
import '../scss/index.scss';
import SitewideTopAlert from '../components/sharedPageSections/SitewideTopAlert';
import GTMTrackingSnippet from '@/components/GTMTrackingSnippet';
import CookieConsent from '@/components/CookieConsent';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GTMTrackingSnippet />
      <CookieConsent />
      <ThemeProvider>
        <Component {...pageProps} key={pageProps.key} />
      </ThemeProvider>
    </>
  );
};

export default App;
