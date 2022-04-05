<script>
import { defineComponent } from "vue"


export default defineComponent({
  name: 'JList',
  data() {
    return {
        items: [
            { text: 'a'},
            { text: 'b'},
            { text: 'c'}
        ]
    }
  },
  methods: {
    onRemove(id) {
      this.items.splice(id, 1)
    },
    onAdd() {
      this.items.push({text: 'nouveau ' + this.items.length})
    }
  }
})

</script>

<template>
  <div>
    <div> {{ items.length }} </div>
    <div>
        <j-list-item v-for="(item, index) in items" @remove="onRemove(index)" :content="item.text" :key="index" />
    </div>
    <button @click="onAdd()">Nouveau</button>
  </div>
</template>

