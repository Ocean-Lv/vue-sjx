<template>
  <div>
    <p>
        <label v-if="label">{{label}}</label>: 
        <input :value="value" @input="onInput" v-bind="$attrs" />
        {{value}}
    </p>
    <p v-if="msg">message:{{msg}}</p>
  </div>
  
</template>

<style lang='scss' scoped>
p {
  margin-top: 20px;
}
</style>
<script>

  export default {
    inheritAttrs: false,
    name: 'FormItem',
    props:{
      label: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        msg: null,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
      }
    },

    watch: {}

    }

</script>