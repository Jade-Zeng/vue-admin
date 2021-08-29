import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
					libraryName: 'element-plus',
					esModule: true,
					ensureStyleFile: true,
					resolveStyle: name => {
						name = name.slice(3)
						return `element-plus/packages/theme-chalk/src/${name}.scss`
					},
					resolveComponent: name => {
						return `element-plus/lib/${name}`
					}
				}
      ]
    })
  ],
  base: './',
  resolve: {
		alias: {
			'@': resolve('src'),
			comps: resolve('src/components'),
			apis: resolve('src/apis'),
			views: resolve('src/views'),
			utils: resolve('src/utils'),
			routes: resolve('src/routes'),
			styles: resolve('src/styles')
		}
	},
  server: {
		//服务器主机名
		host: '',
		//端口号
		port: 8080,
		//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
		strictPort: false,
		//服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
		open: false,
		//自定义代理规则
		proxy: {
			// 选项写法
			'/api': {
				target: 'http://jsonplaceholder.typicode.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}

})
