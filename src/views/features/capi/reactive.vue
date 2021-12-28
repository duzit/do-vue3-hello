<template>
  <div>
    <h1>Reactive</h1>
    <p>count: {{ count }}</p>
    <p>obj.count: {{ obj.count }}</p>
    <el-button @click="count++">改变ref</el-button>
    <el-button @click="obj.count++">改变reactive</el-button>
    <el-button @click="handleRefToReactive">ref to reactive</el-button>
  </div>
</template> 

<script>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'Reactive',
  setup () {
    // 返回对象的响应式副本
    // reactive 将解包所有深层的refs 同时维持 ref 的响应性
    const count = ref(1)
    const obj = reactive({ count })

    // 当将 ref 分配给 reactive 时 会被自动解包
    const age = ref(12)
    const rObj = reactive({})

    const handleRefToReactive = () => {
      // 自动解包 不用 age.value
      rObj.age = age
      ElMessage.success(JSON.stringify(rObj))
    }

    return {
      count,
      obj,
      handleRefToReactive
    }
  }
}
</script>

<style lang="scss" scoped>

</style>