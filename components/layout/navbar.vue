<template>

    <nav class="fixed w-full z-20 bg-navy-900/80 backdrop-blur-md flex justify-center items-center py-6">
  
      <!-- Desktop Navigation -->
      <div class="mid-navbar-container flex md:hidden">
        <ul class="flex gap-20">
          <li>
            <a href="#about"
              class="text-slate-400 text-xl"
              >Page</a
            >
          </li>
          <li>
            <a href="#services"
              class="text-slate-400 text-xl"
              >Page</a
            >
          </li>
          <li>
            <RouterLink to="/" class="text-white text-2xl">
              Logo
        <!-- <img
          class="w-[150px] object-cover"
          src=""
          alt="Logo Vidolia"
        /> -->
    </RouterLink>
          </li>
          <li>
            <a href="#partners"
              class="text-slate-400 text-xl"
              >Page</a
            >
          </li>
          <li>
            <a href="#partners"
              class="text-slate-400 text-xl"
              >Page</a
            >
          </li>
        </ul>
      </div>

  
      <!-- Mobile Burger Icon -->
      <div class="burger-menu hidden md:flex">
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-primary-400 text-white flex flex-col items-center justify-center z-50"
      >
        <ul class="flex flex-col gap-6 text-center text-lg">
          <li>
            <a href="#about" @click.native="closeMenu">A propos</a>
          </li>
          <li>
            <a href="#services" @click.native="closeMenu">Nos services</a>
          </li>
          <li>
            <a href="#partners" @click.native="closeMenu">Partenaires</a>
          </li>
        </ul>
        <a href="#contact">
            <button
            class="mt-10 bg-primary-300 px-6 py-3 rounded-[30px] text-white z-20"
            @click="closeMenu"
            >
            Contact
            </button>
        </a>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  export default defineComponent({
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
  });
  </script>
  