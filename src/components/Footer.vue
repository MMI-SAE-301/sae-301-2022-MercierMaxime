<script setup lang="ts">
</script>

<template>
  <footer class="bg-Noir">
    <div class="grid grid-cols-5 pl-5">
      <div class="grid grid-rows-5">
        <p class="pt-10  font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-xl">Tik.Tak.</p>
        <p class="pt-5  font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-lg">Un modèle</p>
        <p class="pt-2 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-lg">Une identité</p>
        <p class="font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-lg">Votre histoire</p>
        <img src="./img/LogoCopyright.png" alt="Logo Copyright">
      </div>
      <RouterLink to="/montre"><p class="pt-10 pl-12 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Collection</p></RouterLink>
      <RouterLink to="/montre/new"><p class="pt-10 pl-10  font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Personnalisation</p></RouterLink>
      <RouterLink to="/inscription"><p class="pt-10 pl-20 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Inscription</p></RouterLink>
      <div class="grid-rows-2">
      <RouterLink to="/connexion"><p class="pt-10 pl-10 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Connexion</p></RouterLink>
      <p class="mt-72 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-sm xl:text-sm">Maxime MERCIER - 2C1</p>
      </div>
    </div>
  </footer>
</template>
