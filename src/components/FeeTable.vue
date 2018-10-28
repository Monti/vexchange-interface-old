<template>
  <a-card :title="'Gas ' + $t('fees.label')" :extra="$t('fees.subtitle')">
    <div class="wrapper">
      <div class="item">
        <div class="title">
          {{ $t('fees.minimumVET') }}
        </div>
        <div class="description">
          {{ vet.deposit }}
          <small class="small">vet</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          vet gas {{ $t('fees.label') }}
        </div>
        <div class="description">
          {{ vet.gas }}
          <small class="small">vet</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          {{ $t('fees.minimunVTHO') }}
        </div>
        <div class="description description--vtho">
          {{ vtho.deposit }}
          <small class="small">vtho</small>
        </div>
      </div>
      <div class="item">
        <div class="title">
          vtho gas {{ $t('fees.label') }}
        </div>
        <div class="description description--vtho">
          {{ vtho.gas }}
          <small class="small">vtho</small>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script>
import { vtho, vet } from '@/fees';

export default {
  name: 'FeeTable',
  props: [ 'title', 'fees', 'base' ],
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

  @media all and (max-width: 768px) {
    font-size: 2em;
  }
}

.description--vtho {
  color: #000000;
}

.small {
  font-size: 1.5rem;
}
</style>
