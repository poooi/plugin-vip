var styleEl;

let enableTwinkle = () => {
  if (styleEl === undefined) {
    styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
  }
  let styleSheet = styleEl.sheet;
  styleSheet.insertRule(`
    @-webkit-keyframes colorful {
        0% { font:: red;}
        20% { color: orange;}
        40% { color: yellow;}
        60% { color: cyan;}
        80% { color: DeepSkyBlue;}
        100% { color: purple;}
    }`, 0);
  styleSheet.insertRule(`
    * {
      -webkit-animation-timing-function: ease-in-out !important;
      -webkit-animation-name: colorful !important;
      -webkit-animation-duration: 700ms !important;
      -webkit-animation-iteration-count: infinite !important;
      -webkit-animation-direction: alternate !important;
    }`, 0);
};

let disableTwinkle = () => {
  if (styleEl !== undefined) {
    let styleSheet = styleEl.sheet;
    while (styleSheet.rules.length > 0) {
      styleSheet.deleteRule(0);
    }
  }
};

const VipPlugin = {
  show: false,
  pluginDidLoad: (e) => {
    enableTwinkle();
  },
  pluginWillUnload: (e) => {
    disableTwinkle();
  }
}

export default VipPlugin
