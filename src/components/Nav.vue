<template>
  <nav class="bg-blue-200 relative mx-auto py-4 px-6">
    <div class="flex items-center justify-between">
<!--   Nav logo-->
      <div>
        <img src="../assets/logo.png" class="w-7 h-7" alt="">
        
      </div>
<!--      Nav Items-->
      <div class="hidden sm:flex md:flex space-x-6">
        <router-link  to="/">Home</router-link>
        <router-link  to="/about">About Us</router-link>
        <a href="#" >Service</a>
        <router-link to="/appointment">Booking</router-link>
        <a href="#">Contact</a>
      

      </div>


<!--     Nav Toggle Button-->
      <button @click="toggleMenu" class="md:hidden">
        <i id="menu-btn" class="fa-solid fa-bars text-slate-600"></i>
<!--        <i class="fa-solid fa-xmark text-slate-500 fa-2x"></i>-->
      </button>

    </div>
    <div id="nav-menu" class="mt-5 absolute z-1 w-full left-0 bg-blue-200 p-5 top-[-400px] ">
      <ul class="flex flex-col space-y-7">
        <li class="">
          <router-link  to="/">Home</router-link>
        </li>
        <li>
          <router-link  to="/about">About Us</router-link>

        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <router-link to="/appointment">Booking</router-link>

        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>

    
  </nav>

</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: "Nav",
  components: {Menu},
  methods: {
    toggleMenu: function () {
      let icon = document.getElementById('menu-btn');
      let nav_menu = document.getElementById('nav-menu');
      icon.classList.toggle("fa-bars")
      icon.classList.toggle("fa-xmark")
      nav_menu.classList.toggle("top-[-400px]")
    }
  },
}

</script>

<style scoped>

</style>