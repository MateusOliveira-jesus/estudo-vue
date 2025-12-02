<template>
  <div :class="['sm:py-10', 'py-5', 'bg-gray-900']" >
      <div class="max-w-7x1 flex flex-col justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-12 sm:gap-5">
            <div :class="['sm:col-span-3  image__exemple text-gray-50 font-bold text-6xl p-5 text-center flex items-center justify-center rounded-2xl', (!newsColor)? 'bg-gray-400': `bg-${newsColor}-${(newsPesoColor)?newsPesoColor:'500'}`]">{{ newsNameImage }}</div>
            <div class="sm:col-span-9 text-wrap wrap-break-word">
                <h2 class="text-gray-50 font-bold text-2xl">{{newsTitle}}</h2>
                <p class="text-gray-50">{{ newsContent }}</p>
                <span class="font-bold text-gray-50 underline" >Publicado em: {{ formateData }}</span>
            </div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
    props:{
        newsNameImage:{
            type:String,
            require: true,
        },
        newsTitle:{
            type: String,
            require: true,
        },
        newsContent:{
            type: String,
            require: true,
        },
        newsColor:{
            type: String,
            require: false,
        },
        newsPesoColor:{
            type: String,
            require: false,
        },
        newsDate:{
            type: Date,
            require: true,
        },

    },
    computed: {
        formateData(){
            let data = this.newsDate; 
            return data.toLocaleDateString('pt-br');
        }
    }
};
</script>
<style scoped>
.image__exemple{
    min-height: 200px;
}
</style>