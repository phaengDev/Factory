// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home/HomePage.vue'; // Adjust the path as needed
import Login from '../components/Login.vue';
import TypeInsurance from '../views/setting/TypeInsurnce.vue';
import CompanyPage from '../views/setting/CompanyPage.vue';
import InsurancMeodel from '../views/setting/InsurancMeodel.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/type',
        name: 'TypeInsurance',
        component: TypeInsurance
    },
    {
        path: '/company',
        name: 'company',
        component: CompanyPage
    },
    {
        path: '/model',
        name: 'InsurancMeodel',
        component: InsurancMeodel
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    
});

export default router;
