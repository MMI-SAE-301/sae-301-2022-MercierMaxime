<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { ref } from 'vue';
    import MontreFace from './MontreFace.vue';
    import FormKitListColors from "./FormKitListColors.vue";
    import { colors } from '@/types';
    
    const router = useRouter();
    const Montre = ref({});
    const props = defineProps(["id", "Montre"]);

    const { data: listeMateriaux, error } = await supabase
    .from("Materiaux")
    .select("*");
    if (error) console.log("erreur table Matériaux :", error);

    const optionsMateriaux = listeMateriaux?.map((Materiaux) => ({
    value: Materiaux.id_materiaux,
    label: Materiaux.libelle_materiaux,
    }));    
    

    if (props.id) {
    let { data, error } = await supabase
    .from("Montre")
    .select("*")
    .eq("id", props.id);

    if (error || !data)
    console.log("erreur sur table Montre :", error);
    else Montre.value = data[0];
}
    async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
     node.setErrors([]);
    router.push({ name: "montre-edit-id", params: { id: data[0].id } });
    }
}
</script>

<template>
    <div class="p-2">
        <div class=" w-64">
            <MontreFace  class=" w-64" v-bind="Montre" id="profil" />
        </div>
    <FormKit type="form" v-model="Montre" @submit="upsertMontre">
        <FormKitListColors name="bracelet" label="bracelet" />
        <FormKitListColors name="ecran" label="ecran" />
        <FormKitListColors name="boitier" label="boitier" />
        <FormKit type="select" name="id_materiaux" placeholder="Sélectionner un matériel" label="Composition" :options="optionsMateriaux" />
    </FormKit>
    </div>
</template>