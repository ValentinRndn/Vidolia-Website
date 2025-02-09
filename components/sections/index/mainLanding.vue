<template>
<section class="">
    <div class="main-container bg-mainBanner font-elzaBold w-full h-full py-32 bg-cover bg-center flex flex-col gap-10 items-center justify-center md:gap-6 ">
        <h1 class="text-white text-[60px] max-w-[40%] text-center font-bold md:max-w-[70%] md:text-[40px]">La clé pour alléger votre esprit</h1>
        <buttonTemplate class="text-primary-300 bg-white text-[30px] rounded-[30px] py-2 px-8 md:text-[20px] transition duration-300 ease-in-out transform hover:bg-secondary-200 hover:scale-105 hover:shadow-lg" @click="handleClick">Demandez un devis</buttonTemplate>
    </div>
</section>
</template>

<script lang=ts>
import buttonTemplate from '~/components/ui/buttonTemplate.vue';

export default defineComponent({
    components: {
        buttonTemplate,
    },
    methods: {
    handleClick() {
        alert('Demande de devis;')
    }
}
    
});
</script>
