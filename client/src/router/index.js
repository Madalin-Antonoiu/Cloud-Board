import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* import Notes from '../views/Notes.vue'
Not importing it because we declare it lazy-loaded below! */

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/notes',
        name: 'Notes',
        // component: Notes
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Notes.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router