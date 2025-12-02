<template>
  <div id="app">
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AppHeader />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    nome() {
      return process.env.VUE_APP_NOME || "NameApp Não definido";
    },
  },
};
</script>

<style>
@import url("https://fonts/googleapis.com/css?family=Rajdhani&display=swap");
</style>
