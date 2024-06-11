<script setup>
import Header from '../partials/Header.vue'
import QuoteTitle from '../partials/QuoteTitle.vue'
import Brief from '../partials/Brief.vue'
import Details from '../partials/QuoteDetails.vue'
import CostsList from '../partials/CostsList.vue'
import Terms from '../partials/Terms.vue'
import Cta from '../partials/Cta.vue'

const costs = [
  {
    title: 'Competitive Analysis',
    description: 'The client is looking to review the information.',
    price: 7800,
  },
  {
    title: 'UX Research Reports',
    description: 'The client is looking to review the information.',
    price: 2560,
  },
  {
    title: 'Sitemap and Information Architecture',
    description: 'The client is looking to review the information.',
    price: 1420,
  },
  {
    title: 'UX Wireframes and User Flows',
    description: 'The client is looking to review the information.',
    price: 3978,
  },
  {
    title: 'Visual Design',
    description: 'The client is looking to review the information.',
    price: 4476,
  },
  {
    title: 'Interactive Prototypes + Assets Exports',
    description: 'The client is looking to review the information.',
    price: 4326,
  },          
]
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <Header />

    <div class="grow flex flex-col lg:flex-row">

      <!-- Left side -->
      <QuoteTitle title="About" date="Computer Engineering focused on
      improving her skills and interested in web
      development." />

      <!-- Right side -->
      <main class="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
          <!-- Page content -->
          <div class="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20"> 
            
            <article class="divide-y divide-slate-100 dark:divide-slate-800 -mt-8 mb-4">
              <Brief>
                <p><strong class="text-slate-900 dark:text-slate-200 font-medium">Computer science engineering</strong></p>
                <p style="margin-top: 0%;">Universidad Autónoma de San Luis
                  Potosí, Facultad de Ingeniería.</p>
                <p class="block font-caveat text-xl text-slate-500 dark:text-slate-400" style="margin-top: 0%;">2018 - 2023.</p>
                <li style="text-decoration: dashed;">Web Development Speciality.</li>
              </Brief>
              <Details projectLength="4-8 Weeks" startDate="27 Jun, 2024" endDate="27 Aug, 2024" />
              <CostsList :costs="costs" />
              <Terms />
            </article>

          </div>
          <Cta />
      </main>

    </div>

  </div>
</template>