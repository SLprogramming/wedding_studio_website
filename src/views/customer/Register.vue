<template>
  <div class="h-screen services">
    <div class="p-16">
      <div class="card p-0 mx-auto w-[900px] shadow-md">
        <div class="flex items-center">
          <div>
            <img src="../../assets/wedding-sea.jpg" class="w-[500px] h-[500px] object-cover rounded-l-lg" alt="">
          </div>
          <div class="w-auto mx-auto">
            <div>
              <form @submit.prevent="" ref="register">
                <div class="mb-3">
                  <p class="text-center text-gray-600 font-semibold text-2xl mb-2">Register New Account</p>
                  <p class="text-emerald-500 text-sm text-center"><router-link to="/login">Or Already Have an Account?</router-link></p>
                </div>
                <div class="mb-3">
                  <label for="name" class="label">Name</label>
                  <input id="name" name="name" type="text" class="w-full border-slate-300 rounded-md">
                </div>
                <div class="mb-3">
                  <label for="email" class="label">Email</label>
                  <input id="email" name="email" type="text" class="w-full border-slate-300 rounded-md">
                </div>
                <div class="mb-3">
                  <label for="phone" class="label">Phone</label>
                  <input id="phone" name="phone" type="number" class="w-full border-slate-300 rounded-md">
                </div>
                <div class="mb-5">
                  <label for="password" class="label">Password</label>
                  <input id="password" name="password" type="password" class="w-full border-slate-300 rounded-md">
                </div>
                <div class="mb-3">
                  <button @click="register" class="bg-indigo-500 px-10 py-2 w-full text-white rounded-md shadow-indigo-500/20">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {

    }
  },
  methods: {
    register : function () {
      let formData = new FormData(this.$refs.register)
      axios.post('http://127.0.0.1:8000/api/register',formData)
      .then(res => {
        this.$store.dispatch('showSuccessAlert')
        this.$refs.register.reset()
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