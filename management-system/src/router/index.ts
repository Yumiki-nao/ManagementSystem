import { constantRouter } from './routes.ts'
import { createRouter, createWebHashHistory } from 'vue-router';

let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;