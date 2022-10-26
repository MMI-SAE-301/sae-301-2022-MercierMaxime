<script setup lang="ts">
</script>

<template>
  <footer class="bg-Noir">
    <div class="grid grid-cols-5 pl-6">
      <div class="grid grid-rows-5">
        <p class="pt-10 pl-5 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-base xl:text-lg">Tik.Tak.</p>
        <p class="pt-5 pl-5 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Un modèle</p>
        <p class="pl-5 pt-2 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Une identité</p>
        <p class="pl-5 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Votre histoire</p>
        <img src="./img/Logo-Copyright.png" alt="Logo Copyright">
      </div>
      <RouterLink to="/Collection"><p class="pt-10 pl-12 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-base lg:text-base xl:text-lg">Collection</p></RouterLink>
      <RouterLink to="/Personnalisation"><p class="pt-10 pl-10  font-made-okine-sans-personal-use font-thin text-Blanc sm:text-base lg:text-base xl:text-lg">Personnalisation</p></RouterLink>
      <RouterLink to="/Inscription"><p class="pt-10 pl-20 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-base lg:text-base xl:text-lg">Inscription</p></RouterLink>
      <div class="grid-rows-2">
      <RouterLink to="/Connexion"><p class="pt-10 pl-12 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-base lg:text-base xl:text-lg">Connexion</p></RouterLink>
      <p class="mt-52 font-made-okine-sans-personal-use font-light text-Blanc sm:text-base lg:text-base xl:text-base">Maxime MERCIER - 2C1</p>
      </div>
    </div>
  </footer>
</template>
