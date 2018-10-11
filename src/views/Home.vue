<template>
  <div>
    <AppHeader :prices="prices" />
    <Balance :prices="prices" />
    <AppBody :prices="prices" />
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader'
import AppBody from '@/components/AppBody'
import Balance from '@/components/Balance'


const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVtho = () => axios.get(vthoTicker);
const getVet = () => axios.get(vetTicker);

export default {
  name: 'AppHome',
  components: {
   AppHeader,
   AppBody,
   Balance,
  },
  props: ['locale'],
  data() {
    return {
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
  },
}
</script>

<style>

</style>
