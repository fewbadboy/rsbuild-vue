<template>
  <Layout>
    <LayoutHeader class="flex justify-between items-center gap-2">
      <div class="logo"></div>
      <Menu
        v-model:selected-keys="selectedKeys"
        mode="horizontal"
        theme="dark"
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
              <MenuItem key="signOut" @click="handleSignOut">
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
  <Drawer
    v-model:open="openSetting"
  >
    <Button type="primary" @click="handleShow">显示成功信息</Button>
  </Drawer>
  <FloatButton @click="handleSetting">
    <template #icon><SettingOutlined /></template>
  </FloatButton>
  <context-message />
</template>

<script lang="ts" setup>
import {
  AppstoreOutlined,
  DashboardOutlined,
  LoginOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  FloatButton,
  type FloatButtonProps,
  Layout,
  LayoutContent,
  LayoutHeader,
  Menu,
  MenuDivider,
  MenuItem,
  type MenuProps,
  message,
  Space,
} from 'ant-design-vue';
import { h, ref } from 'vue';
import { router } from '@/router';
import { removeToken } from '@/utils/token';

const [messageApi, contextMessage] = message.useMessage();
const openSetting = ref(false);

const selectedKeys = ref(['home']);
const menus = ref<MenuProps['items']>([
  {
    key: 'dashboard',
    icon: () => h(DashboardOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: 'sub',
    icon: () => h(DashboardOutlined),
    label: 'Label',
    title: 'Label',
    children: [
      {
        type: 'group',
        label: '前端',
        children: [
          {
            label: 'CSS',
            key: 'css',
          },
        ],
      },
      {
        type: 'group',
        label: '后端',
        children: [
          {
            label: 'Java',
            key: 'java',
          },
        ],
      },
    ],
  },
  {
    key: 'components',
    icon: () => h(AppstoreOutlined),
    label: 'Components',
    title: 'Components',
    children: [
      {
        key: 'document',
        label: 'document',
      },
      {
        key: 'table',
        label: 'Table',
      },
    ],
  },
]);

const handleSelect: MenuProps['onSelect'] = ({ key }) => {
  router.push({ name: key as string });
};

function handleSignOut() {
  removeToken();
  router.push('/login');
}

const handleSetting: FloatButtonProps['onClick'] = () => {
  openSetting.value = !openSetting.value;
};

const handleShow = () => {
  messageApi.success('这是一条成功消息示例');
};
</script>

<style scoped></style>
