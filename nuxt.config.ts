// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      // Vos configurations head inchangées
      title: 'Vidolia',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'author', content: 'Vidolia' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' },
        { rel: 'apple-touch-icon', href: '/favicon.webp' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n', // Add the i18n module
  ],
  css: [
    '~/assets/css/tailwind.css',  
  ],
  ssr: false,
  
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

  // i18n Configuration
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json' // File for French translations
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru.json' // File for Russian translations
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de.json' // File for German translations
      }
    ],
    lazy: true, // Load translations on demand
    langDir: 'locales', // Directory where translation files will be stored
    defaultLocale: 'fr', // Set French as the default language
    strategy: 'prefix_except_default', // URL prefixing strategy (e.g., /ru/about, /de/about, but /about for default 'fr')
    vueI18n: './i18n.options.ts' // Optional: for more complex vue-i18n options if needed later
  }
})
