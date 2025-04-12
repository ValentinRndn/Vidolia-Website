<template>
  <header class="bg-navy-900 border-b border-blue-800/30 relative z-50">
    <nav class="max-w-[95%] xl:max-w-[90%] mx-auto py-3">
      <!-- Version desktop -->
      <div class="flex md:hidden justify-between items-center">
        <!-- Logo et nom -->
        <div class="flex items-center gap-3">
          <NuxtLink :to="localePath('/')">
            <img src="/assets/images/navbar/logo_vidolia.png" alt="Vidolia Logo" class="w-10 h-10" />
            <span class="text-white font-bold text-xl">{{ $t('navbar.brand') }}</span>
          </NuxtLink>
        </div>
        
        <!-- Boutons principaux -->
        <div class="flex gap-4 items-center">
          <!-- Sélecteur de langue - Modification ici -->
          <div class="relative group">
            <button class="text-gray-300 hover:text-white flex items-center gap-1 transition-colors">
              <span>{{ currentLocale.toUpperCase() }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <!-- Modificatons: mt-2 -> mt-0 et pt-6 en haut du div -->
            <div class="absolute right-0 mt-0 bg-navy-800 border border-blue-800/50 rounded-lg shadow-lg w-32 hidden group-hover:block transform transition-all duration-300 origin-top-right z-50 ">
              <NuxtLink v-for="loc in otherLocales" :key="loc.code" :to="switchLocalePath(loc.code)" class="block px-4 py-2 text-gray-300 hover:bg-blue-800/20 hover:text-white transition-colors">
                {{ loc.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Liens des serveurs -->
          <NuxtLink :to="localePath('/demonSlayer')" class="text-gray-300 hover:text-white transition-colors relative nav-link">{{ $t('navbar.demonSlayer') }}</NuxtLink>

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
          <NuxtLink :to="localePath('/')">
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
    <div v-show="mobileMenuOpen" class="md:flex hidden bg-navy-800 border-b border-blue-800/50 animate-slide-down">
      <div class="max-w-[95%] mx-auto py-4 space-y-4">
        <!-- Sélecteur de langue -->
        <div class="border-b border-blue-800/30 pb-3">
          <p class="text-gray-400 text-sm mb-2">{{ $t('navbar.lang') }}</p>
          <div class="flex gap-2">
            <button v-for="loc in allLocales" :key="loc.code" @click="changeLocale(loc.code)"
                    :class="['px-3 py-1 rounded-md transition-colors', currentLocale === loc.code ? 'text-white bg-blue-600' : 'text-gray-300 hover:bg-navy-700']">
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

          <NuxtLink :to="localePath('/connexion')" class="flex items-center justify-center gap-2 text-white bg-navy-900 hover:bg-navy-700 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>{{ $t('navbar.login') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. Importer les composables nécessaires
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const router = useRouter()

// 2. Créer des références plus simples pour le template
const currentLocale = computed(() => locale.value)
const allLocales = computed(() => locales.value)
const otherLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})

const mobileMenuOpen = ref(false)

// 3. Fonction pour changer de langue
function changeLocale(localeCode) {
  // Si on clique sur la langue actuelle, ne rien faire
  if (locale.value === localeCode) return
  
  // Changer la langue
  locale.value = localeCode
  
  // Fermer le menu mobile
  mobileMenuOpen.value = false
  
  // Rediriger vers la même page dans la nouvelle langue
  const path = switchLocalePath(localeCode)
  if (path) {
    router.push(path)
  }
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
<style>
/* Les styles restent inchangés */
.bg-navy-900 {
  background-color: #111827;
}

.bg-navy-800 {
  background-color: #1e293b;
}

.bg-navy-700 {
  background-color: #334155;
}

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
    max-height: 500px;
  }
}
</style>
