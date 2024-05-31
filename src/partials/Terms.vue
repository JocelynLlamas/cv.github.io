<script setup>
import Accordion from '../utils/Accordion.vue'

const terms = [
  {
    title: 'Payment schedule and options',
    text: 'Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.',
    active: false,
  },
  {
    title: 'Deadlines and timeline',
    text: 'Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.',
    active: false,
  },
  {
    title: 'Kill fee and cancellation terms',
    text: 'Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.',
    active: false,
  },
  {
    title: 'Ownership/copyright',
    text: 'Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.',
    active: false,
  },
  {
    title: 'Equipment and expenses',
    text: 'Defining the project scope is a collaborative effort with my client. Together, we establish key features, functionalities, and any constraints that will shape the design process. This clarity ensures that we are aligned and working towards the same goals.',
    active: false,
  },              
]
</script>

<template>
  <section class="py-8">
    <h2 class="text-lg font-semibold mb-5">Project Terms</h2>
    <div class="space-y-3">
      <template v-for="(term, index) in terms">
        <Accordion :title="term.title" :id="`terms-${index}`" :active="term.active">
          {{ term.text }}
        </Accordion>
      </template>
    </div>
  </section>
</template>
