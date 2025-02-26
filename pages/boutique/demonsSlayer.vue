<template>
  <div class="min-h-screen relative bg-navy-900 overflow-hidden">
    <!-- Particules d'arrière-plan -->
    <div class="particles-container absolute inset-0 z-0 opacity-20"></div>
    
    <!-- Bannière de la boutique -->
    <div class="banner-container h-[300px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center overflow-hidden">
      <!-- Overlay avec dégradé amélioré -->
      <div class="absolute inset-0 bg-gradient-to-b from-navy-900/98 to-navy-900/95 z-0"></div>
      
      <!-- Effet de lumière radiale -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pulse-animation"></div>
      
      <!-- Contenu de la bannière -->
      <div class="relative z-10 flex flex-col items-center gap-4 transform slide-in-top">
        <h1 class="text-5xl lg:text-4xl xl:text-5xl font-bold text-white glow-text">
          Boutique <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 animate-gradient">Demon Slayer</span>
        </h1>
        <p class="text-gray-300 max-w-2xl text-center">Améliorez votre expérience et supportez le serveur avec nos packs exclusifs</p>
      </div>
    </div>

    <!-- Section principale de la boutique -->
    <div class="mx-auto z-10 max-w-[90%] text-gray-400 py-12 relative">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar - Filtres et classements -->
        <div class="lg:col-span-1 space-y-6 sm:order-2 lg:order-1">
          <!-- Code de réduction -->
          <div class="bg-navy-800 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
            <h3 class="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-400">
                <path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.66-.77 1.6-1.3 2.61-1.33c.71-.03 1.41.2 2.03.6l.45-.45l4.45 4.45c-1.14 1.79-.63 4.19 1.21 5.5c1.3.93 3.35.95 4.74-.56c1-1.09 1.15-2.71.44-4.03c.44-.27.84-.62 1.23-1.01l.41-.42c.37-.37.59-.87.59-1.41s-.23-1.06-.62-1.45M7.41 15c-.99.16-1.77.94-1.91 1.93c-.19 1.31.63 2.54 1.91 2.96c1.33.45 2.62-.46 2.96-1.18c.27-.57.38-1.32.01-2.04c-.38-.63-1.13-.93-1.42-1.03c-.57-.18-1.15-.28-1.55-.64m15.61-3.44c-.21.21-.44.38-.68.51l-7.5-7.5c.25-.56.34-1.22.51-.8c.34.36.76.73 1.15 1.12l6.41 6.41l.11.11V11.56Z"/>
              </svg>
              Code de réduction
            </h3>
            <div class="flex flex-row gap-2">
              <input type="text" placeholder="Entrez votre code" class="w-full bg-navy-900 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Appliquer
              </button>
            </div>
          </div>

          <!-- Catégories -->
          <div class="bg-navy-800 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
            <h3 class="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-400">
                <path fill="currentColor" d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2m.8 10l-.8.8L11.2 16l4.2-4.2l-.8-.8l-3.4 3.4L9.8 13Z"/>
              </svg>
              Catégories
            </h3>
            <nav class="space-y-2">
              <a @click="activeCategory = 'all'" :class="{'bg-blue-600 text-white': activeCategory === 'all', 'hover:bg-navy-700 text-gray-300': activeCategory !== 'all'}" class="block px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-current">
                  <path fill="currentColor" d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-2zm13-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
                </svg>
                <span>Tout</span>
              </a>
              <a @click="activeCategory = 'monthly'" :class="{'bg-blue-600 text-white': activeCategory === 'monthly', 'hover:bg-navy-700 text-gray-300': activeCategory !== 'monthly'}" class="block px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-current">
                  <path fill="currentColor" d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
                </svg>
                <span>Mensuel</span>
              </a>
              <a @click="activeCategory = 'permanent'" :class="{'bg-blue-600 text-white': activeCategory === 'permanent', 'hover:bg-navy-700 text-gray-300': activeCategory !== 'permanent'}" class="block px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-current">
                  <path fill="currentColor" d="M17 12a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-8a3 3 0 1 1 0 6a3 3 0 0 1 0-6m-5 4h2a7 7 0 0 1 7 7v4h-2v-4a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v4H5v-4a7 7 0 0 1 7-7"/>
                </svg>
                <span>Permanent</span>
              </a>
              <a @click="activeCategory = 'other'" :class="{'bg-blue-600 text-white': activeCategory === 'other', 'hover:bg-navy-700 text-gray-300': activeCategory !== 'other'}" class="block px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-current">
                  <path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2M6 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z"/>
                </svg>
                <span>Autres</span>
              </a>
            </nav>
          </div>

          <!-- Top Donateurs -->
          <div class="bg-navy-800 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
            <h3 class="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-400">
                <path fill="currentColor" d="m12 8.5l1.7 3.39l3.8.58l-2.75 2.67l.65 3.79L12 17.31l-3.4 1.62l.65-3.79l-2.75-2.67l3.8-.58L12 8.5m0-5L9.8 7.8l-4.8.7l3.47 3.39l-.82 4.78L12 14.25l4.36 2.42l-.82-4.78l3.47-3.39l-4.8-.7L12 3.5Z"/>
              </svg>
              Top Donateurs
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-navy-900 font-bold">1</div>
                <img src="https://ui-avatars.com/api/?name=Tanjiro&background=0D47A1&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Tanjiro</p>
                  <p class="text-blue-400 text-xs">150€</p>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-navy-900 font-bold">2</div>
                <img src="https://ui-avatars.com/api/?name=Zenitsu&background=4A148C&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Zenitsu</p>
                  <p class="text-blue-400 text-xs">120€</p>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <div class="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-navy-900 font-bold">3</div>
                <img src="https://ui-avatars.com/api/?name=Inosuke&background=004D40&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Inosuke</p>
                  <p class="text-blue-400 text-xs">95€</p>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <div class="w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-gray-300 font-bold">4</div>
                <img src="https://ui-avatars.com/api/?name=Nezuko&background=880E4F&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Nezuko</p>
                  <p class="text-blue-400 text-xs">85€</p>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <div class="w-8 h-8 bg-navy-700 rounded-full flex items-center justify-center text-gray-300 font-bold">5</div>
                <img src="https://ui-avatars.com/api/?name=Giyuu&background=01579B&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Giyuu</p>
                  <p class="text-blue-400 text-xs">70€</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Derniers dons -->
          <div class="bg-navy-800 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
            <h3 class="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-400">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z"/>
              </svg>
              Derniers dons
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <img src="https://ui-avatars.com/api/?name=Rengoku&background=BF360C&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Rengoku</p>
                  <p class="text-xs text-gray-400">Pack Hashira - <span class="text-blue-400">30€</span></p>
                </div>
                <p class="text-xs text-gray-500">il y a 5 min</p>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <img src="https://ui-avatars.com/api/?name=Tanjiro&background=0D47A1&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Tanjiro</p>
                  <p class="text-xs text-gray-400">Pack VIP+ - <span class="text-blue-400">45€</span></p>
                </div>
                <p class="text-xs text-gray-500">il y a 20 min</p>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <img src="https://ui-avatars.com/api/?name=Zenitsu&background=4A148C&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Zenitsu</p>
                  <p class="text-xs text-gray-400">Pack Armes - <span class="text-blue-400">15€</span></p>
                </div>
                <p class="text-xs text-gray-500">il y a 45 min</p>
              </div>
              <div class="flex items-center gap-3 bg-navy-900/50 rounded-lg p-3 hover:bg-navy-900 transition-colors duration-300">
                <img src="https://ui-avatars.com/api/?name=Inosuke&background=004D40&color=fff" alt="Avatar" class="w-8 h-8 rounded-full">
                <div class="flex-1">
                  <p class="text-white text-sm">Inosuke</p>
                  <p class="text-xs text-gray-400">Pack Sanglier - <span class="text-blue-400">25€</span></p>
                </div>
                <p class="text-xs text-gray-500">il y a 1 heure</p>
              </div>
            </div>
          </div>
          
          <!-- Logo Tebex -->
          <div class="bg-navy-800 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col items-center">
            <p class="text-gray-400 text-sm mb-2">Paiement sécurisé via</p>
            <div class="flex items-center gap-2">
              <svg width="120" height="40" viewBox="0 0 120 40" class="text-white">
                <path fill="currentColor" d="M30.5 9.5h7.8v21h-7.8v-21zm10.4 0h9l5.6 10.6h.1V9.5h7.3v21h-8.7l-6-11.1h-.1v11.1h-7.3v-21zm38.1 0h7.8v15.7h11.7v5.4H79v-21.1zm32.4 0h8l8.5 21.1h-8.2l-1.1-3.2h-7.3L110 30.6h-7.1l8.5-21.1zm4 6.5l-2 5.9h4.2l-2-5.9h-.2zM20.1 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm-10-5.7c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Contenu principal - Packs -->
        <div class="lg:col-span-3 sm:order-1 lg:order-2">
          <!-- Barre de recherche et tri -->
          <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div class="search-bar relative w-full md:w-1/2">
              <input type="text" placeholder="Rechercher un pack..." class="w-full bg-navy-800 border border-blue-500/30 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
                <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/>
              </svg>
            </div>
            <div class="sort-options flex gap-2 items-center">
              <span class="text-gray-400">Trier par:</span>
              <select class="bg-navy-800 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Populaires</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Récents</option>
              </select>
            </div>
          </div>
          
          <!-- Packs Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <!-- Pack VIP -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/1e40af/ffffff?text=Pack+VIP" alt="Pack VIP" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Mensuel</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack VIP</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">15€</div>
                </div>
                <p class="text-gray-400 text-sm">Accédez à des avantages exclusifs en tant que VIP sur le serveur Demon Slayer.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Katana exclusif</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Tag VIP dans le chat</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>+10,000 yens par jour</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
            
            <!-- Pack VIP+ -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/4338ca/ffffff?text=Pack+VIP+" alt="Pack VIP+" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Mensuel</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack VIP+</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">25€</div>
                </div>
                <p class="text-gray-400 text-sm">Accédez à des avantages premium avec notre pack VIP+ amélioré.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Tous les avantages VIP</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Nichirin personnalisée</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>+20,000 yens par jour</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Accès aux zones VIP+</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
            
            <!-- Pack Hashira -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/3730a3/ffffff?text=Pack+Hashira" alt="Pack Hashira" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Permanent</div>
                <div class="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-medium animate-pulse">Populaire</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack Hashira</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">45€</div>
                </div>
                <p class="text-gray-400 text-sm">Obtenez le statut légendaire de Hashira avec ce pack exclusif de pourfendeur d'élite.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Grade Hashira permanent</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Armes exclusives Hashira</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>+50,000 yens par jour</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Aura Hashira personnalisée</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
            
            <!-- Pack Démon -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/991b1b/ffffff?text=Pack+Démon" alt="Pack Démon" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Permanent</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack Démon</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">35€</div>
                </div>
                <p class="text-gray-400 text-sm">Rejoignez les forces obscures avec ce pack spécial pour les joueurs choisissant le chemin du démon.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Art Démoniaque exclusif</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Tatouages démoniaques</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Pouvoir de régénération accru</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Accès à la forteresse infinie</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
            
            <!-- Pack Monnaie -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/eab308/000000?text=Pack+Monnaie" alt="Pack Monnaie" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Permanent</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack Monnaie</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">10€</div>
                </div>
                <p class="text-gray-400 text-sm">Augmentez votre fortune avec ce pack de yens pour commencer votre aventure avec les poches pleines.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>100,000 yens immédiats</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Bonus de +5% sur tous les gains</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Coffre de stockage amélioré</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
            
            <!-- Pack Armes -->
            <div class="package-card bg-navy-800 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
              <div class="relative">
                <img src="https://via.placeholder.com/400x200/0284c7/ffffff?text=Pack+Armes" alt="Pack Armes" class="w-full h-48 object-cover">
                <div class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium">Autres</div>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-white text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">Pack Armes</h3>
                  <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">15€</div>
                </div>
                <p class="text-gray-400 text-sm">Une collection d'armes rares pour équiper votre pourfendeur et dominer les combats.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>5 Nichirin à débloquer</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>2 armes légendaires</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Durabilité accrue +50%</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-green-500">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Forge personnelle portable</span>
                  </div>
                </div>
                <button class="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-blue-500/30 group-hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>
                  </svg>
                  Acheter
                </button>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="flex justify-center mt-10">
            <nav class="flex items-center gap-1">
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m14 7l-5 5l5 5V7Z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">1</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">2</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">3</a>
              <span class="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">8</a>
              <a href="#" class="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m10 17l5-5l-5-5v10Z"/>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Appel à l'action -->
    <div class="bg-navy-800 py-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
      <div class="max-w-[90%] mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 class="text-4xl font-bold text-white mb-4 glow-text">Besoin d'aide pour choisir ?</h2>
        <p class="text-gray-300 mb-8 max-w-2xl">Notre équipe est disponible pour vous aider à trouver le pack parfait pour votre style de jeu. N'hésitez pas à nous contacter sur Discord.</p>
        <a href="https://discord.gg/vidoliads" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/>
          </svg>
          Rejoindre notre Discord
        </a>
      </div>
    </div>
  </div>
</template>

<style>
/* Base colors */
.bg-navy-900 {
  background-color: #111827;
}

.bg-navy-800 {
  background-color: #1e293b;
}

.bg-navy-700 {
  background-color: #334155;
}

/* Animation de texte brillant */
.glow-text {
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}

/* Animation du dégradé de texte */
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Animation de pulse pour les éléments */
.pulse-animation {
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

/* Animation d'entrée depuis le haut */
.slide-in-top {
  animation: slideInTop 0.8s ease forwards;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet de particules d'arrière-plan */
.particles-container {
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 40% 90%, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 120px 120px;
  animation: particlesFloat 30s linear infinite;
}

@keyframes particlesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .package-card {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeCategory: 'all'
    }
  }
}
</script>