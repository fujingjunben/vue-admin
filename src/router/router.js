export default [
    {
        path: '/1', name: '1', component: () => import ('@/pages/sample1.vue')
    },
    {
        path: '/2', name: '2', component: () => import ('@/pages/sample2.vue')
    },
    {
        path: '/3', name: '3', component: () => import ('@/pages/sample3.vue')
    },
    {
        path: '/41', name: '4', component: () => import ('@/pages/sample4.vue')
    },
    {
        path: '/42', name: '5', component: () => import ('@/pages/sample5.vue')
    },
    {
        path: '/6', name: '6', component: () => import ('@/pages/sample6.vue')
    },
    {
        path: '/51', name: '7', component: () => import ('@/pages/sample7.vue')
    },
    {
        path: '/52', name: '8', component: () => import ('@/pages/sample8.vue')
    },
]