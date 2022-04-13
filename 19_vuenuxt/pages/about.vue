<template>
<v-row>
    <v-col v-for="(mov, index) in movies" :key="index" cols="6">
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="`http://image.tmdb.org/t/p/w500${mov.poster_path}`"
    >
      <v-card-title>
          {{ mov.title }}
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ mov.popularity }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ mov.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Continue
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
</v-row>
</template>

<script>
  export default {
    name: 'AboutPage',
  computed: {
    movies() {
      return this.$store.state.movie.list
    },
  },
  mounted() {
    this.$store.dispatch('movie/fetchMovie')
  },
  }
</script>