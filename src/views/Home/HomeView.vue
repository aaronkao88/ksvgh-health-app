<template>
  <v-container>
    <p class="mt-2">本日公告</p>
    <v-sheet color="#fff" class="pa-2">
      <marquee
        >其他公告:
        運動課程的部分只開放每一運動項目難度一顆星的第一個運動項目運動課程的部分只開放每一運動項目難度一顆星的第一個運動項目運動課程的部分只開放每一運動項目難度一顆星的第一個運動項目
      </marquee>
    </v-sheet>


    <LinkList></linkList>
  </v-container>
</template>

<script>
import LinkList from "@/components/Home/btnCompont.vue";

export default {
  data: () => ({
    items: [
      {
        title: "個人資料",
      },
      {
        title: "健康資訊",
      },
      {
        title: "運動課程",
      },
      {
        title: "運動紀錄",
      },
      {
        title: "營養專區",
      },
      {
        title: "健康資料庫",
      },
      {
        title: "聯絡我們",
      },
      {
        title: "外部連結",
      },
      {
        title: "登出",
      },
    ],
  }),
  name:'linkList',

  components: {
    LinkList,
  },
};
</script>

