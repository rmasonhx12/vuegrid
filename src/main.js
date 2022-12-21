import { createApp } from 'vue'
import App from './App.vue'

// Add Vuetify to the project

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use.apply(vuetify).mount('#app')
