<template>
  <div class="app-container flex flex-col overflow-hidden">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import Navbar from '~/components/layout/navbar.vue';
import Footer from '~/components/layout/footer.vue';

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style scoped>
/* Ajoute ici tes styles si besoin */
</style>
