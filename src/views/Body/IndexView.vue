<template>
  <v-container>
    <h2>個人資料</h2>
    <div class="justify-center mt-5">
      <v-card class="mx-auto mt-2 rounded-tl-xl rounded-br-xl">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  姓名
                </v-list-item-title>
                <h3 class="mt-2">測試管理員</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>

      <v-row>
        <v-col sm="5" md="6">
          <v-card class="mx-auto mt-2">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      性別
                    </v-list-item-title>
                    <h3 class="mt-2">男</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
          <v-card class="mx-auto mt-2">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      年齡
                    </v-list-item-title>
                    <h3 class="mt-2">27歲</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="5" md="6">
          <v-card class="mx-auto">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      身高
                    </v-list-item-title>
                    <h3 class="mt-2">165公分</h3>
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
                      體重
                    </v-list-item-title>
                    <h3 class="mt-2">50公斤</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="mx-auto mt-2">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  BMI
                </v-list-item-title>
                <h3 class="mt-2">13.37</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>

      <v-row>
        <v-col sm="5" md="6">
          <v-card class="mx-auto mt-2">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      腰圍
                    </v-list-item-title>
                    <h3 class="mt-2">50公分</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col sm="5" offset-sm="2" md="6" offset-md="0">
          <v-card class="mx-auto mt-2">
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <!-- v-for="(item, i) in items" :key="i" -->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="indigo darken-4 white--text">
                      基礎代謝率(BMR)
                    </v-list-item-title>
                    <h3 class="mt-2">1399.2</h3>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="mx-auto mt-2">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="indigo darken-4 white--text">
                  一天所需熱量
                </v-list-item-title>
                <h3 class="mt-2">1750大卡</h3>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>