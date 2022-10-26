<script setup lang="ts">
import { supabase, user } from '@/supabase';
import ListeMontres from "@/components/ListeMontres.vue";
</script>

<template>
  <div class="bg-Noir">
    <section v-if="user">
      <h1 class="text-Blanc text-center font-made-okine-sans-personal-use font-regular sm:text-lg lg:text-xl xl:text-4xl">Collection</h1>
      <h2 class="text-center pt-10 pb-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Vos dernières créations.</h2>
          <ListeMontres class="flex flex-wrap justify-center gap-2" :max="3" />
        <div class="pt-40 pb-10 flex justify-center">
          <RouterLink class="text-center px-20 py-5 rounded-xl border-4 border-solid border-Blanc text-Blanc font-made-okine-sans-personal-use font-light sm:text-base lg:text-lg xl:text-xl" to="/montre/liste">Voir tout</RouterLink>
        </div>
    </section>
  </div>
</template>