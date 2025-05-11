import { useRef } from "react";
import { useCountUp } from "react-countup";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

/**
 * Displays refurbished "continuous" transaction count.
 *
 * @param info
 * @param perfUpdateSec
 * @returns {JSX.Element}
 * @constructor
 */
  const countUpRef = useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    delay: 0,
    duration: perfUpdateSec + 2,
    startOnMount: true,
    preserveValue: true,
    separator: ",",
  });

    if (countUpRef.current) {
    }
  return <span ref={countUpRef} />;
};
