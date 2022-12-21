// add vuetify frontloader

import { setup } from '@storybook/vue3'
import { registerPlugins } from '../src/plugins'

setup((app) => {
  // register app plugin with storybook
  registerPlugins(app)
})





export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}