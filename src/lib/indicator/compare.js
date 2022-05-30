import { rebind, merge } from '../utils';

import { compareAlgo as algo } from '../calculator';

import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'Compare';

const compare = () => {
  const base = baseIndicator()
    .type(ALGORITHM_TYPE)
    .accessor((d) => d.compare);

  const underlyingAlgorithm = algo();

  const mergedAlgorithm = merge()
    .algorithm(underlyingAlgorithm)
    .merge((datum, indicator) => {
      datum.compare = indicator;
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
  rebind(indicator, underlyingAlgorithm, 'options');
  rebind(indicator, mergedAlgorithm, 'merge');

  return indicator;
};

export { compare };
