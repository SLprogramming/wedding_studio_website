<template>
  <NavBar></NavBar>
  <div class="bg-[#fcf8ee] h-auto">
    <div class="py-5 px-16">
      <h3 class="text-5xl text-center text-slate-600 font-bold">Available Packages</h3>
    </div>
    <div>
      <div class="px-16 py-8">
        <div class="flex justify-start gap-10 flex-wrap">
          <div v-for="p in packages" class="card p-0 shadow w-72 h-auto">
            <div>
              <img src="../assets/wedding-rock.jpg" class="w-72 h-60 rounded-t-lg object-cover object-center" alt="">
              <p class="text-center font-semibold text-slate-500 pt-1">{{p.name}}</p>
            </div>
            <div class="px-3 pb-1">
              <div class="mb-3 px-3 py-2 bg-gray-100 rounded-lg">
                <p class="text-sm text-slate-500">{{p.description}}</p>
                <p class="text-gray-500 mt-2 text-sm">{{p.price}} MMK</p>
                <div class="flex my-2 justify-center">
                  <button
                      type="button"
                      @click="openModal(p)"
                      class="rounded-md bg-black bg-opacity-20 px-5 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    Book
                  </button>
                  <TransitionRoot appear :show="isOpen" as="template">
                    <Dialog as="div" @close="closeModal" class="relative z-10">
                      <TransitionChild
                          as="template"
                          enter="duration-300 ease-out"
                          enter-from="opacity-0"
                          enter-to="opacity-100"
                          leave="duration-200 ease-in"
                          leave-from="opacity-100"
                          leave-to="opacity-0"
                      >
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                      </TransitionChild>

                      <div class="fixed inset-0 overflow-y-auto">
                        <div
                            class="flex min-h-full items-center justify-center p-4 text-center"
                        >
                          <TransitionChild
                              as="template"
                              enter="duration-300 ease-out"
                              enter-from="opacity-0 scale-95"
                              enter-to="opacity-100 scale-100"
                              leave="duration-200 ease-in"
                              leave-from="opacity-100 scale-100"
                              leave-to="opacity-0 scale-95"
                          >
                            <DialogPanel
                                class="w-[950px] h-[400px] overflow-y-scroll transform rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                              <div class="mt-2">
                                <div class="bg-gray-100 p-3 mb-3 rounded-lg">
                                  <p class="font-semibold text-lg text-gray-700 mb-3">Package Status</p>
                                  <div class="flex mb-2 w-[600px]">
                                    <div class="w-1/2 text-gray-600">
                                      Name
                                    </div>
                                    <div class="w-1/2 text-gray-500">{{select_package.name}}</div>
                                  </div>
                                  <div class="flex mb-2 w-[600px]">
                                    <div class="w-1/2 text-gray-600">
                                      Price
                                    </div>
                                    <div class="w-1/2 text-gray-500">{{select_package.price}} MMK</div>
                                  </div>
                                  <div class="flex mb-2 w-[600px]">
                                    <div class="w-1/2 text-gray-600">
                                      No of Dresses
                                    </div>
                                    <div class="w-1/2 text-gray-500">{{select_package.no_of_dress}}</div>
                                  </div>
                                  <div class="flex mb-2 w-[600px]">
                                    <div class="w-1/2 text-gray-600">
                                      Description
                                    </div>
                                    <div class="w-1/2 text-gray-500">{{select_package.description}}</div>
                                  </div>
                                </div>
                                <div>
                                  <p class="font-medium text-lg text-gray-700 mb-3">Please Choose {{select_package.no_of_dress}} Dresses.</p>
<!--                                  Available Dresses-->
                                  <div class="mb-3">
                                    <div class="flex flex-row flex-wrap gap-3">
                                      <div class="rounded-lg" v-for="dress in select_package.available_dresses">
                                        <div class="relative">
                                          <img class="w-52 rounded-lg object-cover" :src="dress.photo" alt="">
                                          <div class="absolute bottom-1 left-1">
                                            <input type="checkbox" :value="dress.id" v-model="dress_id" class="checkbox rounded border-slate-300 shadow">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
<!--                                  Available Theme-->
                                  <div>
                                    <p class="font-medium text-lg text-gray-700 mb-3">Please Choose {{select_package.no_of_theme}} Themes.</p>
                                  <div class="mb-3">
                                    <div class="flex flex-row flex-wrap gap-3">
                                      <div class="rounded-lg" v-for="theme in select_package.available_themes">
                                        <div class="relative">
                                          <img class="w-52 rounded-lg object-cover" :src="theme.photo" alt="">
                                          <div class="absolute bottom-1 left-1">
                                            <input type="checkbox" :value="theme.id" v-model="theme_id" class="checkbox rounded border-slate-300 shadow">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                    </div>
                                </div>
                              </div>

                              <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal"
                                >
                                  Got it, thanks!
                                </button>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
  <div class="container px-4">
    <!-- <h3 class="text-gray-500 text-xl font-semibold text-center my-5">Appointment</h3> -->
    <div class=" sm:grid sm:grid-cols-none md:grid-cols-3 lg:grid-cols-3 my-5">
      <div class="mb-5">
        <div>
          <v-date-picker class="border-0 shadow-md"
              is-expanded
              color="teal"
              @dayclick="dayClicked"
          />
        </div>
      </div>
      <div v-if="is_time == true" class="mx-auto">
        <div class="card mx-auto">
          <p class="text-center text-lg mb-3 text-slate-500 font-semibold">{{selectedDay.ariaLabel}}</p>
          <form @submit.prevent="" ref="createAppointment">
            <div class="mb-3 hidden">
              <label for="date" class="label">Date</label>
              <input readonly id="date" name="date" v-model="selectedDay.id" type="date" class="input">
            </div>
            <div class="bg-neutral-100 p-3 mb-3 rounded-lg shadow-sm">
              <p class="text-slate-500 text-sm mb-3">Please Choose Available Time</p>
              <div v-for="time in availableTime">
                <button type="button"  @click="selectTime(time)"  class="card-sm block w-full mb-3 hover:bg-slate-50 hover:shadow-lg transition duration-300">
                  <p v-if="time.is_available == true" class="text-center text-sm text-green-500">{{time.name}}</p>
                  <p v-if="time.is_available == false" class="text-center text-sm text-red-500">{{time.name}}</p>
                  <p class="text-center text-xs text-slate-500">{{time.description}}</p>
                </button>
              </div>
              <span v-if="errors.start" class="text-rose-400 text-center text-xs">Please Choose Available Time!</span>
            </div>
            <div class="mb-3 flex justify-between space-x-5">
              <div class="w-full">
                <label for="start" class="label">Start Time</label>
                <input readonly id="start" name="start" v-model="select_time.start" type="time" class="input" >
              </div>
              <div class="w-full">
                <label for="end" class="label">End Time</label>
                <input readonly id="end" name="end" v-model="select_time.end" type="time" class="input" >
              </div>
            </div>

            <div class="mb-3">
              <label for="name" class="label">Name</label>
              <input id="name" name="name" type="text" class="input" >
              <span v-if="errors.name" class="text-xs text-rose-400">{{this.errors.name[0]}}</span>
            </div>
            <div class="mb-3">
              <label for="phone" class="label">Phone </label>
              <input id="phone" name="phone" type="number" class="input" >
              <span v-if="errors.phone" class="text-xs text-rose-400">{{this.errors.phone[0]}}</span>
            </div>
<!--            <div class="mb-3">-->
<!--              <label for="package" class="label">Package </label>-->
<!--              <input id="package" name="package_id" type="number" class="input" >-->
<!--            </div>-->
            <div class="mt-5">
              <button @click="createAppointment" class="btn-primary w-full">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div class="">
        <div class="card">
          <p class="mb-3 font-semibold text-slate-600">Packages</p>
          <div class="mb-3">
            <label for="package" class="label">Packages</label>
            <select @change="selectPackage(select_package_id)" v-model="select_package_id" name="" id="package" class="input">
              <option value="">Choose Package</option>
              <option :value="p.id" v-for="p in packages">{{p.name}}</option>
            </select>
          </div>
          <div>
            <p class="mb-3 font-semibold text-slate-500">Available Dresses</p>
            <div class="" v-for="dress in package.available_dresses">
              <div>
                <img class="mb-2 rounded-md" :src="dress.photo" style="width: 200px;" alt="">
                <div>
                  <div class="flex items-center mb-4">
                    <input type="checkbox" :value="dress.id" v-model="dress_id" class="checkbox rounded border-slate-200">
                    <label class="ml-2 text-sm font-medium text-gray-500">{{dress.name}}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="mb-3 font-semibold text-slate-500">Available Themes</p>
            <div class="" v-for="theme in package.available_themes">
              <div>
                <img class="mb-2 rounded-md" :src="theme.photo" style="width: 200px;" alt="">
                <div>
                  <div class="flex items-center mb-4">
                    <input type="checkbox" :value="theme.id" v-model="theme_id" class="checkbox rounded border-slate-200">
                    <label class="ml-2 text-sm font-medium text-gray-500">{{theme.name}}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
export default {
  name: "Appointment",
  components: {Modal, Nav, NavBar,TransitionRoot,TransitionChild,Dialog,DialogPanel,DialogTitle},
  data() {
    return {
      select_package_id: '',
      dress_id: [],
      theme_id: [],
      selectedDay: {},
      is_time: false,
      date: '',
      availableTime : [
        {
          date: '',
          name: 'Morning Section',
          start: '09:00:00',
          end: '12:00:00',
          description: '9 AM to 12 PM',
          is_available: true,
        },
        {
          date: '',
          name: 'Afternoon Section',
          start: '12:00:00',
          end: '15:00:00',
          description: '12 PM to 3 PM',
          is_available: true,
        },
        {
          date: '',
          name: 'Evening Section',
          start: '15:00:00',
          end: '18:00:00',
          description: '3 PM to 6 PM',
          is_available: true,
        },
      ],
      select_time : {},
      appointments : {},
      errors : {},
      packages: {},
      package: {},
      isOpen: false,
      select_package : {},
    }
  },
  methods: {
    openModal : function (value){
      this.select_package = value
      this.isOpen = true
    },
    closeModal : function (){
      this.isOpen = false
    },
    dayClicked(day) {
      this.is_time = true
      this.selectedDay = day;
      this.availableTime.map(el=> {
        el.date = day.id
      })
    
      axios.get('http://127.0.0.1:8000/api/appointment?date='+day.id)
          .then(res=>{
            let start_time_arr = []
            this.appointments = res.data.data
            this.appointments.map(el=>{
              start_time_arr.push(el.start)
            })
            this.availableTime.map(el=>{
             if(start_time_arr.includes(el.start) == true){
               el.is_available = false
             }else {
               el.is_available = true
             }
            })
          })
          .catch(err=>{
            console.log(err)
          })
    },
    selectTime : function (data){
      if (data.is_available == false){
        this.select_time = {}
        this.$store.dispatch('showErrorAlert')
      }else if (data.is_available == true){
        this.select_time = data
      }
    },
    getPackages: function (){
      axios.get('http://127.0.0.1:8000/api/package')
      .then(res => {
        this.packages = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    getPackage: function (id){
      axios.get('http://127.0.0.1:8000/api/package/'+id)
      .then(res => {
        this.package = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    createAppointment: function (){
      let formData = new FormData(this.$refs.createAppointment)
      formData.append('package_id',this.select_package_id)
      formData.append('dress_id',JSON.stringify(this.dress_id))
      formData.append('theme_id',JSON.stringify(this.theme_id))
      axios.post('http://127.0.0.1:8000/api/appointment',formData)
          .then(res=> {
            this.$refs.createAppointment.reset()
            this.errors = ''
            this.$store.dispatch('showSuccessAlert')
          })
          .catch(err=>{
            this.errors = err.response.data.errors
            console.log(err)
          })
    },
    selectPackage: function (id){
      this.getPackage(id)
    },
  },
  mounted() {
    this.getPackages()
  }
}
</script>

<style scoped>

</style>