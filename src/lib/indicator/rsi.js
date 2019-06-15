import { rebind, merge } from '../utils';

import { rsiAlgo as algo } from '../calculator';

import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'RSI';

const rsi = () => {
  const base = baseIndicator()
    .type(ALGORITHM_TYPE)
    .accessor((d) => d.rsi);

  const underlyingAlgorithm = algo();

  const mergedAlgorithm = merge()
    .algorithm(underlyingAlgorithm)
    .merge((datum, indicator) => {
      datum.rsi = indicator;
    });

  const indicator = function(data, options = { merge: true }) {
    if (options.merge) {
      if (!base.accessor())
        throw new Error(
          `Set an accessor to ${ALGORITHM_TYPE} before calculating`
        );
      return mergedAlgorithm(data);
    }
    return underlyingAlgorithm(data);
  };

  rebind(indicator, base, 'id', 'accessor', 'stroke', 'fill', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'options', 'undefinedLength');
  rebind(indicator, mergedAlgorithm, 'merge', 'skipUndefined');

  return indicator;
};

export { rsi };
