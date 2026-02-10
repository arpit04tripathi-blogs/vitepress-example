const ROUTES = {
    HOME: "/",
    EXAMPLES_MD: "/markdown-examples",
    MERMAID: "/mermaid",
}

const NAVBAR = [
    { text: 'Home', link: ROUTES.HOME },
    { text: 'Examples', link: ROUTES.EXAMPLES_MD },
    { 
        text: 'Dropdown 1', 
        items: [
            { text: 'Item X', link: '/item-x' },
            { text: 'Item Y', link: '/item-y' },
            { text: 'Item Z', link: '/item-z' },
        ]
    },
    { 
        text: 'Dropdown 2', 
        items: [
            { text: 'Section A', items: [
                { text: 'Item A1', link: '/item-1' },
                { text: 'Item A2', link: '/item-2' },
                { text: 'Item A3', link: '/item-3' },
            ]},
            { text: 'Section B', items: [
                { text: 'Item B1', link: '/item-4' },
                { text: 'Item B2', link: '/item-5' },
                { text: 'Item B3', link: '/item-6' },
            ]},
            { text: 'Section C', items: [
                { text: 'Mermaid', link: ROUTES.MERMAID },
            ]},            
        ]
    },
]

export default {
    ROUTES,
    NAVBAR
}