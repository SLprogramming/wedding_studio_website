<template>
  <div class="services">
    <div class="py-5 px-16">
      <h3 class="text-5xl text-center text-slate-600 font-bold">Services</h3>
      <p class="text-center text-slate-700 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in nesciunt omnis repudiandae tenetur. Ab, alias aperiam architecto, debitis et excepturi fugit ipsam laboriosam maxime, minima modi nihil voluptatibus voluptatum.</p>
    </div>
    <div>
    </div>
    <div class="px-16">
      <div class="flex justify-start flex-wrap flex-row gap-16">
        <div v-for="p in packages" class="card p-0 w-72">
          <div>
            <img src="../assets/wedding-rock.jpg" class="w-72 h-60 rounded-t-lg object-cover object-center" alt="">
            <p class="text-center text-lg font-semibold text-slate-600 py-1">{{p.name}}</p>
          </div>
          <div class="p-3">
            <div class="mb-3">
              <p class="text-sm text-slate-500">{{p.description}}</p>
              <p class="text-gray-500">{{p.price}} MMK</p>
            </div>

            <div class="flex justify-center">
              <button class="bg-[#968a7d] text-white px-7 shadow py-1 rounded-full" type="button">Book</button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-10 flex justify-center">
        <button class="bg-[#968a7d] text-white px-10 shadow py-2 rounded-lg" type="button">Explore More <ArrowRightIcon class="w-5 inline text-white"/> </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/vue/24/solid'
export default {
  name: "Service",
  components: {
    ArrowLeftIcon,
    ArrowRightIcon
  },
  data() {
    return {
      packages : {},
    }
  },
  methods: {
    getPackages: function (){
      axios.get('http://127.0.0.1:8000/api/package')
          .then(res => {
            this.packages = res.data.data
          })
          .catch(err => {
            console.log(err)
          })
    },
  },
  mounted() {
    this.getPackages()
  }
}
</script>

<style scoped>

</style>