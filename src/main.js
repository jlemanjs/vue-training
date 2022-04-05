import { createApp } from 'vue'
import App from './App.vue'

import JListItem from './components/JListItem.vue'
import JList from './components/JList.vue'

const app = createApp(App)

app.component('j-list-item', JListItem)
app.component('j-list', JList)

app.mount('#app')

app.config.errorHandler = (err) => {
  alert(err)
}
