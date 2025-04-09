<template>
  <div class="layout">
    <header>
      <nav>
        <!-- Vos liens de navigation -->
        <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{ $t('about') }}</NuxtLink>
        <!-- Autres liens -->
      </nav>
      <LanguageSwitcher />
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer>
      <!-- Contenu du pied de page -->
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath()
</script>