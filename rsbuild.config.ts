import { defineConfig } from '@rsbuild/core';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  output: {
    distPath: {
      root: 'dist',
    },
    assetPrefix: '', // 静态资源设置路径前缀， 如 CDN 加速
  },
  html: {
    title: 'vue',
    // 添加到移动端设备主屏幕时显示
    appIcon: {
      name: '',
      icons: [{ src: './public/favicon.ico', size: 192 }],
    },
    meta: {
      description: 'vue project',
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  plugins: [pluginVue(), pluginImageCompress()],
  source: {
    assetsInclude: [/\.gltf$/], // 扩展静态资源
    transformImport: [
      // {
      //   libraryName: 'ant-design-vue',
      //   libraryDirectory: 'es',
      //   style: true,
      // },
    ],
  },
  security: {
    nonce: 'CSP_NONCE_PLACEHOLDER',
  },
  tools: {
    rspack(config, { addRules }) {
      (config.experiments ?? {}).nativeWatcher = true;

      addRules([
        {
          test: /\.pdf$/,
          type: 'asset/resource',
        },
      ]);
      return config;
    },
  },
  performance: {
    removeConsole: ['log'],
    removeMomentLocale: true,
  },
  server: {
    base: '/web', // 服务器基础路径
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
      '/ws': {
        target: 'http://localhost:3000',
        ws: true,
        pathRewrite: { '^/ws': '' },
      },
    },
  },
});
