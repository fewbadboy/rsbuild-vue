<template>
  <div class="content">
    <div class="text-3xl text-green-700 font-bold underline">
      计数：{{ count }}
    </div>
    <Space>
      <Button type="primary">
        <template #icon><PoweroffOutlined /></template>
        按钮
      </Button>
      <DatePicker v-model:value="start" />
    </Space>
    <HelloVue :content="'HelloVue'" />
  </div>
</template>

<script setup lang="ts">
import { PoweroffOutlined } from "@ant-design/icons-vue";
import { Button, DatePicker, Space } from "ant-design-vue";
import { ref } from "vue";
import HelloVue from "@/components/HelloVue.vue";

const count = ref(0);
const start = ref("");

console.log(import.meta.env.MODE);
console.log(process.env.NODE_ENV);
</script>

<style scoped>
.content {
  @apply flex flex-col justify-center items-center;
  line-height: 1.1;
}
</style>
