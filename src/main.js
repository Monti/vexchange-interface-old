import Vue from 'vue'
import { thorify } from "thorify";
import WebFont from 'webfontloader';
import Web3 from 'web3';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import moment from 'moment';

import Web3Plugin from './plugins/Web3';
import BalancePlugin from './plugins/Balance';
import ContractPlugin from './plugins/Contract';

import App from './App.vue'
import ContractJson from './build/contracts/exchange.json';

import transations from './translations';

import 'normalize.css';

import AppHome from './views/Home';
import Transactions from "./views/Transactions";

const web3 = thorify(new Web3(), "http://127.0.0.1:8669/");
const address = '0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e';
const Contract = new web3.eth.Contract(ContractJson.abi, address);
const language = window.navigator.userLanguage || window.navigator.language;

const getBalance = async () => {
  return {
    vet: await web3.eth.getBalance(address),
    vtho: await web3.eth.getEnergy(address),
  };
};

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(Web3Plugin, web3);
Vue.use(ContractPlugin, Contract);
Vue.use(BalancePlugin, getBalance);

WebFont.load({
  google: {
    families: [
      'Poppins:300, 800, 900',
      'IBM Plex Sans:300,400',
    ]
  }
});

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: AppHome, props: true },
  { path: '/transactions', component: Transactions, props: true },
  { path: '/:locale', component: AppHome, props: true },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

const i18n = new VueI18n({
  locale: moment.locale(language),
  fallbackLocale: 'en',
  messages: transations,
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
