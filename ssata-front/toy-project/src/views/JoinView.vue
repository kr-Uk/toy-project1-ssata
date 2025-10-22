<script>
export default {
  data() {
    return { id: '', password: '', passwordCheck: '', name: '', nickname: '' }
  },
  methods: {
    join() { /* 회원가입 처리 */ },
    goBack() { this.$router.push('/') }
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-danger text-center mb-4">회원가입</h2>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="ID" v-model="id" />
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="PW" v-model="password" />
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="PW 확인" v-model="passwordCheck" />
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="이름" v-model="name" />
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="닉네임" v-model="nickname" />
      </div>
      <button class="btn btn-danger w-100 mb-2" @click="join">회원가입</button>
      <button class="btn btn-outline-danger w-100" @click="goBack">뒤로가기</button>
    </div>
  </div>
</template>

<style scoped></style>