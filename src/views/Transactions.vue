<template>
  <div>
    <AppHeader :prices="prices" />
    <Balance :prices="prices" />
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
    console.log(this.$Contract);
    this.$Contract.events
      .EthPurchase({ fromBlock: 0 }, (error, eventResult) => {
        if (error) console.log("Error in myEvent event handler: " + error);
        else console.log("myEvent: " + JSON.stringify(eventResult.args));
      })
      .on("data", event => console.log("EthPurchase Event", event));

    debugger;
    const web3 = thorify(new Web3(), "http://vechain-api.monti.finance");
    const address = "0x0000000000000000000000000000456e65726779";
    const Token = new web3.eth.Contract(TokenJson, address);
    Token.events
      .Transfer({ fromBlock: 0 }, (error, eventResult) => {
        if (error) console.log("Error in Transfer event handler: " + error);
        else console.log("Transfer: " + JSON.stringify(eventResult.args));
      })
      .on("data", event => console.log("Transfer Event", event));
  }
};
</script>

<style scoped>
</style>
