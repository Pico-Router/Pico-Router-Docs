<script setup lang="ts">
useSeoMeta({
  title: 'Coming Soon',
  description: 'Pico Router Docs is being prepared. Check back soon.'
})

definePageMeta({ layout: 'empty' })
</script>

<template>
  <div
    class="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden
           bg-[#111] max-md:bg-[linear-gradient(90deg,var(--ui-primary)_0%,color-mix(in_srgb,var(--ui-primary)_15%,black)_100%)]"
  >
    <div
      class="absolute right-[-15%] top-[-25%] aspect-3/2 w-[75%] rounded-[1000px]
             bg-primary opacity-60 blur-[300px]
             max-md:bottom-0 max-md:top-auto max-md:blur-[80px]"
    />

    <div
      class="absolute bottom-[-20%] left-[-10%] aspect-3/2 w-[60%] rounded-[1000px]
             bg-primary opacity-90 blur-[300px]
             max-md:bottom-auto max-md:top-0 max-md:blur-[80px]"
    />

    <div
      class="pointer-events-none absolute inset-0 z-1 opacity-[0.7] mix-blend-overlay"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.8%22/%3E%3C/svg%3E');
        background-size: 180px 180px;
      "
    />

    <UContainer class="z-100 text-center max-w-3xl flex flex-col gap-2">
      <h2 class="text-2xl">
        Thank you for your interest in Pico Router
      </h2>
      <h1 class="text-4xl font-bold">
        The documentation page is currently under construction
      </h1>
      <p class="text-xl">
        Checkout the project on GitHub in the meantime
      </p>
      <UButton
        icon="i-lucide-github"
        size="md"
        color="neutral"
        variant="subtle"
      />
    </UContainer>
  </div>
</template>
