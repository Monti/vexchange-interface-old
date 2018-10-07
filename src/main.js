import Vue from 'vue'
import { thorify } from "thorify";
import WebFont from 'webfontloader';

import App from './App.vue'

import 'normalize.css';

const Web3 = require("web3");
const web3 = thorify(new Web3(), "http://localhost:8669");
const address = '0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e';

const getBalance = async () => {
  return {
    vet: await web3.eth.getBalance(address),
    vtho: await web3.eth.getEnergy(address),
  };
};

WebFont.load({
  google: {
    families: ['Poppins:300,800,900', 'IBM Plex Sans:300,400']
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App, {
    props: {
      getBalance: async () => getBalance(),
    },
  }),
}).$mount('#app')
