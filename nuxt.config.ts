// nuxt.config.ts
export default defineNuxtConfig({
  
  app: {
    head: {
      // Vos configurations head inchangées
      title: 'Vidolia',
      meta: [
        { name: 'description', content: "Vidolia | Serveur garry's mod sur le thème de Demon Slayer. " },
        { name: 'keywords', content: "serveur, garry's mod, demon slayer" },
        { name: 'author', content: 'Vidolia' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    },
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
    // Redirige /boutique vers le magasin Tebex externe
    '/boutique': { redirect: { to: 'https://vidolia.tebex.io/', statusCode: 301 } }
  },
  
  // Configuration pour les variables d'environnement
  runtimeConfig: {
    // Pour les applications client-only, toutes les variables doivent être dans "public"
    public: {
      tebexApiKey: process.env.NUXT_PUBLIC_TEBEX_API_KEY,
      tebexStoreDomain: process.env.NUXT_PUBLIC_TEBEX_STORE_DOMAIN || 'vidolia.tebex.io',
    }
  },

  // Explicitly configure Vite settings
  vite: {
    server: {
      fs: {
        // Allow serving files from the project root directory
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
    
    // Ajoutez cette configuration pour résoudre le problème
    bundle: {
      optimizeTranslationDirective: false
    }
  }
})
