<i18n src="@/language/locales.json"></i18n>
<i18n src="@/language/product.json"></i18n>
<template>
  <div id="app">
    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>ja</option>
    </select>
    <p>message: {{ $t('hello') }}</p>
    <p>product: {{ $t('name') }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { return { locale: 'en' } },
  mounted: function () {
    this.$i18n.locale = 'en'
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>