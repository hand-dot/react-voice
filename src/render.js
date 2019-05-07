import ReactReconciler from "react-reconciler";

const reconciler = ReactReconciler({
  now: Date.now,
  getRootHostContext: () => null,
  prepareForCommit: () => null,
  resetAfterCommit: () => null,
  getChildHostContext: () => null,
  shouldSetTextContent: () => null,
  createInstance: () => null,
  createTextInstance: () => null,
  appendInitialChild: () => null,
  finalizeInitialChildren: () => null
});

const render = node => {
  reconciler.updateContainer(node, reconciler.createContainer());
};

export default render;
