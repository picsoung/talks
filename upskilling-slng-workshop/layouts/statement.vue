<script setup>
defineProps({
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout statement-layout" :class="image ? 'bleed' : 'slng-dark'">
    <template v-if="image">
      <img class="full-bleed-img" :src="image" alt="" />
      <div class="full-bleed-scrim" />
      <div class="overlay-statement"><slot /></div>
    </template>
    <template v-else>
      <div class="statement-center">
        <div class="statement"><slot /></div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.statement-layout { position: relative; height: 100%; }
.statement-layout.bleed { padding: 0; }
.statement-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
