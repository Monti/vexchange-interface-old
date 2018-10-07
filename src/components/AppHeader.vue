<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="inner-container">
        <header>
          <h1>Vexchange</h1>
          <span>beta</span>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['prices', 'isLoading'],
  computed: {
    conversion() {
      const { vet, vtho } = this.prices;
      let vthoPrice = (vet / vtho).toFixed(2);

      return vthoPrice;
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  background: linear-gradient(35deg,#002fca,#1875ff);
  padding: 24px;
}

header {
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

h1 {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 5px;
  margin: 0;
  text-transform: uppercase;
}
</style>
