<template>
  <v-sheet color="transparent">
    <v-row no-gutters>
      <v-col cols="8" sm="6">
        <v-select :items="items" label="有氧" solo></v-select>
      </v-col>
      <v-col cols="4" sm="6">
        <v-select :items="items2" label="跑步機" solo></v-select>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: ["有氧", "激勵", "伸展"],
    items2: ["跑步機", "室內腳踏車"],
  }),
};
</script>