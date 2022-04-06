<template>
    <v-layout row wrap align-center>
        <v-flex xs8 offset-md2>
            <div v-for="(page, index) in item" :key="index">
                <v-card class="my-3">
                    <v-img height="350px" v-bind:src="page.urlToImage"></v-img>
                    <v-container fill-height fluid>
                        <v-layout>
                            <v-flex xs12 align-end d-flex>
                                <span class="headline">{{ page. title }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                <v-card-text>
                    {{ page. description }}
                </v-card-text>
                <v-card-actions>
                    <v-chip small color="secondary" class="white--text">
                        {{ page.source.name }} 
                </v-chip>

                <v-spacher></v-spacher>

                <v-btn icon class="red--text">
                    <v-icon small>mdi-reddit</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text">
                    <v-icon small>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text">
                    <v-icon small>mdi-facebook></v-icon>
                </v-btn>
                <v-btn icon class="red--text">
                    <v-icon small>mdi-google-plus</v-icon>
                </v-btn>
                <v-btn icon class="blue--text">
                    <v-icon small>mdi-linkeidn</v-icon>
                </v-btn>

                <v-spacher></v-spacher>

                <v-btn
                    small
                    replace
                    color="info"
                    v-bind:href="page.url"
                    target="_blank"
                    >Read More</v-btn
                >
                </v-card-actions>
                </v-card>
            </div>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: "FirstPage",
    setup() {},
    methods: {
        nextNews() {
            this.$router.push({ path: "/SecondNews" });
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