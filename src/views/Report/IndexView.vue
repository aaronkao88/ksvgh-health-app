<template>
  <v-container>
    <h2>健康資料庫</h2>

    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content class="ma-2">
                <v-list-item-titl v-text="item.text"></v-list-item-titl>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "身體組成" },
      { text: "運動測試" },
      { text: "運內健檢" },
      { text: "其他報告" },
    ],
  }),
};
</script>