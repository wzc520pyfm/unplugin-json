import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginJson from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginJson(),
  ],
})
