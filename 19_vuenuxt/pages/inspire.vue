<template>
      <v-toolbar-title>
        All movies
      

<v-row>
  <v-col v-for="(mov, index) in movies" :key="index" cols="3">
  <v-card
    class="mx-auto"
    max-width="374"
  >
    <v-img
      height="250"
      :src="`http://image.tmdb.org/t/p/w500${mov.poster_path}`"
    ></v-img>

    <v-card-title>
      {{ mov.title }}
    </v-card-title>

   <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ mov.vote_average }} ({{ mov.vote_count }})
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">{{ mov.release_date }}</div>

          <div>
            {{ mov.overview }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-toolbar-title>
</template>
<script>
export default {
  name: 'InspirePage',
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