<template lang="">

<span v-if="wordStore.loading" class="bg-purple-200 text-xs font-medium text-purple-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-purple-900 dark:text-purple-200 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">
    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
    </div>
</span>

<!-- <div v-if="wordStore.loading">Loading...</div> -->


<!-- <p v-else-if="wordStore.errors">error!....</p> -->

<div v-else-if="wordStore.errors.title" class="flex  items-center justify-center p-5 w-full ">
  <div class="text-center">
    <div class="inline-flex rounded-full  p-4">
      <div class="rounded-full  p-4">
        <!-- wordStore.errors.notFoundIcon -->
        <p v-if="wordStore.errors.notFoundIcon"><i class="bi bi-binoculars text-8xl text-purple-600"></i></p>
        <p v-else><i class="bi bi-hdd-rack text-8xl text-purple-600"></i></p>
      </div>
    </div>
    <div class="flex flex-col space-y-4 items-center justify-center">
        <p class="flex mt-5 text-3xl font-bold" >{{wordStore.errors.title}}</p>
        <p class=" flex p-0 text-2xl text-slate-500">{{wordStore.errors.message}}</p>
        <p class=" flex p-0 text-sm text-pruple-600">{{wordStore.errors.resolution}}</p>
        <button @click.prevent="tryAgain()" class=" flex btn btn-wide bg-purple-600 mt-4">Try agian</button>
    </div>
  </div>
</div>



  <ul v-else-if="wordStore.data" v-for="word in wordStore.data" :key="word.license">
    <li>
        <div class="container lg:px-60 mx-auto my-8 px-10">
    <!-- Word and pronounciation -->
    <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <p class="text-5xl font-bold ">{{word.word}}</p>
          <p class="mt-3 text-2xl text-purple-600">{{word.phonetic}}</p>
        </div>
       <!-- play button -->
       <button  class="flex ext-white h-12 w-12 opacity-100 bg-purple-300 hover:bg-purple-400 font-medium rounded-full text-sm px-4 py-4 text-center dark:bg-purple-300 dark:hover:bg-purple-400 ">
          <p class="text-purple-600 hover">  
            <i class="bi bi-play-fill"></i>
          </p>
          <span class="sr-only"></span>
        </button>
      </div>

      <!-- line seperator -->
      <div class="flex items-center my-10">
        <span class="mr-4 font-lobster">Audio </span>
        <div class="flex-grow border-b border-gray-300 dark:border-gray-600"></div>
      </div>    

      
        <div  class=" flex flex-row gap-4 place-content-start flex-wrap">
       
        <div v-for="audio in word.phonetics" :key="audio.text" class="flex flex-col w-fit">
          <audio controls>
            <source :src="audio.audio" type="audio/mpeg">
          </audio>
          <p class=" flext mt-3 text-sm font-semibold text-purple-300">{{audio.text}}</p>
        </div>
        <!-- ... -->
      </div>
    


      <!-- line seperator -->
      <div v-for="meaning in word.meanings" :key="meaning.partOfSpeech">
      
        <div class="flex items-center my-10">
        <span class="mr-4 font-lobster">{{meaning.partOfSpeech}}</span>
        <div class="flex-grow border-b border-gray-300 dark:border-gray-600"></div>
      </div>

      <!-- meaning -->
      <p class="text-slate-400 dark:text-slate-500 my-7">Meaning</p>

      <!-- list of meaning -->

      <ul class="list-none text-gray-800 space-y-5  dark:text-gray-400">
        <li v-for="(d, index ) in meaning.definitions" :key="index" class="flex flex-row items-start">
        <!-- indicator -->
          <div class="border-2 border-purple-600 h-5 mr-4"></div>
            <div class="flex flex-col">
              <p class="text-">
                {{d.definition}}
            </p>
            <p class="text-gray-500 ">
                {{d.example}}
            </p>
            <div class="flex">
              <p class="text-slate-400 dark:text-slate-500 my-7">Synonyms</p>
              <div>
              <div class="flex flex-row flex-wrap">
                <p v-for="(s, index) in d.synonyms" :key="index" class="ml-4 text-purple-600 dark:text-purple-600 my-7 font-bold">{{s}}</p>
              </div>
              </div>
            </div>
            </div>
        </li>
      </ul>

      <!-- meaning -->
      <div class="flex">
        <p class="text-slate-400 dark:text-slate-500 my-7">Synonyms</p>
        <div>
            <div class="flex flex-row flex-wrap">
          <p v-for="(synonym, index) in meaning.synonyms" :key="index" class="ml-4 text-purple-600 dark:text-purple-600 my-7 font-bold">{{synonym}}</p>
            </div>
        </div>
      </div>


      </div>




        <!-- line seperator -->



      <!-- seperator -->
      <div class="flex-grow border-b border-gray-300 dark:border-gray-600 my-10"></div>

      <!-- sources --> 
      <div class="flex flex-row">

      <div class="text-sm text-gray-400 dark:text-gray-400">sources</div>

      <div class="text-sm text-gray-400 dark:text-gray-400 flex flex-row flex-wrap">
        <a v-for="(url, index) in word.sourceUrls" :key="index" :href="url" class="text-gray-600 dark:text-purple-400 font-medium underline ml-3">{{url}}</a>
      </div>

      <div class="text-sm text-gray-600 dark:text-purple-400 ml-3"><i class="bi bi-box-arrow-up-right"></i></div>


      </div>


      
  </div>

    </li>
  </ul>
</template>
<script setup>
import {onMounted} from 'vue'
import { useWordStore } from '@/assets/store/word_store';

const wordStore = useWordStore()

function tryAgain(){
    wordStore.errors.title = '';
    // wordStore.errors. = '';
}


onMounted(() => {
    wordStore.searchWord('Car')
});


</script>
<style lang=""></style>
