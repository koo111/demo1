<template>
  <div>
    <Row class="container">
      <i-col span="13" offset="2" class="login-img-box" v-for="(good,index) in goods" :key="index">
        <img :src="good.url" alt="">
      </i-col>
      <i-col span="7" class="login-box">
        <div class="login-container">
          <div class="login-header">
            <p>账户登录</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username">
                  <i-input type="text" v-model="formDate.username" clearable size="large" placeholder="用户名">
                  </i-input>
              </FormItem>
              <FormItem prop="password">
                  <i-input type="password" v-model="formDate.password" clearable size="large" placeholder="密码">
                  </i-input>
              </FormItem>
              <FormItem>
                  <Button type="error" size="large" @click="handleSubmit()" long>登录</Button>
              </FormItem>
          </Form>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'Login',
  data () {
    return {
      goods:[{
        url:""
      }
      ],
      num:0,
      formDate: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    };
  },
  mounted(){
    this.getImageList()
  },
  methods: {
    getImageList() {
    this.$axios.post('/api/user/search',{
      }).then((response)=>{
      this.goods[0].url=response.data[0].url
    }
    )
  },
    handleSubmit () {
      this.$axios.post('/api/user/login',{
      }).then((response)=>{
      this.num=response.data.length
      for(var i=0;i<this.num;i++){
        if(this.formDate.username==response.data[i].name)
          if(this.formDate.password==response.data[i].password){
            this.$Message.success('登录成功');
            localStorage.setItem('username',this.formDate.username)
              this.$router.push('/')
          }
        else{
          this.$Message.error('用户名或密码错误');
        }
      }
    })
    }
  },
    watch: {
'$route':'getImageList'
  },
  store
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  height: 485px;
  background-color: #fff;
}
.login-img-box {
  height: 485px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-img-box>img {
  width: 68%;
}
.login-box {
  height: 485px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  width: 80%;
  height: 280px;
  border: black solid 1px;
}
.login-header {
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
  color: black;
  background-color:white;
}
.form-box {
  width: 80%;
  margin: 30px auto;
}
</style>
