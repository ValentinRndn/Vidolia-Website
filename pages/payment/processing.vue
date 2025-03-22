<template>
    <div class="min-h-screen bg-navy-900 flex flex-col items-center justify-center text-center p-4">
      <div class="bg-navy-800 border border-blue-500/30 rounded-xl p-8 max-w-lg w-full shadow-lg">
        <div class="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" class="text-blue-500 animate-spin">
            <path fill="currentColor" d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"/>
          </svg>
        </div>
        
        <h1 class="text-3xl font-bold text-white mb-4">Préparation du paiement...</h1>
        <p class="text-gray-300 mb-6">Nous préparons votre paiement. Vous allez être redirigé vers la page de paiement dans quelques instants.</p>
        
        <p class="text-sm text-gray-400">Si vous n'êtes pas redirigé automatiquement, <a :href="checkoutUrl" class="text-blue-400 hover:underline">cliquez ici</a>.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checkoutUrl: '',
      }
    },
    mounted() {
      // Récupérer l'URL de checkout depuis le localStorage ou la recréer
      this.checkoutUrl = localStorage.getItem('checkoutUrl') || '';
      
      // Rediriger après un court délai
      if (this.checkoutUrl) {
        setTimeout(() => {
          window.location.href = this.checkoutUrl;
        }, 2000);
      } else {
        // En cas d'erreur, rediriger vers la boutique
        setTimeout(() => {
          this.$router.push('/boutique');
        }, 3000);
      }
    }
  }
  </script>