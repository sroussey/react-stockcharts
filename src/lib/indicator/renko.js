import { rebind } from '../utils';

import { renkoAlgo as algo } from '../calculator';
import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'Renko';

const renko = () => {
  const base = baseIndicator().type(ALGORITHM_TYPE);

  const underlyingAlgorithm = algo();

  const indicator = underlyingAlgorithm;

  rebind(indicator, base, 'id', 'stroke', 'fill', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'dateAccessor', 'dateMutator');
  rebind(indicator, underlyingAlgorithm, 'options');

  return indicator;
};

export { renko };
