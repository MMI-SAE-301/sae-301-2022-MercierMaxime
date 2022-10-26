<template>
  <header class="bg-Noir">
    <div class="grid grid-cols-4 space-x-4">
      <RouterLink to="/"><p class="pt-10 pl-5 font-made-okine-sans-personal-use font-regular text-Blanc sm:text-base lg:text-lg xl:text-xl">Tik.Tak.</p></RouterLink>
      <RouterLink to="/montre"><p class="pt-10 pl-20 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Collection</p></RouterLink>
      <RouterLink to="/montre/new"><p class="pt-10 pl-3 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Personnalisation</p></RouterLink>
      <div class="grid grid-rows-2 divide-y pl-6">
        <RouterLink to="/Inscription"><p class="py-2 pl-16 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Inscription</p></RouterLink>
        <RouterLink to="/Connexion"><p class="py-2 pl-16 font-made-okine-sans-personal-use font-thin text-Blanc sm:text-sm lg:text-base xl:text-lg">Connexion</p></RouterLink>
      </div>
    </div>
  </header>
</template>
