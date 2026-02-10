import { defineConfig } from 'vitepress'
import navbar from './navbar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Example",
  description: "A VitePress Site",
  base: "/vitepress-example",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar.NAVBAR,
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
