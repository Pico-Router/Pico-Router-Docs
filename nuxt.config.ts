// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  routeRules: {
    ...(process.env.NODE_ENV === 'production'
      ? {}
      : {
          '/': { redirect: '/coming-soon' }
        })
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://pico-router-docs.vercel.app/',
    title: 'Pico Router Docs',
    description: '',
    full: {
      title: 'Pico Router Docs - Full Documentation',
      description: 'This is the full documentation for the Pico Router Docs.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Pico Router Docs'
  },

  ogImage: {
    zeroRuntime: true
  }
})
