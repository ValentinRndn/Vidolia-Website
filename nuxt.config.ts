export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vidolia | Serveur Garry\'s Mod Demon Slayer',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        // SEO classiques
        { name: 'description', content: "Vidolia | Serveur Garry's Mod sur le thème de Demon Slayer. Wiki, boutique d'items, communauté active et événements réguliers !" },
        { name: 'keywords', content: "serveur Garry's Mod Demon Slayer, GMod manga, serveur RP Demon Slayer, Vidolia, boutique Garry's Mod, wiki Demon Slayer, guide Garry's Mod Demon Slayer, mods Demon Slayer Garry's Mod" },
        { name: 'author', content: 'Vidolia' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },


        
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: "Vidolia | Serveur Garry's Mod Demon Slayer" },
        { property: 'og:description', content: "Rejoins le serveur Garry's Mod Demon Slayer Vidolia : boutique d'items, wiki, communauté dynamique et événements exclusifs." },
        { property: 'og:url', content: 'https://vidolia.fr/' },
        { property: 'og:site_name', content: 'Vidolia' },
        { property: 'og:image', content: 'https://vidolia.fr/favicon.png' }, 

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:site', content: '@VidoliaGMod' }, 
        { name: 'twitter:title', content: "Vidolia | Serveur Garry's Mod Demon Slayer" },
        { name: 'twitter:description', content: "Serveur Garry's Mod inspiré de Demon Slayer : wiki, boutique, communauté et événements." },
        { name: 'twitter:image', content: 'https://vidolia.fr/favicon.png' }, 
        // { name: 'twitter:creator', content: '@VidoliaGMod' }, 
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://vidolia.fr/' }
      ]
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
  ssr: false,

  routeRules: {
    '/boutique': { redirect: { to: 'https://vidolia.tebex.io/', statusCode: 301 } }
  },

  runtimeConfig: {
    public: {
      tebexApiKey: process.env.NUXT_PUBLIC_TEBEX_API_KEY,
      tebexStoreDomain: process.env.NUXT_PUBLIC_TEBEX_STORE_DOMAIN || 'vidolia.tebex.io',
    }
  },

  vite: {
    server: {
      fs: {
        allow: ['.']
      }
    }
  },

  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru.json'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false
    }
  }
})