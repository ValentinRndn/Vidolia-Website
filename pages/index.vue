<template>

    <div class="index-container mx-[70px] md:mx-[20px]">
        <mainLanding class="mx-[-70px] md:mx-[-20px]"/>
        <aboutLanding/>
        <servicesLanding/>
        <partnersLanding/>
        <noticesLanding/>
        <contactLanding/>
</div>
</template>


<script lang="ts">
import mainLanding from '~/components/sections/index/mainLanding.vue';
import aboutLanding from '~/components/sections/index/aboutLanding.vue';
import servicesLanding from '~/components/sections/index/servicesLanding.vue';
import partnersLanding from '~/components/sections/index/partnersLanding.vue';
import noticesLanding from '~/components/sections/index/noticesLanding.vue';
import contactLanding from '~/components/sections/index/contactLanding.vue';
export default defineComponent({
    components: {
        mainLanding,
        aboutLanding,
        servicesLanding,
        partnersLanding,
        noticesLanding,
        contactLanding
    }
})

</script>