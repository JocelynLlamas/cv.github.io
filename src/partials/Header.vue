<script setup>
import Logo from '../images/profile.jpg'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="absolute w-full z-30">
    <div class="max-w-xl lg:max-w-[calc(50%+theme(maxWidth.xl))] mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4 lg:fixed">
          <!-- Logo -->
          <router-link class="flex items-center space-x-4" to="/" aria-label="Cruip">
            <img class="rounded-full" :src="Logo" width="50" height="50" alt="Jocelyn">
            <span class="font-caveat text-xl text-slate-200">Jocelyn Llamas</span>
          </router-link>
        </div>

        <!-- Right side -->
        <div class="flex grow justify-end">

          <!-- Light switch -->
          <ThemeToggle />

        </div>

      </div>
    </div>
  </header>
</template>