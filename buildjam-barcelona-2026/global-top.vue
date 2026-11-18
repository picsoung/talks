<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideRoute } = useNav()
const frontmatter = computed(() => currentSlideRoute.value?.meta?.slide?.frontmatter ?? {})
const section = computed(() => frontmatter.value.section)
const hideVenue = computed(() => frontmatter.value.hideVenue === true)
</script>

<template>
  <div v-if="!hideVenue" class="global-venue mono">
    {{ $slidev.configs.venue }}<template v-if="section"> · {{ section }}</template>
  </div>
</template>

<style scoped>
.global-venue {
  position: absolute;
  top: 1.25rem;
  left: 1.75rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  opacity: 0.55;
  color: var(--ng-muted);
  z-index: 20;
  pointer-events: none;
}
</style>
