<template>
  <Card title="Gas Fees" extra="The smart contract charges a 2% fee">
    <div class="wrapper">
      <div class="item">
        <div class="title">
          minimum vet deposit
        </div>
        <div class="description">
          {{ vet.deposit }}
          <small class="small">vet</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          vet gas fees
        </div>
        <div class="description">
          {{ vet.gas }}
          <small class="small">vet</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          minimum vtho deposit
        </div>
        <div class="description description--vtho">
          {{ vtho.deposit }}
          <small class="small">vtho</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          vtho gas fees
        </div>
        <div class="description description--vtho">
          {{ vtho.gas }}
          <small class="small">vtho</small>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from './Card';
import { vtho, vet } from '@/fees';

export default {
  name: 'FeeTable',
  props: [ 'title', 'fees', 'base' ],
  components: {
    Card,
  },
  data() {
    return {
      vtho,
      vet,
    }
  }
}
</script>

<style lang="scss" scoped>

.item {
  @media all and (max-width: 768px) {
    width: 50%;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      margin-bottom: 1.5rem;
    }
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
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
}

.description--vtho {
  color: #000000;
}

.small {
  font-size: 1.5rem;
}
</style>
