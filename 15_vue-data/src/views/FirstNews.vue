<template>
    <div id="FirstNews">
        <h1 style="text-align: center;"> Berita Terkini </h1>
        
        <div class="app" v-for="(currency, index) in item  " :key="index"> 
            <nav >
                <div id="container" @click="() => pushNews()">
                
                    <div>
                        {{currency. author}}
                    
                    <br>
                    <br>
                    <div style="display: flex; "> 
                        <div >
                            <a :href="currency.urlToImage" target="_blank"><img :src="currency.urlToImage" 
                            style="width: 300px;
                            height: 250px;"></a> 
                        </div>
                        <div style="margin-top: auto; margin-bottom: auto;" >
                            <div style="font-size: 22px;">
                                {{currency. title}}
                            </div>
                            <br>
                        <div class="deskripsi" style="color: rgb(125, 125, 125);">
                           {{currency. description}}
                        </div>
                        </div>
                    </div>
                    
                        {{currency. publishedAt}}<br>
                    </div>
                </div>
            </nav>

            
        </div>
    </div>
</template>
<script>

export default {
  
    name: "FirstNews",
    setup() {},
    computed: {
    item(){
        return this.$store.state.listItem;
        },
    },
    mounted() {
        this.$store.dispatch("fetchItem");
    },
    methods:{
       
       pushNews() {
           return this.$router.push({
               name: "SourceNews",
           });
 
       },
    }
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