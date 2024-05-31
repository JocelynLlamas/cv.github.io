<script setup>
const props = defineProps({
  projectLength: String,
  startDate: String,
  endDate: String,
})
</script>

<template>
  <section class="py-8">
    <h2 class="text-lg font-semibold mb-5">Details</h2>
    <ul class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
      <li class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="text-slate-200 font-medium">Project Length</div>
        <div class="text-slate-400">{{ props.projectLength }}</div>
      </li>
      <li class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="text-slate-200 font-medium">Start Date</div>
        <time class="text-slate-400">{{ props.startDate }}</time>
      </li>
      <li class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="text-slate-200 font-medium">End Date</div>
        <time class="text-slate-400">{{ props.endDate }}</time>
      </li>
    </ul>
  </section>
</template>