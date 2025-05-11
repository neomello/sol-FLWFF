import EmailSubscribeForm from '../../../shared/EmailSubscribeForm';
import DevelopersContent from './DevelopersContent';

import styles from './DevelopersNewsletter.module.scss';

export default function DevelopersNewsletter() {
  return (
    <DevelopersContent.Container>
      <div>
        <DevelopersContent.Title>{developers.content.newsletter.title}</DevelopersContent.Title>
        <DevelopersContent.Description>
          {developers.content.newsletter.description}
        </DevelopersContent.Description>
      </div>
      <div className={styles['signup-form']}>
        <EmailSubscribeForm formId="f1bc79b9-a1cd-463a-8c2c-e761b2fa108d" />
      </div>
    </DevelopersContent.Container>
  );
}
