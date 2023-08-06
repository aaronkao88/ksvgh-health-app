<template>
  <div class="mt-5">
    <h2>運動紀錄</h2>
    <div class="justify-center mt-5">
      <p class="ml-2">2020/12/12</p>
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  桌球
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  跑步
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  跳繩
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>

    <p class="ml-2 mt-5">2020/12/12</p>
    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  桌球
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  跑步
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  跳繩
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>