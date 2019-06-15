import { rebind, merge } from '../utils';

import { sarAlgo as algo } from '../calculator';

import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'SMA';

const sar = () => {
  const base = baseIndicator()
    .type(ALGORITHM_TYPE)
    .accessor((d) => d.sar);

  const underlyingAlgorithm = algo();

  const mergedAlgorithm = merge()
    .algorithm(underlyingAlgorithm)
    .merge((datum, indicator) => {
      datum.sar = indicator;
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

  rebind(indicator, base, 'id', 'accessor', 'stroke', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'undefinedLength');
  rebind(indicator, underlyingAlgorithm, 'options');
  rebind(indicator, mergedAlgorithm, 'merge');

  return indicator;
};

export { sar };
