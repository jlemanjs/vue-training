<script>
import { defineComponent } from "vue"


export default defineComponent({
  name: 'JList',
  data() {
    return {
        items: [
            { text: 'a', id: '0' },
            { text: 'b', id: '1' },
            { text: 'c', id: '2' }
        ]
    }
  }
})

</script>

<template>
    <div>
        <j-list-item v-for="item in items" :content="item.text" :key="item.id" />
    </div>
</template>

