import { rebind } from '../utils';

import { kagiAlgo as algo } from '../calculator';
import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'Kagi';

const kagi = () => {
  const base = baseIndicator().type(ALGORITHM_TYPE);

  const underlyingAlgorithm = algo();

  const indicator = underlyingAlgorithm;

  rebind(indicator, base, 'id', 'stroke', 'fill', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'dateAccessor', 'dateMutator');
  rebind(indicator, underlyingAlgorithm, 'options');

  return indicator;
};

export { kagi };
