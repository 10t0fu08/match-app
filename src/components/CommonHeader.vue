<template>
  <v-app-bar height="48" elevation="2">
    <v-row class="align-center">
      <v-col>
        <v-row>
          <p class="ma-0 ml-2 mt-1 font-weight-bold" style="font-size: 12px">
            {{ loginUser.name }}
          </p>
          <v-avatar class="ml-1" color="primary" size="28">
            <v-img
              :src="loginUser.imageUrl"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            ></v-img>
          </v-avatar>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center">
          <v-toolbar-title class="font-weight-bold">match app</v-toolbar-title>
        </v-row>
      </v-col>
      <v-col>
        <v-row></v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  computed: {
    ...mapState(["loginUser"]),
  },
};
</script>

<style>
</style>