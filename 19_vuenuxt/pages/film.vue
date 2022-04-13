<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Best Movie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
      name: "FilmPage",
    data: () => ({
      cards: [
        { title: 'Habibi', src: 'https://cdn-brilio-net.akamaized.net/news/2020/01/28/177927/1165882-film-indonesia-reza-rahardian.jpg', flex: 12 },
        { title: 'Soekarno', src: 'https://i.postimg.cc/440gsgHy/Ost-Soekarno.jpg', flex: 6 },
        { title: 'Dear nathan', src:'https://i.postimg.cc/63dvw0Y5/EXFzto-UU4-AA14x-Q.jpg', flex: 6 },
      ],
    }),
  }
</script>