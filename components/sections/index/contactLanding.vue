<template>
    <section>
      <div
        id="contact"
        class="contact-container bg-contactBanner mb-8 rounded-[20px] py-8 w-full h-fit bg-cover bg-center font-elzaRegular md:px-2"
      >
        <h2
          class="text-white text-[35px] font-elzaBold text-center uppercase mb-4 font-bold"
        >
          PRENDRE CONTACT
        </h2>
        <div
          class="form-container w-1/2 mx-auto flex flex-col relative md:w-full"
        >
          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 items-center justify-center w-full">
            <div class="top-form-container flex items-center gap-8 w-full">
              <input
                v-model="formData.last_name"
                class="bg-secondary-100 text-primary-200 rounded-[20px] px-4 py-2 w-full"
                type="text"
                placeholder="Nom"
                required
              />
              <input
                v-model="formData.first_name"
                class="bg-secondary-100 text-primary-200 rounded-[20px] px-4 py-2 w-full"
                type="text"
                placeholder="Prénom"
                required
              />
            </div>
            <div class="mid-form-container flex items-center gap-8 w-full">
              <input
                v-model="formData.email"
                class="bg-secondary-100 rounded-[20px] px-4 py-2 w-full"
                type="email"
                placeholder="Email"
                required
              />
              <input
                v-model="formData.phone"
                class="bg-secondary-100 rounded-[20px] px-4 py-2 w-full"
                type="text"
                placeholder="Téléphone"
                required
              />
            </div>
            <div class="bottom-form-container w-full mb-12">
              <textarea
                v-model="formData.message"
                class="bg-secondary-100 w-full rounded-[20px] px-4 py-2"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-secondary-100 rounded-[20px] px-4 py-2 text-primary-300 font-bold font-elzaBold absolute right-0 bottom-0 transition duration-300 ease-in-out transform hover:bg-secondary-200 hover:scale-105 hover:shadow-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import emailjs from "emailjs-com"; 
  
  export default {
    setup() {
      // Données du formulaire
      const formData = {
        last_name: "",
        first_name: "",
        email: "",
        phone: "",
        message: "",
      };
  
      // Fonction pour soumettre le formulaire
      const handleSubmit = async () => {
        try {
          const serviceID = "service_83rejjo"; 
          const templateID = "template_n6e8ajg"; 
          const userID = "i8TtnEdGceDOUR-Iu"; 
  
          // Envoi des données via EmailJS
          const response = await emailjs.send(serviceID, templateID, formData, userID);
  
          console.log("E-mail envoyé avec succès !", response);
          alert("Votre message a été envoyé avec succès !");
        } catch (error) {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      };
  
      return {
        formData,
        handleSubmit,
      };
    },
  };
  </script>
  
  