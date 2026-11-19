import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    sourcemap: false,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /[\\/]node_modules[\\/](?:react|react-dom|scheduler)[\\/]/,
              priority: 20,
            },
            {
              name: 'vendor-firebase-app',
              test: /[\\/]node_modules[\\/](?:@firebase[\\/]app|firebase[\\/]app|@firebase[\\/]util|@firebase[\\/]component|@firebase[\\/]logger)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor-firebase-auth',
              test: /[\\/]node_modules[\\/](?:@firebase[\\/]auth|firebase[\\/]auth)[\\/]/,
              priority: 15,
            },
            {
              name: 'vendor-firebase-firestore',
              test: /[\\/]node_modules[\\/](?:@firebase[\\/]firestore|firebase[\\/]firestore|@grpc|protobufjs)[\\/]/,
              priority: 15,
            },
          ],
        },
      },
    },
  },
})
