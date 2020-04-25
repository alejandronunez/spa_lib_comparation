<template>
  <div>
    <button
      v-on:click="$emit('newMessage', 'From message!')"
    >
      Emit a new message
    </button>
  </div>
</template>

<script>
export default {
  name: 'Event',
}
</script>

<style lang="scss" scoped>
  div {
    border-top: solid gray 1px;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    p{
      color: red;
    }
  }
</style>
