<template>
  <div>
{{ route.params.id }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)
</script>

<style lang="scss" scoped>

</style>
