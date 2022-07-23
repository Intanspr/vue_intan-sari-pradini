<template>
  <v-card>
    <v-tabs background-color="deep-purple accent-4" center-active grey>
      <v-tab>One</v-tab>
      <v-tab-item> <Section1 /> </v-tab-item>
      <v-tab>Two</v-tab>
      <v-tab-item> <Section2 /> </v-tab-item>
      <v-tab>Three</v-tab>
      <v-tab-item> <Section3 /> </v-tab-item>
      <v-tab>Four</v-tab>
      <v-tab-item> <Section4 /> </v-tab-item>
      <v-tab>Five</v-tab>
      <v-tab-item> <Section5 /> </v-tab-item>
      <v-tab>Six</v-tab>
      <v-tab-item> <Section6 /> </v-tab-item>
      <v-tab>Seven</v-tab>
      <v-tab-item> <Section7 /> </v-tab-item>
      <v-tab>Eight</v-tab>
      <v-tab-item> <Section8 /> </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import Section1 from "@/components/Section1.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";
import Section6 from "@/components/Section6.vue";
import Section7 from "@/components/Section7.vue";
import Section8 from "@/components/Section8.vue";

export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
  },
  data: () => ({}),
};
</script>

<style>
.card-header {
  background-color: #212529;
}
</style>
