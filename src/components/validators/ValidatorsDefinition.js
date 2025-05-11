import Image from "next/legacy/image";
import validatorLogo from "../../../public/src/img/validators/validators_geometry_small.png";

const ValidatorsDefinition = () => {

  return (
    <section className="definition">
      <div className="container">
        <div className="definition-content">
          <div className="definition-logo">
            <Image
              className=""
              src={validatorLogo}
              alt="Validator-Logo"
              placeholder="blur"
              quality={90}
            />
          </div>
          <div className="d-flex flex-column">
            <h2>{validators.definition.title}</h2>
            <p className="text-white my-0">{validators.definition.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidatorsDefinition;
