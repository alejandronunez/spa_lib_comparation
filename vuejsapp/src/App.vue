<template>
  <div class="main_app">
    <img alt="Vue logo" src="./assets/logo.png">

    <HelloWorld
      msg="Welcome to Your Vue.js App"
    />
    <ul>
      <li
        v-for="(item,key) in spa"
        :key="key"
      >
        {{ item }}
      </li>
    </ul>
    <button
      v-on:click="changeMessage"
    >
      Change Message
    </button>
    <button
      v-on:click="flitC1binding"
    >
      Flit C1binding
    </button>

    <Binding
      v-if="this.showC1binding"
      :message="this.message"
    />
    <p
      v-else
    >
      Without C1Binding
    </p>

    <Event
      @newMessage="newMessage"
    />

    <SlotSample>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer="{ generated }">
        <p>Overwrite value: {{ generated }}.{{ generated }}</p>
      </template>
    </SlotSample>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Binding from './components/Binding.vue'
import Event from './components/Event.vue'
import SlotSample from './components/SlotSample.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Binding,
    Event,
    SlotSample,
  },
  data() {
    return {
      message: 'Binding message',
      showC1binding: true,
    }
  },
  methods: {
    newMessage: function (message) {
      this.message = message;
    },
    changeMessage: function () {
      this.message = `${this.message}.`;
    },
    flitC1binding: function () {
      this.showC1binding = !this.showC1binding;
    },
  },
  computed: {
    spa: () => ['React', 'Vuejs', 'Angular'],
  },
}
</script>

<style scoped>
.main_app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  margin-bottom: 20px;
}
</style>
