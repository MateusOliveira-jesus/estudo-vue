<template>
  <div id="app">
    
    <AppHeader
      :array-segmento="arraySegmento"
      @select-campo="changeTitle"
      @option-select-array="arraySelectMounted"
    />
    <div class="bg-gray-50">
      <div class="sm:py-20 py-5">
        <AppSection
          :campo-selected="campoSelected"
          :filter-campo="campoSelected"
          @array-segmento="arraySegmentoGet"
        />
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
  data() {
    return {
      campoSelected: null,
      arraySegmento: null,
    };
  },
  methods: {
    changeTitle(value) {
      this.campoSelected = value;
    },
    arraySelectMounted(value) {
      this.campoSelected = value[0].indice;
    },
    arraySegmentoGet(value) {
      this.arraySegmento = value;
    },
  },
};
</script>

<style>
@import url("https://fonts/googleapis.com/css?family=Rajdhani&display=swap");
</style>
