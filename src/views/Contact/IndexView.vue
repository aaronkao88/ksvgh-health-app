<template>
  <v-container>
    <h2>聯絡我們</h2>

    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <v-list-item>
              <v-list-item-content class="ma-2">
                <v-list-item-title
                  >電話：(07)342-2121 轉 74279</v-list-item-title
                >
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
    items: [],
  }),
};
</script>