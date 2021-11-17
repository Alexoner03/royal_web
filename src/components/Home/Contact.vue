<template>
  <div class="page flex h-full">
    <div class="bg-gray-700 w-3/4 relative h-full flex flex-col">
      <img
        class="w-full h-full absolute object-center object-cover"
        :src="require('@/assets/img/bgcontact.png')"
        alt="bgcontact"
      />
      <div
        class="
          z-20
          mt-40
          mx-20
          pl-8
          flex
          justify-start
          items-center
          border-l-8 border-royalorange
        "
      >
        <span
          class="text-royalorange tracking-wide font-medium text-8xl mr-8 bebas"
          >CONTACTO</span
        >
        <img
          :src="require('@/assets/img/logoHome.gif')"
          alt="logoroyal"
          class="w-20 inline-block"
        />
      </div>
      <div
        class="
          z-20
          mx-20
          my-10
          mb-20
          pl-8
          w-1/2
          text-xl text-white
          font-medium
          text-justify
        "
      >
        Si deseas consultar mayor información sobre nuestros servicios o tienes
        alguna duda al respecto, no dudes en escribirnos para que así nuestro
        equipo se comunique contigo lo más pronto posible.
      </div>

      <button
        class="
          mx-28
          z-20
          bg-royalorange
          text-royalblue
          py-4
          w-1/6
          border-b-4
          text-lg
          border-yellow-400
          font-bold
          box-border
          transform
          transition-all
          ease-in
          hover:scale-105
          hover:opacity-90
        "
      >
        DEJA TU MENSAJE
      </button>
    </div>
    <div class="bg-white w-1/4 px-8 flex flex-col justify-center">
        <p class="text-royalblue font-black text-4xl mb-8">Contact Info</p>
        <a href="tel:+17579019006" class="mb-8 flex items-center">
            <img :src="require('@/assets/img/icon_phone.png')" alt="icono de telefono" class="w-12 mr-8">
            <span class="text-royalblue font-medium text-xl" >+1 (757) 901-9006</span>
        </a>
        <a href="mailto:contact@royal-business.us" class="mb-8 flex items-center">
            <img :src="require('@/assets/img/icon_mail.png')" alt="icono de mail" class="w-12 mr-8">
            <span class="text-royalblue font-medium text-xl">contact@royal-business.us</span>
        </a>
        <a class="mb-16 flex items-center" href="https://goo.gl/maps/q2jFpd8qUs5o8hKj9">
            <img :src="require('@/assets/img/icon_ubi.png')" alt="icono de ubicacion" class="w-12 mr-8">
            <span class="text-royalblue font-medium text-xl">249 central park ave #300 Virginia BEach, VA 23462</span>
        </a>
        <div class="flex">
            <a href="#">
                <img :src="require('@/assets/img/icon_fb.png')" alt="icono de facebook" class="w-8 mr-8">
            </a>
             <a href="#">
                <img :src="require('@/assets/img/icon_ig.png')" alt="icono de facebook" class="w-8 mr-8">
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContacPage",
};
</script>

<style></style>
