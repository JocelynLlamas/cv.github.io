<script setup>
import { computed } from 'vue'
import { formatValue } from '../utils/Utils'
import { RouterLink } from 'vue-router';

const props = defineProps({
  costs: {
    title: String,
    description: String,
    price: Number,
  }
})

const totalCost = computed(() => {
  return props.costs.reduce((acc, cost) => acc + cost.price, 0)
})
</script>

<template>
  <section class="py-8">
    <h2 class="text-lg font-semibold mb-5">Costs Breakdown</h2>
    <div class="overflow-x-auto">
      <table class="table-auto w-full text-sm">
        <thead class="sr-only">
          <tr>
            <th>Description</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="cost in costs">
            <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
              <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                <div class="font-semibold mb-0.5">
                  <router-link class="before:absolute before:inset-0 before:z-20 before:rounded-lg" to="/details">{{ cost.title }}</router-link>
                </div>
                <p class="text-slate-500 dark:text-slate-400">{{ cost.description }}</p>
              </th>
              <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:rounded-lg after:text-blue-500 after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition">
                  <router-link class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" to="/details" tabindex="-1">{{ formatValue(cost.price) }}</router-link>
              </td>              
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" class="text-left font-normal px-4 py-5">
              <p class="text-slate-500 italic">TOT in USD dollar</p>
            </th>
            <td class="font-semibold text-right text-emerald-500 text-base underline px-4 py-5 w-[1%]">{{ formatValue(totalCost) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>