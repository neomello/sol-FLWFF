import styled from 'styled-components';
import Button from '../shared/Button';

const StyledEventsHeroSection = styled.section`
  position: relative;

  .hero-gradient {
    position: absolute;
      50% 50% at 50% 50%,
      #9945ff 0%,
      rgba(62, 30, 100, 0) 100%
    );
    width: 2340px;
    height: 1340px;
    bottom: -15%;
    left: ${(props) => (props.$singleton ? `-40%` : `-60%`)};
    max-width: ${(props) => (props.$singleton ? `100vw` : `auto`)};
  }
`;

const EventsHeroSection = ({ type = 'hero' }) => {
  return (
    <StyledEventsHeroSection>
      <div className="hero-gradient" />
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-7">
            {type === 'archive' && <Button to="/events">{events.hero.all - events}</Button>}
          </div>
        </div>
      </div>
    </StyledEventsHeroSection>
  );
};

export default EventsHeroSection;
