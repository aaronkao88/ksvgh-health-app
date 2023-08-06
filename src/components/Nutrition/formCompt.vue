<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="99%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-12">
          新增紀錄
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">營養紀錄</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="餐別" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="大卡" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="餐點內容" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            取消
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            新增
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>