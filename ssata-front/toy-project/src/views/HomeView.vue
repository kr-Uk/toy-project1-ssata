<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const hotPosts = ref([
  { id: 1, title: 'HOT1', author: '익명', date: '2025-10-21' },
  { id: 2, title: 'HOT2', author: '익명', date: '2025-10-21' },
  { id: 3, title: 'HOT3', author: '익명', date: '2025-10-21' },
])

function toUserInfo() {
  router.push("/user/123")
}

function toJoin(){
  router.push("/join")
}

function toPostList(){
  router.push("/post/123")
}

</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-danger bg-danger text-white px-4">
      <a class="navbar-brand text-white" href="#">SSATA</a>
      <div class="ms-auto d-flex align-items-center">
        <input type="text" class="form-control me-2" placeholder="검색" style="width:200px;">
        <button @click="toUserInfo">내정보</button>
        <button @click="toJoin">로그아웃</button>
      </div>
    </nav>

    <!-- Content -->
    <div class="container mt-5 pt-4">
      <div class="row">
        <!-- 게시판 목록 -->
        <div class="col-md-3 mb-3">
          <div class="card">
            <div class="card-header text-danger">게시판</div>
            <ul class="list-group list-group-flush">
              <li @click="toPostList"><a href="#">전체글보기</a></li>
              <li @click="toPostList"><a href="#">자유게시판</a></li>
              <li @click="toPostList"><a href="#">비밀게시판</a></li>
              <li @click="toPostList"><a href="#">졸업생게시판</a></li>
              <li @click="toPostList"><a href="#">정보게시판</a></li>
              <li @click="toPostList"><a href="#">장터게시판</a></li>
            </ul>
          </div>
        </div>

        <!-- HOT 게시물 -->
        <div class="col-md-9 mb-3">
          <div class="card">
            <div class="card-header text-danger">HOT 게시물</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="post in hotPosts" :key="post.id">
                <h6>{{ post.title }}</h6>
                <small class="text-muted">{{ post.author }} · {{ post.date }}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>