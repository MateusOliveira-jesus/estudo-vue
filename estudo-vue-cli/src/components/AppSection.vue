<template>
  <div class="flex flex-col space-y-20">
    <AppSectionBanner />
    <AppSectionNews />
  </div>
</template>

<script>
import AppSectionBanner from "./AppSectionBanner";
import AppSectionNews from "./AppSectionNews";

export default {
  components: {
    AppSectionBanner,
    AppSectionNews,
  },
};
</script>

<style scoped>
</style>