<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot
        name="footer"
        v-bind:generated="generated"
      >
        {{ generate_text }}
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotSample',
  computed: {
    generated() {
      return Math.floor(Math.random()* 100);
    },
    generate_text() {
      return `Random Number: ${this.generated}`;
    }
  },
}
</script>
