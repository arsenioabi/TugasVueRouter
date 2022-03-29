import { createWebHistory, createRouter } from "vue-router";
import About from "@/views/About"
import Contact from "@/views/Contact"
import ToDoList from "@/views/ToDoList"

const routes = [
    {
        path: "/about",
        name: "AboutMe",
        component: About,
    },
    {
        path: "/contact",
        name: "ContactMe",
        component: Contact,
    },
    {
        path: "/todolist",
        name: "ToDoListMe",
        component: ToDoList,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;