<template>
  <div>
    <h1>Setup</h1>
    
    <p>props change from father: {{ title }}</p>
    <p>isShow: {{isShow ? '显示' : '隐藏'}}</p>
  </div>
</template>

<script>
import {
  toRefs,
  ref
} from 'vue'

export default {
  // 显式声明 props
  props: {
    title: {
      type: String,
      default: ''
    },
    isShow: Boolean
  },
  setup (props, context) {
    // 需要在 props 显式声明后 这里才能获取到对应的 props
    // 如果父组件传了两个 props  但子组件只声明了其中一个 那么这里只能获取一个props
    console.log(props);
    // const { title } = props // 这里解构 title 是非响应式 父组件改变后 不会改变
    const { title } = toRefs(props) // 保持响应式 可使用 toRefs 

    const name = ref('hello')
    const age = ref(12)

    const {
      emit, // $emit
      slots, // $slots
      attrs, // $attrs 包含了父作用域中不作为组件 props 或自定义事件的 attribute 绑定和事件
      expose // 该函数允许通过公共组件实例暴露特定的 property
    } = context
    console.log(emit, slots, attrs, expose);

    console.log(attrs, 'attrs');

    const handleFatherDispatch = () => {
      alert('i am here.')
    }

    // 通过以下方式获取子组件属性或方法 在子组件中必须 expose 
    // const getSonProperty = () => {
    //   sonName.value = setupRef.value.name 
    //   setupRef.value.handleFatherDispatch()
    // }
    expose({
      name,
      age,
      handleFatherDispatch
    })


    return {
      title,
      name,
      age,
      handleFatherDispatch
    }
  }
}
</script>

<style lang="scss" scoped>

</style>