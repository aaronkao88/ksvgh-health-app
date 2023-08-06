<template>
    <v-container>
      <h2>營養專區</h2>
      <div class="justify-center mt-5">
        <v-card class="mx-auto">
          <v-list>
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    本日已攝取
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </div>
  
      <NewRecord></NewRecord>
      <AllRecord></AllRecord>
    </v-container>
  </template>
  
  <script>
  import NewRecord from "@/components/Nutrition/formCompt.vue";
  import AllRecord from "@/components/Nutrition/recordCompot";
  
  export default {
    components: {
      NewRecord,
      AllRecord,    
    },
  };
  </script>
  