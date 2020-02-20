import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            //Custom themes
            light: {
                primary: '#26a69a',
                // secondary: '#b0bec5',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            },
            dark: {
                primary: '#26a69a',
                // secondary: '#b0bec5',
                // accent: '#8c9eff',
                // error: '#b71c1c',
            }
        },
        dark: false,
    },
    icons: {
        iconfont: 'md' || 'fa' //'mdiSvg',  || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
})