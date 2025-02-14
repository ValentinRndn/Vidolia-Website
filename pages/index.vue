<template>
    <div class="min-h-screen bg-navy-900">
      <!-- Navbar -->
      <nav class="fixed w-full z-50 bg-navy-900/80 backdrop-blur-md">
        <div class="w-[90%] mx-auto">
          <div class="flex items-center justify-between h-20">
            <div class="flex items-center">
              <!-- Logo placeholder -->
              <div class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                VIDOLIA
              </div>
            </div>
            
            <div class="lg:hidden">
              <div class="flex items-center space-x-8">
                <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">Accueil</a>
                <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">Serveurs</a>
                <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">Équipe</a>
                <a href="#" 
                  class="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5">
                  Boutique
                </a>
              </div>
            </div>
            
            <!-- Menu burger pour mobile -->
            <div class=" lg:block hidden">
              <button class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

  
      <!-- Hero Section -->
      <section class="relative bg-gradient-vertical pt-16 px-4  mx-auto flex justify-center items-center">
  <div class="mx-auto">
    <h1 class="text-7xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
      Bienvenue sur <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Vidolia</span>
    </h1>
    <p class="text-gray-400 text-xl lg:text-lg xl:text-xl  max-w-2xl mb-10">
      Plongez dans l'univers de Demon Slayer avec notre serveur GMod unique. Affrontez des démons, rejoignez les pourfendeurs, et vivez une expérience de RP immersive.
    </p>
    <div class="flex flex-row lg:flex-row gap-4">
      <button class="px-4 text-xl py-2 w-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5">
        Jouez
      </button>
      <button class="px-4 text-xl py-2 w-32 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all">
        Discord
      </button>
    </div>
  </div>

  <div class="relative">
    <!-- Dégradé circulaire centré -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-3xl opacity-50 "></div>
    
    <img src="../assets/images/index/tanshiro-pic.png" class="w-[700px] relative z-10" alt="Tanshiro picture">
  </div>
</section>


      <!-- Servers Section -->
      <section class="py-20 bg-navy-800">
        <div class="w-[90%] mx-auto">
          <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center mb-16">Nos Serveurs</h2>
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-8">
            <div class="p-6 rounded-2xl bg-navy-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <h3 class="text-2xl font-bold text-white mb-4">Serveur RP Principal</h3>
              <p class="text-gray-400 mb-4">Immergez-vous dans l'univers de Demon Slayer avec notre serveur RP principal. Développez votre personnage et participez à des quêtes épiques.</p>
              <div class="text-blue-400">Joueurs en ligne: 64/128</div>
            </div>
            <div class="p-6 rounded-2xl bg-navy-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <h3 class="text-2xl font-bold text-white mb-4">Serveur Events</h3>
              <p class="text-gray-400 mb-4">Participez à des événements spéciaux, des tournois et des missions exclusives sur notre serveur dédié aux events.</p>
              <div class="text-blue-400">Joueurs en ligne: 32/64</div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Payment Section -->
      <section class="py-20">
        <div class="w-[90%] mx-auto">
          <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center mb-16">Système de Paiement Sécurisé</h2>
          <div class="grid grid-cols-3 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-navy-800 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i class="text-2xl text-blue-400">💳</i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Paiement Sécurisé</h3>
              <p class="text-gray-400">Transactions protégées et sécurisées</p>
            </div>
            <div class="p-6 rounded-2xl bg-navy-800 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i class="text-2xl text-blue-400">⚡</i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Livraison Instantanée</h3>
              <p class="text-gray-400">Réception immédiate des achats</p>
            </div>
            <div class="p-6 rounded-2xl bg-navy-800 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <i class="text-2xl text-blue-400">🛡️</i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Support 24/7</h3>
              <p class="text-gray-400">Assistance disponible à tout moment</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Team Section -->
      <section class="py-20 bg-navy-800">
        <div class="w-[90%] mx-auto">
          <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center mb-16">Notre Équipe</h2>
          <div class="grid sm:grid-cols-2 grid-cols-4 gap-8">
            <div class="p-6 rounded-2xl bg-navy-700 text-center">
              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20"></div>
              <h3 class="text-xl font-bold text-white mb-2">NekoChan</h3>
              <p class="text-blue-400">Fondateur</p>
            </div>
            <div class="p-6 rounded-2xl bg-navy-700 text-center">
              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20"></div>
              <h3 class="text-xl font-bold text-white mb-2">Zenitsu</h3>
              <p class="text-blue-400">Admin</p>
            </div>
            <div class="p-6 rounded-2xl bg-navy-700 text-center">
              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20"></div>
              <h3 class="text-xl font-bold text-white mb-2">Tanjiro</h3>
              <p class="text-blue-400">Modérateur</p>
            </div>
            <div class="p-6 rounded-2xl bg-navy-700 text-center">
              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500/20"></div>
              <h3 class="text-xl font-bold text-white mb-2">Inosuke</h3>
              <p class="text-blue-400">Développeur</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="py-12 bg-navy-900">
        <div class="w-[90%] mx-auto">
          <div class="grid grid-cols-4 gap-8 sm:grids-col-1">
            <div>
              <h3 class="text-xl font-bold text-white mb-4">Vidolia</h3>
              <p class="text-gray-400">Le meilleur serveur GMod Demon Slayer</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-blue-400 transition-colors">Accueil</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">Boutique</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Communauté</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-blue-400 transition-colors">Discord</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">Steam</a></li>
                <li><a href="#" class="hover:text-blue-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-400">
                <li>support@vidolia.com</li>
                <li>Discord: Vidolia#0001</li>
              </ul>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Vidolia. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <style>
  .bg-navy-900 {
    background-color: #0f172a;
  }
  .bg-navy-800 {
    background-color: #1e293b;
  }
  .bg-navy-700 {
    background-color: #334155;
  }
  </style>