// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Category from "@/views/Category.vue";
import Post from "@/views/Post.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/category/:id", component: Category },
  { path: "/post/:id", component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
