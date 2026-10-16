<template>
  <footer
    v-if="!['cover', 'section', 'end'].includes($nav.currentLayout)"
    class="brand-footer"
  >
    <div class="brand-footer__logos">
      <img src="/logo-slng.svg" alt="SLNG" />
      <span class="brand-footer__plus">+</span>
      <img src="/logo-ttn.svg" alt="The Tech Nation" />
    </div>
    <div class="brand-footer__meta">
      <span>FROM WORKFLOWS TO SKILLS</span>
      <span>{{ String($nav.currentPage).padStart(2, '0') }}</span>
    </div>
  </footer>
</template>
