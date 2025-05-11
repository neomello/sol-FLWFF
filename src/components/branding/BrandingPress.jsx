
const BrandingPress = () => {

  return (
    <section className="pt-10" id="press">
      <h2 className="h3">{branding.press.title}</h2>
      <p className="small">
        {branding.press.description}{" "}
        <a href="mailto:press@solana.org" className="link">
          press@solana.org
        </a>
        .
      </p>
    </section>
  );
};

export default BrandingPress;
