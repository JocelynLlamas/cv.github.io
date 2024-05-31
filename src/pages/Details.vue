<script setup>
import Header from '../partials/Header.vue'
import BackButton from '../partials/BackButton.vue'
import QuoteTitle from '../partials/QuoteTitle.vue'
import DetailsImageLight from '../images/details-image-light.png'
import DetailsImageDark from '../images/details-image-dark.png'
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

          <BackButton />

          <article>
            <h2 class="h2 font-orbiter mb-4">Competitive Analysis</h2>
            <div class="text-slate-500 dark:text-slate-400 space-y-4">
              <p>
                The discovery phase is an essential part of my design process where I delve into every aspect of the product <strong class="text-slate-900 dark:text-slate-200 font-medium">to gain a comprehensive understanding</strong>. It involves conducting extensive research and analysis to gather insights that lay the groundwork for the entire design journey.
              </p>
              <p>
                During this phase, I explore various elements such as the competition, market dynamics, and current challenges to inform my design decisions. Here's what the discovery phase typically includes:
              </p>
              <ul class="space-y-4">
                <li class="flex items-center before:mr-3 before:content-['✴︎']">These objectives are derived from user insights, align with the client's goals, and provide solutions to the identified challenges.</li>
                <li class="flex items-center before:mr-3 before:content-['✴︎']">These objectives are derived from user insights, align with the client's goals, and provide solutions to the identified challenges.</li>
              </ul>
              <p>
                First and foremost, I immerse myself in understanding my client's vision and project goals. By closely collaborating with the client, <strong class="text-slate-900 dark:text-slate-200 font-medium">I ensure a clear understanding of their requirements and expectations for the product</strong>. This sets the foundation for the design process 👇
              </p>
              <figure class="!my-8">
                <img class="dark:hidden" :src="DetailsImageLight" width="628" height="253" alt="Post details light">
                <img class="hidden dark:block" :src="DetailsImageDark" width="628" height="253" alt="Post details dark">
                <figcaption class="text-center text-xs italic mt-3">The three pillars of a successful competitive analysis phase.</figcaption>
              </figure>
              <p>
                By conducting a thorough discovery phase, I establish a solid foundation for the subsequent stages of the design process. <strong class="text-slate-900 dark:text-slate-200 font-medium">This phase equips me with the necessary knowledge</strong> about the product's context, market landscape, user needs, and design objectives.
              </p>
              <p>
                With this understanding, I can move forward confidently into the ideation, concept development, and prototyping phases, knowing that my designs are rooted in a deep understanding of the product and its users.
              </p>
            </div>
          </article>
        </div>
      </main>

    </div>

  </div>
</template>