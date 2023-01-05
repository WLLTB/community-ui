import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import * as _ from 'lodash'



// markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';


VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
const app = createApp(App)

app.use(router)
app.use(ElementPlus);
app.use(VueMarkdownEditor);

app.mount('#app')
