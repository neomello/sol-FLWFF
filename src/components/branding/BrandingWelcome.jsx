import { InlineLink } from "../shared/Link";

const BrandingWelcome = () => {

  return (
    <section>
      <div className="h6">{branding.welcome.title}</div>
      <p className="small">{branding.welcome.description}</p>
      <p className="small">
          components={{
            guidelinesLink: (
              <InlineLink to="https://drive.google.com/file/d/1o8fsSbD6wtRWizBW_3OrNYFtF9ZTr7iQ/view" />
            ),
          }}
        />
      </p>
    </section>
  );
};

export default BrandingWelcome;
