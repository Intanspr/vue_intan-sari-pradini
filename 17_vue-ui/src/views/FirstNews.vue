<template>
    <v-navigation-drawer
    v-model="drawer"
    fixed
    app
    clipped
    style="background-color: #2196f3; border-color: #2196f3"
    >
        <v-list dense class="pt-3 white--text">
            <v-list-item v-for="(page, index) in item " :key="index">
            <v-list-item-action>
                <v-avatar size="32px">
                    <img class="img-circle elevation-7 mb-1" :src="page.urlToImage" />
                </v-avatar>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title>{{ page.source.name }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
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
};
</script>