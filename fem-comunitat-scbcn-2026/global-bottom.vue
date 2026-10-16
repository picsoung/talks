<template>
  <div class="global-mark mono">{ n }</div>
  <div class="global-handle mono">@picsoung</div>
</template>

<style scoped>
.global-mark,
.global-handle {
  position: absolute;
  bottom: 1.5rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 1rem;
  letter-spacing: 0.08em;
  z-index: 20;
  pointer-events: none;
}
.global-mark { left: 2.2rem; color: var(--ng-accent); font-weight: 700; }
.global-handle { right: 2.2rem; color: var(--ng-accent); }
</style>
