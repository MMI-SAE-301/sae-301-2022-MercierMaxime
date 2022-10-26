<script setup lang="ts">
import { supabase, user } from '@/supabase';
import ListeMontres from "@/components/ListeMontres.vue";
</script>

<template>
  <div class="bg-Noir">
    <section v-if="user">
      <h1 class="text-Blanc text-center font-made-okine-sans-personal-use font-regular sm:text-lg lg:text-xl xl:text-4xl">Collection</h1>
      <h2 class="text-center pt-10 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Vos dernières créations.</h2>
      <ListeMontres class="flex flex-wrap gap-2" :max="3" />
      <RouterLink class="text-Blanc underline font-made-okine-sans-personal-use font-light" to="/montre/liste">Voir tout</RouterLink>
    </section>
  </div>
</template>