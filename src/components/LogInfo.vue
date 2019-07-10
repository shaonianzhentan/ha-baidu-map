<template>
  <mu-dialog full-width transition="slide-bottom" fullscreen scrollable :open.sync="openScroll">
    <mu-appbar color="primary" title="GPSLogger定位日志">
      <mu-button slot="left" icon @click="close">
        <mu-icon value="close"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div style="padding: 24px;">
      <mu-text-field v-model="log" readonly multi-line :rows="15" full-width></mu-text-field>
    </div>
  </mu-dialog>
</template>
<script>
export default {
  data() {
    return {
      openScroll: false,
      log: ''
    };
  },
  methods: {
    show() {
      this.openScroll = true;
    },
    add(msg) {
      this.log = `${new Date().toLocaleString()}\n${msg}\n ${this.log}`
    },
    close() {
      this.openScroll = false;
    }
  }
};
</script>