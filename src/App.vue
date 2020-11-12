<template>
  <v-app>
    <Index />
  </v-app>
</template>

<script>
import Index from "./components/templates/Index.vue";
export default {
  name: "App",

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  a {
    text-decoration: none;
  }
}
</style>
