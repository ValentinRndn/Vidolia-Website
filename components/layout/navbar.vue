<template>
  <header class="bg-navy-900 border-b border-blue-800/30 relative z-50">
    <nav class="max-w-[95%] xl:max-w-[90%] mx-auto py-3">
      <!-- Version desktop -->
      <div class="flex md:hidden justify-between items-center">
        <!-- Logo et nom -->
        <div class="flex items-center gap-3">
          <img src="/assets/images/navbar/logo_vidolia.png" alt="Vidolia Logo" class="w-10 h-10" />
          <span class="text-white font-bold text-xl">Vidolia</span>
        </div>
        
        <!-- Boutons principaux -->
        <div class="flex gap-4 items-center">
          <!-- Sélecteur de langue -->
          <div class="relative group">
            <button class="text-gray-300 hover:text-white flex items-center gap-1 transition-colors">
              <span>FR</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="absolute right-0 mt-2 bg-navy-800 border border-blue-800/50 rounded-lg shadow-lg py-2 w-28 hidden group-hover:block transform transition-all duration-300 origin-top-right z-50">
              <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-blue-800/20 hover:text-white transition-colors">Français</a>
              <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-blue-800/20 hover:text-white transition-colors">Русский</a>
              <a href="#" class="block px-4 py-2 text-gray-300 hover:bg-blue-800/20 hover:text-white transition-colors">Deutsch</a>
            </div>
          </div>
          
          <!-- Liens des serveurs -->
          <a href="/demon-slayer" class="text-gray-300 hover:text-white transition-colors relative nav-link">Demon Slayer RP</a>
          <a href="/bleach" class="text-gray-300 hover:text-white transition-colors relative nav-link">Bleach RP</a>
          
          <!-- Boutique et connexion -->
          <NuxtLink to="/boutique" class="flex items-center cursor-pointer gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Boutique</span>
          </NuxtLink>
          
        </div>
      </div>
      
      <!-- Version mobile -->
      <div class="md:flex hidden justify-between items-center">
        <!-- Logo et Nom -->
        <div class="flex items-center gap-2">
          <img src="/assets/images/navbar/logo_vidolia.png" alt="Vidolia Logo" class="w-8 h-8" />
          <span class="text-white font-bold text-lg">Vidolia</span>
        </div>
        
        <!-- Boutons principaux condensés -->
        <div class="flex items-center gap-3">
          <!-- Bouton boutique -->
          <NuxtLink to="/boutique" class="flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 p-2 rounded-lg transition-all duration-300">
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
    <div v-show="mobileMenuOpen" class="md:hidden bg-navy-800 border-b border-blue-800/50 animate-slide-down">
      <div class="max-w-[95%] mx-auto py-4 space-y-4">
        <!-- Sélecteur de langue -->
        <div class="border-b border-blue-800/30 pb-3">
          <p class="text-gray-400 text-sm mb-2">Langue</p>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-white bg-blue-600 rounded-md">FR</button>
            <button class="px-3 py-1 text-gray-300 hover:bg-navy-700 rounded-md">RU</button>
            <button class="px-3 py-1 text-gray-300 hover:bg-navy-700 rounded-md">DE</button>
          </div>
        </div>
        
        <!-- Liens vers les serveurs -->
        <div class="border-b border-blue-800/30 pb-3">
          <p class="text-gray-400 text-sm mb-2">Nos serveurs</p>
          <div class="space-y-2">
            <a href="/demon-slayer" class="flex items-center justify-between px-3 py-2 bg-navy-900 rounded-lg hover:bg-navy-700 transition-colors">
              <span class="text-white">Demon Slayer RP</span>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 pulse-green"></span>
                <span class="text-gray-400 text-sm">42 joueurs</span>
              </div>
            </a>
            <a href="/bleach" class="flex items-center justify-between px-3 py-2 bg-navy-900 rounded-lg hover:bg-navy-700 transition-colors">
              <span class="text-white">Bleach RP</span>
              <div class="flex items-center">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 pulse-green"></span>
                <span class="text-gray-400 text-sm">38 joueurs</span>
              </div>
            </a>
          </div>
        </div>
        
        <!-- Boutons principaux -->
        <div class="flex flex-col gap-2">
          <a href="/boutique" class="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Boutique</span>
          </a>
          
          <a href="/connexion" class="flex items-center justify-center gap-2 text-white bg-navy-900 hover:bg-navy-700 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>Se connecter avec Discord/Steam</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Bandeau des serveurs en bas -->
    <!-- <div class="hidden lg:block w-full bg-navy-800 border-t border-blue-800/30 py-2 absolute bottom-0 transform translate-y-full hover:translate-y-0 transition-transform duration-300 z-40">
      <div class="max-w-[95%] xl:max-w-[90%] mx-auto flex justify-between items-center">
        <p class="text-blue-400 text-sm font-medium">Serveurs en ligne</p>
        
        <div class="flex gap-8">
          <a href="/demon-slayer" class="flex items-center gap-3 group">
            <span class="h-2.5 w-2.5 bg-green-500 rounded-full pulse-green"></span>
            <span class="text-white group-hover:text-blue-400 transition-colors">Demon Slayer RP</span>
            <span class="text-gray-400 text-sm">42 joueurs</span>
          </a>
          
          <a href="/bleach" class="flex items-center gap-3 group">
            <span class="h-2.5 w-2.5 bg-green-500 rounded-full pulse-green"></span>
            <span class="text-white group-hover:text-blue-400 transition-colors">Bleach RP</span>
            <span class="text-gray-400 text-sm">38 joueurs</span>
          </a>
        </div>
      </div>
    </div> -->
  </header>
</template>

<style>
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
    max-height: 500px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>