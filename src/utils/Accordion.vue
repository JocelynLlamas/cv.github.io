<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: String,
  id: String,
  active: Boolean,
})

const accordionOpen = ref(false)

onMounted(() => {
  accordionOpen.value = props.active
})
</script>

<template>
  <div class="text-sm odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900 rounded-lg">
    <h3>
      <button
        :id="`accordion-title-${id}`"
        class="flex items-center justify-between w-full text-left font-medium px-5 py-3"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <span>{{ title }}</span>
        <svg class="fill-slate-400 dark:fill-slate-500 shrink-0 ml-8" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
        </svg>        
      </button>
    </h3>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid text-slate-500 dark:text-slate-400 overflow-hidden transition-all duration-300 ease-in-out"    
      :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <p class="px-5 pb-3">
          <slot />
        </p>
      </div>
    </div>    
  </div>
</template>