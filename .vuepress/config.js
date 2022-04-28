module.exports = {
  title: 'vGPU Wiki',

  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "256x256", href: "/assets/img/favicon.png"}],
  ],

  base: '/GPU_Virtualization-Wiki/',

  themeConfig: {
    logo: '/assets/img/logo-nogaps.png',
    nav: [
    ],

    repo: 'KrutavShah/GPU_Virtualization-Wiki',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsBranch: 'main',

    sidebar: [
      '/overview.md',
      {
        title: 'Installation Guide',
        children: [
          '/installation/preparation.md',
          '/installation/host-setup.md',
          '/installation/license-server.md',
          '/installation/guest-setup.md'
        ],
        collapsable: false
      },
      {
        title: 'Reference Documentation',
        children: [
          '/reference/vgpu-types.md'
        ]
      },
      {
        title: 'Tools',
        children: [
          '/tools/merged-driver.md',
          '/tools/vgpu-unlock-rs.md',
        ]
      }
    ]
  }
}
