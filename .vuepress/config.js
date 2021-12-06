module.exports = {
  title: 'vGPU Wiki',

  base: '/GPU_Virtualization-Wiki/',

  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/KrutavShah/GPU_Virtualization-Wiki/' }
    ],
    sidebar: [
      '/overview.md',
      {
        title: 'Installation Guide',
        children: [
          '/installation/preparation.md',
          '/installation/host-setup.md'
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
          '/tools/twelve.patch.md',
          '/tools/fourteen.patch.md',
          '/tools/vgpu-unlock-rs.md'
        ]
      }
    ]
  }
}
