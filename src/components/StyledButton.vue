<template>
  <button :class="['button', size]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'StyledButton',
  props: ['size'],
}
</script>

<style scoped>
.button {
  background-color: #070504;
  border: none;
  border-radius: 2px;
  color: #fff;
  height: 2.5rem;
  font-size: .875rem;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.small {
  font-size: .8125rem;
  height: 2rem;
  width: auto;
}
</style>
