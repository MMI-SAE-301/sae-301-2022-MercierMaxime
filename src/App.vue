<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  
  


  <Suspense>
    <router-view class=" p-2" />
  </Suspense>
  <Footer />

</template>