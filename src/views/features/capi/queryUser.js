import {
  ref,
  reactive
} from 'vue'

export default function queryUserInfo() {
  const userInfo = reactive({
    name: 'Hello',
    age: 12,
    sex: 'female'
  })

  const area = ref('hangzhou')

  return {
    userInfo,
    area
  }
}