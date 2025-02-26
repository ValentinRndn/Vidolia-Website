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
              <!-- <img src="https://via.placeholder.com/50x50/1e40af/ffffff?text=V" alt="Vidolia Logo" class="w-10 h-10 drop-shadow-glow"> -->
              <h2 class="text-white text-2xl font-bold">Vidolia</h2>
            </div>
            <p class="text-gray-400 mt-4">Une communauté de jeu de rôle immersive où la créativité et l'imagination prennent vie à travers des univers fascinants.</p>
            <div class="flex space-x-4 mt-4">
              <a href="https://discord.gg/vidoliads" target="_blank" class="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Navigation rapide -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1ZM8 13h8v-2H8v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5Z"/>
            </svg>
            Navigation
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Accueil
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Demon Slayer RP
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Bleach RP
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Wiki Vidolia
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Boutique
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Règlements
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Serveurs en ligne -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z"/>
            </svg>
            Serveurs
          </h3>
          <div class="space-y-3">
            <div class="bg-navy-800 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-white font-medium">Demon Slayer RP</h4>
                <span class="flex items-center text-green-400 text-sm">
                  <span class="h-2 w-2 bg-green-400 rounded-full mr-1.5 pulse-green"></span>
                  En ligne
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">Joueurs connectés</span>
                <span class="text-blue-400 text-sm font-semibold">42</span>
              </div>
            </div>
            
            <div class="bg-navy-800 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-white font-medium">Bleach RP</h4>
                <span class="flex items-center text-green-400 text-sm">
                  <span class="h-2 w-2 bg-green-400 rounded-full mr-1.5 pulse-green"></span>
                  En ligne
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">Joueurs connectés</span>
                <span class="text-blue-400 text-sm font-semibold">38</span>
              </div>
            </div>
          </div>
          
          <a href="#" class="block mt-4 text-center px-4 py-2 bg-navy-800 border border-blue-500/30 hover:border-blue-500/60 rounded-lg text-white hover:bg-navy-700 transition-all duration-300">
            Voir tous les serveurs
          </a>
        </div>
        
      </div>
      
      <!-- Séparateur -->
      <div class="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-8"></div>
      
      <!-- Bas de page (copyright, etc.) -->
      <div class="flex flex-row md:flex-flex items-center justify-between gap-4">
        <div class="text-gray-400 text-sm">
          <p>&copy; 2025 Vidolia. Tous droits réservés.</p>
        </div>
        
        <div class="flex flex-wrap gap-4 text-sm text-gray-400">
          <a href="#" class="hover:text-blue-400 transition-colors duration-300">Mentions légales</a>
          <a href="#" class="hover:text-blue-400 transition-colors duration-300">Politique de confidentialité</a>
          <a href="#" class="hover:text-blue-400 transition-colors duration-300">CGU</a>
          <a href="#" class="hover:text-blue-400 transition-colors duration-300">Contact</a>
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