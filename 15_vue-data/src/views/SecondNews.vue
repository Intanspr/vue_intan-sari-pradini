<template>
  <div id="SecondNews" class="container" style="max-width: 1400px">
    <div class="App">
      <div class="container">
        <table style="margin-top: 20px; margin-left: -100px">
          <img class="d-flex" src="currency.urlToImage" target="_blank"><img :src="currency.urlToImage" />
          <div class="mt-0">{{ title }}</div>
          <div>{{ currency. author }}</div>
          <div>{{ currency. publishedAt }}</div>
          <div>{{ currency. description }}</div>
          <button class="btn btn-primary" @click="() => this.$router.push('/')">
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
}

</script>