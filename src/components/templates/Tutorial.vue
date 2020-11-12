<template>
  <div>
    <TutorialContent />
    <div class="text-center ma-2">
      <v-snackbar light v-model="snackbar">
        Login successful！
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import TutorialContent from "../TutorialContent";
export default {
  name: "Tutorial",
  components: {
    TutorialContent,
  },
  data: () => ({
    snackbar: false,
  }),
  created: function () {
    setTimeout(this.changeSnackbar, 200);
  },
  methods: {
    changeSnackbar: function () {
      this.snackbar = true;
    },
  },
};
</script>

<style>
</style>