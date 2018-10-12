<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="inner-container">
        <header>
          <div>
            <h1>Vexchange</h1>
            <span>
              <small>
                beta
              </small>
            </span>
          </div>
          <local-changer />
        </header>
      </div>
    </div>
  </div>
</template>

<script>
import LocalChanger from './LocaleChanger';

export default {
  name: 'AppHeader',
  props: ['prices', 'isLoading'],
  components: { LocalChanger },
  methods: {
    setLocale(locale) {
      this.$router.push({ path: `/${locale}` })
    }
  },
  computed: {
    conversion() {
      const { vet, vtho } = this.prices;
      let vthoPrice = (vet / vtho).toFixed(2);

      return vthoPrice;
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  background: linear-gradient(35deg,#002fca,#1875ff);
  padding: 24px;

  @media all and (max-width: 768px) {
    .inner-container {
      margin: 0;
    }
  }
}

header {
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

h1 {
  color: #fff;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 5px;
  margin: 0;
  text-transform: uppercase;

  @media all and (max-width: 768px) {
    font-size: 1.35rem;
  }
}

.languages {
  display: flex;
  font-size: 0.8rem;

  span {
    cursor: pointer;

    &:first-of-type {
      &::after {
        color: #fff;
        content: "|";
        margin: 0 10px;
      }
    }

    &:hover {
      color: #000000;
    }
  }
}
</style>
