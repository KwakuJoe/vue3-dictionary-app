<template>
    <div class="container mx-auto  lg:px-60 my-5 px-10">
        <div class="flex flex-row justify-between">
            <!--Icon  -->
            <div class="flex">
                <p class="text-5xl m-2 text-slate-400 dark:text-slate-50"><i class="bi bi-book "></i></p>
            </div>
            <div class="flex items-center ">
                <div class="flex row space-x-3">
            <!-- Drop Down -->
                    <!-- <div class="flex">
                    <select id="countries" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Serif</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    </select>
                    </div> -->
            <!-- bar divider -->
            <div class="flex border-l border-gray-300 h-200"></div>

            </div>
            <!-- toggle stwitch -->
            <div class="flex mx-3">
                    <label class="relative inline-flex  cursor-pointer">
                    <input type="checkbox" v-model="theme" class="sr-only peer bg-pur">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:none peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <i v-if="theme" class="bi bi-moon"></i>
                    <i v-else class="bi bi-sun"></i>
                    </span>
                </label>
            </div>   
            </div>
        </div>
    </div>
</template>
<script setup>

import { useDark } from '@vueuse/core';
import {ref, watch} from 'vue'

// const isDark = ref();
const isDarkTheme = useDark();
const theme = ref(isDarkTheme);

// isDark.value = isDarkTheme;

watch(theme, (count, prevCount) => {
  /* ... */
  console.log(count)
  console.log(prevCount)
})


</script>
<style lang="">
    
</style>