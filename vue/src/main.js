import {
    createApp
} from 'vue'

import App from './App.vue'
import card from './components/card.vue'
import xinput from './components/xinput.vue'
import tzt from './components/tzt.vue'

let app = createApp(App)
app.component('card', card)
app.component('xinput', xinput)
app.component('tzt', tzt)
app.config.unwrapInjectedRef = true
app.mount('#app')