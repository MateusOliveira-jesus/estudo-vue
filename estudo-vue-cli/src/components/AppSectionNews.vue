<template>
  <div>
    <div>
      <AppSectionNewsIndividual
        v-for="(item, index) in newsArr"
        :key="index"
        :news-name-image="item.nameImage"
        :news-title="item.title"
        :news-content="item.content"
        :news-date="item.date"
        :news-color="item.color"
        :news-peso-color="item.weightColor"
      />
    </div>
  </div>
</template>

<script>
import AppSectionNewsIndividual from "./AppSectionNewsIndividual";

export default {
  data() {
    return {
      newsArr: [
        {
          nameImage: "🚀",
          title: "Vue.js 4.0 Anunciado",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-12-03T09:15:00"),
          color: "blue",
          weightColor: "500",
        },
        {
          nameImage: "🎨",
          title: "Tailwind CSS 4.0 em Beta",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-28T14:30:00"),
          color: "purple",
          weightColor: "500",
        },
        {
          nameImage: "⚡",
          title: "TypeScript Supera JavaScript em Popularidade",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-25T11:45:00"),
          color: "indigo",
          weightColor: "500",
        },
        {
          nameImage: "🔧",
          title: "Vite 6.0 Lançado com Suporte a WebAssembly",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-20T16:20:00"),
          color: "cyan",
          weightColor: "500",
        },
        {
          nameImage: "📊",
          title: "Nuxt 4 Quebra Recordes de Performance",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-15T10:10:00"),
          color: "green",
          weightColor: "500",
        },
        {
          nameImage: "🎯",
          title: "React 19 Anuncia 'React Forget'",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-10T13:55:00"),
          color: "red",
          weightColor: "500",
        },
        {
          nameImage: "🛡️",
          title: "Segurança em Aplicações Vue",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-11-05T08:30:00"),
          color: "yellow",
          weightColor: "500",
        },
        {
          nameImage: "📱",
          title: "PWA com Vue 3: Guia Completo",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere tempora minus fugiat quod distinctio ut ex, laborum veniam, nesciunt voluptas excepturi error rerum nihil velit. Aliquam doloribus consequuntur accusantium beatae alias, excepturi consectetur incidunt rerum veniam reiciendis harum sint architecto repellat reprehenderit facilis quidem corrupti temporibus saepe culpa est et, sequi nemo deserunt. Impedit recusandae ratione excepturi repellat totam officiis sit ab, perferendis, aliquam vero, rem libero? Vero, dolor. Laboriosam, harum eligendi esse neque delectus eius assumenda, vero ad quia iste mollitia nulla magnam provident ullam non. Porro provident exercitationem corporis accusantium veniam, quidem eveniet amet sint, quia odit repudiandae excepturi cum iure delectus incidunt atque quod et, quo distinctio sapiente consequuntur similique suscipit? Doloribus fuga vero incidunt neque inventore delectus perspiciatis quo culpa laboriosam? Tempore aperiam velit perferendis repellendus ut dolor amet voluptatum itaque doloribus possimus, obcaecati fugit quo illum temporibus. Dignissimos quibusdam nostrum sint eos ad, nobis, animi asperiores consectetur sed voluptatem dolorem. Maxime eveniet asperiores ullam, aliquam quo maiores vitae fuga esse illo! Magnam suscipit, nam pariatur eum aperiam quas aspernatur impedit, ex qui, expedita dignissimos iure sit! Quos rerum suscipit laboriosam reiciendis possimus quo fugiat expedita officia accusantium vero, impedit iure tenetur est eaque quasi?",
          date: new Date("2024-10-30T15:40:00"),
          color: "pink",
          weightColor: "500",
        },
      ],
    };
  },
  components: {
    AppSectionNewsIndividual,
  },
};
</script>
<style scoped>
</style>