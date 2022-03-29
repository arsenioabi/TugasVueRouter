<template>
  <VueNavbar />
  <router-view />
</template>

<script>
import VueNavbar from '@/components/VueNavbar'

export default {
  name: 'App',
  components: {
    VueNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
