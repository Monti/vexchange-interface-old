<template>
    <a-table :columns="columns"
             :rowKey="({txid}) => txid"
             :dataSource="data"
             :pagination="pagination"
             :loading="loading"
             @change="handleTableChange"
    >
        <div slot="title" slot-scope="currentPageData" class="pull-right">
            Last {{fullData.length}} {{eventName}}
        </div>
        <div class="address-cell" slot="txId" slot-scope="address">
            <a :href="`https://explore.veforge.com/transactions/${address}`" target="_blank">{{address}}</a>
        </div >
        <div class="address-cell" slot="buyer" slot-scope="address">
            <a :href="`https://explore.veforge.com/accounts/${address}`" target="_blank">{{address}}</a>
        </div >
    </a-table>
</template>

<script>
import { DAILY_BLOCKS_IN_ETH } from "../utils";

const EVENTS_TO_FETCH = 50;
const TWO_DAYS_OF_BLOCKS = DAILY_BLOCKS_IN_ETH * 2;

export default {
  name: "PurchaseEventTable",
  data() {
    return {
      fullData: [],
      pagination: { current: 1, pageSize: 10, total: 0 },
      loading: false
    };
  },
  props: ["eventName", "event", "resultMapping", "columns"],
  mounted() {
    this.loading = true;
    return this.$web3.eth
      .getBlockNumber()
      .then(this.loadTransactionsBatch)
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    data: function() {
      const { current, pageSize } = this.pagination;
      return this.fullData.slice((current - 1) * pageSize, current * pageSize);
    }
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.pagination = { ...pagination };
    },
    loadTransactionsBatch(toBlock) {
      const fromBlock = toBlock - TWO_DAYS_OF_BLOCKS;

      return this.$Contract
        .getPastEvents(this.event, { fromBlock, toBlock })
        .then(events => {
          this.fullData = [
            ...this.fullData,
            ...events.map(this.resultMapping).reverse()
          ];
          this.pagination = {
            ...this.pagination,
            total: this.fullData.length
          };
          if (this.fullData.length < EVENTS_TO_FETCH) {
            return this.loadTransactionsBatch(fromBlock);
          }
        });
    }
  }
};
</script>

<style scoped>
.address-cell {
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  overflow: hidden;
}
.pull-right {
  text-align: right;
  padding: 0 16px;
}
</style>
