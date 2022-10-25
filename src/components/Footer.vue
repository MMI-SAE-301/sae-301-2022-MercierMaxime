<script setup lang="ts">
 import Copyright from '../assets/Logo-Copyright.svg';
</script>

<template>
  <footer class="bg-Noir">
    <div class="grid grid-cols-4 pl-6">
      <div class="grid grid-rows-5">
        <p class="pt-10 pl-5 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-base xl:text-lg">Tik.Tak.</p>
        <p class="pt-5 pl-5 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Un modèle</p>
        <p class="pl-5 pt-2 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Une identité</p>
        <p class="pl-5 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Votre histoire</p>
        <Copyright />
      </div>
      <RouterLink to="/Billeterie"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Billeterie</p></RouterLink>
      <RouterLink to="/Evenement"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Evénements</p></RouterLink>
      <RouterLink to="/Contact"><p class="pt-8 font-helvetica text-white sm:text-lg lg:text-xl xl:text-3xl">Contact</p></RouterLink>
    </div>
  </footer>
</template>
