<template>
  <v-container>
    <v-stepper class="mt-16" style="height: 500px" v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"> step 1 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2"> step 2 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3"> step 3 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4"> step 4 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="pa-6 mb-12" color="grey lighten-5" height="300px">
            <p
              style="font-size: 14px"
              class="text-center font-weight-bold mt-16"
            >
              <span style="font-size: 18px">「match app」</span>へようこそ！
            </p>
            <p
              style="font-size: 14px"
              class="text-center font-weight-bold mt-5"
            >
              このアプリはあなたの理想のタイプを探すサポートします
            </p>
          </v-card>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="pa-6 mb-12" color="grey lighten-5" height="300px">
            <p class="font-weight-bold text-center mt-10">
              ロング派？ ショート派?
            </p>
            <v-row>
              <v-col>
                <v-row justify="end">
                  <v-btn
                    class="font-weight-bold"
                    width="120px"
                    depressed
                    elevation="2"
                    outlined
                    >ロング</v-btn
                  >
                </v-row>
              </v-col>
              <v-col>
                <v-btn
                  class="font-weight-bold"
                  width="120px"
                  medium
                  depressed
                  elevation="2"
                  outlined
                  >ショート</v-btn
                >
              </v-col>
            </v-row>
            <p class="mt-4 text-center">まずいくつか質問に答えてください</p>
          </v-card>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="pa-6 mb-12" color="grey lighten-5" height="300px">
            <v-row>
              <v-col align="center">
                <v-img
                  width="120px"
                  src="/img/asuka.jpg"
                  style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)"
                ></v-img>
              </v-col>
            </v-row>
            <p
              style="font-size: 12px"
              class="mt-4 text-center font-weight-bold"
            >
              質問の回答からあなたの理想のタイプを提案します
            </p>
          </v-card>

          <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card class="pa-6 mb-12" color="grey lighten-5" height="300px">
            <p
              style="font-size: 14px"
              class="font-weight-bold text-center mt-12"
            >
              それでは、始めさせていただきます
            </p>
            <v-row align="center">
              <v-col>
                <v-row justify="center">
                  <v-btn
                    width="180"
                    color="amber lighten-1"
                    class="rounded-pill font-weight-bold"
                    >START!</v-btn
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e1: 1,
  }),
};
</script>

<style>
</style>