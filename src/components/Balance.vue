<template>
<div class="container" style="margin-top: 30px">
  <a-card>
    <div class="balances">
      <a href="https://explore.veforge.com/accounts/0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e" target="_blank">
        <span>VET Balance:</span>
        {{ formatCount(balance.vet) }}
        ({{ formatPrice(balance.vet, 'vet') }})
      </a>
      <a href="https://explore.veforge.com/accounts/0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e" target="_blank">
        <span>VTHO Balance: </span>
        {{ formatCount(balance.vtho) }}
        ({{ formatPrice(balance.vtho, 'vtho') }})
      </a>
    </div>
  </a-card>
</div>
</template>

<script>
export default {
  name: "Balance",
  props: ["prices", "lastValue"],
  data() {
    return {
      balance: {
        vet: 0,
        vtho: 0
      }
    };
  },
  mounted() {
    this.$getBalance().then(data => {
      this.balance = data;
    });
  },
  methods: {
    formatCount(num) {
      let number = num / 1000000000000000000;
      return Intl.NumberFormat().format(number);
    },
    formatPrice(num, type) {
      let number = num / 1000000000000000000;
      let price = this.prices[type] * number;

      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 3
      }).format(price);
    }
  }
};
</script>

<style lang="scss">
.balance-wrapper {
  background-color: #fff;
  border-bottom: 1px solid #dadee6;
  color: #000000;
  display: flex;
}

.wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
}

.balances {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    color: inherit;
    display: inline-block;
    margin: 15px 30px 15px 0;
    text-decoration: none;

    span {
      font-weight: 300;
      text-transform: uppercase;
    }

    &:hover {
      color: #1775ff;
    }
  }

  @media all and (max-width: 768px) {
    flex-direction: column;

    a {
      margin: 5px 0;
    }
  }
}
</style>
