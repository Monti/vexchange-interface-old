<template>
  <div class="card">
    <div class="card-header">
      <div class="title">{{ title }}</div>
      <div class="extra">{{ extra }}</div>
    </div>
    <div class="card-body" :style="{ padding: padding }">
      <div class="subtitle">{{ subtitle }}</div>
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
    'padding',
    'subtitle'
  ],
}
</script>
<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: 1px solid #dadee6;
  border-radius: 4px;
  margin-bottom: 30px;
  width: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  @media all and (max-width: 768px) {
    padding: 1.5rem;
  }
}

.card-header {
  border-bottom: 1px solid #dadee6;
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
  flex: 1;
  font-size: 0.9em;
  text-align: right;
}

.title {
  flex: 1;
  text-transform: uppercase;
}

.subtitle {
  color: #999;
  font-size: 0.9em;
  width: 100%;
}
</style>

