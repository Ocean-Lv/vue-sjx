 /<template>
  <div>
    <form>
      <FormItem label="userName" type="text" id="userName" v-model="model.username" placeholder="username" autocomplete="off">
        <!-- userName: <input type="text" name="userName" /> -->
      </FormItem>
      <FormItem label="passWord" type="text" id="passWord" v-model="model.ps" placeholder="password" autocomplete="off">
      </FormItem>
      <FormItem label="保存登录状态" type="checkbox">
      </FormItem>
      <!-- <p>password: <input type="text" name="ps" /></p>
      <p>
        <input type="checkbox" id="myCheck" /> <label for="myCheck">保存登录状态</label>
      </p> -->
      <p>
        <button>提交表单</button>
      </p>
    </form>
    <div>
      {{model.username}}<br />
      {{model.ps}}
    </div>
  </div>
</template>

<style lang='scss' scoped>
p {
  margin-top: 20px;
}
</style>
<script>
import FormItem from '@/components/test/validate01/FormItem'

  export default {
    name: 'Index',
    props:{
      props1: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        model:{
          username: 'tom',
          ps: "123456"
        },
        rules: {
          username: [{required: true, message: "请输入用户名"}],
          ps: [{required: true, message: "请输入密码"}]
        }
      };
    },

    components: {
      FormItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>