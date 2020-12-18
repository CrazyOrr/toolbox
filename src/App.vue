<template>
  <div id="app">
    <Navbar/>
    <MdHtmlConverter/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import MdHtmlConverter from './components/MdHtmlConverter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    MdHtmlConverter
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Toolbox',
  }
}
</script>

<style>
#app {
}
</style>
