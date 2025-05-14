import { Link } from '../../utils/Link';
import DevelopersSVG from '../../../assets/nav/build/developers.inline.svg';
import MoreSVG from '../../../assets/nav/build/cases.inline.svg';

const HeaderListBuild = () => {
  return (
    <div className="d-lg-flex">
      <div>
        <div className="text-uppercase py-2 d-flex align-items-center">
          <DevelopersSVG className="me-3" />
          {nav.developers.items.title}
        </div>
        <div>
          <Link to="/docs" className="nav-link nav-link--secondary" activeClassName="active">
            <strong className="d-block text-white">{nav.developers.items.docs.title}</strong>
            {nav.developers.items.docs.description}
          </Link>
          <Link to="/docs/rpc" className="nav-link nav-link--secondary" activeClassName="active">
            <strong className="d-block text-white">{nav.developers.items.api.title}</strong>
            {nav.developers.items.api.description}
          </Link>
          <Link
            to="/developers/cookbook"
            className="nav-link nav-link--secondary"
            activeClassName="active"
          >
            <strong className="d-block text-white">{nav.developers.items.cookbook.title}</strong>
            {nav.developers.items.cookbook.description}
          </Link>
          <Link to="/developers" className="nav-link nav-link--secondary" activeClassName="active">
            <strong className="d-block text-white">{nav.developers.items.hub.title}</strong>
            {nav.developers.items.hub.description}
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <div className="text-uppercase py-2 d-flex align-items-center">
          <MoreSVG className="me-3" />
          {nav.developers.tutorials.title}
        </div>
        <div>
          <Link
            to="/docs/intro/quick-start"
            className="nav-link nav-link--secondary d-block text-white fw-bold"
            activeClassName="active"
          >
            {nav.developers.tutorials.hello - world}
          </Link>
          <Link
            to="/docs/intro/installation"
            className="nav-link nav-link--secondary text-white d-block fw-bold"
            activeClassName="active font-weight-bold"
          >
            {nav.developers.tutorials.local - setup}
          </Link>
          <Link
            to="/developers/evm-to-svm"
            className="nav-link nav-link--secondary text-white d-block fw-bold"
            activeClassName="active font-weight-bold"
          >
            {nav.developers.tutorials.evm - to - svm}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderListBuild;
