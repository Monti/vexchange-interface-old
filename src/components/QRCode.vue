<template>
  <div class="qr-code-wrapper">
    <canvas
      ref="canvas"
      width="500"
      height="500"
      :data-clipboard-text="address" />
  </div>
</template>

<script>
import QRCode from 'qrcode';
import ClipboardJS from 'clipboard';

export default {
  name: 'QRCode',
  data() {
    return {
      address: '0x012345403c589A51b02Ee27BD41339f6114aac6A',
      clipboard: undefined,
    }
  },
  mounted() {
    const canvas = this.$refs.canvas;
    const clipboard = new ClipboardJS(canvas);

    QRCode.toCanvas(canvas, this.address, {
      width: 300,
      color: {
        dark: '#1775ff',
      }
    });

    clipboard.on('success', (e) => {
      alert('Copied!');
      e.clearSelection();
    });
  },
}
</script>
<style lang="scss">
.qr-code-wrapper {
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);

  @media all and (max-width: 768px) {
    order: 0;
    margin-bottom: 40px;
  }
}
</style>

