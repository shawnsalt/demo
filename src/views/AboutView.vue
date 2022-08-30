<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{kefu}}</p>

  </div>
</template>
<script>

export default {
  data () {
    return {
      kefu: ''
    }
  },
  methods () {

  },
  async mounted () {
    const { data: res } = await this.$ajax.get('/api/oneletter/production/system/getKeFu')
    this.kefu = res
  }

}
</script>
