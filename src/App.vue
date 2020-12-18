<template>
  <div id="app">
    <Navbar/>
    <HtmlMdConverter/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HtmlMdConverter from './components/HtmlMdConverter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    HtmlMdConverter
  }
}
</script>

<style>
#app {
}
</style>
