<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { ref } from 'vue';
    import MontreFace from './MontreFace.vue';
    import FormKitListColors from "./FormKitListColors.vue";
    import { colors } from '@/types';
    
    const router = useRouter();
    const Montre = ref({});
    const props = defineProps(["id", "Montre"]);

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
        <FormKitListColors name="semelle" label="semelle" />
        <FormKitListColors name="empeigne" label="empeigne" />
        <FormKitListColors name="pointe" label="pointe" />
        <FormKitListColors name="oeillet" label="oeillet" />
        <FormKitListColors name="bande" label="bande" />
        <FormKitListColors name="languette" label="languette" />
        <FormKitListColors name="lacet" label="lacet" />
        <FormKitListColors name="trimestre" label="trimestre" />
    </FormKit>
    </div>
</template>