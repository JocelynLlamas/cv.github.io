<script setup>
import Illustration from '../images/bg-illustration.svg'
const props = defineProps({
  title: String,
  date: String,
})
</script>

<template>
  <div class="relative w-full lg:w-1/2 lg:fixed lg:inset-0 lg:overflow-y-auto no-scrollbar bg-blue-100 lg:rounded-r-[3rem] dark:bg-slate-900">

    <!-- Background Illustration -->
    <div class="absolute top-0 -translate-y-64 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true">
      <img class="max-w-none" :src="Illustration" width="785" height="685" alt="Bg illustration">
    </div>

    <div class="min-h-full w-full max-w-xl mx-auto flex flex-col justify-start px-4 sm:px-6 pt-36 pb-20 lg:py-20">
      <div class="grow flex flex-col justify-center">

        <div class="space-y-3">
          <div class="font-caveat text-3xl text-blue-800 dark:text-blue-500">Computer engineer</div>
          <h1 class="h1 font-orbiter font-bold text-blue-600 dark:text-white">{{ props.title }}</h1>
          <time class="block font-caveat text-xl text-slate-500 dark:text-slate-400 before:content-['—_']">{{ props.date }}</time>
        </div>

      </div>
    </div>
  </div>
</template>