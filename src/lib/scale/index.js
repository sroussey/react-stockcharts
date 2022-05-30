export * from './discontinuousTimeScaleProvider';
export * from './financeDiscontinuousScale';

const defaultScaleProvider = (xScale) => {
  return (data, xAccessor) => ({
    data,
    xScale,
    xAccessor,
    displayXAccessor: xAccessor,
  });
};

export { defaultScaleProvider };
