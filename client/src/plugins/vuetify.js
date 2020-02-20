import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            //Custom themes
            light: {
                /* Adobe pallette with primary  #26a69a :
                2nd: #20B34E
                5th: #082E4D
                3rd: #22A1BD
                4th: #22BD80
               
                */
                primary: '#26a69a',
                secondary: '#20B34E',
                third: '#22A1BD',
                fourth: '#22BD80',
                // accent: '#8c9eff',
                // error: '#b71c1c',
                background: colors.grey.lighten4,
            },
            dark: {
                primary: '#26a69a',
                secondary: '#20B34E',
                third: '#22A1BD',
                fourth: '#22BD80',
                // accent: '#8c9eff',
                // error: '#b71c1c',
                background: colors.grey.lighten4,
            }
        },
        dark: false,
    },
    icons: {
        iconfont: 'md' || 'fa' //'mdiSvg',  || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
})