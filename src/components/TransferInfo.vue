<template>
  <div class="wrapper">
    <ol class="ol">
      <li>Select VET or VTHO in your VeChain mobile wallet and press transfer.</li>
      <li>Open the QR code scanner (top right corner) and scan the QR code to the right.</li>
      <li>Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.</li>
    </ol>
    <div>
      <ul>
        <li>
          <small>
            Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.
          </small>
        </li>
        <li>
          <small>
            Recommended trade size is 35k VTHO / 3k VET or less
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


