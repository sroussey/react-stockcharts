import { rebind, merge } from '../utils';

import { baseIndicator } from './baseIndicator';
import { bollingerbandAlgo as algo } from '../calculator';

const ALGORITHM_TYPE = 'BollingerBand';

const bollingerBand = () => {
  const base = baseIndicator().type(ALGORITHM_TYPE);

  const underlyingAlgorithm = algo();

  const mergedAlgorithm = merge()
    .algorithm(underlyingAlgorithm)
    .merge((datum, indicator) => {
      datum.bollingerBand = indicator;
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
  rebind(indicator, mergedAlgorithm, 'merge', 'skipUndefined');

  return indicator;
};

export { bollingerBand };
