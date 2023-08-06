<template>
  <v-container>
    <h2>運動紀錄</h2>
    <div class="justify-center mt-5">
      <v-row class="mb-6">
        <v-col sm="5" md="6">
          <v-card class="mx-auto">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      本日累積
                    </v-list-item-title>
                    <h3 class="mt-2">25分鐘</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
          <v-card class="mx-auto">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      本週累積
                    </v-list-item-title>
                    <h3 class="mt-2">100分鐘</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <AllRecord></AllRecord>
  </v-container>
</template>

<script>
import AllRecord from "@/components/Sport-record/historyCompont.vue";

export default {
  name:'AllRecord',

  components: {
    AllRecord,
  },
};
</script>