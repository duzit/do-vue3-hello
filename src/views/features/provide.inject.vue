<template>
  <div>
    <h1>Provide inject</h1>
    <el-button @click="handleChangeName">change name</el-button>
    <el-button @click="handleChangeCount">change count</el-button>
    <p>父组件 name: {{ name }}</p>
    <p>父组件 count: {{ count }}</p>

    <Provide />
  </div>
</template>

<script>
import Provide from '@/components/provide.vue'
import { ref, provide, readonly } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  components: {
    Provide
  },
  setup () {
    // 非响应式 父组件改变后 子组件不感知
    let name = 'Hello' 
    provide('name', name)

    // 响应式 子组件感知父组件值的变化
    const count = ref(0)
    provide('count', count)

    const handleChangeName = () => {
      name = 'Moto'
      ElMessage.success(`name: ${name}`)
    }

    const handleChangeCount = () => {
      count.value++
    }

    // 如果子组件内部改变 父组件 provide 数据 则将方法 handleChangeCount 写入 provide
    provide('handleChangeCount', handleChangeCount)

    // 如果不想子组件修改父组件provide数据 则使用 readonly
    const readonlyCount = ref(1)
    provide('readonlyCount', readonly(readonlyCount))

    return {
      count,
      name,
      handleChangeName,
      handleChangeCount
    }
  }
}
</script>

<style lang="scss" scoped>

</style>