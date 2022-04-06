<template>
 <v-app>
      <v-app-bar
        color="primary"
        dark
        fixed
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">News App</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <FirstNews :articles="articles"></FirstNews>
      </v-main>

      <v-main style="margin-top: 40px; padding-top: 40px">
        <FirstPage :articles="articles"></FirstPage>
      </v-main>
    
 </v-app>
</template>
<script>
import FirstPage from "./views/FirstPage.vue";
import FirstNews from "./views/FirstNews.vue";
export default {
  components: { FirstPage, FirstNews },
};
</script>
