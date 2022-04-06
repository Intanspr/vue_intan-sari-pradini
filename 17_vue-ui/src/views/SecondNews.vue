<template>
  <div id="SecondNews" class="container" style="max-width: 1400px">
    <div class="App" v-for="(page, index) in item" :key="index">
      <div class="container">
        <table style="margin-top: 20px; margin-left: 100px">
          <div>
            <img :src="page.urlToImage" target="_blank" style="width: 500px; height: 400px" />
            </div>
          <h6>{{ page. author }}</h6>
          <h5>{{ page. title }}</h5>
          <h6>{{ page. publishedAt }}</h6>
          <p>Beritanya menarik? <a :href="page.url">Klik disini</a></p>
          <button class="btn btn-primary" @click="newsDetail">
            Kembali
          </button>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondNews" ,
  methods: {
    newsDetail() {
      this.$router.push({ path: "/"});
    },
  },
  computed: {
    item() {
      return this.$store.state.listItem;
    },
  },
  mounted() {
    this.$store.dispatch("fetchItem");
  },
};

</script>