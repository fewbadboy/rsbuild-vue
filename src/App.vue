<template>
  <div class="content">
    <h1 class="title">Rsbuild with Vue</h1>
    <p class="sub-title">Start building amazing things with Rsbuild.</p>
    <div class="text-3xl text-green-700 font-bold underline">
      计数：{{ count }}
    </div>
    <Space>
      <Button type="primary" @click="handleClick">
        <template #icon><PoweroffOutlined /></template>
        按钮
      </Button>
    </Space>
    <HelloVue :content="'HelloVue'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { say } from "@/utils";
import { Space, Button } from "ant-design-vue";
import { PoweroffOutlined } from "@ant-design/icons-vue";
import HelloVue from "./components/HelloVue.vue";

const count = ref(0);

console.log(import.meta.env.MODE);
console.log(process.env.NODE_ENV);

function handleClick() {
  count.value++;
  say("Rsbuild");
}
</script>

<style scoped>
.content {
  @apply flex flex-col justify-center items-center;
  min-height: 100vh;
  line-height: 1.1;

  .title {
    font-size: 3.6rem;
    color: brown;
    font-weight: 700;
  }

  .sub-title {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
}
</style>
