<script>
export default {
  data() {
    return {
      myPosts:[
        {id:1,title:'내 글 1',date:'2025-10-20',likes:2},
        {id:2,title:'내 글 2',date:'2025-10-21',likes:5}
      ]
    }
  }
}
</script>

<template>
  <div class="container mt-5 pt-4" style="max-width:800px;">
    <div class="card mb-4 p-3">
      <h3 class="text-danger">내 정보</h3>
      <p>실명: 홍길동</p>
      <p>닉네임/익명: 익명</p>
    </div>

    <div class="card p-3">
      <h4 class="text-danger mb-3">내가 쓴 글</h4>
      <table class="table table-hover">
        <thead class="table-light">
          <tr>
            <th>제목</th>
            <th>게시일</th>
            <th>좋아요</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in myPosts" :key="post.id">
            <td><a href="#">{{ post.title }}</a></td>
            <td>{{ post.date }}</td>
            <td>{{ post.likes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>