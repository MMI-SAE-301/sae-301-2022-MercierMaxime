<template>
<div class="bg-Noir">
  <div class="flex justify-between px-4">
    <div class="px-[7%]">
      <h1 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">Tik.Tak.</h1>
      <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Un modèle</h2>
      <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Une identité</h2>
      <h2 class="lg:pt-10 py-2  font-made-okine-sans-personal-use font-light text-Blanc sm:text-lg lg:text-xl xl:text-2xl">Votre histoire</h2>
    </div>
    <img class="w-1/2 h-1/2 p-10" src="@/components/img/Illustration1.png" alt="Image montre 1">
  </div>

  <hr class="mx-[17%] my-20">

  <div class="flex justify-between px-4">
    <div class="px-[7%]">
      <h2 class="lg:pl-10  pt-10 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-2xl">Un modèle</h2>
      <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Nous vous proposons une montre unique en son genre, de l’écran en passant par le bracelet et le boitier, faites de votre montre un bijou personnel inestimable.</h3>
      <h3 class="lg:pl-20 pt-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Elaborer avec soin, avec des matériaux de qualité, telles que la céramique, en titane ou encore en acier, votre montre vous accompagnera partout à tout les instants.</h3>
    </div>
    <img class="w-1/2 h-1/2 p-10" src="@/components/img/Illustration2.png" alt="Image montre 2">
  </div>

  <hr class="mx-[30%]">

  <div class="flex justify-between px-4">
    <img class="w-[35%] mt-9 h-1/2 p-10" src="@/components/img/Illustration3.png" alt="Image montre 3">
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
    <img class="w-1/3 h-1/2 p-10" src="@/components/img/Illustration4.png" alt="Image montre 4">
  </div>

  <img class="w-1/12 py-28 m-auto" src="@/components/img/Vector.png" alt="Fleche descendante">

  <h1 class="text-center font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">Personnaliser votre </h1>
  <h1 class="text-center font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">montre maintenant</h1>

  <h2 class="text-center pt-10 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Créer le chef d’oeuvre qui changera votre vie.</h2>

  <div class="py-40 flex justify-center">
  <router-link class="text-center px-20  py-5 rounded-xl border-4 border-solid border-Blanc text-Blanc font-made-okine-sans-personal-use font-light sm:text-base lg:text-lg xl:text-xl" to="/montre/new">Commencer la création</router-link>
  </div>

  <h1 class="pl-16 pb-10 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-xl lg:text-2xl xl:text-3xl">Nos ventes les plus populaires :</h1>

  <section>
    <div class="flex flex-wrap">
      <div class="w-64 m-auto grid grid-cols-3 hover:space-x-32">
        <RouterLink 
        v-for="montre in exemples " :key="montre"
          :to="{
            name: 'montre-exemple-data',
            params: { data: JSON.stringify(montre) },
          }"
        >
          <MontreFace class="sm:w-36 lg:w-64 xl:w-64" v-bind="montre" />
        </RouterLink>
      </div>
    </div>
  </section>

  <h2 class="text-center py-16 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Plus de 200 ventes en 10 jours seulement.</h2>
</div>
</template>

<script setup lang="ts">
//@ts-nocheck
import type { Montre } from "@/types";
import MontreFace from "@/components/MontreFace.vue";

const exemples: Montre = [{
  bracelet: "#FFFFFF",
  boitier: "#00FF00",
  ecran: "#e9d521",
},
{
  bracelet: "#0F532E",
  boitier: "#00FF00",
  ecran: "#D45FC5",
},
{
  bracelet: "#FEDA34",
  boitier: "#DFJK42",
  ecran: "#0F532E",
}
];
</script>