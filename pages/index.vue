<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Particules flottantes d'arrière-plan -->
    <div class="particles-background absolute inset-0 z-0"></div>

    <!-- Sélecteur de langue
    <div class="absolute top-4 right-4 z-50">
      <LanguageSwitcher />
    </div> -->

    <!-- Hero Section -->
    <section class="relative bg-landing bg-cover bg-center bg-no-repeat mx-auto flex items-center justify-center pb-24 lg:flex-col lg:pt-24">
      <div class="absolute inset-0 bg-navy-900 opacity-95"></div>
      <div class="absolute inset-0 character-particles"></div>
      <div class="mx-auto max-w-[80%] sm:max-w-[95%] z-10 hero-content slide-in-left pl-24 lg:text-center lg:pl-0">
        <h1 class="text-7xl md:text-6xl sm:text-5xl font-bold text-white mb-6 glow-text">
          {{ $t('hero.welcome') }} <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient">Vidolia</span>
        </h1>
        <p class="text-gray-400 text-xl lg:text-lg xl:text-xl max-w-2xl mb-10 fade-in-paragraph">
          {{ $t('hero.description') }}
        </p>

        <div class="flex flex-row gap-4 button-container lg:justify-center">
          <a href="steam://connect/node01.vidolia.fr:27022"  target="_blank" class="flex items-center cursor-pointer gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" id="svg-play" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/></svg>
              </div>
            </div>
            <span>{{ $t('hero.play') }}</span>
          </a>

          <a class="bg-navy-800" href="https://discord.gg/vidoliads" target="_blank">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" id="svg-discord" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
              </div>
            </div>
            <span>{{ $t('hero.discord') }}</span>
          </a>
        </div>
      </div>

      <div class="relative mr-16 hero-image slide-in-right lg:mx-auto">
        <!-- Effets lumineux autour du personnage -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[700px] bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <img src="../assets/images/index/tanshiro-pic.png" class="w-[700px] floating-animation lg:w-[600px]" alt="Tanshiro picture">
        </div>
      </div>
    </section>

    <!-- Servers Section -->
    <section class="pt-20 bg-navy-900 -mt-32 relative">
      <div class="relative z-10 max-w-[80%] sm:max-w-[95%] mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-1 md:gap-8 gap-32 mx-auto fade-in-section">
          <!-- Serveur 1 -->
          <div class="server-card p-6 rounded-lg bg-server-card hover:shadow-xl hover:shadow-blue-500/30 transition-all z-50 relative pb-10 border border-blue-500 group">
            <!-- Brillance sur hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white absolute right-8 top-6 transform transition-transform duration-300 group-hover:rotate-12" width="40" height="40" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99 99 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"/>
              <circle cx="292" cy="224" r="20" fill="currentColor"/>
              <path fill="currentColor" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288"/>
              <circle cx="336" cy="180" r="20" fill="currentColor"/>
              <circle cx="380" cy="224" r="20" fill="currentColor"/>
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"/>
            </svg>
            
            <div class="relative z-10">
              <h3 class="text-3xl md:text-xl font-bold text-white mb-4 glow-text-subtle group-hover:text-blue-200 transition-colors duration-300">{{ $t('servers.title1') }}</h3>
              <p class="text-gray-400 mb-4 text-xl group-hover:text-gray-300 transition-colors duration-300">{{ $t('servers.description1') }}</p>
              <!-- <div class="connected-players absolute right-8 items-center justify-center flex">
                <span class="point-players pulse-green"></span>
                <p class="text-gray-400 ml-5 group-hover:text-gray-300 transition-colors duration-300">{{ $t('servers.online') }} 123</p>
              </div> -->
            </div>
          </div>

          <!-- Serveur 2 -->
          <div class="server-card p-6 rounded-lg bg-server-card hover:shadow-xl hover:shadow-blue-500/30 transition-all z-50 relative pb-10 border border-blue-500 group">
            <!-- Brillance sur hover -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white absolute right-8 top-6 transform transition-transform duration-300 group-hover:rotate-12" width="40" height="40" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99 99 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"/>
              <circle cx="292" cy="224" r="20" fill="currentColor"/>
              <path fill="currentColor" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288"/>
              <circle cx="336" cy="180" r="20" fill="currentColor"/>
              <circle cx="380" cy="224" r="20" fill="currentColor"/>
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"/>
            </svg>
            
            <div class="relative z-10">
              <h3 class="text-3xl md:text-xl font-bold text-white mb-4 glow-text-subtle group-hover:text-blue-200 transition-colors duration-300">{{ $t('servers.title2') }}</h3>
              <p class="text-gray-400 mb-4 text-xl group-hover:text-gray-300 transition-colors duration-300">{{ $t('servers.description2') }}</p>
              <!-- <div class="connected-players absolute right-8 items-center justify-center flex">
                <span class="point-players pulse-green"></span>
                <p class="text-gray-400 ml-5 group-hover:text-gray-300 transition-colors duration-300">{{ $t('servers.online') }} 123</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Section -->
    <div class="absolute left-0 w-[150rem] h-[40rem] bg-gradient-to-r from-blue-800/70 to-transparent blur-[100px] -translate-x-1/2 z-0 animate-pulse-slow sm:max-w-[95%]"></div>

    <section class="py-52 bg-navy-900 relative md:py-24">
      <div class="max-w-[80%] sm:max-w-[95%] p-6 rounded-lg mx-auto flex gap-16 justify-center items-center bg-server-card border border-blue-500 z-20 md:flex-col payment-section-card group hover:shadow-xl hover:shadow-blue-500/20 transition-all">
        <!-- Effet de particules à l'intérieur de la carte -->
        <div class="absolute inset-0 card-particles opacity-30"></div>
        
        <div class="title-container flex flex-col z-20 fade-in-section">
          <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 uppercase text-5xl md:text-3xl font-bold animate-gradient md:text-center">{{ $t('payment.security') }}<br>{{ $t('payment.with') }}</h2>
          <p class="text-gray-400 mt-2 text-xl md:text-center">{{ $t('payment.methods') }}</p>
          <a class="bg-gradient-to-r from-blue-500 to-blue-800 w-fit mt-4 md:mx-auto md:mb-8" :href="localePath('/boutique')">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" id="svg-boutique" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-2h14v2zm0-3.5L3.725 8.475q-.05 0-.113.013T3.5 8.5q-.625 0-1.062-.438T2 7t.438-1.062T3.5 5.5t1.063.438T5 7q0 .175-.038.325t-.087.275L8 9l3.125-4.275q-.275-.2-.45-.525t-.175-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5q0 .375-.175.7t-.45.525L16 9l3.125-1.4q-.05-.125-.088-.275T19 7q0-.625.438-1.063T20.5 5.5t1.063.438T22 7t-.437 1.063T20.5 8.5q-.05 0-.112-.012t-.113-.013L19 16.5zm1.7-2h10.6l.65-4.175l-2.625 1.15L12 6.9l-3.325 4.575l-2.625-1.15zm5.3 0"/></svg>
              </div>
            </div>
            <span>{{ $t('payment.shop') }}</span>
          </a>
        </div>
        
        <img id="card-banc" src="/assets/images/index/creditcard_copie.webp" alt="credit card mockup" class="w-[35em] -mt-20 card-float rotate-animation z-20 lg:w-[25em]">
        
        <!-- Effet de brillance sur la carte -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 card-shine"></div>
      </div>
    </section>

    <!-- Pres Server Section -->
    <section class="bg-navy-900 relative pb-24">
      <div class="absolute right-0 w-[150rem] h-[30rem] bg-gradient-to-l from-blue-800/70 to-transparent blur-[100px] z-0 animate-pulse-slow"></div>

      <!-- Lignes de grille en arrière-plan -->
      <div class="grid-lines absolute inset-0 z-0 opacity-10"></div>

      <div class="max-w-[80%] sm:max-w-[95%] p-6 rounded-lg mx-auto flex gap-16 justify-center items-center relative z-10 lg:flex-col">
        <div class="left-container z-20 slide-in-left">
          <div class="relative overflow-hidden rounded-lg group">
            <img src="../assets/images/index/background-card.webp" alt="server pic" class="rounded-lg transition-transform duration-700 group-hover:scale-105">
            
            <!-- Effet de survol sur l'image -->
            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>            
          </div>
        </div>

        <div class="right-container z-20 slide-in-right">
          <p class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 uppercase text-xl font-bold mb-4 animate-gradient">{{ $t('about.vidolia') }}</p>
          <h2 class="text-white uppercase text-5xl md:text-3xl font-bold mb-4 glow-text-subtle" v-html="$t('about.title')"></h2>
          <p class="text-gray-400 text-xl fade-in-paragraph">
            {{ $t('about.description1') }}
            <br /><br />
            {{ $t('about.description2') }}
          </p>
        </div>
      </div>
    </section>

<!-- Team Section -->
<section class="py-24 bg-server-card relative md:pb-24">
  <!-- Particules d'arrière-plan -->
  <div class="team-particles absolute inset-0 z-0 opacity-20"></div>
  
  <div class="max-w-[80%] sm:max-w-[95%] mx-auto relative z-10 ">
    <h2 class="text-white uppercase text-5xl md:text-3xl font-bold mb-24 text-center glow-text fade-in-title">
      {{ $t('team.title') }}
      <span class="block w-48 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mx-auto mt-4 animate-width"></span>
    </h2>
    
    <div class="grid md:grid-cols-2 grid-cols-4 gap-8 fade-in-section">
      
      <!-- Membre 1 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/kogui.webp" alt="Kogui" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Kogui</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.founder') }}</p>
      </div>
      
      <!-- Membre 2 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/hori.jpg" alt="Hori" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Hori</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.founder') }}</p>
      </div>
      
      <!-- Membre 3 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/kozzi.jpg" alt="Kozzi" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Kozzi</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.supervisor') }}</p>
      </div>
      
      <!-- Membre 4 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/liam.jpg" alt="Liam" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Liam</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.supervisor') }}</p>
      </div>

      <!-- Membre 5 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/stricky.jpg" alt="Stricky" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Stricky</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.responsable-developer') }}</p>
      </div>

      <!-- Membre 6 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/sherzio.webp" alt="Sherzio" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Sherzio</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.responsable-communication') }}</p>
      </div>

      <!-- Membre 7 -->
      <div class="team-card p-6 rounded-lg bg-navy-900 text-center border border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400 group">
        <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20 overflow-hidden relative">
          <img src="../assets/images/staff/astrale.jpg" alt="Astrale" class="w-full h-full object-cover rounded-full">
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Astrale</h3>
        <p class="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{{ $t('team.responsable-design') }}</p>
      </div>
      
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

.bg-server-card {
  background-color: #1a2234;
}

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

/* Animation de pulse pour les éléments du site */
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

.animate-pulse-slow {
  animation: pulseSlow 5s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
}

/* Animations d'entrée des éléments */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 1s ease forwards;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 1s ease forwards;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

/* Animation de flottement pour le personnage et la carte bancaire */
.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.card-float {
  animation: cardFloat 5s ease-in-out infinite;
}

@keyframes cardFloat {
  0%, 100% {
    transform: translateY(0) rotate(1deg);
  }
  50% {
    transform: translateY(-10px) rotate(-1deg);
  }
}

.rotate-animation {
  animation: rotateSlightly 8s ease-in-out infinite;
}

@keyframes rotateSlightly {
  0%, 100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
}

/* Animation de la largeur pour les séparateurs */
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

/* Effet d'opacité pulsante */
.opacity-animation {
  animation: opacityPulse 4s ease-in-out infinite;
}

@keyframes opacityPulse {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
}

/* Animation point serveur en ligne */
.point-players {
  width: 12px;
  height: 12px;
  background-color: #10b981;
  border-radius: 50%;
  display: inline-block;
}

.pulse-green {
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulseGreen 1.5s infinite;
}

@keyframes pulseGreen {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Effet de fond avec particules */
.particles-background {
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

/* Particules pour le personnage */
.character-particles {
  background-image: 
    radial-gradient(circle at 30% 40%, rgba(96, 165, 250, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 70% 30%, rgba(96, 165, 250, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: characterParticlesFloat 15s linear infinite;
}

@keyframes characterParticlesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Effet de grille en arrière-plan */
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

/* Particules pour la carte de paiement */
.card-particles {
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 50% 70%, rgba(96, 165, 250, 0.1) 1px, transparent 1px);
  background-size: 70px 70px;
  animation: cardParticlesFloat 25s linear infinite;
}

@keyframes cardParticlesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Effet de brillance sur la carte de paiement */
.card-shine {
  animation: cardShine 5s ease-in-out infinite;
}

@keyframes cardShine {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Lignes de grid pour la section serveur */
.grid-lines {
  background-image: 
    linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridLinesFloat 30s linear infinite;
}

@keyframes gridLinesFloat {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 80px 80px;
  }
}

/* Particules pour la section équipe */
.team-particles {
  background-image: 
    radial-gradient(circle at 15% 25%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 85% 30%, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.1) 1px, transparent 1px);
  background-size: 100px 100px;
  animation: teamParticlesFloat 40s linear infinite;
}

@keyframes teamParticlesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Animation de brillance sur les avatars */
.avatar-shine {
  animation: avatarShine 3s ease-in-out infinite;
  transform: translateX(-100%);
}

@keyframes avatarShine {
  0% {
    transform: translateX(-100%);
  }
  20%, 100% {
    transform: translateX(100%);
  }
}

/* Animation pour les cartes */
.server-card {
  transition: all 0.4s ease;
}

.server-card:hover {
  transform: translateY(-8px);
}

.team-card {
  transition: all 0.4s ease;
}

/* Effet de hover pour les liens */
.link-hover::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: rgba(59, 130, 246, 1);
  transition: width 0.3s ease;
}

.link-hover:hover::after {
  width: 100%;
}

/* Lignes pour le footer */
.footer-lines {
  background-image: linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 50px 100%;
  animation: footerLinesFloat 30s linear infinite;
}

@keyframes footerLinesFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

/* Style existant pour les boutons */
a {
  padding: 15px 25px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-weight: 500;
  border-radius: 8px;
}

a:hover {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
}

.svg-wrapper-1 {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-section-card {
  transition: all 0.5s ease;
}

.payment-section-card:hover {
  transform: translateY(-5px);
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

// Ajouter cette ligne pour importer localePath
const localePath = useLocalePath()

// Utiliser les fonctions i18n
const { t, locale } = useI18n()

// Mettre à jour le titre et les méta-données en fonction de la langue
useHead({
  title: t('hero.welcome') + ' Vidolia',
  meta: [
    { name: 'description', content: t('hero.description') },
    { property: 'og:title', content: t('hero.welcome') + ' Vidolia' },
    { property: 'og:description', content: t('hero.description') },
    { property: 'og:locale', content: locale.value }
  ]
})

onMounted(() => {
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
})
</script>