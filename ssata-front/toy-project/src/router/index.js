import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Join from '../views/JoinView.vue'
import UserInfo from '../views/UserInfoView.vue'
import PostDetail from '../views/PostDetailView.vue'
import PostList from '../views/PostListView.vue'
import Write from '../views/WriteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/join",
      name: "Join",
      component: Join,
    },
    {
      path: "/user/:loginId",
      name: "UserInfo",
      component: UserInfo, 
      props : true, /* /user/{userid} 의 형태이나, props로 값 전달*/
    },
    {
      path: "/post/:id",
      name: "PostList",
      component: PostList,
    },
    {
      path: "/post/detail/:id",
      name: "PostDetail",
      component: PostDetail,
    },
    {
      path: "/write",
      name: "Write",
      component: Write,
    }
  ]
})

export default router
