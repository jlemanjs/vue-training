<script>
import { defineComponent } from "vue"


export default defineComponent({
  name: 'JListItem',
  props: ['content'],
  data() {
    return {
        id: 0
    }
  }
})

</script>

<template>
    <div>
        {{ content }} <button v-on:click="$emit('remove')">X</button>
    </div>
</template>

