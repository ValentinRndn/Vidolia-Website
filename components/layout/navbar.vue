<template>
    <nav class="flex justify-between items-center px-[40px] py-4 font-elzaRegular">
      <!-- Logo -->
      <div class="left-navbar-container">
        <RouterLink to="/">
        <img
          class="w-[150px] object-cover"
          src="/assets/images/navbar/logo_long.webp"
          alt="Logo Kleora"
        />
    </RouterLink>
      </div>
  
      <!-- Desktop Navigation -->
      <div class="mid-navbar-container flex md:hidden">
        <ul class="flex gap-10">
          <li>
            <a href="#about"
              class="bg-secondary-100 px-4 py-2 rounded-[30px] transition duration-300 ease-in-out transform hover:bg-secondary-200 hover:scale-105 hover:shadow-lg"
              >A propos</a
            >
          </li>
          <li>
            <a href="#services"
              class="bg-secondary-100 px-4 py-2 rounded-[30px] transition duration-300 ease-in-out transform hover:bg-secondary-200 hover:scale-105 hover:shadow-lg"
              >Nos services</a
            >
          </li>
          <li>
            <a href="#partners"
              class="bg-secondary-100 px-4 py-2 rounded-[30px] transition duration-300 ease-in-out transform hover:bg-secondary-200 hover:scale-105 hover:shadow-lg"
              >Partenaires</a
            >
          </li>
        </ul>
      </div>
  
      <!-- Desktop Button -->
      <div class="right-navbar-container flex xl:hidden">
        <a href="#contact">
        <button class="bg-primary-300 text-white px-4 py-2 rounded-[30px] transition duration-300 ease-in-out transform hover:bg-primary-200 hover:scale-105 hover:shadow-lg">
          Contact
        </button>
    </a>
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
  