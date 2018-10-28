<template>
  <div id="app">

    <router-view />

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  created() {
    this.$i18n.locale = this.$route.params.locale || this.locale;
  },
  watch: {
    '$route'({ params }) {
      this.$i18n.locale = params.locale || this.locale;
    }
  }
}
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #f3f6fb;
  color: #999;
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.5;
}

#app {
  height: 100%;
}

.container {
  width: 100%;
  max-width: 1196px;
  margin: 0 auto;
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.col {
  padding-right: 15px;
  padding-left: 15px;
  width: 50%;

  @media all and (max-width: 768px) {
    width: 100%;
  }
}

a {
  text-decoration: none;
}

</style>
