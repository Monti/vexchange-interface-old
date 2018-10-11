const BalancePlugin = {
  install(Vue, balance) {
    Vue.prototype.$getBalance = balance;
  },
};

export default BalancePlugin;
