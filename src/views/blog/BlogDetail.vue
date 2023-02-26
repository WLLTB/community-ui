<template>
  <div style='position:relative; top: -70px; height: 460px;'>
    <div v-html='compiledMarkdown'></div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'BlogDetail',
  data() {
    return {
      str: '# 标题'
    }
  },
  computed: {
    compiledMarkdown() {
      const md = new MarkdownIt();
      return md.render(this.str);
    },
  }
}
</script>

<style scoped>

</style>