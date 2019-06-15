import { rebind } from '../utils';

import { pointAndFigureAlgo as algo } from '../calculator';
import { baseIndicator } from './baseIndicator';

const ALGORITHM_TYPE = 'PointAndFigure';

const pointAndFigure = () => {
  const base = baseIndicator().type(ALGORITHM_TYPE);

  const underlyingAlgorithm = algo();

  const indicator = underlyingAlgorithm;

  rebind(indicator, base, 'id', 'stroke', 'fill', 'echo', 'type');
  rebind(indicator, underlyingAlgorithm, 'dateAccessor', 'dateMutator');
  rebind(indicator, underlyingAlgorithm, 'options');
  // rebind(indicator, mergedAlgorithm, "merge"/*, "skipUndefined"*/);

  return indicator;
};

export { pointAndFigure };
