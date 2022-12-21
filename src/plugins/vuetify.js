import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// add more iconsets -- see next.vuetifyjs.com/en/features/icon-fonts

exprt default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})


/* 
    <template>
        <v-icon icon="mdi-home">
    </template>
*/