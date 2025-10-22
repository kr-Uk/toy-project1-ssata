<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: '게시글1', author: '익명', date: '2025-10-21', comments: 2, likes: 5 },
        { id: 2, title: '게시글2', author: '홍길동', date: '2025-10-20', comments: 3, likes: 2 }
      ]
    }
  }
}
</script>

<template>
  <div class="container mt-5 pt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="text-danger">게시글 목록</h2>
      <button class="btn btn-danger" @click="$router.push('/write')">글쓰기</button>
    </div>
    <table class="table table-hover">
      <thead class="table-light">
        <tr>
          <th>제목</th>
          <th>작성자</th>
          <th>게시일</th>
          <th>댓글</th>
          <th>좋아요</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id" @click="$router.push('/post/detail/123')">
          <td><a href="#">{{ post.title }}</a></td>
          <td>{{ post.author }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.comments }}</td>
          <td>{{ post.likes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>