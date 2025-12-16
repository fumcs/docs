import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Undergraduate Curriculum in Computer Science',
  favicon: 'img/fumcs-logo.ico',

  // Production URL of the site
  url: 'https://fum-cs.github.io',
  // Base URL under which the site is served
  baseUrl: '',

  // GitHub pages deployment config
  organizationName: 'Ferdowsi University of Mashhad, CS Dept.',
  projectName: 'fumcs-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalisation: use English, left-to-right
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: ['./src/css/custom.css', './src/css/font.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FUMCS Curriculum',
      logo: {
        alt: 'FUMCS Logo',
        src: 'img/fumcs-logo.png',
      },
      items: [
        {
          href: '/docs/intro',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://fumcs.github.io',
          label: 'FUMCS website',
          position: 'right',
        },
        {
          href: 'https://github.com/fum-cs/fum-cs.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Curriculum',
              to: '/docs/category/curriculum',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'FUMCS website',
              to: 'https://fumcs.github.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fum-cs/fum-cs.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FUMCS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'IW0UML0UCO',
      apiKey: '0f98e980c17dabdb99e47db17c02e055',
      indexName: 'fumcs_curriculum',
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
      },
    ],
  ],
};

export default config;

