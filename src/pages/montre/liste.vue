<script setup lang="ts">
import ListeMontres from '@/components/ListeMontres.vue';
import { supabase, user } from '@/supabase';
</script>

<template>
  <div class="bg-Noir">
    <section v-if="user">
    <h1 class="text-Blanc text-center font-made-okine-sans-personal-use font-regular sm:text-lg lg:text-xl xl:text-4xl">Liste</h1>
    <h2 class="text-center pt-10 pb-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Toutes vos montres.</h2>
      <ListeMontres class="flex flex-wrap gap-2 pb-14" />
    </section>
  </div>
</template>