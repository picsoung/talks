<script setup>
defineProps({
  rep: { type: [Number, String], required: true },
  repTitle: { type: String, required: true },
  site: { type: String, required: true },
  qr: { type: String, default: null },
})
</script>

<template>
  <div class="slidev-layout rep-layout">
    <div class="flex flex-col items-center justify-center h-full">
      <div class="kicker">REP #{{ rep }} — {{ repTitle }}</div>
      <h1 class="statement-sm">{{ site }}<span class="accent">.com</span></h1>
      <div class="rep-tagline">
        <slot />
      </div>
    </div>
    <div v-if="qr" class="rep-qr">
      <img :src="qr" alt="QR code" />
      <div class="rep-qr-label mono">scan to try</div>
    </div>
  </div>
</template>

<style scoped>
.rep-tagline {
  text-align: center;
  opacity: 0.7;
  font-size: 1.25rem;
  max-width: 82rem;
  margin-left: auto;
  margin-right: auto;
}
.rep-tagline:not(:empty) {
  margin-top: 2.5rem;
}
.rep-tagline :deep(.rep-gallery) {
  opacity: 1;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}
.rep-tagline :deep(.rep-gallery img) {
  width: 22rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.5);
}

.rep-qr {
  position: absolute;
  bottom: 2.5rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 15;
}
.rep-qr img {
  width: 9rem;
  height: 9rem;
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.rep-qr-label {
  font-size: 0.85rem;
  opacity: 0.65;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>
