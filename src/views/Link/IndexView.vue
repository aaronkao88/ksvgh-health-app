<template>
  <v-container>
    <h2>外部連結</h2>

    <div class="justify-center mt-5">
      <v-card class="mx-auto">
        <v-list>
          <v-list-item-group v-model="selectedItem">
            <!-- v-for="(item, i) in items" :key="i" -->
            <a href="https://vghks.gov.tw/" target="_blank">
              <v-list-item>
                <v-list-item-content class="ma-2">
                  <v-list-item-titl> 高雄榮總 </v-list-item-titl>
                </v-list-item-content>
              </v-list-item>
            </a>
            <a href="https://www.hpa.gov.tw/Home/Index.aspx" target="_blank">
              <v-list-item>
                <v-list-item-content class="ma-2">
                  <v-list-item-titl> 國民健康署 </v-list-item-titl>
                </v-list-item-content>
              </v-list-item>
            </a>
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
    items: [{ text: "高雄榮總" }, { text: "國民健康署" }],
  }),
};
</script>