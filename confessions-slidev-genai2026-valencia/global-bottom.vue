<template>
  <img src="/memoji.png" class="global-memoji" alt="Nicolas memoji" />
  <div class="global-handle mono">@picsoung</div>
</template>

<style scoped>
.global-memoji {
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;
  opacity: 0.9;
  z-index: 20;
  pointer-events: none;
}

.global-handle {
  position: absolute;
  bottom: 1.25rem;
  right: 1.75rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  opacity: 0.9;
  color: var(--ng-accent);
  z-index: 20;
  pointer-events: none;
}
</style>
