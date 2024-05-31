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
      <QuoteTitle title="The Markyk Corp." date="20 April, 2024" />

      <!-- Right side -->
      <main class="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
          <!-- Page content -->
          <div class="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20"> 
            
            <article class="divide-y divide-slate-100 dark:divide-slate-800 -mt-8 mb-4">
              <Brief>
                The client is looking to review and revamp the information architecture, user experience and user interface design of <strong class="text-slate-900 dark:text-slate-200 font-medium">The Markyk Corp.</strong>, a web application that connects landlords and tenants across Europe and America.
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