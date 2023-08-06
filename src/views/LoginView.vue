<template>
  <v-app>
    <v-card class="overflow-hidden mt-5" light>
      <v-toolbar flat color="indigo darken-4">
        <v-toolbar-title class="font-weight-light white--text">
          登入
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="[formCheck.required]"
            label="帳號"
            required
          ></v-text-field>
          <v-text-field
            :rules="[formCheck.required]"
            :type="show4 ? 'text' : 'password'"
            label="密碼"
            value="Pa"
            @click:append="show4 = !show4"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#272727"
          class="white--text"
          @click="save"
          href="/register"
        >
          註冊
        </v-btn>
        <v-btn color="#1f2C58" class="white--text" @click="save" href="/">
          登入
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      formCheck: {
        required: (value) => !!value || "此欄位為必填！.",
      },
    };
  },
};
</script>

