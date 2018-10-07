<template>
  <div class="row">
    <div class="col">
      <Card title="Vexchange Price">
        <div class="wrapper">
          <div class="item">
            <div class="title">
              vet price
            </div>
            <div class="description">
              {{ format(contractPrice.vet) }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              vtho price
            </div>
            <div class="description">
              {{ format(contractPrice.vtho, 10, false) }}
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div class="col">
      <Card title="Coinmarketcap Price">
        <div class="wrapper">
          <div class="item">
            <div class="title">
              vet price
            </div>
            <div class="description">
              {{ conversion(prices.vet) }}
            </div>
          </div>
          <div class="item">
            <div class="title">
              vtho price
            </div>
            <div class="description">
              {{ conversion(prices.vtho) }}
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './Card';
export default {
  name: 'Prices',
  components: { 
    Card,
  },
  props: ['prices', 'balance'],
  computed: {
    contractPrice() {
      return {
        vet: ((this.balance.vtho / this.balance.vet) * this.prices.vtho) * 100,
        vtho: ((this.balance.vet / this.balance.vtho) * this.prices.vet) * 100,
      }
    }
  },
  methods: {
    conversion(num) {
      return (num * 100).toFixed(3);
    },
    format(num, mul = true) {
      return mul ? num.toFixed(3) : (num / 10).toFixed(3);
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-right: -20px;
  margin-left: -20px;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

.col {
  padding-right: 20px;
  padding-left: 20px;
  width: 50%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
}

.title {
  font-size: 0.8em;
  font-weight: 300;
  text-transform: uppercase;
}

.description {
  color: #1775ff;
  font-size: 3em;
  font-weight: 300;
  line-height: 1;

  &::after {
    content: '¢';
    font-size: 0.7em;
    margin-left: -10px;
  }
}
</style>
