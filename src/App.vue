<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <div class="bg-Noir">
    <div class="flex justify-between px-4">
      <div class="px-[7%]">
        <h1 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">Tik.Tak.</h1>
        <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Un modèle</h2>
        <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Une identité</h2>
        <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Votre histoire</h2>
      </div>
      <img class="w-1/2 h-1/2 p-10" src="./components/img/Illustration-1.png" alt="Image montre 1">
    </div>

    <hr class="mx-[17%] my-20">

    <div class="flex justify-between px-4">
      <div class="px-[7%]">
        <h2 class="lg:pl-10  pt-10 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-2xl">Un modèle</h2>
        <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Nous vous proposons une montre unique en son genre, de l’écran en passant par le bracelet et le boitier, faites de votre montre un bijou personnel inestimable.</h3>
        <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Elaborer avec soin, avec des matériaux de qualité, telles que la céramique, en titane ou encore en acier, votre montre vous accompagnera partout à tout les instants.</h3>
      </div>
      <img class="w-1/2 h-1/2 p-10" src="./components/img/Illustration-2.png" alt="Image montre 2">
    </div>

    <hr class="mx-[30%]">

    <div class="flex justify-between px-4">
      <img class="w-[35%] mt-9 h-1/2 p-10" src="./components/img/Illustration-3.png" alt="Image montre 3">
      <div class="px-[7%]">
        <h2 class="lg:pl-80 pt-10 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-2xl">Une identité</h2>
        <h3 class="pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Nous vous proposons une montre unique en son genre, de l’écran en passant par le bracelet et le boitier, faites de votre montre un bijou personnel inestimable.</h3>
        <h3 class="pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Elaborer avec soin, avec des matériaux de qualité, telles que la céramique, en titane ou encore en acier, votre montre vous accompagnera partout à tout les instants.</h3>
      </div>
    </div>

    <hr class="mx-[17%] my-20">

    <div class="flex justify-between px-4">
      <div class="px-[7%]">
        <h2 class="lg:pl-10  pt-10 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-2xl">Votre histoire</h2>
        <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Chaque montre Tik.Tak. possède sa propre histoire, la vôtre aussi, la fusion des ces histoires procurera des expériences uniques et jamais observé nul part ailleurs.</h3>
        <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Posséder une montre Tik.Tak. vous permettra ainsi de pouvoir vivre et apprécier des expériences que vous n’avez jamais vécue auparavant.</h3>
      </div>
      <img class="w-1/3 h-1/2 p-10" src="./components/img/Illustration-4.png" alt="Image montre 4">
    </div>

  </div>



  <Footer />
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>