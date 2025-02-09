<template>
  <button
    :type="type || 'button'"  
    @click="onClick"
    class="text-black bg-primary transition duration-300 ease-in-out transform hover:bg-primary-200 hover:scale-105 hover:shadow-lg">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as () => 'button' | 'submit' | 'reset' | undefined,  
      default: 'button', 
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: Event) => {
      emit('click', event);
    };

    return {
      onClick,
    };
  },
});
</script>

<style scoped>
</style>
