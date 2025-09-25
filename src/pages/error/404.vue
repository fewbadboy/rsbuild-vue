<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button type="primary" @click="handleBack">Back Home</Button>
    </template>
  </Result>
</template>

<script lang="ts" setup>
import { Result, Button } from "ant-design-vue";
import { router } from "@/router";

function handleBack() {
  router.push("/");
}
</script>
