<script setup>
defineProps({
  contact: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout closing slng-dark">
    <img class="cover-logo" src="/logo.svg" alt="SLNG" onerror="this.style.display='none'" />

    <div class="closing-foot">
      <div class="closing-left">
        <h1 class="closing-title"><slot>Thanks!</slot></h1>
        <div class="brand-tagline">{{ $slidev.configs.tagline }}</div>
      </div>
      <div class="closing-contact mono">{{ contact }}</div>
    </div>
  </div>
</template>

<style scoped>
.closing {
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
.closing-foot {
  position: absolute;
  bottom: 2.5rem;
  left: 3rem;
  right: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.closing-left {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
}
.closing-title {
  font-size: 5rem;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
}
.brand-tagline {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.35;
  max-width: 22rem;
  padding-bottom: 0.4rem;
}
.closing-contact {
  font-size: 0.95rem;
  opacity: 0.7;
  text-align: right;
}
</style>
