<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto text-center">
              <!-- Top image -->
              <div class="relative inline-flex flex-col mb-6" data-aos="fade-up">
                <img src="../images/404.png" width="196" height="196" alt="404" />
              </div>
              <!-- 404 content -->
              <h1 class="h1 mb-4" data-aos="fade-up" data-aos-delay="200">Uh oh. That page doesn’t exist.</h1>
              <p class="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="400">Head to our <router-link to="/" class="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">homepage</router-link> that does exist, or try double-checking the URL.</p>
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<script>
import PageIllustration from '../partials/PageIllustration.vue'

export default {
  name: 'Features',
  components: {
    PageIllustration,
  },
};
</script>
