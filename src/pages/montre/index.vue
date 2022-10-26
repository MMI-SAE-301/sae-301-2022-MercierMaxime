<script setup lang="ts">
import MontreFace from "@/components/MontreFace.vue";
import type { Montre } from "@/types";
import { supabase, user } from '@/supabase';
import ListeMontres from "@/components/ListeMontres.vue";

const exemples: Montre = [{
  bracelet: "#FFFFFF",
  boitier: "#00FF00",
  ecran: "FFFF00",
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
<template>
  <section v-if="user">
    <h1>Un aperçu de vos Montres : (<RouterLink class="text-red-300 underline" to="/montre/liste">Voir tout</RouterLink>)</h1>
    <ListeMontres class="flex flex-wrap gap-2" :max="3" />
  </section>
</template>