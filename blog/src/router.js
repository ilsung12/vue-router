import { createWebHashHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";
import Mypage from "./components/Mypage.vue";
import Call from "./components/Call.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      // '/' 없이 상대경로로 작성
      { path: "author", component: Author },
      { path: "comment", component: Comment },
    ],
  },
  {
    path: "/mypage",
    component: Mypage,
  },
  {
    path: "/call",
    component: Call,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
