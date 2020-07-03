import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'Home',
<<<<<<< HEAD
    component: () => import('@/views/firstPage/FirstPage.vue')
=======
    meta:{
      TabBarShow: true,
    },
    component: () => import('@/views/home/Home.vue')
>>>>>>> 4e0d84d5568cb5e01520956e8ad49666207ab55f
  },
  {
    path: '/first/page',
    name: 'FirstPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/firstPage/FirstPage.vue')
  },

  {
    path: '/store/details',
    name: 'StoreDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/storeDetails/StoreDetails.vue')
  },

  {
    path: '/store/recommend',
    name: 'StoreRecommend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/storeRecommend/StoreRecommend.vue')
  },

  {
    path: '/home',
    name: 'Home',
    meta:{
      TabBarShow: true,
    },
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    meta:{
      TabBarShow: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/category/Category.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    meta:{
      TabBarShow: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/personal/Personal.vue')
  },
  {
    path: '/signed',
    name: 'Signed',
    meta:{
      TabBarShow: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/signed/Signed.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/register/Register.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/search/Search.vue')
  },
  {
    path: '/forgot/password',
    name: 'Forgot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/forgot/Forgot.vue')
  },
  {
    path: '/details',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta:{
      TabBarShow: false,
    },
    component: () => import('@/views/details/Details.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      TabBarShow: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/cart/Cart.vue')
  },
  {
    path: '/goods/order',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/user/comments',
    name: 'Comments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/comments/Comments.vue')
  },
  {
    path: '/order',
    name: 'Order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/order/Order.vue')
  },
<<<<<<< HEAD

=======
  {
    path: '/mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/Mine.vue')
  },
  {
    path: '/mine/enroll',
    name: 'Enroll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/enroll/Enroll.vue')
  },
  {
    path: '/mine/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/about/About.vue')
  },
  {
    path: '/mine/concerning',
    name: 'Concerning',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/concerning/Concerning.vue')
  },
  {
    path: '/mine/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/settings/Settings.vue')
  },
  {
    path: '/mine/settings/phone',
    name: 'Phone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/settings/phone/Phone.vue')
  },
  {
    path: '/mine/settings/userset',
    name: 'Userset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/mine/settings/userset/Userset.vue')
  },
>>>>>>> 4e0d84d5568cb5e01520956e8ad49666207ab55f
]

const router = new VueRouter({
  routes
})

export default router
