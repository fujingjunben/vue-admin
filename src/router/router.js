
// import sample1 from '@/pages/sample1.vue'
// import sample2 from '@/pages/sample2.vue'
// import sample3 from '@/pages/sample3.vue'
// import sample4 from '@/pages/sample4.vue'
// import sample5 from '@/pages/sample5.vue'
// import sample6 from '@/pages/sample6.vue'
// import sample7 from '@/pages/sample7.vue'
// import sample8 from '@/pages/sample8.vue'

// const routes = [
//   {
//     path: '/1', name: 'sample1', component: sample1
//   },
//   {
//     path: '/2', name: 'sample2', component: sample2
//   },
//   {
//     path: '/3', name: 'sample3', component: sample3
//   },
//   {
//     path: '/4', name: 'sample4', component: sample4
//   },
//   {
//     path: '/5', name: 'sample5', component: sample5
//   },
//   {
//     path: '/6', name: 'sample6', component: sample6
//   },
//   {
//     path: '/7', name: 'sample7', component: sample7
//   },
//   {
//     path: '/8', name: 'sample8', component: sample8
//   },
// ]

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