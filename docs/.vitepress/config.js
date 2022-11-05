module.exports = {
  title: 'VitePress',
  description: 'Just playing around.',
  base: '/vitepress/',
  themeConfig: {
    nav: [
      { text: 'Blog', link: 'https://cafehaus.github.io/blog/' },
      { text: 'Github', link: 'https://github.com/cafehaus' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          items: [
            { text: '首页', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            { text: '首页', link: '/config/' },
            { text: 'One', link: '/config/one' },
          ],
        },
      ],
    },
  },
}
