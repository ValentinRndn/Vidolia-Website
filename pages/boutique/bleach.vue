<template>
    <div class="min-h-[screen] relative bg-navy-900">
      <div class="banner-container h-[400px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center">
            <!-- Overlay foncé -->
            <div class="absolute inset-0 bg-navy-900 opacity-95 z-0"></div>
  
            <!-- Contenu de la bannière -->
            <div class="relative z-10 flex flex-col items-center gap-4">
              <h1 class="text-7xl lg:text-5xl xl:text-6xl font-bold text-white">
                Boutique
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">Bleach</span>
              </h1>
  
              <div class="buttons-container flex gap-8">
              <!-- Bouton Jouer -->
              <a href="#" class="bg-[#1e40af] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                <div class="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg-play" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/>
                  </svg>
                </div>
                <span>Jouer</span>
              </a>
  
              <a class="bg-navy-800" href="https://discord.gg/vidoliads" target="_blank">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" id="svg-discord" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                </div>
              </div>
              <span>Discord</span>
            </a>
          </div>
        </div>
  </div>
  
  
      <div class="mx-auto z-10 max-w-[90%] text-gray-400 py-24">
        <h2 class="text-white uppercase text-5xl font-bold mb-4">Bienvenue dans notre boutique officielle ! </h2>
        <p class="max-w-[70%] mb-12">Ici, tu peux acheter divers avantages et objets exclusifs pour améliorer ton expérience sur notre serveur GMod. Que ce soit des armes spéciales, des skins uniques, des rangs VIP ou encore des bonus en jeu, tout est conçu pour te permettre de profiter pleinement de ton aventure. Chaque achat soutient directement le serveur et aide à proposer du contenu toujours plus immersif. Rejoins l'action et équipe-toi dès maintenant ! </p>
  
        <!-- Stats Grid -->
        <div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
          <!-- Top Donateur du Mois -->
          <div class="bg-navy-800 p-6 rounded-lg">
            <h3 class="text-white text-xl font-semibold mb-4">Top Donateur du Mois</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <span class="text-white">Pseudo1</span>
                </div>
                <span class="text-blue-400">150€</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span class="text-white">Pseudo2</span>
                </div>
                <span class="text-blue-400">100€</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <span class="text-white">Pseudo3</span>
                </div>
                <span class="text-blue-400">75€</span>
              </div>
            </div>
          </div>
  
          <!-- Derniers Achats -->
          <div class="bg-navy-800 p-6 rounded-lg">
            <h3 class="text-white text-xl font-semibold mb-4">Derniers Achats</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-white">Pseudo4</span>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-gray-400">Pack VIP</span>
                  <span class="text-blue-400">25€</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white">Pseudo5</span>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-gray-400">Pack Elite</span>
                  <span class="text-blue-400">50€</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white">Pseudo6</span>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-gray-400">Pack Legend</span>
                  <span class="text-blue-400">100€</span>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Top Donateurs All Time -->
          <div class="bg-navy-800 p-6 rounded-lg">
            <h3 class="text-white text-xl font-semibold mb-4">Top Donateurs All Time</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <span class="text-white">Pseudo7</span>
                </div>
                <span class="text-blue-400">500€</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span class="text-white">Pseudo8</span>
                </div>
                <span class="text-blue-400">350€</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <span class="text-white">Pseudo9</span>
                </div>
                <span class="text-blue-400">200€</span>
              </div>
            </div>
          </div>
  
          <!-- Carte Cadeau -->
          <div class="bg-navy-800 p-6 rounded-lg relative overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24">
              <div class="absolute transform rotate-45 bg-blue-500 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                NOUVEAU
              </div>
            </div>
            <h3 class="text-white text-xl font-semibold mb-4">Carte Cadeau</h3>
            <p class="text-gray-400 mb-4">Offrez du crédit à vos amis !</p>
            <div class="space-y-2">
              <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">10€</button>
              <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">25€</button>
              <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">50€</button>
            </div>
          </div>
        </div>
  
        <!-- Packages Section -->
        <h2 class="text-white text-3xl font-bold mb-8">Nos Packages</h2>
        <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <!-- Pack VIP -->
          <div class="bg-navy-800 rounded-lg overflow-hidden">
            <div class="bg-blue-600 p-4">
              <h3 class="text-white text-2xl font-bold text-center">Pack VIP</h3>
            </div>
            <div class="p-6">
              <div class="text-center mb-6">
                <span class="text-3xl font-bold text-white">25€</span>
                <span class="text-gray-400">/mois</span>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Accès aux zones VIP
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tag spécial sur le Discord
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  +5000 crédits en jeu
                </li>
              </ul>
              <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Acheter
              </button>
            </div>
          </div>
  
          <!-- Pack Elite -->
          <div class="bg-navy-800 rounded-lg overflow-hidden transform scale-105 shadow-xl">
            <div class="bg-purple-600 p-4">
              <h3 class="text-white text-2xl font-bold text-center">Pack Elite</h3>
            </div>
            <div class="p-6">
              <div class="text-center mb-6">
                <span class="text-3xl font-bold text-white">50€</span>
                <span class="text-gray-400">/mois</span>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tous les avantages VIP
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Armes exclusives
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  +15000 crédits en jeu
                </li>
              </ul>
              <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                Acheter
              </button>
            </div>
          </div>
  
          <!-- Pack Legend -->
          <div class="bg-navy-800 rounded-lg overflow-hidden">
            <div class="bg-amber-600 p-4">
              <h3 class="text-white text-2xl font-bold text-center">Pack Legend</h3>
            </div>
            <div class="p-6">
              <div class="text-center mb-6">
                <span class="text-3xl font-bold text-white">100€</span>
                <span class="text-gray-400">/mois</span>
              </div>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Tous les avantages Elite
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Skins légendaires
                </li>
                <li class="flex items-center gap-2 text-gray-400">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  +50000 crédits en jeu
                </li>
              </ul>
              <button class="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <style>
  /* [Previous styles remain the same] */
  
  /* Add new hover effect for package cards */
  .bg-navy-800:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
  </style>