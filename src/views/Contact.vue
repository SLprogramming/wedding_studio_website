<template>
  <div class="contact">
    <div>
      <div class="py-5 px-16">
        <h3 class="text-5xl text-center text-slate-600 font-bold">Contact Us</h3>
        <p class="text-center text-slate-700 mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in nesciunt omnis repudiandae tenetur. Ab, alias aperiam architecto, debitis et excepturi fugit ipsam laboriosam maxime, minima modi nihil voluptatibus voluptatum.</p>
      </div>
    </div>
    <div class="px-32 mt-16">
      <div class="flex justify-center">
        <div class="card w-[900px] p-0">
          <div class="flex flex-row items-center gap-5">
            <img src="../assets/wedding-rock.jpg" class="opacity-75 h-[500px] object-cover object-top rounded-l-lg" alt="">
            <div class="w-full">
              <div class="w-[400px] mx-auto">
                <div class="flex flex-col">
                  <div class="mb-5">
                    <p class="text-5xl text-center text-gray-300 font-semibold">Get in Touch</p>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="label">Email</label>
                    <input id="name" name="name" type="email" class="w-full border-slate-200 rounded-md shadow-sm">
                    <!--              <span v-if="errors.name" class="text-xs text-rose-400">{{this.errors.name[0]}}</span>-->
                  </div>
                  <div class="mb-3">
                    <label for="message" class="label">Message</label>
                    <textarea name="" id="message" rows="3" class="input"></textarea>
                    <!--              <span v-if="errors.phone" class="text-xs text-rose-400">{{this.errors.phone[0]}}</span>-->
                  </div>
                  <div class="mb-3">
                    <button class="bg-[#968a7d] text-white px-5 shadow py-1 rounded-md" type="button"><span class="mb-0">Send</span> <PaperAirplaneIcon class="w-4 inline text-white"/> </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
// import {};
import {PaperAirplaneIcon} from "@heroicons/vue/20/solid";

export default {
  name: "Contact",
  components: {
    PaperAirplaneIcon,
  },
}
</script>

<style scoped>

</style>