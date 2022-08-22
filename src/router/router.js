import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIDPage from "@/pages/PostIDPage";
import PostPageWebStore from "@/pages/PostPageWebStore";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIDPage
    },
    {
        path: '/store',
        component: PostPageWebStore
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;