import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  'plugins': [react(), svgr()],
  'resolve': {
    'alias': [
      {
        'find': '@',
        'replacement': fileURLToPath(new URL('src', import.meta.url)),
      },
    ],
  },
})
