// services/tebex.js
export default {
  /**
   * Récupère les configurations depuis l'environnement
   */
  _getConfig() {
    try {
      const config = useRuntimeConfig();
      
      // Dans les applications client-only, tout est dans config.public
      return {
        apiKey: config.public.tebexApiKey || '',
        storeDomain: config.public.tebexStoreDomain || 'vidolia.tebex.io'
      };
    } catch (error) {
      console.error('Erreur lors de la récupération de la configuration:', error);
      return {
        apiKey: '',
        storeDomain: 'vidolia.tebex.io'
      };
    }
  },
  
  // Mémorise le panier actif pour réutilisation
  _currentBasket: null,
  
  getVidoliaCheckoutUrl(packageId, username) {
    console.log(`Génération de l'URL Vidolia pour package ${packageId} et utilisateur ${username}`);
    
    // Utiliser le domaine configuré ou la valeur par défaut
    const config = this._getConfig();
    const domain = config.storeDomain || 'vidolia.tebex.io';
    
    return `https://${domain}/checkout/packages/${packageId}?ign=${encodeURIComponent(username)}`;
  },
  
  
  /**
   * Récupère la liste des packages depuis l'API Tebex
   */
  async getPackages() {
    try {
      const config = this._getConfig();
      
      if (!config.apiKey) {
        console.error('Clé API Tebex non définie.');
        return [];
      }
      
      const url = `https://headless.tebex.io/api/accounts/${config.apiKey}/packages`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Réponse d\'erreur:', errorText);
        throw new Error(`Erreur lors de la récupération des packages: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      return data && data.data ? data.data : [];
    } catch (error) {
      console.error('Erreur lors de la récupération des packages:', error);
      return [];
    }
  },
  
  /**
   * Crée un nouveau panier vide
   */
  async createBasket() {
    try {
      const config = this._getConfig();
      
      if (!config.apiKey) {
        throw new Error('Clé API Tebex non définie');
      }
      
      const apiUrl = `https://headless.tebex.io/api/accounts/${config.apiKey}/baskets`;
      
      // Préparation des données selon la documentation
      const basketData = {
        complete_url: window.location.origin + '/payment/success',
        cancel_url: window.location.origin + '/payment/cancel',
        complete_auto_redirect: true,
        custom: {
          source: 'custom_store'
        }
      };
      
      console.log('Création d\'un nouveau panier:', basketData);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(basketData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Réponse d\'erreur:', errorText);
        throw new Error(`Erreur lors de la création du panier: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('Panier créé:', result);
      
      // Mémoriser le panier créé
      this._currentBasket = result.data;
      
      return result.data;
    } catch (error) {
      console.error('Erreur lors de la création du panier:', error);
      throw error;
    }
  },
  
  /**
   * Ajoute un package au panier existant ou crée un nouveau panier
   */
  async addPackageToBasket(packageId, username) {
    try {
      // Si nous n'avons pas encore de panier, en créer un
      if (!this._currentBasket) {
        await this.createBasket();
      }
      
      // Vérifier que nous avons bien un panier
      if (!this._currentBasket || !this._currentBasket.ident) {
        throw new Error('Impossible de créer un panier');
      }
      
      const basketIdent = this._currentBasket.ident;
      const apiUrl = `https://headless.tebex.io/api/baskets/${basketIdent}/packages`;
      
      // Ajouter le package au panier
      const packageData = {
        package_id: packageId,
        quantity: 1
      };
      
      console.log(`Ajout du package ${packageId} au panier ${basketIdent}:`, packageData);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(packageData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Réponse d\'erreur lors de l\'ajout du package:', errorText);
        throw new Error(`Erreur lors de l'ajout du package: ${response.status} ${response.statusText}`);
      }
      
      // Récupérer le panier mis à jour
      const updatedBasket = await response.json();
      this._currentBasket = updatedBasket;
      
      console.log('Panier mis à jour après ajout du package:', updatedBasket);
      
      // Maintenant, nous devons obtenir l'URL d'authentification pour associer le nom d'utilisateur
      return this.getAuthenticationUrl(basketIdent, username);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du package au panier:', error);
      throw error;
    }
  },
  
  /**
   * Obtient l'URL d'authentification pour associer un nom d'utilisateur au panier
   */
  async getAuthenticationUrl(basketIdent, username) {
    try {
      const config = this._getConfig();
      
      if (!config.apiKey) {
        throw new Error('Clé API Tebex non définie');
      }
      
      // L'URL de retour est notre page de confirmation
      const returnUrl = encodeURIComponent(window.location.origin + '/payment/processing');
      
      // URL pour obtenir les liens d'authentification
      const authUrl = `https://headless.tebex.io/api/accounts/${config.apiKey}/baskets/${basketIdent}/auth?returnUrl=${returnUrl}`;
      
      console.log('Obtention des URL d\'authentification:', authUrl);
      
      const response = await fetch(authUrl);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Réponse d\'erreur lors de l\'authentification:', errorText);
        throw new Error(`Erreur lors de l'obtention des URL d'authentification: ${response.status} ${response.statusText}`);
      }
      
      const authMethods = await response.json();
      console.log('Méthodes d\'authentification disponibles:', authMethods);
      
      // Si nous avons des méthodes d'authentification, utiliser la première
      // Sinon, utiliser une URL directe pour le checkout
      if (authMethods && authMethods.length > 0) {
        // Ajouter le nom d'utilisateur comme paramètre si possible
        let authMethodUrl = authMethods[0].url;
        if (username) {
          authMethodUrl += (authMethodUrl.includes('?') ? '&' : '?') + `ign=${encodeURIComponent(username)}`;
        }
        return authMethodUrl;
      } else {
        // Si pas de méthodes d'auth, utiliser l'URL de checkout directe du panier
        return this._currentBasket.links.checkout;
      }
    } catch (error) {
      console.error('Erreur lors de l\'obtention de l\'URL d\'authentification:', error);
      
      // En cas d'échec, retourner l'URL de checkout directe si disponible
      if (this._currentBasket && this._currentBasket.links && this._currentBasket.links.checkout) {
        return this._currentBasket.links.checkout;
      }
      
      // Sinon, générer une URL standard (solution de secours)
      throw error;
    }
  },
  
  /**
   * Méthode principale pour acheter un package
   * Cette méthode fait tout le processus et retourne l'URL finale
   */
  async buyPackage(packageId, username) {
    try {
      console.log(`Achat du package ${packageId} pour l'utilisateur ${username}`);
      
      // En priorité, utiliser l'URL du domaine personnalisé
      return this.getCheckoutUrl(packageId, username);
      
      // Le code ci-dessous est désactivé car nous utilisons maintenant directement l'URL
      /*
      // Réinitialiser le panier courant pour en créer un nouveau
      this._currentBasket = null;
      
      // Créer un panier et ajouter le package
      const checkoutUrl = await this.addPackageToBasket(packageId, username);
      
      console.log('URL de paiement finale:', checkoutUrl);
      return checkoutUrl;
      */
    } catch (error) {
      console.error('Erreur lors du processus d\'achat:', error);
      
      // Solution de secours : générer une URL directe
      console.warn('Utilisation de l\'URL de secours...');
      return this.getCheckoutUrl(packageId, username);
    }
  },
  
  /**
   * Génère l'URL de checkout pour rediriger vers le paiement Tebex
   */
  getCheckoutUrl(packageId, username) {
    const config = this._getConfig();
    const storeDomain = config.storeDomain;
    
    if (!storeDomain) {
      console.error('Domaine de la boutique Tebex non défini');
      // Solution de repli avec un avertissement
      return `https://checkout.tebex.io/checkout/packages/${packageId}?ign=${encodeURIComponent(username)}`;
    }
    
    console.log(`Génération de l'URL pour package ${packageId} et utilisateur ${username}`);
    return `https://${storeDomain}/checkout/packages/${packageId}?ign=${encodeURIComponent(username)}`;
  },
  
  /**
   * URL de secours en cas d'échec de l'API
   */
  getDirectCheckoutUrl(packageId, username) {
    const config = this._getConfig();
    // Format standard pour les URLs de checkout Tebex
    return `https://${config.storeDomain || 'checkout.tebex.io'}/checkout/packages/${packageId}?ign=${encodeURIComponent(username)}`;
  },

  /**
   * URL avec token spécifique au serveur
   */
  getServerSpecificCheckoutUrl(packageId, username) {
    const config = this._getConfig();
    let apiKey = config.apiKey || '';
    const cleanToken = apiKey.startsWith('utaw-') ? apiKey.substring(5) : apiKey;
    
    return `https://checkout.tebex.io/checkout/packages/${packageId}/${cleanToken}?ign=${encodeURIComponent(username)}`;
  },
  
  /**
   * Méthode de test pour générer toutes les variantes possibles d'URL
   * Utilisez cette méthode pour tester manuellement différentes URL
   */
  testAllUrlFormats(packageId, username) {
    const config = this._getConfig();
    const encodedUsername = encodeURIComponent(username);
    const storeDomain = config.storeDomain || 'checkout.tebex.io';
    let apiKey = config.apiKey || '';
    const cleanToken = apiKey.startsWith('utaw-') ? apiKey.substring(5) : apiKey;
    
    const variants = [
      // URLs avec domaine personnalisé (prioritaires)
      `https://${storeDomain}/checkout/packages/${packageId}?ign=${encodedUsername}`,
      `https://${storeDomain}/package/${packageId}?ign=${encodedUsername}`,
      `https://${storeDomain}/category/vidacoin/checkout?package=${packageId}&ign=${encodedUsername}`,
      
      // URLs standard
      `https://checkout.tebex.io/checkout/packages/${packageId}?ign=${encodedUsername}`,
      `https://checkout.tebex.io/checkout/${cleanToken}/packages/${packageId}?ign=${encodedUsername}`,
      `https://checkout.tebex.io/packages/${packageId}?ign=${encodedUsername}`,
      `https://checkout.tebex.io/checkout/packages/${packageId}/${cleanToken}?ign=${encodedUsername}`
    ];
    
    console.log('Variantes d\'URL à tester manuellement:');
    variants.forEach((url, index) => {
      console.log(`Variante ${index + 1}:`, url);
    });
    
    return variants[0]; // Retourner la première URL (domaine personnalisé)
  }
};