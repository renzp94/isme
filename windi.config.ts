import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        'neu-mini': '5px 5px 10px #d4d4d5, -5px -5px 10px #ffffff',
        'neu-mini-dark': '5px 5px 10px #222225, -5px -5px 10px #2c2c2f;',
        'neu-mini-inset': 'inset 5px 5px 10px #d4d4d5, inset -5px -5px 10px #ffffff',
        'neu-mini-inset-dark': 'inset 5px 5px 10px #222225, inset -5px -5px 10px #2c2c2f',
        neu: '18px 18px 36px #d4d4d5, -18px -18px 36px #ffffff',
        'neu-dark': '18px 18px 36px #212124, -18px -18px 36px #2d2d30',
        'neu-inset': 'inset 18px 18px 36px #d4d4d5, inset -18px -18px 36px #ffffff',
        'neu-inset-dark': 'inset 18px 18px 36px #212124, inset -18px -18px 36px #2d2d30',
      },
    },
  },
})
