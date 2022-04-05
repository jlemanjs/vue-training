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
        <h3> {{ content }} </h3>
    </div>
</template>

