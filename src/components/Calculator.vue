<template>
  <Card title="Calculator">
    <div class="wrapper">
      <div class="calc">
        <span class="label">vet to vtho estimate</span>
        <input class="input" type="number" v-model="vet.value" placeholder="0" />
        <div class="value">
          {{ format(vtho.returned) }}
          <small>VTHO</small>
        </div>
      </div>
      <div class="calc">
        <span class="label">vtho to vet estimate</span>
        <input class="input" type="number" v-model="vtho.value" placeholder="0" />
        <div class="value">
          {{ format(vet.returned) }}
          <small>VET</small>
        </div>
      </div>
    </div>
    <small class="tip">
      <span class="icon">
        <tip-icon />
      </span>
      This calculator pulls prices directly from the smart contract, however, another user may enter an order before you. As such, the end price may differ from what the calculator is displaying
    </small>
  </Card>
</template>

<script>
import _ from 'lodash';

import TipIcon from './svgs/TipIcon';
import Card from './Card';

export default {
  name: 'Calculator',
  components: { Card, TipIcon },
  props: ['contract', 'balance'],
  data() {
    return {
      vet: {
        value: undefined,
        returned: '0',
      },
      vtho: {
        value: undefined,
        returned: '0',
      }
    }
  },
  watch: {
    'vet.value': _.debounce(function(val = 0) {
      const { getEthToTokenPrice } = this.contract.methods;
      const num = this.$web3.utils.toWei(val);

      getEthToTokenPrice(num).call()
        .then(data => {
          this.vtho.returned = this.$web3.utils.fromWei(data);
        });

    }, 500),
    'vtho.value': _.debounce(function(val = 0) {
      const { getTokenToEthPrice } = this.contract.methods;
      const num = this.$web3.utils.toWei(val);

      getTokenToEthPrice(num).call()
        .then(data => {
          this.vet.returned = this.$web3.utils.fromWei(data);
        });
    })
  },
  methods: {
    format(num) {
      return Intl.NumberFormat().format(num);
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #dadee6;
  font-size: 2em;
  outline: none;
  transition: all 0.5s linear;
  text-align: right;

  &:focus {
    border-bottom: 2px solid #1875ff;
  }
}

.calc {
  display: flex;
  flex-direction: column;
  flex: 1;

  &:last-of-type {
    padding-left: 40px;

    @media all and (max-width: 768px) {
      margin-top: 40px;
      padding: 0;
    }
  }
}

.label {
  font-size: 0.9rem;
  font-weight: 300;
  text-transform: uppercase;
}

.value {
  align-items: center;
  border-bottom: 2px solid #dadee6;
  font-size: 2em;
  margin: 20px 0;
  text-align: right;
}

small {
  font-size: 0.8rem;
  margin-top: 20px;
}

.tip {
  display: flex;
}

.icon {
  width: 15px;
  margin-top: 5px;
}
</style>
