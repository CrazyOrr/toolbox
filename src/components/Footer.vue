<template>
  <footer class="bg-light py-3 text-center small">
    <div class="links">
      <a href="https://www.yolo.blue/products/" rel="external" target="_blank"
         @click="handleLinkClick">More Products</a>
    </div>
    <div>
      © 2020 <a href="https://www.yolo.blue/" rel="author external" target="_blank"
                v-on:click="handleLinkClick">CrazyOrr</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    handleLinkClick: function (event) {
      this.$gtag.event('open_link', {
        'event_category': 'engagement',
        'event_label': event.target.href,
      })
    }
  }
}
</script>

<style scoped>
div.links a:not(:first-child) {
  margin-left: 8px;
}
</style>
