<template>
  <div>
    <AppHeader :prices="prices" />
    <Balance :prices="prices" />
    <AppBody :prices="prices" />
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import AppBody from '@/components/AppBody'
import Balance from '@/components/Balance'
import Footer from '@/components/Footer'

const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVtho = () => axios.get(vthoTicker);
const getVet = () => axios.get(vetTicker);

export default {
  name: 'AppHome',
  components: {
   AppHeader,
   AppFooter,
   AppBody,
   Balance,
   Footer
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
