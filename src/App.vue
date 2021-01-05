<template>
  <div id="app">
    <Navbar/>
    <div id="content-wrapper">
      <MdHtmlConverter/>
    </div>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content-wrapper {
  flex: 1;
}
</style>
