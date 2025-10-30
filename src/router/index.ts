import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventLayoutView from '../views/event/LayoutView.vue'
import EventDetailView from '../views/event/DetailView.vue'
import EventRegisterView from '../views/event/RegisterView.vue'
import EventEditView from '../views/event/EditView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import nProgress from 'nprogress'

import { trackPageView } from '@/services/analytics'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
    {
      path: '/students',
      name: 'student-list',  // 确保这个名称存在
      component: () => import('../views/StudentListView.vue')
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EventEditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

router.afterEach((to) => {
  nProgress.done()
  // 手动触发页面浏览跟踪
  trackPageView()
})
export default router
