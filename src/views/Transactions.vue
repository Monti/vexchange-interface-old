<template>
  <div>
    
    <div>
      Hello
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Balance from "@/components/Balance";
import TokenJson from "../build/contracts/token.json";
import { thorify } from "thorify";
import Web3 from 'web3';
import { debug } from 'util';

export default {
  name: "Transactions",
  components: {
    AppHeader,
    Balance
  },
  data() {
    return {};
  },
  mounted() {
    const web3 = thorify(new Web3(), "http://localhost:8669");
    web3.eth.getBlock("latest").then(num=>{
    console.log(this.$Contract)
    console.log(num);
    this.$Contract.getPastEvents('Transfer', {fromBlock:0, to:num.number-1},(error, eventResult) => {
         console.log("Error in myEvent event handler: " + error);
         console.log("myEvent: " + JSON.stringify(eventResult));
      })
     // .on("data", event => console.log("EthPurchase Event", event));

   
    
    const address = "0x0000000000000000000000000000456e65726779";
    const Token = new web3.eth.Contract(TokenJson, address);
  })}}

</script>

<style scoped>
</style>
