import Loader from "../../../public/src/img/icons/Loader.inline.svg";
import RoundedDepthCard from "../shared/RoundedDepthCard";
import { FormattedNumber } from "../SolFormattedMessage";
import {
  PERF_UPDATE_SEC,
  SAMPLE_HISTORY_HOURS,

const ValidatorsCards = ({ visible }) => {
    visible,
    performanceUpdateSeconds: PERF_UPDATE_SEC,
    sampleHistoryHours: SAMPLE_HISTORY_HOURS,
  });

  return (
    <section className="cards mt-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <RoundedDepthCard className="px-5 py-8" shadow="bottom">
              <div className="h1 text-black">
                {availableStats ? (
                  <FormattedNumber value={validators} />
                ) : (
                  <Loader />
                )}
              </div>
              <p className="text-black m-0">
                {validators.cards.number-text}
              </p>
            </RoundedDepthCard>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <RoundedDepthCard className="px-5 py-8" shadow="bottom">
              <div className="h1 text-black">
                {superminority !== null ? (
                  <FormattedNumber value={superminority} />
                ) : (
                  <Loader />
                )}
              </div>
              <p className="text-black m-0">
                {validators.cards.nakamoto-text}
              </p>
            </RoundedDepthCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidatorsCards;
