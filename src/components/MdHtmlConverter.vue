<template>
  <b-container fluid>
    <h1>Markdown/HTML Converter</h1>
    <div class="convert-area">
      <Textarea
          class="input-area"
          label="Markdown"
          v-model="markdown"
          placeholder="Input Markdown here"/>
      <b-button-group vertical class="btn-area px-3">
        <b-button variant="primary" class="my-3" @click="markdownToHtml">&gt;&gt;</b-button>
        <b-button variant="primary" @click="htmlToMarkdown">&lt;&lt;</b-button>
      </b-button-group>
      <Textarea
          class="input-area"
          label="HTML"
          v-model="html"
          placeholder="Input HTML here"/>
    </div>
  </b-container>
</template>

<script>
import Textarea from './Textarea.vue'
import showdown from 'showdown'

export default {
  name: 'MdHtmlConverter',
  components: {
    Textarea
  },
  props: {},
  data() {
    return {
      markdown: '',
      html: '',
    }
  },
  created() {
    this.converter = new showdown.Converter({noHeaderId: true})
  },
  methods: {
    markdownToHtml() {
      this.html = this.converter.makeHtml(this.markdown)
    },
    htmlToMarkdown() {
      this.markdown = this.converter.makeMarkdown(this.html)
    },
  },
  metaInfo: {
    title: 'Markdown/HTML Converter',
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.convert-area {
  display: flex;
}

.convert-area > .input-area {
  flex: 1;
}

.convert-area > .btn-area {
  flex: 0;
  align-self: center;
}

</style>
