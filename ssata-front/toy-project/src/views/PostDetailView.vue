<script>
export default {
  data() {
    return {
      post: {
        title:'게시글 상세',
        author:'익명',
        date:'2025-10-21',
        content:'게시글 내용이 들어갑니다.',
        likes:5,
        commentsList:[
          {id:1,author:'홍길동',content:'댓글1'},
          {id:2,author:'익명',content:'댓글2'}
        ]
      }
    }
  }
}
</script>

<template>
  <div class="container mt-5 pt-4" style="max-width: 800px;">
    <div class="card mb-3">
      <div class="card-body">
        <h3 class="text-danger">{{ post.title }}</h3>
        <small class="text-muted">{{ post.author }} · {{ post.date }}</small>
        <p class="mt-3">{{ post.content }}</p>
        <button class="btn btn-danger">좋아요 {{ post.likes }}</button>
      </div>
    </div>

    <!-- 댓글 -->
    <div class="card">
      <div class="card-body">
        <h5 class="text-danger">댓글</h5>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item" v-for="comment in post.commentsList" :key="comment.id">
            <strong class="text-danger">{{ comment.author }}:</strong> {{ comment.content }}
          </li>
        </ul>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="댓글 입력">
          <button class="btn btn-danger">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>