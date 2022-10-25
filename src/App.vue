<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
import LoginGoogle from './components/LogGoogle.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500"/>
      menu (dans <code class="font-mono">/src/App.vue</code>)
    </h4>
      <LoginGoogle />
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/montre/new">
          lien vers
          <code class="font-mono">/src/pages/montre/new.vue</code>
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/montre/liste">
          lien vers
          <code class="font-mono">/src/pages/montre/liste.vue</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <Footer />

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>