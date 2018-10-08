<template>
  <div class="card">
    <div class="card-header">
      <span class="title">{{ title }}</span>
      <span class="extra">{{ extra }}</span>
    </div>
    <div class="card-body" :style="{ padding: padding }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'title',
    'extra',
    'padding'
  ],
}
</script>
<style lang="scss" scoped>
.card {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  margin-bottom: 40px;
  width: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 3rem;

  @media all and (max-width: 768px) {
    padding: 1.5rem;
  }
}

.card-header {
  box-shadow: 0 2px 15px rgba(0, 0, 0, .07);
  color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.extra {
  color: #999;
  font-size: 0.9em;
}

.title {
  text-transform: uppercase;
}
</style>

