<template>
    <div class="min-h-screen relative bg-navy-900 overflow-hidden">
      <!-- Particules d'arrière-plan -->
      <div class="particles-container absolute inset-0 z-0 opacity-20"></div>
      
      <!-- Bannière de la boutique -->
      <div class="banner-container h-[300px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center overflow-hidden">
        <div class="absolute inset-0 bg-navy-900 opacity-95"></div>
        <div class="absolute inset-0 character-particles"></div>
        
        <!-- Contenu de la bannière -->
        <div class="relative z-10 flex flex-col items-center gap-4 transform slide-in-top">
          <h1 class="text-5xl lg:text-4xl xl:text-5xl font-bold text-white glow-text">
            Boutique <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 animate-gradient">Bleach</span>
          </h1>
          <p class="text-gray-300 max-w-2xl text-center">Améliorez votre expérience et supportez le serveur avec nos packs exclusifs</p>
        </div>
      </div>
  
      <!-- Section principale de la boutique -->
      <div class="mx-auto z-10 bg-server-card text-gray-400 py-12 relative">
    <div class="grid grid-cols-5 gap-8 max-w-[80%] mx-auto">
      <!-- Sidebar - Filtres et classements (20%) -->
      <div class="col-span-2 space-y-6 sm:order-2 lg:order-1">
  
        <!-- Top Donateurs -->
        <div class="bg-navy-900 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
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
        <div class="bg-navy-900 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300">
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
        <div class="bg-navy-900 rounded-xl p-6 shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col items-center">
          <p class="text-gray-400 text-sm mb-2">Paiement sécurisé via</p>
          <div class="flex items-center gap-2">
            <img src="/assets/images/boutique/logo_tebex.png" alt="Logo tebex" class="w-[200px]">
          </div>
        </div>
      </div>
      
      <!-- Contenu principal - Packs (80%) -->
      <div class="col-span-3 sm:order-1 lg:order-2">
        <!-- Packs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <!-- Pack VIP -->
          <div class="package-card bg-navy-900  rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
            <div class="relative">
              <img src="/assets/images/boutique/bleach_wallpaper.webp" alt="Pack VIP" class="w-full h-48 object-cover">
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
          <div class="package-card bg-navy-900 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
            <div class="relative">
              <img src="/assets/images/boutique/bleach_wallpaper.webp" alt="Pack VIP+" class="w-full h-48 object-cover">
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
          <div class="package-card bg-navy-900 rounded-xl overflow-hidden shadow-lg border border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-md transition-all duration-300 group hover:scale-[1.02]">
            <div class="relative">
              <img src="/assets/images/boutique/bleach_wallpaper.webp" alt="Pack Hashira" class="w-full h-48 object-cover">
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
           
        </div>
  
      </div>
    </div>
  </div>
      
      <!-- Appel à l'action -->
      <div class="bg-landing-bleach bg-cover bg-center  py-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-navy-900 opacity-90"></div>
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