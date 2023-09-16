import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/gym_istra',
    name: 'gym_istra',
    component: () => import('../views/GymIstraView.vue')
  },
  {
    path: '/workouts',
    name: 'workouts',
    component: () => import('../views/WorkoutsView.vue')
  },
  {
    path: '/meal_plan',
    name: 'meal_plan',
    component: () => import('../views/MealplanView.vue')
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: () => import('../views/Kontakt.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
