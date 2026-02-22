import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Example",
  titleTemplate: 'Custom Suffix',
  description: 'A VitePress Site example',
  base: "/vitepress-example",
  head: [['link', { rel: 'icon', href: 'icons/favicon.ico' }]],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'images/alien2.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'About', link: 'about' },
      { text: 'Utils', items: [
        { text: 'Images', link: 'img' },
        { text: 'Mermaid', link: 'mermaid' },
        { text: 'Maths', link: 'maths' },
        { text: 'Youtube', link: 'youtube' },
      ] },
      { text: 'Dropdown', items: [
        {text: 'Section 1', items: [
          { text: 'chapter 1', link: 'chap1' },
          { text: 'chapter 2', link: 'chap2' },
        ]},
        {text: 'Section 2', items: [
          { text: 'chapter 3', link: 'chap3' },
          { text: 'chapter 4', link: 'chap4' },
        ]},
      ] },
      { text: 'Official', link: 'https://vitepress.dev/' },
    ],

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
