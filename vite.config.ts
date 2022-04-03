import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
    WindiCSS(),
    autoImport({
      include: [/\.[tj]sx?$/],
      imports: [
        'react',
        {
          react: ['lazy', 'Suspense'],
        },
        'react-router-dom',
        {
          'react-router-dom': [
            // components
            'BrowserRouter',
            'HashRouter',
            'MemoryRouter',
          ],
        },
      ],
      dts: './src/auto-import.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  server: {
    port: 8899,
  },
})
