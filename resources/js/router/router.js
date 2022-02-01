import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home";
import Matches from "../components/pages/Matches";
import Profile from "../components/pages/Profile";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/matches',
        component: Matches
    },
    {
        path: '/profile',
        component: Profile
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;