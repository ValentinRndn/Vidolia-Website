<template>
    <div class="min-h-screen bg-navy-900 flex flex-col items-center justify-center text-center p-4">
      <div class="bg-navy-800 border border-green-500/30 rounded-xl p-8 max-w-lg w-full shadow-lg">
        <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="text-green-500">
            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </div>
        
        <h1 class="text-3xl font-bold text-white mb-4">Paiement réussi !</h1>
        <p class="text-gray-300 mb-6">Merci pour votre achat. Votre transaction a été traitée avec succès et vous allez recevoir votre achat en jeu.</p>
        
        <div class="bg-navy-900 rounded-lg p-4 mb-6 border border-green-500/20">
          <p class="text-gray-300 mb-2">Rappel :</p>
          <p class="text-white font-medium">Assurez-vous d'être connecté sur le serveur pour recevoir votre achat.</p>
        </div>
        
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/" class="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
            Retour à l'accueil
          </NuxtLink>
          <a href="https://vidolia.tebex.io/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg transition-all duration-300">
            Retour à la boutique
          </a>
        </div>
      </div>
    </div>
  </template>
