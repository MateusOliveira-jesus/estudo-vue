<template>
  <div class="bg-gray-950 text-white text-center p-5">
       © {{ anoAtual }} - Projeto desenvolvido para estudo e aprendizado Vue.js
  </div>
</template>
<script>


export default {
    
    computed:{
        anoAtual(){
            let anoAtual = new Date()
            return anoAtual.toLocaleDateString('pt-br');
        }
    }
     
};
</script>
<style scoped>
</style>