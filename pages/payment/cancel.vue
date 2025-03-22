<template>
    <div class="min-h-screen bg-navy-900 flex flex-col items-center justify-center text-center p-4">
      <div class="bg-navy-800 border border-red-500/30 rounded-xl p-8 max-w-lg w-full shadow-lg">
        <div class="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="text-red-500">
            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
          </svg>
        </div>
        
        <h1 class="text-3xl font-bold text-white mb-4">Paiement annulé</h1>
        <p class="text-gray-300 mb-6">Votre paiement a été annulé. Aucun montant n'a été prélevé.</p>
        
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/boutique" class="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
            Retourner à la boutique
          </NuxtLink>
          <NuxtLink to="/" class="px-4 py-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg transition-all duration-300">
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>