<template>
  <div class="flex flex-col space-y-20">
    <div
      class="max-w-7x1 flex flex-col justify-between mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2>Você e está vendo as noticias de {{ campoSelected }}:</h2>
    </div>
    <AppSectionBanner />
    <div class="news-container">
      <AppSectionNews @array-segmento="$emit('array-segmento', $event)" />
    </div>
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
  props: {
    campoSelected: String,
    filterCampo: String,
  },
  watch: {
    filterCampo: {
      immediate: true,
      handler(newValue) {
        let filtroCam = null;
        filtroCam = newValue.toLowerCase().replace(" ", "-");
        document
          .querySelectorAll(
            `.news-container > div > div > *:not(.${CSS.escape(filtroCam)})`
          )
          .forEach((value) => {
            
            value.style.display = "none";
          });
        document
          .querySelectorAll(
            `.news-container > div > div > *:is(.${CSS.escape(filtroCam)})`
          )
          .forEach((value) => {
            
            value.style.display = "block";
          });
      },
    },
  },
};
</script>

<style scoped>
</style>