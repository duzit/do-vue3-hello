<template>
  <template v-for="item in features">
    <el-button @click="goTo(item)">
      {{ item.label }}
    </el-button>
  </template>
</template>

<script setup>
  import {
    ref 
  } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const features = ref([
    {
      label: 'component api',
      path: 'capi'
    },
    {
      label: '迁移',
      path: 'update'
    }
  ])

  const goTo = ({ path }) => {
    router.push(`/${path}`)
  }

</script>

<style lang="scss" scoped>

</style>