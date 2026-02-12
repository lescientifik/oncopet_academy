import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TEP en Oncologie',
  tagline: 'Formation et enseignement en imagerie TEP pour l\'oncologie',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lescientifik.github.io',
  baseUrl: '/oncopet_academy/',
  trailingSlash: false,

  organizationName: 'lescientifik',
  projectName: 'oncopet_academy',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },


  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TEP en Oncologie',
        url: 'https://lescientifik.github.io/oncopet_academy/',
        description: 'Formation et enseignement en imagerie TEP pour l\'oncologie',
        publisher: {
          '@type': 'Person',
          name: 'Dr T. Henry',
          jobTitle: 'Médecin nucléaire',
        },
      }),
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/lescientifik/oncopet_academy/tree/main/tep-oncology-site/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/lescientifik/oncopet_academy/tree/main/tep-oncology-site/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/tep-oncologie-social-card.png',
      metadata: [
        {name: 'keywords', content: 'TEP, PET, oncologie, médecine nucléaire, formation, PSMA'},
        {name: 'author', content: 'Dr T. Henry'},
      ],
      announcementBar: {
        id: 'site_en_construction',
        content: 'Ce site est en cours de construction — le contenu est progressivement enrichi.',
        backgroundColor: '#E3F2FD',
        textColor: '#0D47A1',
        isCloseable: true,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: 'TEP Oncologie',
        logo: {
          alt: 'TEP Oncologie Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Actualités', position: 'left'},
          {to: '/outils/assistant-tep-fdg', label: 'Outils', position: 'left'},
          {
            href: 'https://github.com/lescientifik/oncopet_academy',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Pratique clinique',
                to: '/docs/pratique',
              },
              {
                label: 'Pathologies',
                to: '/docs/pathologies',
              },
              {
                label: 'Guidelines',
                to: '/docs/guidelines',
              },
            ],
          },
          {
            title: 'Ressources',
            items: [
              {
                label: 'Actualités',
                to: '/blog',
              },
              {
                label: 'Outils',
                to: '/outils/assistant-tep-fdg',
              },
              {
                label: 'PubMed',
                href: 'https://pubmed.ncbi.nlm.nih.gov/',
              },
            ],
          },
          {
            title: 'À propos',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lescientifik/oncopet_academy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TEP Oncologie Academy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
