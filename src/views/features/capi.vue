<template>
  <div>
    <p>user: {{ user }}</p>

    <el-button @click="changeArea('shanghai')">Change Area</el-button>
    <p>{{ area }}</p>

    <!-- setup start -->
    <Setup 
      ref="setupRef"
      :title="setupTitle" 
      :isShow="false" 
      :age="12"
      @callback="handleCallback" />
    <el-button type="primary" @click="changeProps">改变props</el-button>
    <el-button type="primary" @click="getSonProperty">调用子组件</el-button>
    <p>sonName: {{sonName}}</p>
    <!-- setup end -->

    <!-- ref start -->
    <Ref />
    <!-- ref end -->
    <h1>Computed Watch</h1>
    <el-select v-model="componentId">
      <el-option 
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"></el-option>
    </el-select>
    <component :is="componentMap[componentId]"></component>

  </div>
</template>

<script setup>
  import Setup from './capi/setup.vue'
  import Ref from './capi/ref.vue'
  import Computed from './capi/computed.vue'
  import Watch from './capi/watch.vue'

  import {
    ref,
    computed,
    onMounted
  } from 'vue'

  // 引用封装
  import queryUser from './capi/queryUser'

  const {
    userInfo,
    area
  } = queryUser()

  const user = computed(() => {
    const { name, age, sex } = userInfo
    return `${name}-${age}-${sex}`
  })

  const changeArea = (a) => {
    // 依然是响应式 
    area.value = a
  } 

  // setup start
  const setupRef = ref()
  const setupTitle = ref('I am setup.')

  const changeProps = () => {
    setupTitle.value = 'i am changed.'
  }

  const sonName = ref()
  const getSonProperty = () => {
    // 获取子组件 name 属性 在子组件中必须 expose({name})
    sonName.value = setupRef.value.name 
    setupRef.value.handleFatherDispatch()
  }

  // setup end

  const options = [
    {
      label: 'Computed',
      value: 'Computed'
    },
    {
      label: 'Watch',
      value: 'Watch'
    }
  ]

  const componentMap = {
    'Computed': Computed,
    'Watch': Watch
  }

  const componentId = ref('Computed')

  onMounted(() => {
    
  })

  const handleCallback = () => {}

</script>

<style lang="less" scoped>

</style>