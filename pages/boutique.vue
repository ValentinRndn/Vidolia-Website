<template>
  <div class="min-h-[screen] relative bg-navy-900">
    <div class="banner-container h-[400px] w-full bg-landing bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-center">
          <!-- Overlay foncé -->
          <div class="absolute inset-0 bg-navy-900 opacity-95 z-0"></div>

          <!-- Contenu de la bannière -->
          <div class="relative z-10 flex flex-col items-center gap-4">
            <h1 class="text-7xl lg:text-5xl xl:text-6xl font-bold text-white">
              Bienvenue sur la 
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">Boutique</span>
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
      <span class="block w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mt-4 animate-width mb-4"></span>
      <p class="max-w-[70%] mb-12">Ici, tu peux acheter divers avantages et objets exclusifs pour améliorer ton expérience sur notre serveur GMod. Que ce soit des armes spéciales, des skins uniques, des rangs VIP ou encore des bonus en jeu, tout est conçu pour te permettre de profiter pleinement de ton aventure. Chaque achat soutient directement le serveur et aide à proposer du contenu toujours plus immersif. Rejoins l'action et équipe-toi dès maintenant ! </p>

      
</div>

<div class="choose-server-container">
  <h2 class="text-white uppercase text-5xl font-bold mb-4 text-center">Choisis ton serveur</h2>
  <span class="block w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mt-4 animate-width mb-24 mx-auto"></span>

  <div class="servers-container flex justify-center items-center gap-44 text-white">
    <div class="server-container bg-serverCard h-[200px] w-[500px] z-10 border border-blue-500">
      <h3 class="">Demon Slayer</h3>
      
    </div>

    <div class="server-container">
      <h3>Bleach</h3>
      
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