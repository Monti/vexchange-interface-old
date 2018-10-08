<template>
  <div id="app">
    <AppHeader :prices="prices" />
    <Balance
      v-if="hasBalance"
      :balance="balance"
      :prices="prices" />

    <AppBody
      v-if="hasBalance"
      :contract="Contract"
      :balance="balance"
      :prices="prices" />
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader'
import AppBody from '@/components/AppBody'
import Balance from '@/components/Balance'
import _ from 'lodash';

const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVtho = () => axios.get(vthoTicker);
const getVet = () => axios.get(vetTicker);

export default {
  name: 'app',
  components: {
   AppHeader,
   AppBody,
   Balance,
  },
  props: [
    'Contract',
    'getBalance',
  ],
  data() {
    return {
      balance: {},
      prices: {
        vet: 0,
        vtho: 0,
      }
    }
  },
  mounted() {
    axios.all([getVtho(), getVet()])
      .then(axios.spread((vtho, vet) => {
        const { data: { data: vthoData } } = vtho;
        const { data: { data: vetData } } = vet;

        this.prices.vet = vetData.quotes.USD.price;
        this.prices.vtho = vthoData.quotes.USD.price;
      }));

    this.getBalance().then(data => {
      this.balance = data;
    });
  },
  computed: {
    hasBalance() {
      return !_.isEmpty(this.balance);
    }
  }
}
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #f3f6fb;
  color: #999;
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.5;
}

#app {
  height: 100%;
}

.inner-container {
  margin: 0 5vw;
}

.container {
  width: 100%;
  max-width: 1196px;
  margin: 0 auto;
}

.row {
  display: flex;
  margin-right: -20px;
  margin-left: -20px;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.col {
  padding-right: 20px;
  padding-left: 20px;
  width: 50%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
}

</style>
