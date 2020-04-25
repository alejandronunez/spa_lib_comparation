<template>
  <div>
    <p>Prop: {{ message }}</p>
    <p>Data: {{ message_data }}</p>
    <p>{{ message_computed }}</p>
    <input v-model="message_data">
    <button
      v-on:click="reverseMessage"
    >
      Reverse Message
    </button>
  </div>
</template>

<script>
export default {
  name: 'Binding',
  props: {
    message: {
      type: String,
      default: "nothing",
      validator: value => value.length > 3,
      required: false,
    }
  },
  data() {
    console.log('Binding..data');
    return {
      message_data: this.message,
    }
  },
  mounted() {
    console.log('Binding..mounted');
  },
  created() {
    console.log('Binding..created');
  },
  computed: {
    message_computed() {
      console.log('Binding..computed');
      return `Computed: ${this.message}`;
    }
  },
  methods: {
    reverseMessage: function () {
      this.message_data = this.message_data.split('').reverse().join('')
    }
  },
  watch: {
    message: (val, oldVal) => console.log(`message: ${val.length},${oldVal.length}`),
    message_computed: (val, oldVal) => console.log(`message_computed: ${val.length},${oldVal.length}`),
    message_data: (val, oldVal) => console.log(`message_data: ${val.length},${oldVal.length}`),
  }
}
</script>

<style lang="scss" scoped>
  div {
    border-top: solid gray 1px;
    p{
      color: red;
    }
  }
</style>
