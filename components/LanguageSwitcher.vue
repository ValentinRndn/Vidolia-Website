<template>
    <div class="language-switcher">
      <select v-model="currentLocale" @change="switchLanguage" class="lang-select">
        <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter, useRoute } from 'vue-router'
  
  const router = useRouter()
  const route = useRoute()
  const { locale, locales } = useI18n()
  
  // Locale actuelle
  const currentLocale = ref(locale.value)
  
  // Locales disponibles
  const availableLocales = computed(() => {
    return locales.value
  })
  
  // Changer de langue
  const switchLanguage = () => {
    locale.value = currentLocale.value
    
    // Rediriger vers la même page dans la nouvelle langue
    const currentPath = route.fullPath
    const currentPathWithoutLocale = currentPath.replace(/^\/[^\/]+/, '')
    
    // Construire le nouveau chemin
    let newPath
    if (currentLocale.value === 'fr') {
      // Pour la langue par défaut, on utilise le chemin sans préfixe
      newPath = currentPathWithoutLocale || '/'
    } else {
      // Pour les autres langues, on ajoute le préfixe de la langue
      newPath = `/${currentLocale.value}${currentPathWithoutLocale || '/'}`
    }
    
    // Rediriger seulement si on est sur une page différente
    if (newPath !== currentPath) {
      router.push(newPath)
    }
  }
  </script>
  
  <style scoped>
  .language-switcher {
    background-color: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .lang-select {
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .lang-select:hover {
    background-color: rgba(59, 130, 246, 0.2);
  }
  
  .lang-select option {
    background-color: #1e293b;
    color: white;
  }
  </style>