import { reactive, toRefs } from "vue";

export default function getReactiveByToRefs() {
  const obj = reactive({
    version: '1.1.1',
    auther: 'duzit'
  })

  return toRefs(obj)
}