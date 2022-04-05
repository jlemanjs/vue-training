<script>
import { defineComponent } from "vue"


export default defineComponent({
  name: 'JList',
  data() {
    return {
        nextId: 3,
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
    <div> {{ items.length }} </div>
    <div>
        <j-list-item v-for="(item, index) in items" v-on:remove="items.splice(index, 1)" :content="item.text" :key="item.id" />
    </div>
    <button @click="items.push({text: 'nouveau ' + nextId, id: nextId++})">Nouveau</button>
  </div>
</template>

