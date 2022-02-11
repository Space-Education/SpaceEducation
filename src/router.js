import { createWebHistory, createRouter } from 'vue-router';
import Home from './App.vue'
import Feed from './components/Feed.vue'
import PostLecture from './components/PostLecture.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import AboutUs from './components/AboutUs.vue'
import Payment from "./components/Payment.vue"
import Profil from "./components/ProfilUser.vue"

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
    {
        path: '/',
        name: 'Feed',
        component: Feed
    },
	{
        path: '/Post',
        name: 'Post',
        component: PostLecture
    },
	{
        path: '/Login',
        name: 'Login',
        component: Login
    },
	{
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
	{
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
	{
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path:"/Payment",
        name:'Payment',
        component:Payment
    },
    {
        path:"/Profil",
        name:'Profil',
        component:Profil
    },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;