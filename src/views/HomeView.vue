<template>
  <NavBar></NavBar>
  <div>

    <div id="default-carousel" class="relative" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-screen overflow-hidden">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/wedding-river.svg" class="absolute w-full h-screen object-cover object-top" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/wedding-firework.svg" class="absolute w-full h-screen object-cover object-top" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/wedding-beach.svg" class="absolute w-full h-screen object-cover object-top" alt="...">
        </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
  <div id="about">
    <AboutView></AboutView>
  </div>
  <div id="services">
    <Service></Service>
  </div>
  <div id="contact">
    <Contact></Contact>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import 'v-calendar/dist/style.css';
import axios from "axios";
import NavBar from "@/components/NavBar";
import { MinusIcon } from '@heroicons/vue/24/outline'
import Service from "@/views/Service";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import AboutView from "@/views/AboutView";

export default {
  name: 'HomeView',
  components: {
    AboutView,
    Footer,
    Contact,
    Service,
    NavBar,
    MinusIcon,
  },
  data() {
    return {
      selectedDay: {},
      is_time: false,
      date: '',
      availableTime : [
        {
          date: '',
          start: '09:00:00',
          end: '12:00:00',
          is_available: true,
        },
        {
          date: '',
          start: '12:00:00',
          end: '15:00:00',
          is_available: true,
        },
        {
          date: '',
          start: '15:00:00',
          end: '18:00:00',
          is_available: false,
        },
      ],
      select_time : {},
      appointments : {},


    }
  },
  methods: {
    dayClicked(day) {
      this.is_time = true
      this.selectedDay = day;
      this.availableTime.map(el=>el.date = day.id)

      // axios.get('http://127.0.0.1:8000/api/appointment?date='+day.id)
      //     .then(res=>{
      //       this.appointments = res.data.data
      //     })
      //     .catch(err=>{
      //       console.log(err)
      //     })


    },
    selectTime : function (data){
      this.select_time = data
    },
    createAppointment: function (){
      let formData = new FormData(this.$refs.createAppointment)
      axios.post('http://127.0.0.1:8000/api/appointment',formData)
      .then(res=> {
        this.$refs.createAppointment.reset()
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getAppointment: function (){

    }
  },
  mounted() {

  }
}
</script>
