import { defineConfig } from 'vitepress'
import navbar from './navbar'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Example",
  description: "A VitePress Site",
  base: "/vitepress-example",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar.NAVBAR,
    sidebar: sidebar.DEFAULT_SIDEBAR,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
