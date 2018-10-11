const ContractPlugin = {
  install(Vue, Contract) {
    Vue.prototype.$Contract = Contract;
  },
};

export default ContractPlugin;
