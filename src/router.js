import { createWebHistory, createRouter } from 'vue-router';
import Home from './App.vue'
import Feed from './components/Feed.vue'
import PostLecture from './components/PostLecture.vue'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
    {
        path: '/Feed',
        name: 'Feed',
        component: Feed
    },
	{
        path: '/Post',
        name: 'Post',
        component: PostLecture
    },
	{
        path: '/Signin',
        name: 'Signin',
        component: Signin
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;