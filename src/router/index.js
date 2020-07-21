import Vue from 'vue'
import Router from 'view-router'
import routes from './router'
Vue.use(Router)

const router = new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    }
})
router.beforeEach((to,from,next)=>{
    next()
})
router.afterEach(()=>{
    window.scrollTo(0, 0);
})
export default routes