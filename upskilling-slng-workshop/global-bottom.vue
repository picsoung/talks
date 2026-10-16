<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const OWN_CHROME = ['cover', 'section', 'statement', 'closing']
const { currentSlideRoute } = useNav()
const frontmatter = computed(() => currentSlideRoute.value?.meta?.slide?.frontmatter ?? {})
// cover / section / statement / closing layouts draw their own chrome
const hideChrome = computed(() =>
  frontmatter.value.hideChrome === true || OWN_CHROME.includes(frontmatter.value.layout))
// The handle sits outside the slide's .slng-light scope, so pick its accent here:
// bright yellow on dark slides, readable gold on light slides.
const isDark = computed(() => String(frontmatter.value.class ?? '').includes('slng-dark'))
</script>

<template>
  <template v-if="!hideChrome">
    <img src="/logo-iso.svg" class="global-badge" alt="SLNG" onerror="this.style.display='none'" />
    <div class="global-handle mono" :style="isDark
      ? { color: 'var(--slng-yellow)' }
      : { color: 'var(--slng-black)', background: 'var(--slng-yellow)', padding: '0.15rem 0.5rem', borderRadius: '6px' }">{{ $slidev.configs.handle }}</div>
  </template>
</template>

<style scoped>
.global-badge {
  position: absolute;
  bottom: 1.4rem;
  left: 1.75rem;
  height: 2.1rem;
  width: auto;
  z-index: 20;
  pointer-events: none;
}

.global-handle {
  position: absolute;
  bottom: 1.5rem;
  right: 1.75rem;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  opacity: 0.9;
  color: var(--slng-accent);
  z-index: 20;
  pointer-events: none;
}
</style>
