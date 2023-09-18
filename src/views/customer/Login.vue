<template>
  <div class="h-screen about p-16">
    <div class="card p-0 mx-auto w-[900px] shadow-md">
      <div class="flex items-center">
        <div>
          <img src="../../assets/wedding-firework.svg" class="w-[500px] h-[500px] rounded-l-lg object-cover" alt="">
        </div>
        <div class="mx-auto">
          <div class="mb-3">
            <p class="text-center text-gray-600 font-semibold text-2xl mb-2">Sign In to Your Account</p>
            <p class="text-indigo-500 text-sm text-center"><router-link to="/register">Or Create New Account!</router-link></p>
          </div>
          <form @submit.prevent="" ref="login">
            <div class="mb-3">
              <label for="email" class="label">Email</label>
              <input id="email" name="email" type="text" class="w-full border-slate-300 rounded-md">
            </div>
            <div class="mb-5">
              <label for="email" class="label">Password</label>
              <input id="password" name="password" type="password" class="w-full border-slate-300 rounded-md">
            </div>
            <div class="mb-3">
              <button @click="login" class="bg-emerald-400 px-10 py-2 w-full text-white rounded-md shadow-emerald-400/30">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
    }
  },
  methods: {
    login : function () {
      let formData = new FormData(this.$refs.login)
      axios.post('http://127.0.0.1:8000/api/login',formData)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
        this.$refs.login.reset()
        
        localStorage.setItem('user', JSON.stringify(res.data.data))
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>