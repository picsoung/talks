<script setup>
defineProps({
  date: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout cover slng-dark">
    <img class="cover-logo" src="/logo.svg" alt="SLNG" onerror="this.style.display='none'" />

    <div class="cover-body">
      <h1 class="cover-title"><slot /></h1>
    </div>

    <div class="cover-foot">
      <div class="brand-tagline">{{ $slidev.configs.tagline }}</div>
      <div class="cover-date mono">{{ date }}</div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  height: 100%;
  padding: 2.5rem 3rem;
}
.cover-logo {
  position: absolute;
  top: 2.2rem;
  left: 3rem;
  height: 3rem;
  width: auto;
}
.cover-body {
  display: flex;
  align-items: center;
  height: 100%;
}
.cover-title {
  font-size: 5.4rem;
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.03em;
  max-width: 85%;
}
.cover-foot {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  right: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.brand-tagline {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.35;
  max-width: 24rem;
}
.cover-date {
  font-size: 0.95rem;
  opacity: 0.7;
  text-align: right;
}
</style>
