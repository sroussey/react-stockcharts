export * from './Annotate';
export * from './Label';
export * from './LabelAnnotation';
export * from './SvgPathAnnotation';

const halfWidth = 10;
const bottomWidth = 3;
const height = 20;

const buyPath = ({ x, y }) => {
  return (
    `M${x} ${y} ` +
    `L${x + halfWidth} ${y + halfWidth} ` +
    `L${x + bottomWidth} ${y + halfWidth} ` +
    `L${x + bottomWidth} ${y + height} ` +
    `L${x - bottomWidth} ${y + height} ` +
    `L${x - bottomWidth} ${y + halfWidth} ` +
    `L${x - halfWidth} ${y + halfWidth} ` +
    'Z'
  );
};

const sellPath = ({ x, y }) => {
  return (
    `M${x} ${y} ` +
    `L${x + halfWidth} ${y - halfWidth} ` +
    `L${x + bottomWidth} ${y - halfWidth} ` +
    `L${x + bottomWidth} ${y - height} ` +
    `L${x - bottomWidth} ${y - height} ` +
    `L${x - bottomWidth} ${y - halfWidth} ` +
    `L${x - halfWidth} ${y - halfWidth} ` +
    'Z'
  );
};

export { buyPath, sellPath };
