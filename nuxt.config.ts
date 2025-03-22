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
})