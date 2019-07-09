<template>
  <mu-dialog title="GPSLogger设置" width="500" scrollable :open.sync="open" @close="close">
    <mu-form :model="form" label-position="top">
      <mu-form-item prop="webhook" label="Webhook">
        <mu-text-field v-model.trim="form.webhook"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="device" label="设备名称">
        <mu-text-field v-model.trim="form.device"></mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-button slot="actions" color="primary" @click="save">保存</mu-button>
  </mu-dialog>
</template>
<script>
export default {
  data() {
    return {
      open: true,
      form: {
        webhook: '',
        device: ''
      }
    }
  },
  created(){
    try{
      let obj = JSON.parse(localStorage['map-gpslogger'])
      this.form.webhook = obj.webhook;
      this.form.device = obj.device;      
    }catch{

    }
  },
  methods: {
    close() {
      this.$el.parentNode.removeChild(this.$el)
    },
    save() {
      if(!this.form.webhook){
        this.$toast.error(`请输入GPSLogger的Webhook地址`);
        return;
      }
      if(!this.form.device){
        this.$toast.error(`请输入设备名称`);
        return;
      }

      localStorage['map-gpslogger'] = JSON.stringify(this.form)
      this.open = false
      this.$emit('done')
    }
  }
}
</script>
<style lang="less" scoped>

</style>


