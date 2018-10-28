<template>
  <div>
    <AppHeader/>
    <div class="container">
      <div class="inner-container page">
        <a-card
              style="width:100%"
              :tabList="tabList"
              :activeTabKey="key"
              @tabChange="selectedTab => onTabChange(selectedTab, 'key')"
              bodyStyle="padding: 0"
        >
          <PurchaseEventTable v-if="key === 'ethpurchase'" key="eth" event="EthPurchase" event-name="ETH Purchases" :result-mapping="ethPurchaseMapper" :columns="ethColumns"/>
          <PurchaseEventTable v-else-if="key === 'tokenpurchase'" key="token" event="TokenPurchase" event-name="Token Purchases" :result-mapping="tokenPurchaseMapper" :columns="tokenColumns"/>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Balance from "@/components/Balance";
import PurchaseEventTable from "@/components/PurchaseEventTable";
import { pipsToETH, pipsToVET, roundDecimalPoints } from "../utils";
import { unix } from "moment";

export default {
  name: "Transactions",
  components: {
    AppHeader,
    Balance,
    PurchaseEventTable
  },
  data() {
    return {
      tabList: [
        {
          key: "ethpurchase",
          tab: "Eth Purchase"
        },
        {
          key: "tokenpurchase",
          tab: "Token Purchase"
        }
      ],
      key: "ethpurchase",
      tokenColumns: [
        {
          title: "TX Id",
          dataIndex: "txID",
          scopedSlots: { customRender: "txId" }
        },
        {
          title: "Time",
          dataIndex: "time"
        },
        {
          title: "Buyer",
          dataIndex: "buyer",
          scopedSlots: { customRender: "buyer" }
        },
        {
          title: "ETH Sold",
          dataIndex: "eth_sold"
        },
        {
          title: "Tokens Bought",
          dataIndex: "tokens_bought"
        }
      ],
      ethColumns: [
        {
          title: "TX Id",
          dataIndex: "txID",
          scopedSlots: { customRender: "txId" }
        },
        {
          title: "Time",
          dataIndex: "time"
        },
        {
          title: "Buyer",
          dataIndex: "buyer",
          scopedSlots: { customRender: "buyer" }
        },
        {
          title: "ETH Bought",
          dataIndex: "eth_bought"
        },
        {
          title: "Tokens Sold",
          dataIndex: "tokens_sold"
        }
      ]
    };
  },
  methods: {
    onTabChange(key, type) {
      this[type] = key;
    },
    ethPurchaseMapper({
      returnValues: { buyer, eth_bought, tokens_sold },
      meta: { txID, blockTimestamp }
    }) {
      return {
        txID,
        buyer,
        eth_bought: roundDecimalPoints(pipsToETH(eth_bought), 2),
        tokens_sold: roundDecimalPoints(pipsToVET(tokens_sold), 2),
        time: unix(blockTimestamp).fromNow()
      };
    },
    tokenPurchaseMapper({
      returnValues: { buyer, eth_sold, tokens_bought },
      meta: { txID, blockTimestamp }
    }) {
      return {
        txID,
        buyer,
        eth_sold: roundDecimalPoints(pipsToETH(eth_sold), 2),
        tokens_bought: roundDecimalPoints(pipsToVET(tokens_bought), 2),
        time: unix(blockTimestamp).fromNow()
      };
    }
  }
};
</script>

<style scoped>
.page {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
