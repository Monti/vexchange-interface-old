const Web3Plugin = {
  install(Vue, web3) {
    Vue.prototype.$web3 = web3;
  },
};

export default Web3Plugin;
