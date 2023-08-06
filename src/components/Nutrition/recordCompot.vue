<template>
  <div class="mt-5">
    <h2>每日記錄</h2>
    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  2020/12/22
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
                  早餐
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
                  午餐
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list-item-group v-model="selectedItem">
          <!-- v-for="(item, i) in items" :key="i" -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="indigo darken-4 white--text">
                晚餐
              </v-list-item-title>
              <h3 class="mt-2">1450大卡</h3>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-row class="mb-6" no-gutters>
          <v-col sm="5" md="6">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
          <v-col sm="5" offset-sm="2" md="6" offset-md="0">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  2020/12/23
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
                  早餐
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
                  午餐
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list-item-group v-model="selectedItem">
          <!-- v-for="(item, i) in items" :key="i" -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="indigo darken-4 white--text">
                晚餐
              </v-list-item-title>
              <h3 class="mt-2">1450大卡</h3>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-row class="mb-6" no-gutters>
          <v-col sm="5" md="6">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
          <v-col sm="5" offset-sm="2" md="6" offset-md="0">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  2020/12/21
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
                  早餐
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
                  午餐
                </v-list-item-title>
                <h3 class="mt-2">1450大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list-item-group v-model="selectedItem">
          <!-- v-for="(item, i) in items" :key="i" -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="indigo darken-4 white--text">
                晚餐
              </v-list-item-title>
              <h3 class="mt-2">1450大卡</h3>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-row class="mb-6" no-gutters>
          <v-col sm="5" md="6">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
          <v-col sm="5" offset-sm="2" md="6" offset-md="0">
            <v-list-item-group v-model="selectedItem">
              <!-- v-for="(item, i) in items" :key="i" -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="indigo darken-4 white--text">
                    飲料
                  </v-list-item-title>
                  <h3 class="mt-2">1450大卡</h3>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>