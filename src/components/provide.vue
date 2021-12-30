<template>
  <div>
    <p>子组件name: {{ name }}</p>
    <p>子组件count: {{ count }}</p>
    <el-button @click="handleChangeCount">改变父组件provide</el-button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const name = inject('name')
    const count = inject('count')

    const handleChangeCount = inject('handleChangeCount')

    return {
      name,
      count,
      handleChangeCount
    }
  }
}
</script>

<style lang="scss" scoped>

</style>