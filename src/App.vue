<template>
  <v-app>
    <v-main color="#dae0f2">
      <AppBar></AppBar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/TheNavBar.vue";

export default {
  name: "App",

  components: {
    AppBar,
  },
};
</script>

<style scoped>
.theme--light.v-application {
  background: #dae0f2;
  color: rgba(0, 0, 0, 0.87);
}

a {
  color: #000;
}
</style>
