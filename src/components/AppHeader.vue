<template>
<div>
  <div class="header-wrapper">
    <div class="container">
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
  <div class="nav">
    <div class="container">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home">
          <router-link to="/"><a-icon type="appstore" />Home</router-link>
        </a-menu-item>
        <a-menu-item key="transactions">
          <router-link to="transactions"><a-icon type="swap" />Transactions</router-link>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</div>
</template>

<script>
import LocalChanger from "./LocaleChanger";

export default {
  name: "AppHeader",
  props: ["prices", "isLoading"],
  components: { LocalChanger },
  methods: {
    setLocale(locale) {
      this.$router.push({ path: `/${locale}` });
    }
  },
  computed: {
    conversion() {
      const { vet, vtho } = this.prices;
      let vthoPrice = (vet / vtho).toFixed(2);

      return vthoPrice;
    },
    current: function() {
      return this.$route.path.slice(1) || "home";
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  background: linear-gradient(35deg, #002fca, #1875ff);
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
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 5px;
  margin: 0;
  text-transform: uppercase;

  @media all and (max-width: 768px) {
    font-size: 1.35rem;
  }
}

.nav {
  background-color: #fff;
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

.ant-menu-horizontal {
  border: none;
}
</style>
