import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";

const baseUrl = "/psychologyman/";

const routes = [
  {
    path: baseUrl,
    name: "Home",
    component: Home,
  },
  {
    path: `${baseUrl}about`,
    name: "About",
    component: About,
  },
  {
    path: `${baseUrl}news`,
    name: "News",
    component: News,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
