import { createRouter, createWebHistory } from 'vue-router'
import MainDiv from '../components/main_div/MainDiv.vue'
import DepositWithdraw from '../components/deposit_withdraw_view/DepositWithdraw.vue'

const routes = [
    {
        path: '/',
        component: MainDiv
    },
    {
        path: '/deposit-withdraw',
        component: DepositWithdraw
        
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
  })

export default router