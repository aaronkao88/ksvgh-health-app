<template>
  <v-app>
    <v-card class="overflow-hidden ma-5" light>
      <v-toolbar flat color="indigo darken-4">
        <v-toolbar-title class="font-weight-light white--text">
          基本資料
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
            v-model="pass"
            :rules="[formCheck.required]"
            :type="show4 ? 'text' : 'password'"
            label="密碼"
            value="Pa"
            @click:append="show4 = !show4"
          ></v-text-field>
          <v-text-field
            v-model="checkPass"
            :rules="[formCheck.required]"
            :type="show4 ? 'text' : 'password'"
            label="確認密碼"
            value="Pa"
            @click:append="show4 = !show4"
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="[formCheck.required]"
            label="姓名"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[formCheck.required]"
            label="電子信箱"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="[formCheck.required]"
            label="連絡電話"
            required
          ></v-text-field>
          出生日期
          <v-text-field
            v-model="birth"
            :rules="[formCheck.required]"
            label="YYYY/MM/DD"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- 基本資料 -->

    <v-card class="overflow-hidden ma-5" light>
      <v-toolbar flat color="indigo darken-4">
        <v-toolbar-title class="font-weight-light white--text">
          基本資料
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-select
            :items="items"
            :rules="[formCheck.required]"
            label="性別"
            dense
          ></v-select>

          <v-row no-gutters>
            <v-col sm="5" md="6">
              <v-text-field
                v-model="tail"
                :rules="[formCheck.required]"
                label="身高"
                required
              ></v-text-field>
            </v-col>

            <v-col sm="5" offset-sm="2" md="6" offset-md="0">
              <v-text-field
                v-model="weight"
                :rules="[formCheck.required]"
                label="體重"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="BMI"
            :rules="[formCheck.required]"
            label="腰圍"
            required
          ></v-text-field>
        </v-form>

        <p>每日活動量</p>
        <v-radio-group v-model="radioGroup0">
          <v-radio :label="`輕度活動量`"></v-radio>
          <v-radio :label="`中度活動量`"></v-radio>
          <v-radio :label="`重度活動量`"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <!-- 健康問券 -->

    <v-card class="overflow-hidden ma-5" light>
      <v-toolbar flat color="indigo darken-4">
        <v-toolbar-title class="font-weight-light white--text">
          健康問券
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3>平常血壓­­­有沒有超過130/85</h3>
        <v-radio-group v-model="radioGroup1">
          <v-radio :label="`有`"></v-radio>
          <v-radio :label="`無`"></v-radio>
          <v-radio :label="`不知道`"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-text>
        <h3>平常空腹血糖有沒有 ≧100mg/d</h3>
        <v-radio-group v-model="radioGroup2">
          <v-radio :label="`有`"></v-radio>
          <v-radio :label="`無`"></v-radio>
          <v-radio :label="`不知道`"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-text>
        <h3>平常三酸甘油脂有沒有≧150mg/dL</h3>
        <v-radio-group v-model="radioGroup3">
          <v-radio :label="`有`"></v-radio>
          <v-radio :label="`無`"></v-radio>
          <v-radio :label="`不知道`"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-text>
        <h3>平常高密度脂蛋白膽固醇有沒有40mg/dL/ 50mg/dL</h3>
        <v-radio-group v-model="radioGroup4">
          <v-radio :label="`有`"></v-radio>
          <v-radio :label="`無`"></v-radio>
          <v-radio :label="`不知道`"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <!-- 確認書 -->

    <v-card class="overflow-hidden ma-5" light>
      <v-toolbar flat color="indigo darken-4">
        <v-toolbar-title class="font-weight-light white--text">
          確認書
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-checkbox
          v-model="selected"
          label="註冊申請同意書"
          value="John"
        ></v-checkbox>
        <v-checkbox
          v-model="selected"
          label="運動安全申明書"
          value="Jacob"
        ></v-checkbox>
      </v-card-text>
    </v-card>
    <v-btn
      color="#1f2C58"
      class="white--text ma-5"
      @click="save"
      href="/"
    >
      送出
    </v-btn>
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
      radioGroup: 1,
      items: ["男", "女"],
    };
  },
};
</script>

