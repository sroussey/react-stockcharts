import { rebind, merge } from '../utils';

import { changeAlgo as algo } from '../calculator';

import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'Change';

const change = () => {
  const base = baseIndicator().type(ALGORITHM_TYPE);

  const underlyingAlgorithm = algo();

  const mergedAlgorithm = merge()
    .algorithm(underlyingAlgorithm)
    .merge((datum, indicator) => {
      datum.absoluteChange = indicator.absoluteChange;
      datum.percentChange = indicator.percentChange;
    });

  const indicator = function(data, options = { merge: true }) {
    if (options.merge) {
      return mergedAlgorithm(data);
    }
    return underlyingAlgorithm(data);
  };
  rebind(indicator, base, 'id', 'accessor', 'stroke', 'fill', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'options');
  rebind(indicator, mergedAlgorithm, 'merge', 'skipUndefined');

  return indicator;
};

export { change };
