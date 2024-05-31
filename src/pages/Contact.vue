<script setup>
import Header from '../partials/Header.vue'
import QuoteTitle from '../partials/QuoteTitle.vue'
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

          <article>
            <h2 class="h2 font-orbiter mb-4">Contact Me</h2>
            <div class="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
              <p>Shoot me a message if you have any questions or concerns regarding the quote I provided.</p>
            </div>
            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email</label>
                  <input id="email" class="form-input w-full" type="email" placeholder="hey@themarkcorp.com" required />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="client">Client</label>
                  <input id="client" class="form-input w-full disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-500 dark:disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none" type="text" placeholder="Client name" value="The Markyk Corp." required disabled />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="subject">Subject</label>
                  <select id="subject" class="form-select w-full" required>
                    <option>There is an error with the quote</option>
                    <option>I have a problem with payments</option>
                    <option>I want to modify the payment date</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="message">Messsage</label>
                  <textarea id="message" rows="4" class="form-textarea w-full" placeholder="Please provide a thorough and precise description, including any relevant details." required></textarea>
                </div>
              </div>
              <div class="mt-6">
                <button type="submit" class="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow shadow-black/5">Send</button>
              </div>
            </form>
          </article>
        </div>
      </main>

    </div>

  </div>
</template>