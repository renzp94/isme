import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/images/bg-home.png')",
      },
    },
  },
})
