<template>
  <div class="wrapper">
    <div class="calc">
      <span class="label">vet to vtho estimate calculator</span>
      <input class="input" type="number" v-model="vet.value" />
      <div class="value">
        {{ format(vet.returned) }}
        <small>VTHO</small>
      </div>
    </div>
    <div class="calc">
      <span class="label">vtho to vet estimate calculator</span>
      <input class="input" type="number" v-model="vtho.value" />
      <div class="value">
        {{ format(vtho.returned) }}
        <small>VET</small>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Card from './Card';

export default {
  name: 'Calculator',
  components: { Card },
  props: ['contract'],
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

      getEthToTokenPrice(val).call()
        .then(data => {
          this.vet.returned = data;
        });

    }, 500),
    'vtho.value': _.debounce(function(val = 0) {
      const { getTokenToEthPrice } = this.contract.methods;

      getTokenToEthPrice(val).call()
        .then(data => {
          this.vtho.returned = data;
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
  padding: 1.5rem 0;

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
  margin-bottom: 20px;
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
  font-size: 0.9rem;
  margin-left: 10px;
}

</style>
