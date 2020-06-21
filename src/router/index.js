import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from '../components/Home.vue'
import HOME from '../components/Login.vue'
import HOME from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: App },
        { path: '/login', component: Login },
        { path: '*', component: NotFound }
    ]
})

export default router