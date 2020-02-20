import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
/* import Notes from '../views/Notes.vue'
Not importing it because we declare it lazy-loaded below! */

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/mantonoiu" //hardcoded username
    },
    {
        path: '/mantonoiu', //hardcoded username
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/mantonoiu/notes/',
        name: 'notes',
        // component: Notes
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Notes.vue')
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Error404.vue')
    }
    //Add the saveguard back later
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router