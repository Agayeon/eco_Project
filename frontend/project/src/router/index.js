import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeMileage from '../views/HomeMileage.vue'
import Ecomall_list from '../views/Ecomall_list.vue'
import MileageBarcode from '../views/MileageBarcode.vue'
import MileageHistory from '../views/MileageHistory.vue'
import MileageGiftCard from '../views/MileageGiftCard.vue'
import MissionPhotoUpload from '../views/MissionPhotoUpload.vue'
import EcoMission from '../views/EcoMission.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Calendar from '../views/Calendar.vue'
import Re100 from '../views/Re100.vue'
import OrderStock from '../views/OrderStock.vue'
import AccountCreateView from '../views/AccountCreateView'
import AccountConfirmView from '../views/AccountConfirmView'
import Walk from '../views/Walk.vue'
import DailyMission from '../views/DailyMission.vue'
import AddMission from '../views/AddMission.vue'
import AccountDone from '../views/AccountDone.vue'
import HomeMileage2 from '../views/HomeMileage2.vue'
import AccountCreateView2 from '../views/AccountCreateView2.vue'
import LoadingSpinnerTest from '../views/LoadingSpinnerTest.vue'
import NewsList from '../views/NewsList.vue'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'register',
    }
  },
  {
    path: 'api/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: 'api/mileage',
    name: 'mileage',
    component: HomeMileage2,
  },
  {
    path: 'api/ecomall-list',
    name: 'ecomall-list',
    component: Ecomall_list,
  },
  {
    path: 'api/mileage/barcode',
    name: 'mileage-barcode',
    component: MileageBarcode,
  },
  {
    path: 'api/mileage/history',
    name: 'mileage-history',
    component: MileageHistory,
  },
  {
    path: 'api/mileage/giftcard',
    name: 'mileage-giftcard',
    component: MileageGiftCard,
  },
  {
    path: 'api/mission/photoupload',
    name: 'mission-photoupload',
    component: MissionPhotoUpload,
  },
  {
    path: 'api/eco_mission',
    name: 'eco_mission',
    component: EcoMission,
  },
  {
    path: 'api/login',
    name: 'login',
    component: Login,
  },
  {
    path: 'api/register',
    name: 'register',
    component: Register,
  },
  {
    path: 'api/calendar',
    name: 'calendar',
    component: Calendar,
  },
  {
    path: 'api/stock/re100',
    name: 're100',
    component: Re100,
  },
  {
    path: 'api/stock/order',
    name: "stock-order",
    component: OrderStock,
  },
  {
    path: 'api/account',
    name: 'account',
    component: AccountCreateView2,
  },
  {
    path: 'api/account/confirm',
    name: 'account-confirm',
    component: AccountConfirmView,
  },
  {
    path: 'api/walk',
    name: 'walk',
    component: Walk,
  },
  {
    path: 'api/mileage/dailymission',
    name: 'mileage-dailymission',
    component: DailyMission,
  },
  {
    path: 'api/addmission',
    name: 'addmission',
    component: AddMission,
  },
  {
    path: 'api/account/done',
    name: 'account-done',
    component: AccountDone,
  },
  {
    path: 'api/mileage2',
    name: 'mileage2',
    component: HomeMileage2,
  },
  {
    path: 'api/loading',
    component: LoadingSpinnerTest
  },
  {
    path: 'api/news',
    component: NewsList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
