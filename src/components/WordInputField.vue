<template >
      <!-- search -->
<div class="container lg:px-60 mx-auto my-10 px-10">
  <Form :validation-schema="schema" @submit="submit">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <Field v-model="input"  :disabled="wordStore.errors.title ? true : false"  name="input" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm bg-slate-200 text-gray-900 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
          <i class="bi bi-search"></i>
        </button>
    </div>
    <p class="text-sm font-normal w-fit my-2 bg-red-500 bg-opacity-20 px-3 rounded-full text-red-500"><ErrorMessage name="input"/></p>
  </Form>
</div>
  <!-- search -->
</template>
<script setup>

import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import {ref} from 'vue';
// import store from '@/store/store';
import { useWordStore } from '@/assets/store/word_store';

const wordStore = useWordStore();

const input = ref('');
// Define a validation schema
const schema = yup.object({
  input: yup.string().required()
});

async function submit() {
    wordStore.searchWord(input.value)
//   await store.dispatch('searchDictionary', input.value)
//   console.log(input.value);
}


</script>
<style>
    
</style>