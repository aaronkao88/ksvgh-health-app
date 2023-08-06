<template>
  <v-sheet color="#fff" class="mt-5">
    <a href="/body">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>個人資料</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/health">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>健康資訊</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/sport">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>運動課程</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/sport-record">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>運動紀錄</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/nutrition">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>營養專區</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/report">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>健康資料庫</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/contact">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>聯絡我們</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/link">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>外部連結</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>

    <a href="/login">
      <v-list>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>登出</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </a>
  </v-sheet>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
</style>