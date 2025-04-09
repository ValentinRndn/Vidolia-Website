<template>
  <div class="min-h-screen relative bg-navy-900 overflow-hidden">
    <!-- Particules d'arrière-plan -->
    <div class="particles-container absolute inset-0 z-0 opacity-20"></div>
    
    <!-- Bannière Hero -->
    <div class="banner-container h-[500px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center">
      <div class="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-900/80 z-0"></div>
      <div class="absolute inset-0 bg-navy-900 opacity-95"></div>
      <div class="absolute inset-0 character-particles"></div>
      
      <!-- Contenu de la bannière -->
      <div class="relative z-10 flex flex-col items-center gap-4 transform slide-in-top max-w-[80%] sm:max-w-[95%] px-4">
        <h1 class="text-7xl sm:text-5xl md:text-6xl font-bold text-white glow-text">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 animate-gradient">{{ $t('home.hero.title') }}</span>
        </h1>
        <p class="text-gray-300 max-w-2xl text-center text-xl mt-4">{{ $t('home.hero.subtitle') }}</p>
        
        <div class="flex gap-6 mt-8">
          <a href="#" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-white">
              <path fill="currentColor" d="M7 6v12l10-6z"/>
            </svg>
            {{ $t('home.hero.play') }}
          </a>
          <NuxtLink to="https://vidolia.gitbook.io/vidolia" target="_blank" class="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-blue-500/30 hover:border-blue-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-white">
              <path fill="currentColor" d="M19 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14m-2 3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5m0 4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9m0 4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1m0 4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1z"/>
            </svg>
            {{ $t('home.hero.wiki') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Sections principales -->
    <div class="mx-auto max-w-[80%] sm:max-w-[95%] py-20">
      <!-- Présentation du serveur -->
      <section class="mb-24">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:4-xl sm:3-xl font-bold text-white mb-6 glow-text">{{ $t('home.welcome.title') }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-1 gap-12 items-center">
          <div class="fade-in-section">
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              {{ $t('home.welcome.paragraph1') }}
            </p>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              {{ $t('home.welcome.paragraph2') }}
            </p>
            <p class="text-gray-300 text-lg leading-relaxed">
              {{ $t('home.welcome.paragraph3') }}
            </p>
          </div>
          
          <div class="relative rounded-xl overflow-hidden fade-in-section">
            <!-- Image avec effet de survol -->
            <div class="group relative overflow-hidden rounded-xl">
              <img src="/assets/images/index/background-card.webp" alt="Demon Slayer Universe" class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110">
              
              <!-- Overlay au survol -->
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 class="text-white text-2xl font-bold mb-2">{{ $t('home.welcome.explore') }}</h3>
                <p class="text-gray-300">{{ $t('home.welcome.exploreDesc') }}</p>
              </div>
              
              <!-- Border effect -->
              <div class="absolute inset-0 border-2 border-blue-500/0 rounded-xl group-hover:border-blue-500/50 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Liens importants & Wiki Section -->
      <section id="wiki" class="relative ">
        <div class="text-center mb-12 relative z-10">
          <h2 class="text-5xl md:4-xl sm:3-xl font-bold text-white mb-6 glow-text">{{ $t('home.resources.title') }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mx-auto"></div>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            {{ $t('home.resources.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-1 gap-8 items-start">
          <!-- Règlements -->
          <div class="bg-navy-800 rounded-xl p-8 border border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                <path fill="currentColor" d="M12 3c-1.27 0-2.4.8-2.82 2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.18C14.4 3.8 13.27 3 12 3m0 2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M7 8h10v2h-2v7h-2v-7h-2v7H9v-7H7V8Z"/>
              </svg>
              {{ $t('home.resources.rules') }}
            </h3>
            
            <div class="space-y-4">
              <NuxtLink to="/https://vidolia.gitbook.io/vidolia" target="_blank" class="block p-4 bg-navy-900 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-md group">
                <div class="flex items-center gap-4">
                  <div class="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 15.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73v3.72Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white text-lg font-medium group-hover:text-blue-300 transition-colors duration-300">{{ $t('home.resources.general') }}</h4>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{{ $t('home.resources.generalDesc') }}</p>
                  </div>
                </div>
                <div class="mt-3 flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                  </svg>
                </div>
              </NuxtLink>
              
              <NuxtLink to="https://vidolia.gitbook.io/vidolia/categories/demons" target="_blank" class="block p-4 bg-navy-900 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-md group">
                <div class="flex items-center gap-4">
                  <div class="bg-red-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                      <path fill="currentColor" d="M6.92 5.51L3.5 2.09L2.1 3.5l3.42 3.42a21.16 21.16 0 0 0-3.05 12.81l.5.5h1c1.71 0 3.35-.56 4.75-1.59L12 23l2.78-1.15a6.486 6.486 0 0 0 3.21-8.36l3.92-3.92l-1.41-1.41l-3.92 3.92a6.486 6.486 0 0 0-8.36 3.21L6.92 18l-2.54-2.54A18.167 18.167 0 0 1 7.2 7.72l-.28-2.21M12 19a4 4 0 0 1-4-4c0-1.5.8-2.8 2-3.5l-2.21-2.21a6 6 0 0 0 8.42 8.42L14 15.5c.7 1.2 2 2 3.5 2l1.5-1.5a3.67 3.67 0 0 1-1.5.5v-.2l-.1.2H17c-.55 0-1-.45-1-1a1 1 0 0 1 1-1h.2A3.12 3.12 0 0 0 19 13a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3c0 1.38.94 2.5 2.22 2.82A5.35 5.35 0 0 1 12 19Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white text-lg font-medium group-hover:text-red-300 transition-colors duration-300">{{ $t('home.resources.demons') }}</h4>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{{ $t('home.resources.demonsDesc') }}</p>
                  </div>
                </div>
                <div class="mt-3 flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-red-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                  </svg>
                </div>
              </NuxtLink>
              
              <NuxtLink to="https://vidolia.gitbook.io/vidolia/categories/les-pourfendeurs" target="_blank" class="block p-4 bg-navy-900 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-md group">
                <div class="flex items-center gap-4">
                  <div class="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      <path fill="currentColor" d="M7 5.7L5.5 7.2L8.3 10H3v2h5.3l-2.8 2.8L7 16.3L12.3 11L7 5.7M19 17h-6v2h6v-2m0-4h-4v2h4v-2m0-8h-8v2h8V5m0 4h-6v2h6V9Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-white text-lg font-medium group-hover:text-green-300 transition-colors duration-300">{{ $t('home.resources.slayers') }}</h4>
                    <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{{ $t('home.resources.slayersDesc') }}</p>
                  </div>
                </div>
                <div class="mt-3 flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-green-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                  </svg>
                </div>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Wiki -->
          <div class="bg-navy-800 rounded-xl p-8 border border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 h-full">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="text-blue-500">
                <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5Z"/>
              </svg>
              {{ $t('home.wiki.title') }}
            </h3>
            
            <div class="bg-navy-900 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-md">
              <div class="flex flex-col md:flex-col gap-6 items-center">
                <img src="/assets/images/index/background-card.webp" alt="Wiki Logo" class="object-contain rounded-lg">
                
                <div>
                  <h4 class="text-white text-xl font-medium mb-2">{{ $t('home.wiki.subtitle') }}</h4>
                  <p class="text-gray-400 mb-4">{{ $t('home.wiki.description') }}</p>
                  
                  <div class="space-y-2">
                    <div class="flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{{ $t('home.wiki.feature1') }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{{ $t('home.wiki.feature2') }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{{ $t('home.wiki.feature3') }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{{ $t('home.wiki.feature4') }}</span>
                    </div>
                  </div>
                  
                  <NuxtLink to="https://vidolia.gitbook.io/vidolia" target="_blank" class="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    <span>{{ $t('home.wiki.consult') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="transform group-hover:translate-x-1 transition-all duration-300">
                      <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Banner Call to Action -->
    <section class="py-16 bg-landing bg-cover bg-center relative mt-20">
      <div class="absolute inset-0 bg-navy-900 opacity-90"></div>
      <!-- Effet lumineux -->
      <div class="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div class="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div class="mx-auto max-w-[1400px] sm:max-w-[95%] px-4 relative z-10 flex flex-col items-center text-center">
        <h2 class="text-5xl md:4-xl sm:3-xl font-bold text-white mb-4 glow-text">{{ $t('home.cta.title') }}</h2>
        <p class="text-gray-300 mb-8 max-w-2xl">{{ $t('home.cta.subtitle') }}</p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 text-lg font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-white">
              <path fill="currentColor" d="M7 6v12l10-6z"/>
            </svg>
            {{ $t('home.cta.start') }}
          </a>
          
          <a href="https://discord.gg/vidoliads" target="_blank" class="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 border border-blue-500/30 hover:border-blue-500/50 text-lg font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-white">
              <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/>
            </svg>
            {{ $t('home.cta.discord') }}
          </a>
        </div>
      </div>
    </section>
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
  
  /* Shadow glow for elements */
  .drop-shadow-glow {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
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
  
  /* Animations d'apparition au scroll */
  .fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-in-section.active {
    opacity: 1;
    transform: translateY(0);
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
  
  /* Lignes de grille en arrière-plan */
  .grid-lines {
    background-image: linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: gridFloat 20s linear infinite;
  }
  
  @keyframes gridFloat {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 40px 40px;
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 639px) {
    .team-card {
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  </style>
  
  <script>
  export default {
    mounted() {
      // Animation des éléments au défilement
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.2 });
  
      // Observer les sections avec animation
      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
      });
    }
  }
  </script>