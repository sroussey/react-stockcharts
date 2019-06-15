const BollingerBand = {
  windowSize: 20,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
  multiplier: 2,
  movingAverageType: 'sma',
};

const ATR = {
  windowSize: 14,
};

const ForceIndex = {
  sourcePath: 'close', // "high", "low", "open", "close"
  volumePath: 'volume',
};

const SmoothedForceIndex = {
  sourcePath: 'close', // "high", "low", "open", "close"
  volumePath: 'volume',
  smoothingType: 'ema',
  smoothingWindow: 13,
};

const Change = {
  sourcePath: 'close', // "high", "low", "open", "close"
};

const Compare = {
  basePath: 'close',
  mainKeys: ['open', 'high', 'low', 'close'],
  compareKeys: [],
};

const ElderRay = {
  windowSize: 13,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close', // "high", "low", "open", "close"
  movingAverageType: 'sma',
};

const ElderImpulse = {
  sourcePath: 'close', // "high", "low", "open", "close"
};

const SAR = {
  accelerationFactor: 0.02,
  maxAccelerationFactor: 0.2,
};

const MACD = {
  fast: 12,
  slow: 26,
  signal: 9,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
};

const FullStochasticOscillator = {
  windowSize: 12,
  kWindowSize: 3,
  dWindowSize: 3,
};

const RSI = {
  windowSize: 14,
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close', // "high", "low", "open", "close"
};

const EMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
  windowSize: 10,
};

const SMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
  windowSize: 10,
};

const WMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
  windowSize: 10,
};

const TMA = {
  // source: d => d.close, // "high", "low", "open", "close"
  sourcePath: 'close',
  windowSize: 10,
};

const Kagi = {
  reversalType: 'ATR', // "ATR", "FIXED"
  windowSize: 14,
  reversal: 2,
  sourcePath: 'close', // "high", "low", "open", "close"
  /* dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; }, */
};

const Renko = {
  reversalType: 'ATR', // "ATR", "FIXED"
  windowSize: 14,
  fixedBrickSize: 2,
  sourcePath: 'high/low', // "close", "high/low"
  /* source: d => ({ high: d.high, low: d.low }),
	dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; }, */
};

const PointAndFigure = {
  boxSize: 0.5,
  reversal: 3,
  sourcePath: 'high/low', // "close", "high/low"

  /* source: d => ({ high: d.high, low: d.low }), // "close", "hi/lo"
	dateAccessor: d => d.date,
	dateMutator: (d, date) => { d.date = date; }, */
};

export {
  ATR,
  BollingerBand,
  Change,
  Compare,
  EMA,
  ElderImpulse,
  ElderRay,
  ForceIndex,
  FullStochasticOscillator,
  Kagi,
  MACD,
  PointAndFigure,
  RSI,
  Renko,
  SAR,
  SMA,
  SmoothedForceIndex,
  TMA,
  WMA,
};
