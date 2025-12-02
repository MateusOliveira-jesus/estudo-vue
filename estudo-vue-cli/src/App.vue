<template>
  <div id="app">
    <AppHeader />
    <div class="bg-gray-50">
      <div class="sm:py-20 py-5">
        <AppSection />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppSection from "./components/AppSection";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSection,
  },
  
};
</script>

<style>
@import url("https://fonts/googleapis.com/css?family=Rajdhani&display=swap");
</style>
