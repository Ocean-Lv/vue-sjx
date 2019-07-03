<template>
  <div>
    <Form></Form>
  </div>
</template>

<style lang='' scoped>

</style>
<script>
import Form from '@/components/test/validate01/Form'

  export default {
    name: 'Index',
    provide() {
      return {
        form: this
      };
    },
    props:{
      props1: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        
      };
    },

    components: {
      Form
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>