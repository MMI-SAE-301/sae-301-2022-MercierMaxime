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
    <div class="bg-Noir">
        <h1 class="text-Blanc pt-10 text-center font-made-okine-sans-personal-use font-regular sm:text-lg lg:text-xl xl:text-4xl">Personnalisation</h1>
        <h2 class="text-center pt-10 pb-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Commencer votre création.</h2>
            <div class="flex justify-center pb-14 space-x-10 space-y-16">
                <MontreFace  class="w-64" v-bind="Montre" id="profil" />
                <div class="text-Blanc font-made-okine-sans-personal-use font-light">
                <FormKit type="form" v-model="Montre" @submit="upsertMontre">

                    <div class="grid grid-cols-2">
                        <FormKitListColors name="bracelet" label="Bracelet :" />
                        <div class="pt-5 pl-5">
                            <FormKit name="bracelet" type="color" />
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2">
                    <FormKitListColors name="ecran" label="Ecran :" />
                    <div class="pt-5 pl-5">
                            <FormKit name="bracelet" type="color" />
                        </div>
                    </div>


                    <div class="grid grid-cols-2">
                    <FormKitListColors name="boitier" label="Boitier :" />
                    <div class="pt-5 pl-5">
                            <FormKit name="bracelet" type="color" />
                        </div>
                    </div>
                    
                    <FormKit type="select" wrapper-class="text-Noir" label-class="text-Blanc" name="id_materiaux" placeholder="Sélectionner un matériel" label="Composition :" :options="optionsMateriaux" />
                </FormKit>
                </div>
            </div>
    </div>
</template>