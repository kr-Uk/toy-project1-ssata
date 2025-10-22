<script>
export default {
  data() {
    return { title:'', content:'', anonymous:false }
  },
  methods: {
    submit() { /* 게시글 등록 */ }
  }
}
</script>

<template>
  <div class="container mt-5 pt-4" style="max-width:600px;">
    <div class="card p-3">
      <h2 class="text-danger mb-3">게시글 작성</h2>
      <div class="mb-3">
        <label class="form-label">제목</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="mb-3">
        <label class="form-label">내용</label>
        <textarea class="form-control" rows="6" v-model="content"></textarea>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="anonymous" v-model="anonymous">
        <label class="form-check-label" for="anonymous">익명</label>
      </div>
      <button class="btn btn-danger me-2" @click="submit">등록</button>
      <button class="btn btn-secondary" @click="$router.back()">취소</button>
    </div>
  </div>
</template>

<style></style>