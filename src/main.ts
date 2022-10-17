import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import "./assets/css/app.scss"
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'Hello {name}',
            apple: 'apple | apples'
        }
    },
    fr: {
        message: {
            hello: 'Bonjour {name}',
            apple: 'pomme | pommes',
        }
    }
}
const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'fr', // set locale
  legacy: false,
  globalInjection: true,
  messages,
})

export default i18n;
const app = createApp({
  // something vue options here ...
})

app.use(i18n)
createApp(App).use(router).use(createPinia()).mount('#app')
