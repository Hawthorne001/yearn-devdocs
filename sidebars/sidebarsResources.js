module.exports = {
  mySidebar: [
    // 'faq',
    // 'links',
    {
      type: 'category',
      label: 'Deprecated Projects',
      link: {
        type: 'generated-index',
        title: 'Deprecated Projects',
        slug: '/deprecated',
      },
      items: [{ type: 'autogenerated', dirName: 'deprecated' }],
    },
    // {
    //   type: 'link',
    //   href: 'https://github.com/yearn/budget/issues',
    //   label: 'Budget Requests',
    // },
    // 'defi-glossary',
  ],
}
