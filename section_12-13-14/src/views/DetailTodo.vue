<template>
<div id="DetailTodo">
    <div class="App">
        <router-link to="/">
            <button>Kembali</button>
        </router-link>

    <div> {{ currentBio }} </div> 
      <button @click="changeBio">Ubah Deskripsi</button>
    </div>
</div>
</template>

<script>
export default {
    name: "DetailTodo",
    computed: {
        currentBio() {
            return this.$store.state.currentBio
            
        },
    },
};
</script>
