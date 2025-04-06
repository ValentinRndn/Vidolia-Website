<template>
  <header class="bg-navy-900 border-b border-blue-800/30 relative z-50">
    <nav class="max-w-[95%] xl:max-w-[90%] mx-auto py-3">
      <!-- Version desktop -->
      <div class="flex md:hidden justify-between items-center">
        <!-- Logo et nom -->
        <div class="flex items-center gap-3">
          <NuxtLink :to="localePath('/')"> <!-- Use localePath for home link -->
            <img src="/assets/images/navbar/logo_vidolia.png" alt="Vidolia Logo" class="w-10 h-10" />
            <span class="text-white font-bold text-xl">{{ $t('navbar.brand') }}</span>
          </NuxtLink>
        </div>
        
        <!-- Boutons principaux -->
        <div class="flex gap-4 items-center">
          <!-- Sélecteur de langue -->
          <div class="relative group">
            <button class="text-gray-300 hover:text-white flex items-center gap-1 transition-colors">
              <span>{{ locale.toUpperCase() }}</span> <!-- Display current locale -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="absolute right-0 mt-2 bg-navy-800 border border-blue-800/50 rounded-lg shadow-lg py-2 w-32 hidden group-hover:block transform transition-all duration-300 origin-top-right z-50">
              <!-- Loop through available locales -->
              <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="block px-4 py-2 text-gray-300 hover:bg-blue-800/20 hover:text-white transition-colors">
                {{ loc.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Liens des serveurs -->
          <NuxtLink :to="localePath('/demonSlayer')" class="text-gray-300 hover:text-white transition-colors relative nav-link">{{ $t('navbar.demonSlayer') }}</NuxtLink>
          <!-- <NuxtLink :to="localePath('/bleach')" class="text-gray-300 hover:text-white transition-colors relative nav-link">{{ $t('navbar.bleach') }}</NuxtLink> -->

          <!-- Boutique et connexion -->
          <NuxtLink :to="localePath('/boutique')" class="flex items-center cursor-pointer gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>{{ $t('navbar.shop') }}</span>
          </NuxtLink>

        </div>
      </div>
      
      <!-- Version mobile -->
      <div class="md:flex hidden justify-between items-center">
        <!-- Logo et Nom -->
        <div class="flex items-center gap-2">
          <NuxtLink :to="localePath('/')"> <!-- Use localePath for home link -->
            <img src="/assets/images/navbar/logo_vidolia.png" alt="Vidolia Logo" class="w-8 h-8" />
            <span class="text-white font-bold text-lg">{{ $t('navbar.brand') }}</span>
          </NuxtLink>
        </div>

        <!-- Boutons principaux condensés -->
        <div class="flex items-center gap-3">
          <!-- Bouton boutique -->
          <NuxtLink :to="localePath('/boutique')" class="flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 p-2 rounded-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </NuxtLink>

          
          <!-- Menu hamburger -->
          <button @click="toggleMobileMenu" class="text-white bg-navy-800 hover:bg-navy-700 p-2 rounded-lg border border-blue-500/30 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Menu mobile déroulant -->
    <div v-show="mobileMenuOpen" class="md:flex hidden bg-navy-800 border-b border-blue-800/50 animate-slide-down"> <!-- Changed md:hidden to md:flex hidden -->
      <div class="max-w-[95%] mx-auto py-4 space-y-4">
        <!-- Sélecteur de langue -->
        <div class="border-b border-blue-800/30 pb-3">
          <p class="text-gray-400 text-sm mb-2">{{ $t('navbar.lang') }}</p>
          <div class="flex gap-2">
            <!-- Loop through available locales for buttons -->
            <button v-for="loc in availableLocales" :key="loc.code" @click="changeLocale(loc.code)"
                    :class="['px-3 py-1 rounded-md transition-colors', locale === loc.code ? 'text-white bg-blue-600' : 'text-gray-300 hover:bg-navy-700']">
              {{ loc.code.toUpperCase() }}
            </button>
          </div>
        </div>

        <!-- Liens vers les serveurs -->
        <div class="border-b border-blue-800/30 pb-3">
          <p class="text-gray-400 text-sm mb-2">{{ $t('navbar.servers') }}</p>
          <div class="space-y-2">
            <NuxtLink :to="localePath('/demonSlayer')" class="flex items-center justify-between px-3 py-2 bg-navy-900 rounded-lg hover:bg-navy-700 transition-colors">
              <span class="text-white">{{ $t('navbar.demonSlayer') }}</span>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 pulse-green"></span>
                <span class="text-gray-400 text-sm">42 {{ $t('navbar.players') }}</span>
              </div>
            </NuxtLink>
            <!-- <NuxtLink :to="localePath('/bleach')" class="flex items-center justify-between px-3 py-2 bg-navy-900 rounded-lg hover:bg-navy-700 transition-colors">
              <span class="text-white">{{ $t('navbar.bleach') }}</span>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 pulse-green"></span>
                <span class="text-gray-400 text-sm">38 {{ $t('navbar.players') }}</span>
            </a> -->
          </div>
        </div>

        <!-- Boutons principaux -->
        <div class="flex flex-col gap-2">
          <NuxtLink :to="localePath('/boutique')" class="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>{{ $t('navbar.shop') }}</span>
          </NuxtLink>

          <a href="/connexion" class="flex items-center justify-center gap-2 text-white bg-navy-900 hover:bg-navy-700 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>{{ $t('navbar.login') }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Bandeau des serveurs en bas -->
    <!-- ... (bandeau inférieur inchangé pour l'instant) ... -->
  </header>
</template>

<style>
/* ... (styles inchangés) ... */
/* Couleurs de base */
.bg-navy-900 {
  background-color: #111827;
}

.bg-navy-800 {
  background-color: #1e293b;
}

.bg-navy-700 {
  background-color: #334155;
}

/* Animation pour les liens de navigation */
.nav-link {
  position: relative;
  padding: 0.25rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(to right, #3b82f6, #1e40af);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.nav-link:hover::after {
  width: 100%;
}

/* Animation pour le point vert des serveurs actifs */
.pulse-green {
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulseGreen 2s infinite;
}

@keyframes pulseGreen {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Animation pour le menu mobile */
.animate-slide-down {
  animation: slideDown 0.3s ease-out forwards;
  transform-origin: top;
  overflow: hidden;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: scaleY(0);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: scaleY(1);
    max-height: 500px; /* Adjust as needed */
  }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '#imports' // Auto-imported by Nuxt

const { locale, locales, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath() // Auto-imported by Nuxt
const localePath = useLocalePath() // Auto-imported by Nuxt

const mobileMenuOpen = ref(false)

const availableLocales = computed(() => {
  // Filter out the current locale for the dropdown/buttons
  // return locales.value.filter(i => i.code !== locale.value) // Keep this if you want to hide current locale
  return locales.value // Show all locales including current
})

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

async function changeLocale(newLocale: string) {
  await setLocale(newLocale)
  mobileMenuOpen.value = false // Close menu after selection
}
</script>
