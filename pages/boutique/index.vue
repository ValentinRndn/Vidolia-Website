<template>
  <div class="min-h-screen relative bg-navy-900 overflow-hidden">
    <!-- Particules d'arrière-plan -->
    <div class="particles-container absolute inset-0 z-0 opacity-30"></div>
    
    <!-- Bannière de la boutique -->
    <div class="banner-container h-[400px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center overflow-hidden">
      <div class="absolute inset-0 bg-navy-900 opacity-95"></div>
      <div class="absolute inset-0 character-particles"></div>
      
      <!-- Contenu de la bannière -->
      <div class="relative z-10 flex flex-col items-center gap-4 transform slide-in-top">
        <h1 class="text-7xl md:text-6xl sm:text-5xl font-bold text-white glow-text">
          {{ $t('boutique.bannerTitle1') }}
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 animate-gradient">{{ $t('boutique.bannerTitle2') }}</span>
        </h1>

        <div class="buttons-container flex gap-8 mt-6">
          <!-- Bouton Jouer -->
          <a href="#" class="bg-[#1e40af] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/30 hover:scale-105 group">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" id="svg-play" width="32" height="32" viewBox="0 0 24 24" class="transition-transform duration-300 group-hover:scale-110">
                <path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/>
              </svg>
            </div>
            <span>{{ $t('boutique.playButton') }}</span>
          </a>

          <!-- Bouton Discord -->
          <a class="bg-navy-800 hover:bg-navy-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/20 hover:scale-105 group" href="https://discord.gg/vidoliads" target="_blank">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" id="svg-discord" width="32" height="32" viewBox="0 0 24 24" class="transition-transform duration-300 group-hover:scale-110">
                  <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/>
                </svg>
              </div>
            </div>
            <span>{{ $t('boutique.discordButton') }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Section de présentation -->
    <div class="mx-auto z-10 text-gray-400 py-24 relative bg-server-card-bottom">      
      <div class="fade-in-section max-w-[80%] mx-auto">
        <h2 class="text-white uppercase text-5xl md:4-xl sm:3-xl font-bold mb-4 glow-text text-center">{{ $t('boutique.welcomeTitle') }}</h2>
        <span class="block w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mt-4 animate-width mb-8 mx-auto"></span>
        
        <p class="mb-12 text-gray-300 leading-relaxed text-lg fade-in-paragraph text-center">
          {{ $t('boutique.welcomeText') }}
        </p>
      </div>
    </div>

    <!-- Section de choix du serveur -->
    <div class="choose-server-container bg-server-card relative pb-32">
      
      <div class="relative z-10 max-w-[80%] mx-auto">
        <h2 class="text-white uppercase text-5xl md:4-xl sm:3-xl font-bold mb-4 text-center glow-text fade-in-title">{{ $t('boutique.chooseServerTitle') }}</h2>
        <span class="block w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mt-4 animate-width mb-24 mx-auto"></span>
        
        <div class="servers-container grid grid-cols-1 gap-8 lg:gap-16 xl:gap-44 text-white max-w-[50%] mx-auto">
          <!-- Serveur Demon Slayer -->
          <div class="server-card bg-server-card rounded-xl p-6 border border-blue-500 relative overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 group sm:w-full md:w-[450px] lg:w-[500px] h-[300px] flex flex-col justify-between">
            <!-- Effet de brillance sur hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <!-- Background pattern -->
            <div class="absolute inset-0 bg-serverCard bg-cover bg-center opacity-30 transition-all duration-500 group-hover:opacity-40"></div>
            
            <!-- Particules serveur -->
            <div class="absolute inset-0 server-particles opacity-20"></div>
            
            <div class="relative z-10 ">
              <div class="flex justify-between items-start mb-4 ">
                <h3 class="text-3xl font-bold text-white glow-text-subtle group-hover:text-blue-200 transition-colors duration-300">{{ $t('boutique.demonSlayerTitle') }}</h3>
                
                <!-- Icône de serveur avec animation -->
                <div class="server-icon-container w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="text-blue-400 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <path fill="currentColor" d="M12 2c-4.4 0-8 3.6-8 8c0 3.9 2.8 7.2 6.6 7.9c.3-1 .8-1.9 1.5-2.7c-3.1-.4-5.5-3-5.5-6.2c0-3.5 2.8-6.4 6.4-6.4s6.4 2.9 6.4 6.4c0 .9-.2 1.8-.5 2.5c.7.3 1.4.7 1.9 1.2c.6-1.1.9-2.4.9-3.7c0-4.4-3.6-8-8-8M9.5 8c-.8 0-1.5.7-1.5 1.5S8.7 11 9.5 11s1.5-.7 1.5-1.5S10.3 8 9.5 8m5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5S15.3 8 14.5 8M13 14c-2.2 0-4.1 1.2-5 3.2c1.3 1.5 3.1 2.5 5.1 2.7v-3c0-1.3 1.2-1.7 2.3-2.1c-.5-.5-1.5-.8-2.4-.8m4.7 1.7c-1 0-1.7.8-1.7 1.8V20h3v-3c0-1.3-.6-1.5-1.3-1.3"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                {{ $t('boutique.demonSlayerDescription') }}
              </p>
              
              <!-- Stats serveur -->
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 bg-green-500 rounded-full pulse-green"></span>
                  <span class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{{ $t('boutique.serverStatus') }}</span>
                </div>
                
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                    <path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"/>
                  </svg>
                  <span class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">42 {{ $t('navbar.players') }}</span>
                </div>
              </div>
            </div>
            
            <!-- Bouton explorer -->
            <NuxtLink :to="localePath('/boutique/demonsSlayer')" class="relative z-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-md group-hover:scale-105 flex items-center justify-center gap-2">
              <span>{{ $t('boutique.exploreButton') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="transform transition-all duration-300 group-hover:translate-x-1">
                <path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6z"/>
              </svg>
            </NuxtLink>
          </div>
          
          <!-- Serveur Bleach -->
          <!-- <div class="server-card bg-server-card rounded-xl p-6 border border-blue-500 relative overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 group sm:w-full md:w-[450px] lg:w-[500px] h-[300px] flex flex-col justify-between">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <div class="absolute inset-0 bg-serverCard bg-cover bg-center opacity-30 transition-all duration-500 group-hover:opacity-40"></div>
            
            <div class="absolute inset-0 server-particles opacity-20"></div>
            
            <div class="relative z-10">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-3xl font-bold text-white glow-text-subtle group-hover:text-blue-200 transition-colors duration-300">Bleach</h3>
                
                <div class="server-icon-container w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="text-blue-400 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <path fill="currentColor" d="M7.05 3.5c.99 0 1.93.35 2.67.99l.13.15c.76.64 1.81.99 2.9.99c1.28 0 2.5-.47 3.42-1.3a.756.756 0 0 1 1.06.1c.27.32.23.8-.1 1.06c-1.22 1.08-2.75 1.64-4.39 1.64c-1.39 0-2.72-.43-3.69-1.29c-.15-.17-.52-.52-1-.52c-.71 0-1.3.59-1.3 1.3c0 .73.59 1.3 1.35 1.3c.76 0 1.35-.58 1.36-1.27v-.13c0-.43.35-.8.8-.8c.43 0 .8.36.8.8v.12c-.01 1.55-1.22 2.77-2.95 2.77c-1.67 0-2.95-1.27-2.95-2.9c-.01-1.63 1.27-2.91 2.89-2.91M21 12c0 1.09-.21 2.18-.61 3.2c-.26.66-.98 1.08-1.81 1.08c-.82 0-1.54-.41-1.8-1.06c-.71-1.77-.69-3.68.01-5.43c.28-.68 1.05-.96 1.72-.7c.67.25.95.95.72 1.64c-.44 1.1-.44 2.3-.01 3.4c.07.16.16.25.35.25c.22 0 .33-.12.39-.28c.31-.8.47-1.65.47-2.5c0-3.9-3.18-7.05-7.1-7.05c-.54 0-1.1.07-1.66.2C10 4.87 9.34 4.67 8.72 4.67c-.61 0-1.21.2-1.67.57c-.33.26-.8.22-1.06-.1c-.26-.33-.21-.8.12-1.07c.76-.6 1.7-.9 2.62-.9c.85 0 1.65.25 2.34.74C11.73 3.31 12.37 3.2 13 3.2c4.76 0 8.63 3.85 8.63 8.6c0 1.09-.21 2.18-.62 3.2c-.78 1.95-2.82 3.22-5.27 3.22c-2.45 0-4.5-1.27-5.27-3.22c-.15-.37.03-.8.4-.95c.37-.15.8.03.95.4c.58 1.47 2.12 2.38 3.92 2.38c1.8 0 3.34-.9 3.92-2.38c.08-.21.17-.43.24-.64c.24-.68.91-.95 1.59-.7c.67.24.95.94.72 1.63c-.06.15-.11.3-.17.46c-1 2.53-3.61 4.03-6.29 4.03c-2.69 0-5.3-1.5-6.3-4.03C3.21 14.18 3 13.09 3 12c0-.46.04-.95.13-1.42c.43.29.93.42 1.42.42c1.37 0 2.5-.93 2.74-2.22c.75.89 1.84 1.38 3.2 1.38c1.87 0 3.65-.68 5.11-1.95c1.26 2.42 3.11 3.59 5.27 3.59c.4 0 .8.32.8.8s-.4.8-.8.8c-2.73 0-5.12-1.58-6.57-4.5c-.2.09-.48.2-.7.3c-.47.2-1 .31-1.55.31c-.7 0-1.35-.15-1.96-.46c-.37-.19-.83-.03-1.01.33c-.18.36-.04.8.33.99c.82.41 1.74.62 2.66.62c.46 0 .94-.06 1.4-.19c.13-.04.26-.09.38-.14c.73 1.58 1.92 2.7 3.44 3.43c.36.17.51.6.34.96c-.17.36-.61.52-.96.34c-1.27-.61-2.4-1.48-3.28-2.65c-1.5.6-3.18.62-4.67 0c-.36-.15-.54-.57-.4-.93c.14-.36.55-.53.91-.4c.56.23 1.29.36 2.07.36c.78 0 1.52-.13 2.09-.36z"/>
                  </svg>
                </div>
              </div>
              
              <p class="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                Devenez un puissant Shinigami et combattez les Hollows. Maîtrisez votre Zanpakutō, 
                développez votre Bankai et protégez la Soul Society.
              </p>
              
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 bg-green-500 rounded-full pulse-green"></span>
                  <span class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Serveur actif</span>
                </div>
                
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-blue-400">
                    <path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"/>
                  </svg>
                  <span class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">38 joueurs</span>
                </div>
              </div>  
            </div>
            
            <NuxtLink to="/boutique/bleach" class="relative z-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg text-center font-medium transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-md group-hover:scale-105 flex items-center justify-center gap-2">
              <span>Explorer la boutique</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="transform transition-all duration-300 group-hover:translate-x-1">
                <path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6z"/>
              </svg>
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Animations and effects */
/* Animation de texte brillant */
.glow-text {
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}

.glow-text-subtle {
  text-shadow: 0 0 8px rgba(59, 130, 246, 0.2);
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

.fade-in-paragraph {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}

.fade-in-paragraph.active {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-title {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-title.active {
  opacity: 1;
  transform: translateY(0);
}

/* Animation de la largeur des séparateurs */
.animate-width {
  animation: widthAnim 1.2s ease forwards;
  transform-origin: left;
}

@keyframes widthAnim {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
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

/* Lignes flottantes */
.floating-lines {
  background-image: linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 80px 100%;
  animation: linesFloat 20s linear infinite;
}

@keyframes linesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

/* Grille d'arrière-plan */
.grid-background {
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

/* Particules pour les serveurs */
.server-particles {
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 50% 70%, rgba(96, 165, 250, 0.1) 1px, transparent 1px);
  background-size: 70px 70px;
  animation: serverParticlesFloat 25s linear infinite;
}

@keyframes serverParticlesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Animation du point vert (serveur en ligne) */
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .servers-container {
    flex-direction: column;
    gap: 20px;
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
          if (entry.target.classList.contains('fade-in-section')) {
            entry.target.classList.add('active');
            
            // Animer les paragraphes après l'entrée de la section
            const paragraphs = entry.target.querySelectorAll('.fade-in-paragraph');
            paragraphs.forEach(paragraph => {
              paragraph.classList.add('active');
            });
          }
          
          if (entry.target.classList.contains('fade-in-title')) {
            entry.target.classList.add('active');
          }
          
          if (entry.target.classList.contains('fade-in-paragraph')) {
            entry.target.classList.add('active');
          }
        }
      });
    }, { threshold: 0.2 });

    // Observer les sections avec animation
    document.querySelectorAll('.fade-in-section, .fade-in-title, .fade-in-paragraph').forEach(section => {
      observer.observe(section);
    });
  }
}
</script>
