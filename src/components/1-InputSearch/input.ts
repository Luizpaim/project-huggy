import { defineComponent, ref, watch } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'InputSearch',
  props: {
    value: {
      type: String
    },
    type: { type: String, required: true },
    placeholder: { type: String, required: true },
    onInput: {
      type: Function as any,
      required: true
    }
  },
  setup(props) {
    const inputValue = ref(props.value)

    watch(
      () => props.value,
      (val) => {
        inputValue.value = val
      }
    )

    watch(
      () => inputValue.value,
      (val) => {
        props.onInput(val)
      }
    )

    return {
      inputValue
    }
  }
})
