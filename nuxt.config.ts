export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vidolia',
      meta: [
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'author', content: 'Vidolia' },
        // { name: 'google-site-verification', content: '_FfpdtV8gFxPxXoyaD-uodgnn0dWitziWmvZul0S31M' }, 
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }, // Favicon
        { rel: 'apple-touch-icon', href: '/favicon.webp' }, // Apple Touch Icon
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
})
