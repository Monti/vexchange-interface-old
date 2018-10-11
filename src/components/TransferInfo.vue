<template>
  <div class="wrapper">
    <ol class="ol">
      <li>{{ $t('instructions.1') }}</li>
      <li>{{ $t('instructions.2') }}</li>
      <li>{{ $t('instructions.3') }}</li>
    </ol>
    <div>
      <ul>
        <li>
          <small>
            {{ $t('tips.1') }}
          </small>
        </li>
        <li>
          <small>
            {{ $t('tips.2') }}
          </small>
        </li>
        <li>
          <small>
            {{ $t('tips.3') }}
          </small>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TipIcon from './svgs/TipIcon';

export default {
  name: 'TransferInfo',
  components: {
    TipIcon,
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media all and (max-width: 768px) {
    margin-right: 0;
    order: 1;
  }
}

.header {
  display: flex;
}

.icon {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 2px;
  width: 20px;

  svg {
    fill: #6896ff;
  }

  @media all and (max-width: 768px) {
    display: none;
  }
}

ol,
ul {
  padding: 0;
}

ol li:not(:last-child) {
  margin-bottom: 10px;
}

</style>


