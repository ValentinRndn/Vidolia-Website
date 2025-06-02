<template>
  <footer class="bg-navy-900 relative overflow-hidden border-t border-blue-800/30">
    <!-- Effet de particules en arrière-plan -->
    <div class="particles-bg absolute inset-0 opacity-20"></div>
    
    <!-- Effet de ligne lumineuse supérieure -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    
    <!-- Section principale du footer -->
    <div class="relative z-10 max-w-[1400px] sm:max-w-[95%] mx-auto px-4 pt-16 pb-8">
      <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
        <!-- Logo et présentation -->
        <div class="col-span-1 ">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-3">
              <h2 class="text-white text-2xl font-bold md:mx-auto">Vidolia</h2>
            </div>
            <p class="text-gray-400 mt-4 md:text-center">{{ $t('footer.description') }}</p>
          </div>
        </div>
        
        <!-- Navigation rapide -->
        <div class="col-span-1 flex flex-col items-center">
          <h3 class="text-white text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5Z"/>
            </svg>
            {{ $t('footer.navigation') }}
          </h3>
          <ul class="">
            <li class="">
              <NuxtLink to="/" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t('footer.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/demonSlayer" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t('footer.demonSlayer') }}
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/bleach" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t('footer.bleach') }}
              </NuxtLink>
            </li> -->
            <li>
              <a href="https://vidolia.tebex.io/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t('footer.shop') }}
              </a>
            </li>
            <li>
              <NuxtLink to="/regles" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t('footer.rules') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Serveurs en ligne -->
        <!-- <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4 flex items-center md:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z"/>
            </svg>
            {{ $t('footer.servers') }}
          </h3>
          <div class="space-y-3">
            <div class="bg-navy-800 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-white font-medium">{{ $t('footer.demonSlayer') }}</h4>
                <span class="flex items-center text-green-400 text-sm">
                  <span class="h-2 w-2 bg-green-400 rounded-full mr-1.5 pulse-green"></span>
                  {{ $t('footer.online') }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">{{ $t('footer.playersConnected') }}</span>
                <span class="text-blue-400 text-sm font-semibold">42</span>
              </div>
            </div>
            
            <div class="bg-navy-800 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-white font-medium">{{ $t('footer.bleach') }}</h4>
                <span class="flex items-center text-green-400 text-sm">
                  <span class="h-2 w-2 bg-green-400 rounded-full mr-1.5 pulse-green"></span>
                  {{ $t('footer.online') }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">{{ $t('footer.playersConnected') }}</span>
                <span class="text-blue-400 text-sm font-semibold">38</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      
      <!-- Séparateur -->
      <div class="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-8"></div>
      
      <!-- Bas de page (copyright, etc.) -->
      <div class="flex flex-row md:flex-flex items-center justify-between gap-4">
        <div class="text-gray-400 text-sm">
          <p>{{ $t('footer.copyright') }}</p>
        </div>
        
        <div class="flex flex-wrap gap-4 text-sm text-gray-400">
          <NuxtLink to="/mentions-legales" class="hover:text-blue-400 transition-colors duration-300">{{ $t('footer.legalNotice') }}</NuxtLink>
          <!-- <NuxtLink to="/politique-de-confidentialite" class="hover:text-blue-400 transition-colors duration-300">{{ $t('footer.privacyPolicy') }}</NuxtLink> -->
          <!-- <NuxtLink to="/cgu" class="hover:text-blue-400 transition-colors duration-300">{{ $t('footer.termsOfService') }}</NuxtLink> -->
          <!-- <NuxtLink to="/contact" class="hover:text-blue-400 transition-colors duration-300">{{ $t('footer.contact') }}</NuxtLink> -->
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
/* Pulse animation for server status */
.pulse-green {
  animation: pulseGreen 2s infinite;
}

@keyframes pulseGreen {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

/* Background particles animation */
.particles-bg {
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: particlesFloat 25s linear infinite;
}

@keyframes particlesFloat {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

/* Drop shadow for logos */
.drop-shadow-glow {
  filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5));
}
</style>
