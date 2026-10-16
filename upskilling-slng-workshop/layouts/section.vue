<script setup>
defineProps({
  no: { type: [Number, String], default: null },
})
</script>

<template>
  <div class="slidev-layout section slng-light">
    <div v-if="no !== null" class="section-no mono">{{ String(no).padStart(2, '0') }}</div>

    <div class="section-body">
      <h1 class="section-title"><slot /></h1>
    </div>

    <div class="section-foot">
      <img class="section-badge" src="/logo-iso.svg" alt="SLNG" onerror="this.style.display='none'" />
      <div class="brand-tagline">{{ $slidev.configs.tagline }}</div>
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  height: 100%;
  padding: 2.5rem 3rem;
}
.section-no {
  position: absolute;
  top: 2.2rem;
  left: 3rem;
  font-size: 1.9rem;
  color: var(--slng-ink);
}
.section-body {
  display: flex;
  align-items: center;
  height: 100%;
}
.section-title {
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1.03;
  letter-spacing: -0.03em;
  max-width: 82%;
}
.section-foot {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.section-badge { height: 2.1rem; width: auto; }
.brand-tagline {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
  max-width: 22rem;
}
</style>
