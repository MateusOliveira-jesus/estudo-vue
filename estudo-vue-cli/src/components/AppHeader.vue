<template>
  <header>
    <div class="bg-gray-200 p-5 flex justify-between align-middle">
      <a :href="$env.linkedinCriador" class="bg-blue-400 p-2 rounded-lg border-gray-50 border-4">
        <span class="font-bold text-2xl   text-gray-100" >{{ $env.nome }}<img src="../assets/logo.png" class="mw-full inline max-h-7 bg-gray-950 p-2 rounded-lg ml-3" alt=""></span>
      </a>
      <div class="flex space-x-1 flex-wrap justify-center min-w-2xl justify-start  items-center" >
        <a :href="$env.linkedinCriador" class=" flex p-1 text-center items-center link " >Linkedin do {{$env.nomeCriador}}</a>

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