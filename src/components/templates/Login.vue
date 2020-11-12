<template>
  <v-container class="mt-16">
    <p style="font-size: 16px" class="text-center font-weight-bold">
      Select User!
    </p>
    <v-row class="mt-16">
      <v-col v-for="user in users" :key="user.id">
        <v-card class="mx-auto" max-width="344">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="overline mb-1">
                {{ user.name }}
              </v-list-item-title>
              <div class="overline mb-4">age:22</div>
            </v-list-item-content>
            <v-list-item-avatar tile size="80" color="grey">
              <v-img
                :src="user.imageUrl"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              ></v-img
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <router-link to="/tutorial"
              ><v-btn
                width="120"
                dark
                color="teal darken-1"
                rounded
                @click="login(user)"
              >
                login</v-btn
              >
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Login",
  data: () => ({}),
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapMutations(["login"]),
  },
};
</script>

<style>
</style>