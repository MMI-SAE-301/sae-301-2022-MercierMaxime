<script setup lang="ts">
import ListeMontres from '@/components/ListeMontres.vue';
import { supabase, user } from '@/supabase';

</script>


<template>
<section v-if="user">
    <h1>Un aperçu de vos Montres : (<RouterLink class="text-red-300 underline" to="/montre/liste">Voir tout</RouterLink>)</h1>
    <ListeMontres class="flex flex-wrap gap-2" :max="3" />
  </section>
</template>