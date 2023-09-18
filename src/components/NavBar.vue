<template>
    <nav class="nav">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
    <div class="relative flex h-20 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
<!--        <div class="flex flex-shrink-0 items-center">-->
<!--          <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">-->
<!--          <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">-->
<!--        </div>-->
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link to="#" class="text-neutral-700 px-3 py-2 rounded-md text-xl">Logo</router-link>
            <router-link to="/" class="text-neutral-700 px-3 py-2 rounded-md text-lg">Home</router-link>

<!--            <router-link to="/about" class="text-gray-800 px-3 py-2 rounded-md text-lg">About Us</router-link>-->

            <a href="/#about" class="text-neutral-700 px-3 py-2 rounded-md text-lg">About</a>
            <a href="/#services" class="text-neutral-700 px-3 py-2 rounded-md text-lg">Services</a>

            <a href="/#contact" class="text-neutral-700 px-3 py-2 rounded-md text-lg">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <router-link to="/appointment" class="bg-[#968a7d] text-white px-3 py-2 rounded-full text-sm font-medium">Booking</router-link>
        <div v-if="user == null">
          <router-link to="/login" class="text-white text-sm font-medium">Sign In</router-link>
        </div>
        <div v-if="user !== null" class="flex gap-3 items-center">
          <div>
            <img src="../assets/user.png" class="w-9 rounded-full" alt="">
          </div>
          <div>
            <p class="mb-0 font-semibold text-gray-600">{{user.name}}</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</nav>
  </template>
  
<script setup>
import {ref} from "vue";
const user = ref(JSON.parse(localStorage.getItem('user')))
</script>