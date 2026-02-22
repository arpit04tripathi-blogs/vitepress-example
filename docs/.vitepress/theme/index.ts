// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { initComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-mermaid-preview/dist/index.css';
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed' // [!code ++]
import '@miletorix/vitepress-youtube-embed/style.css' // [!code ++]
import './style.css'
import AsideElementComponent from '../../components/AsideElementComponent.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-before': () => h(AsideElementComponent),
      'aside-ads-before': () => h(AsideElementComponent),
      'aside-ads-after': () => h(AsideElementComponent),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('YouTubeEmbed', YouTubeEmbed);
    initComponent(app);
  }
} satisfies Theme
