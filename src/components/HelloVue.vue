<template>
  <div>
    {{ props.content }}
  </div>
</template>

<script lang="ts" setup>
type PropsType = {
  content: string;
};
const props = defineProps<PropsType>();
</script>
