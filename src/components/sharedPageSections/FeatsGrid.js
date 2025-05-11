import StyledCaption from '../shared/StyledCaption';
import Divider from '../shared/Divider';
import Button from '../shared/Button';

/**
 * Displays grid info
 *
 * @param {String}  captionId     The section caption ID
 * @param {String}  titleId       The section title ID
 * @param {Array}   childrenArr   The array of objects, title and description, to loop within
 * @returns {JSX.Element}
 * @constructor
 */

const FeatsGrid = ({ captionId, titleId, childrenArr }) => {
  return (
    <section>
      {captionId && <StyledCaption className="text-uppercase mb-6"></StyledCaption>}
      <div className="row">
        {childrenArr.map((el, k) => (
          <div className="col-md-6" key={k}>
            <Divider theme="light" axis="x" className="my-5" />
            {el.cta && <Button to={el.cta.url} newTab></Button>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatsGrid;
