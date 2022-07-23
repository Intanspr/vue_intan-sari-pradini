<template>
  <div class="HomePage">
    <HelloWorld msg="Welcome to my Todo App"/>

    <li v-for="item in anggota" :key="item.id">
      <span>ID: {{ item.id }}</span>
      <br>
      <span>Nama: {{ item.nama }}</span>
    </li>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from "graphql-tag";

export default {
  name: 'HomePage',
  apollo: {
    anggota: gql`
      query MyQuery {
          anggota {
            id
            nama
            keterangans {
              id
              id_anggota
              nilai
              pelajaran
              status
            }
          }
        }
      `,
  },
  components: {
    HelloWorld,
  },
};
</script>
