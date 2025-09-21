<template>
  <ConfigProvider :locale="locale">
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { ref } from "vue";

dayjs.locale("zh-cn");
const locale = ref(zhCN);

console.log(import.meta.env.MODE);
console.log(process.env.NODE_ENV);
</script>
