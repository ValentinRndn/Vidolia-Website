<template>
    <footer>
      <div class="footer-container flex justify-center gap-24 items-center bg-primary-400 py-4 relative md:flex-col md:items-center md:justify-center md:gap-6">
        <!-- Left container -->
        <div class="left-container flex items-center">
          <img src="/assets/images/navbar/logo_long_white.webp" alt="Logo Kleora" class="w-[400px] md:w-[200px]" />
        </div>
  
        <!-- Vertical divider -->
        <div class="divider h-16 w-[2px] bg-white md:h-[1px] md:w-[50%]"></div>
  
        <!-- Middle container -->
        <div class="mid-container flex items-center">
          <ul class="flex gap-4 flex-col text-white">
            <li>
              <a href="#services">Nos services</a>
            </li>
            <li>
              <a href="#contact">Contactez-nous</a>
            </li>
            <li>
              <a href="#partners">Partenaires</a>
            </li>
          </ul>
        </div>
  
        <!-- Vertical divider -->
        <div class="divider h-16 w-[2px] bg-white md:h-[1px] md:w-[50%]"></div>
  
        <!-- Right container -->
        <div class="right-container flex items-center">
          <ul class="flex gap-4 flex-col text-white">
            <li>
              <NuxtLink to="/about">Mentions légales</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Politique de confidentialité</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Politique de cookies</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  export default defineComponent({});
  </script>
  