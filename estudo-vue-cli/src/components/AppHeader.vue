<template>
  <header>
    <div class="bg-gray-200 p-5 md:flex md:justify-between md:align-middle overflow-hidden">
      <a target="_blank" :href="$env.linkedinCriador" class="bg-blue-400 p-2 rounded-lg border-gray-50 border-4">
        <span class="font-bold text-2xl   text-gray-100" >{{ $env.nome }}<img src="../assets/logo.png" class="mw-full inline max-h-7 bg-gray-950 p-2 rounded-lg ml-3" alt=""></span>
      </a>
      <div class="sm:flex space-x-10 flex-wrap justify-center min-w-2xl md:pt-0 sm:pt-5 pt-5 sm:max-w-full  justify-start  items-center" >
        <a target="_blank" :href="$env.linkedinCriador" class=" flex p-1 text-center items-center link " >Linkedin do {{$env.nomeCriador}}</a>
        <input type="text" class="bg-gray-50 p-2 rounded-md border-1 border-gray-300 focus:outline-0 focus:border-gray-700 text-gray-500" @submit.prevent="" placeholder="Pesquisar">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.link{
    max-height: 45px;
    position: relative;
    transition: all .3s ease;
}
.link::after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    height: 3px;
    width: 0%;
    background-color: var(--color-blue-400);
     transition: all .3s ease;
}
.link:hover::after,.link:focus::after{
    width: 100%;
}
</style>