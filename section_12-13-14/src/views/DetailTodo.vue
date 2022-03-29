<template>
<div id="DetailTodo">
    <div class="App">
            <button @click="() => this.$router.push('/')">
                Kembali
            </button>

        <h1> {{ currentBio }} </h1> 
        <p> {{ item.bio || "Belum ada deskripsi nih!" }}</p>

<input type="text" v-show="isShow" v-model="item.bio" placeholder="Ubah Disini">

<br/>
  <button v-on:click="changeBio">
            {{ isShow ? "Simpan" : "Ubah Deskripsi" }}
          </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTodo",
  data() {
    return {
      isShow: false,
      item: {},
      newIndex: "",
    };
  },
  setup() {},
  methods: {
    redirect(item, index) {
      return this.$router.push({
        name: "DetailTodo",
        params: { currentBio: item, index: index },
      });
    },
    changeBio() {
      if (this.isShow) {
        let c = JSON.parse(localStorage.todos);
        c[this.newIndex] = this.item;
        localStorage.todos = JSON.stringify(c);
      }
      this.isShow = !this.isShow;
    },
  },
  computed: {
    currentBio() {
      return this.$route.params.currentBio;
    },
    index() {
      return this.$route.params.index;
    },
  },
  
};
</script>