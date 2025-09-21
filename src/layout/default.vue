<template>
  <Layout>
    <LayoutHeader class="flex justify-between items-center gap-2">
      <div class="logo"></div>
      <Menu
        v-model:selected-keys="selectedKeys"
        mode="horizontal"
        :items="menus"
        @select="handleSelect"
      />
      <Space>
        <Dropdown>
          <Avatar>
            <template #icon><UserOutlined /></template>
          </Avatar>
          <template #overlay>
            <Menu>
              <MenuItem key="profile">
                <template #icon><UserOutlined /></template>
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem key="signOut">
                <template #icon><LoginOutlined /></template>
                Sign out
              </MenuItem>
            </Menu>
          </template>
        </Dropdown>
      </Space>
    </LayoutHeader>
    <LayoutContent class="h-main">
      <RouterView />
    </LayoutContent>
  </Layout>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import {
  Avatar,
  Layout,
  LayoutHeader,
  LayoutContent,
  Dropdown,
  Space,
  Menu,
  MenuItem,
  MenuDivider,
  type MenuProps,
} from "ant-design-vue";
import {
  DashboardOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref(["home"]);
const menus = ref<MenuProps["items"]>([
  {
    key: "home",
    icon: () => h(DashboardOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "menu2",
    icon: () => h(DashboardOutlined),
    label: "Label",
    title: "Label",
    children: [
      {
        type: "group",
        label: "前端",
        children: [
          {
            label: "CSS",
            key: "css",
          },
        ],
      },
      {
        type: "group",
        label: "后端",
        children: [
          {
            label: "Java",
            key: "java",
          },
        ],
      },
    ],
  },
]);

const handleSelect: MenuProps["onSelect"] = ({ item, key, selectedKeys }) => {
  console.log(`${key}`, selectedKeys, item);
};
</script>

<style scoped></style>
