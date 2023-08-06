<template>
  <v-sheet color="transparent">
    <v-row no-gutters>
      <v-col cols="8" sm="6">
        <v-select :items="items" label="疾病專區" solo></v-select>
      </v-col>
      <v-col cols="4" sm="6">
        <v-select :items="items2" label="代謝症候群" solo></v-select>
      </v-col>
    </v-row>
    <v-text-field solo append-icon="mdi-magnify"></v-text-field>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: ["疾病專區", "運動衛教專區", "營養衛教專區"],
    items2: ["代謝症候群", "心血管疾病", "肥胖", "糖尿病", "高血壓", "高血脂"],
  }),
};
</script>