import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'
import {resolve} from 'path'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './src/main.ts', // 工具库入口
      name: 'Utils', // 工具库名称
      fileName: (format: string) => `index.${format}.js`, // 工具库名称
      // formats: ['es', 'umd', 'cjs'], // 打包模式，默认是es和umd
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // outDir: "lib", // 自定义构建输出目录 默认为 dist
});

