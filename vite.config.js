import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Moje-Mapy/', // <-- TADY MUSÍ BÝT JEN NÁZEV SLOŽKY V LOMÍTKÁCH, NE LINK NA GITHUB CODES!
})