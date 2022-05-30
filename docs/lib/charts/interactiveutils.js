import { isNotDefined, isDefined } from 'react-stockcharts/lib/utils';

function saveInteractiveNode(chartId) {
  return (node) => {
    this[`node_${chartId}`] = node;
  };
}

function handleSelection(type, chartId) {
  return (selectionArray) => {
    const key = `${type}_${chartId}`;
    const interactive = this.state[key].map((each, idx) => {
      return {
        ...each,
        selected: selectionArray[idx],
      };
    });
    this.setState({
      [key]: interactive,
    });
  };
}

function saveInteractiveNodes(type, chartId) {
  return (node) => {
    if (isNotDefined(this.interactiveNodes)) {
      this.interactiveNodes = {};
    }
    const key = `${type}_${chartId}`;
    if (isDefined(node) || isDefined(this.interactiveNodes[key])) {
      // console.error(node, key)
      // console.log(this.interactiveNodes)
      // eslint-disable-next-line fp/no-mutation
      this.interactiveNodes = {
        ...this.interactiveNodes,
        [key]: { type, chartId, node },
      };
    }
  };
}

function getInteractiveNodes() {
  return this.interactiveNodes;
}

export {
  getInteractiveNodes,
  saveInteractiveNodes,
  handleSelection,
  saveInteractiveNode,
};
