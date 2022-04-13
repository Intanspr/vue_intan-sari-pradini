<template>
<v-row>
  <v-card
    class="mx-auto my-12"
    max-width="1000"
    max-height="500px"
  >
    <v-img
      src='https://www.linkpicture.com/q/Djawanews_Kudapan_Pagi_Begini_Sejarah_Hari_Film_Nasional_yang_Diperingati_Tiap_30_Maret_3_30_maret_hari_film_nasional41.jpg'
      height="200px"
    ></v-img>

    <v-card-title>
      MOVIE
    </v-card-title>

    <v-card-subtitle>
      History About Movie
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         Film is the result of a work of art that has the integrity of the number of components of the art of use and fulfills the need in the form of a psychic. The art components contained and assisting a film include fine arts, photography, architecture, dance, poetry, literature, theater, music, pantomime and novels.       </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
    data: () => ({
      show: false,
    }),
}
</script>
