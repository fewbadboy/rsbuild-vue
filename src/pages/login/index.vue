<template>
  <div class="h-dvh flex justify-center items-center">
    <Form
      name="basic"
      autocomplete="off"
      class="w-[260px]"
      :model="formState"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      :rules="rules"
      @finish="onFinish"
    >
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" />
      </FormItem>

      <FormItem label="密码" name="password">
        <InputPassword v-model:value="formState.password" />
      </FormItem>

      <FormItem name="remember" :wrapper-col="{ offset: 6, span: 18 }">
        <Checkbox v-model:checked="formState.remember">记住我</Checkbox>
      </FormItem>

      <FormItem :wrapper-col="{ offset: 8, span: 16 }">
        <Button type="primary" html-type="submit" class="w-full">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import {
  Button,
  Checkbox,
  Form,
  FormItem,
  Input,
  InputPassword,
} from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { setToken } from "@/utils/token";

const router = useRouter();

interface LoginForm {
  username: string;
  password: string;
  remember: boolean;
}
const rules: Record<string, Rule[]> = {
  username: [
    { required: true, message: "请输入用户名!", trigger: "blur" },
    { min: 5, max: 50, message: "长度应该在 5 - 50之间", trigger: "blur" },
  ],
  password: [{ required: true, message: "请输入密码!", trigger: "blur" }],
};

const formState = reactive<LoginForm>({
  username: "",
  password: "",
  remember: true,
});

const onFinish = () => {
  setToken("Token");
  router.push({ name: "dashboard" });
};
</script>

<style scoped>
@reference "tailwindcss";
.login {
  @apply h-dvh flex justify-center items-center text-green-700;
}
</style>
