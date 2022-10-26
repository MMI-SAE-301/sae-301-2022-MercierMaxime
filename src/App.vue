<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <div class="bg-Noir flex justify-between px-4">
    <div class="px-[7%]">
      <p class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">Tik.Tak.</p>
      <p class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Un modèle</p>
      <p class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Une identité</p>
      <p class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Votre histoire</p>
    </div>
    <img class="w-1/2 h-1/2 p-10  " src="./components/img/Illustration-1.png" alt="">
  </div>



  <Footer />
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>