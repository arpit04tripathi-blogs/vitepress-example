const DEFAULT_SIDEBAR = [
    {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Mermaid', link: '/mermaid'},
        ]
    },
    {
        text: 'Examples 2',
        link: '/',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Parent', collapsed: true, items: [
            { text: 'Mermaid Child', link: '/mermaid'},
          ]},
        ]
    },
]

export default {
    DEFAULT_SIDEBAR,
}