<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>

<template>
    <div class="bg-Noir">
        <h1 class="text-Blanc pt-10 text-center font-made-okine-sans-personal-use font-regular sm:text-lg lg:text-xl xl:text-4xl">Connexion</h1>
        <h2 class="text-center pt-10 pb-20 font-made-okine-sans-personal-use font-light text-Blanc sm:text-sm lg:text-base xl:text-base">Bon retour parmis nous.</h2>
        <div class="flex justify-center">
            <p class="pt-3 pr-5 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-sm lg:text-base xl:text-base">Nom :</p>
            <FormKit label-class="text-Blanc" type="text" placeholder="Entrer votre nom" input-class="rounded-xl  font-made-okine-sans-personal-use font-light sm:text-base lg:text-lg xl:text-xl" />
        </div>

        <div class="flex justify-center pt-20">
            <p class="pt-3 pr-3 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-sm lg:text-base xl:text-base">Prénom :</p>
            <FormKit label-class="text-Blanc" type="text" placeholder="Entrer votre prénom" input-class="rounded-xl  font-made-okine-sans-personal-use font-light sm:text-base lg:text-lg xl:text-xl" />
        </div>

        <div class="flex justify-center pt-20">
            <p class="pt-3 pr-3 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-sm lg:text-base xl:text-base">Adresse mail :</p>
            <FormKit label-class="text-Blanc" type="text" placeholder="Entrer votre email" input-class="rounded-xl  font-made-okine-sans-personal-use font-light sm:text-base lg:text-lg xl:text-xl" />
        </div>

        <div class="grid grid-cols-3 m-auto pt-32 pb-20">
            <div @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
                <img class="ml-auto" src="@/components/img/LogoFacebook.png" alt="Logo Facebook">
            </div>
                <div @pointerdown="supabase.auth.signIn({provider: 'google'})">
                    <img class="ml-16"  src="@/components/img/LogoGoogle.png" alt="Logo Google">
                </div> 
                <div class="flex justify-center mr-auto">
                    <RouterLink class="text-center px-10 py-3 rounded-xl border-4 border-solid border-Blanc text-Blanc font-made-okine-sans-personal-use font-light sm:text-sm lg:text-base xl:text-lg" to="/">Connexion</RouterLink>
                </div>
        </div>
    </div>
</template>