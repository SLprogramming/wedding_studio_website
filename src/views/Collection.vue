<template>
  <div class="">
    <div class="p-3">
      <p class="font-semibold mb-5 text-gray-700 text-xl">My Collections</p>
      <div>
        <div class="mb-10">
          <div class="card w-[700px] mx-auto">
            <div class="flex gap-5 ">
              <div>
                <img src="../assets/wedding-rock.jpg" class="w-52 rounded-md" alt="">
              </div>
              <div class="bg-gray-100 rounded p-3">
                <div class="flex gap-3">
                  <div>
                    <p>Name :</p>
                  </div>
                  <div>
                    <p>Name</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div>
                    <p>Phone :</p>
                  </div>
                  <div>
                    <p>Phone</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div>
                    <p>Date :</p>
                  </div>
                  <div>
                    <p>Date</p>
                  </div>
                </div>
                <div>
                  <button class="bg-indigo-500 rounded px-10 py-1 text-white">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-wrap gap-5 h-screen">
        <div class="" v-for="photo in photos">
          <div class="relative">
            <img :src="photo.photo" class="w-52 mb-2 rounded" alt="">
            <div class="absolute bottom-1 left-5">
              <a
                  type="button"
                  :href="'http://127.0.0.1:8000/api/photo_collection/'+photo.id"
                  download="file.jpg"
              >
                <button class="bg-indigo-500 px-5 py-1 rounded-full shadow text-white">
                  <ArrowDownTrayIcon class="w-4"/>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import {ArrowDownTrayIcon} from "@heroicons/vue/24/solid";

export default {
  name: "Collection",
  components: {ArrowDownTrayIcon},
  data() {
    return {
      photos: {
      },
    }
  },
  methods: {
    getPhotos: function () {
      axios.get('http://127.0.0.1:8000/api/photo_collection')
      .then(res => {
        this.photos = res.data.data
      })
      .catch(err => console.log(err))
    },
    getPhoto: function (id) {
      axios.get('http://127.0.0.1:8000/api/photo_collection/'+id)
        .then(res => {
          let link = document.createElement('a')
          link.href = res.data.data.photo
          link.target = '_blank'
          link.download
          link.click()
        })
      .catch(err => {
        console.log(err)
      })
  }

  },
  mounted() {
    this.getPhotos()
  }
}
</script>

<style scoped>

</style>