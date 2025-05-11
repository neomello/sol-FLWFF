import Image from 'next/legacy/image';
import clearspaceMain from '../../../public/src/img/branding/spacing.png';

const BrandingClearspace = () => {
  return (
    <section>
      <div className="h6 fw-bold">{branding.clearspace.title}</div>
      <p className="small mt-2">{branding.clearspace.description}</p>
      <div className="d-flex align-items-center justify-content-center mt-8">
        <Image alt="" src={clearspaceMain} />
      </div>
    </section>
  );
};

export default BrandingClearspace;
