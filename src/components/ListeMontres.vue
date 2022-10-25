<script setup lang="ts">
    import { supabase } from "@/supabase";
    import MontreFace from "./MontreFace.vue";
    const props = defineProps<{
    max?: number;
    }>();

    let { data: Montre, error } = await supabase
    .from("Montre")
    .select("*")
    .limit(props.max ?? 100)

    if (error) {
    console.log("erreur données Montre", { error });
    }
</script>

<template>
    <ul>
        <li v-for="montre in Montre" :key="montre.id_montre">
        <router-link
        :to="{ name: 'montre-edit-id', params: { id: montre.id } }"
        >
        <MontreFace class="w-64" v-bind="montre" />
        </router-link>
        </li>
    </ul>
</template>