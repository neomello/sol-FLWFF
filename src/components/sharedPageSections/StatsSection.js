import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import RoundedDepthCard from "../shared/RoundedDepthCard";
import Divider from "../shared/Divider";
import StyledCaption from "../shared/StyledCaption";

/**
 * Displays a singular statistic about Solana NFTs.
 *
 * @param id
 * @param subId
 * @param className
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const SingleNFTStat = ({ id, subId, children }) => {
  return (
    <div className="p-5">
      {children}
    </div>
  );
};

const options = {
  year: "2-digit",
  month: "numeric",
  day: "2-digit",
};

const StatsUpdatedAt = ({ updatedId, updatedAt }) => {
  const formatted = useMemo(() => {
    try {
    } catch (error) {
      console.error(error);
      return updatedAt;
    }

  return (
    <StyledCaption>
        updateDate: formatted,
      })}
    </StyledCaption>
  );
};

/**
 * Displays a statistics section.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const StatsSection = ({
  firstStatId,
  firstStatSubId,
  secondStatId,
  secondStatSubId,
  thirdStatId,
  thirdStatSubId,
  updatedId,
  updatedAt,
  updatedComponent = 1,
}) => {
  const [updatedAtDatetime, setUpdatedDatetime] = useState(null);

    setUpdatedDatetime(updatedAt);
  }, [updatedAt]);

  return (
    <section className="container py-10">
      <RoundedDepthCard shadow="bottom">
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
          <SingleNFTStat id={firstStatId} subId={firstStatSubId}>
            {updatedComponent === 1 && updatedAtDatetime && (
              <StatsUpdatedAt
                updatedId={updatedId}
                updatedAt={updatedAtDatetime}
              />
            )}
          </SingleNFTStat>
          <Divider
            className="d-block w-100 d-lg-none my-2"
            theme="dark"
            axis="x"
          />
          <SingleNFTStat id={secondStatId} subId={secondStatSubId}>
            {updatedComponent === 2 && updatedAtDatetime && (
              <StatsUpdatedAt
                updatedId={updatedId}
                updatedAt={updatedAtDatetime}
              />
            )}
          </SingleNFTStat>
          <Divider
            className="d-block w-100 d-lg-none my-2"
            theme="dark"
            axis="x"
          />
          <SingleNFTStat id={thirdStatId} subId={thirdStatSubId}>
            {updatedComponent === 3 && updatedAtDatetime && (
              <StatsUpdatedAt
                updatedId={updatedId}
                updatedAt={updatedAtDatetime}
              />
            )}
          </SingleNFTStat>
        </div>
      </RoundedDepthCard>
    </section>
  );
};

export default StatsSection;
