<template>
<section>
    <div id="about" class="about-container py-8 w-full border-b border-black relative">
    <!-- Image (div en absolute) -->
    <img src="/assets/images/index/logo_short.webp" 
         alt="Logo short kleora" 
         class="absolute top-[40px] right-[40px] rotate-45 w-[130px] md:w-[90px] md:top-[40px] md:right-[20px] z-0">
    <!-- Conteneur de texte -->
    <div class="about-top-container w-full max-w-[50%] mb-6 md:max-w-[100%] md:text-center relative z-10">
        <h2 class="text-primary-200 font-elzaLight text-[25px]">À PROPOS</h2>
        <p class="font-elzaBold text-[35px] font-bold">Service clé en main pour vous accompagner dans la gestion des biens d'un proche disparu</p>
    </div>

        
        <div class="about-bottom-container flex justify-between items-center gap-8 w-full md:flex-col">
            <div class="about-left-bottom-container flex flex-1">
                <img src="/assets/images/index/propos_image.png" alt="Propos image">
            </div>
            <div class="about-right-container flex flex-col flex-1 gap-6">
                <div class="text-right-container w-full text-[25px] flex flex-col gap-4 md:items-center md:justify-center md:text-center">
                <p>Avec Kleora, nous offrons un service simple, efficace et sur-mesure. </p>
                <p>Notre équipe vous accompagne à chaque étape avec une attention particulière à vos besoins. Nous garantissons des devis clairs et transparents, et une intervention rapide pour optimiser votre temps.</p>
                <p>Nos services vous offrent un véritable gain de temps et de sérénité, vous permettant de vous concentrer sur l'essentiel, en toute confiance.</p>
            </div>
            <div class="button-right-container md:mx-auto">
                <buttonTemplate @click="handleClick" class="bg-primary-300 text-white text-[30px] font-elzaBold px-8 py-2 rounded-[20px] ">Découvrir nos services</buttonTemplate>
            </div>
            </div>
        </div>
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