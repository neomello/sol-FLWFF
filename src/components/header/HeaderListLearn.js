import { Link } from "../../utils/Link";
import StartSVG from "../../../assets/nav/learn/start.inline.svg";

const HeaderListLearn = () => {

  return (
    <div className="d-lg-flex">
      <div>
        <div className="text-uppercase py-2 d-flex align-items-center">
          <StartSVG className="me-3" />
          {nav.learn.start.title}
        </div>
        <div>
          <Link
            to="/learn/blockchain-basics"
            className="nav-link nav-link--secondary"
            activeClassName="active"
          >
            <strong className="d-block text-white">
              {learnStartItems[0].title}
            </strong>
            {learnStartItems[0].description}
          </Link>
          <Link
            to="/learn/nfts"
            className="nav-link nav-link--secondary"
            activeClassName="active"
          >
            <strong className="d-block text-white">
              {learnStartItems[1].title}
            </strong>
            {learnStartItems[1].description}
          </Link>
          <Link
            to="/environment"
            className="nav-link nav-link--secondary"
            activeClassName="active"
          >
            <strong className="d-block text-white">
              {learnStartItems[2].title}
            </strong>
            {learnStartItems[2].description}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderListLearn;
