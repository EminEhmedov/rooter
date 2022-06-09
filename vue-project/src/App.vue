<script setup>

import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import FooterVue from './components/Footer.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Navbar/>
    <RouterView/>
    <Footer/>
  </div>
</template>
