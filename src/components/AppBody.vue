<template>
  <div class="body">
    <div class="container">
      <div class="inner-container">
        <div class="transfer-info">
          <TransferInfo />
          <p class="click-to-copy">Click to copy</p>
          <QRCode />
        </div>
        <Calculator :contract="contract" />
        <Prices :prices="prices" :balance="balance" />
        <FeeTable />
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from './QRCode';
import StyledButton from './StyledButton'
import TransferInfo from './TransferInfo';
import FeeTable from './FeeTable';
import Prices from './Prices';
import Calculator from './Calculator';

export default {
  name: 'AppBody',
  components: { 
    TransferInfo,
    StyledButton,
    Calculator,
    FeeTable,
    Prices,
    QRCode,
  },
  props: [
    'prices',
    'balance',
    'contract',
  ],
}
</script>

<style lang="scss">
.body {
  align-items: center;
  display: flex;
  flex: 1;
}

.card-wrapper {
  align-items: center;
  height: 100%;
  display: flex;
}

.transfer-info {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 100px 5vw;

  @media all and (max-width: 768px) {
    flex-direction: column;
    margin: 40px 5vw;
  }

  .click-to-copy {
    display: none;
    margin-top: 0;

    @media all and (max-width: 768px) {
      display: block;
    }
  }
}
</style>
