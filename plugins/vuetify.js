import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa',
  },
  theme: {
      dark: {
          background: colors.grey.lighten3
      },
      light: {
          background: colors.shades.white
      }
  }
})