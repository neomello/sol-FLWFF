// import styles from "./NFTShowdownFooter.module.scss";
import { InlineLink } from '../shared/Link';
import { useState } from 'react';
import Button from '../shared/Button';

const NFTShowdownFooter = () => {
  const [showParagraphs, setShowParagraphs] = useState(false);
  const showMore = () => {
    setShowParagraphs(!showParagraphs);
  };

  return (
    <div className="mt-10">
      <div className="small mt-10">
        <InlineLink to="https://drive.google.com/file/d/1xIidoqH8bt5m8FdCPnMGqb1VASo59ZY3/view">
          <u>{nft - showdown.disclaimer.rules}</u>
        </InlineLink>

        <h3 className="h6 mt-4 text-uppercase">{nft - showdown.disclaimer.title}</h3>
        <p>{nft - showdown.disclaimer.description - line - 1}</p>
        <p className={showParagraphs ? 'd-block' : 'd-none d-md-block'}>
          {nft - showdown.disclaimer.description - line - 2}
        </p>
        <div className="d-md-none py-2">
          <Button size="small" onClick={showMore}>
            `nft-showdown.disclaimer.${!showParagraphs ? 'read-more-button' : 'read-less-button'}`,
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTShowdownFooter;
