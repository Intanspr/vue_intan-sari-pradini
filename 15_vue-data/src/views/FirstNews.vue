<template>
    <div id="FirstNews">
        <h1 style="text-align: center;"> Berita Terkini </h1>
        
        <div class="app" v-for="(page, index) in item  " :key="index"> 
            <nav >
                <div id="container" @click="() => pushNews()">
                
                    <div>
                        {{page. author}}
                    
                    <br>
                    <br>
                    <div style="display: flex; "> 
                        <div >
                            <img :src="page.urlToImage" 
                            style="width: 250px;
                            height: 250px;"/> 
                        </div>
                        <div style="margin-top: auto; margin-bottom: auto;" >
                            <div style="font-size: 22px;">
                                {{page. title}}
                            </div>
                            <br>
                        <div class="deskripsi" style="color: rgb(125, 125, 125);">
                           {{page. description}}
                        </div>
                        </div>
                    </div>
                    
                        {{page. publishedAt}}<br>
                    </div>
                    <button class="btn btn-success" @click="nextNews">
                        Baca Selengkapnya
                    </button>
                </div>
            </nav>

            
        </div>
    </div>
</template>
<script>

export default {
  
    name: "FirstNews",
    setup() {},
    methods: {
        nextNews() {
            this.$router.push({ path: "/SecondNews" });
        },
    },
    computed: {
    item(){
        return this.$store.state.listItem;
        },
    },
    mounted() {
        this.$store.dispatch("fetchItem");
    },
}
</script>
<style>
nav {
    display: flex;
    justify-content: space-around;
}
#container {
    background-color: lightgoldenrodyellow;
    width: 60%;
    height: auto;
    margin: 10px;
    font-size: 20px;
    
    
   
}       
</style>