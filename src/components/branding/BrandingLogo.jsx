import BrandLogo from "../../../public/src/img/branding/brandLogo.inline.svg";

const BrandingLogo = () => {

  return (
    <section id="brand">
      <h2 className="h3">{branding.logo.title}</h2>
      <div className="h6 fw-bold mt-8">{branding.logo.sub-title}</div>
      <div className="mt-5">
        <BrandLogo className="my-5" />
      </div>
      <p className="small mt-5">{branding.logo.description}</p>
    </section>
  );
};

export default BrandingLogo;
