<template>
  <div class="locale-changer">
    <span v-for="lang in langs" :key="lang" @click="setLocale(lang)">
      {{ lang }}
    </span>
  </div>
</template>

<script>
import translations from '../translations';
export default {
  name: 'locale-changer',
  data () {
    return {
      langs: Object.keys(translations),
    }
  },
  methods: {
    setLocale(lang) {
      this.$router.push(`/${lang}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .locale-changer {
    font-size: 0.9rem;

    span {
      cursor: pointer;

      &:first-of-type {
        &::after {
          color: #fff;
          content: "|";
          margin: 0 5px;
        }
      }

      &:hover {
        color: #000;
      }
    }
  }
</style>

