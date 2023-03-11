import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ButtonDelete',

  props: {
    label: { type: String },
    cursor: { type: Boolean },
    image: { type: String },
    disabled: { type: Boolean }
  }
})
