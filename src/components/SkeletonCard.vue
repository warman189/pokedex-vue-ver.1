<template>
  <div class="skeleton-card">
    <div class="skeleton-image"></div>
    <div class="skeleton-lines">
      <div class="skeleton-line short"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skeleton-card {
  background: #f3f3f3;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 220px;
  animation: pulse 1.2s infinite ease-in-out;
}
.skeleton-image {
  width: 96px;
  height: 96px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
  border-radius: 50%;
  margin-bottom: 1rem;
}
.skeleton-lines {
  width: 100%;
}
.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f3f3f3 50%, #e0e0e0 75%);
  border-radius: 8px;
  margin-bottom: 8px;
}
.skeleton-line.short {
  width: 60%;
}
.skeleton-line:not(.short) {
  width: 80%;
}
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
