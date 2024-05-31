<script setup>
import { ref } from 'vue'
import Header from '../partials/Header.vue'
import QuoteTitle from '../partials/QuoteTitle.vue'

const card = ref(true)
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
            <h2 class="h2 font-orbiter mb-4">Confirm & Pay</h2>
            <div class="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
              <p>Hire me and start the project by providing your payment details.</p>
            </div>

            <div>
              <!-- Toggle -->
              <div class="flex justify-center mb-8">
                <div class="relative flex w-full p-1 bg-slate-100 dark:bg-slate-700/30 rounded">
                  <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span class="absolute inset-0 w-1/2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 shadow-sm transition duration-150 ease-in-out" :class="card ? 'translate-x-0' : 'translate-x-full'"></span>
                  </span>
                  <button class="relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out" :class="card ? 'dark:text-slate-100' : 'text-slate-500'" @click.prevent="card = true" :aria-pressed="card">Pay With Card</button>
                  <button class="relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out" :class="!card ? 'dark:text-slate-100' : 'text-slate-500'" @click.prevent="card = false" :aria-pressed="!card">Pay With PayPal</button>
                </div>
              </div>

              <!-- Card form -->
              <div v-if="card">
                <form>
                  <div class="space-y-4">
                    <!-- Email -->
                    <div>
                      <label class="block text-sm font-medium mb-1" for="email">Email</label>
                      <input id="email" class="form-input w-full" type="email" placeholder="hey@themarkcorp.com" value="hey@themarkcorp.com" required />
                    </div>
                    <!-- Card Number -->
                    <div>
                      <label class="block text-sm font-medium mb-1" for="card-nr">Card Number</label>
                      <input id="card-nr" class="form-input w-full" type="text" placeholder="1234 1234 1234 1234" required />
                    </div>
                    <!-- Expiry and CVC -->
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label class="block text-sm font-medium mb-1" for="card-expiry">Expiry Date</label>
                        <input id="card-expiry" class="form-input w-full" type="text" placeholder="MM/YY" required />
                      </div>
                      <div class="flex-1">
                        <label class="block text-sm font-medium mb-1" for="card-cvc">CVC</label>
                        <input id="card-cvc" class="form-input w-full" type="text" placeholder="CVC" required />
                      </div>
                    </div>
                    <!-- Name on Card -->
                    <div>
                      <label class="block text-sm font-medium mb-1" for="card-name">Cardholder Name</label>
                      <input id="card-name" class="form-input w-full" type="text" placeholder="Mark Traversy" required />
                    </div>
                    <!-- Country -->
                    <div>
                      <label class="block text-sm font-medium mb-1" for="country">Country</label>
                      <select id="country" class="form-select w-full" required>
                        <option>Germany</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <!-- VAT Number -->
                    <div>
                      <label class="block text-sm font-medium mb-1" for="vat-nr">VAT Number <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(optional)</span></label>
                      <input id="vat-nr" class="form-input w-full" type="text" />
                    </div>
                  </div>
                  <div class="mt-6">
                    <button type="submit" class="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow shadow-black/5 animate-shine bg-[linear-gradient(100deg,theme(colors.blue.500),45%,theme(colors.blue.400),55%,theme(colors.blue.500))] bg-[size:200%_100%] hover:bg-[image:none]">Pay - $24.560</button>
                  </div>
                </form>
              </div>

              <!-- PayPal form -->
              <div v-if="!card">
                <div>
                  <button type="submit" class="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow shadow-black/5 animate-shine bg-[linear-gradient(100deg,theme(colors.blue.500),45%,theme(colors.blue.400),55%,theme(colors.blue.500))] bg-[size:200%_100%] hover:bg-[image:none]">Pay With PayPal - $24.560</button>
                </div>
              </div>

            </div>

          </article>
        </div>
      </main>

    </div>

  </div>
</template>