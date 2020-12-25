<template>
  <div>
    <Row class="container">
      <i-col :span="13" offset="2" class="signup-img-box" v-for="(good,index) in goods" :key="index" >
        <img :src="good.url" alt="">
      </i-col>
      <i-col span="8" class="box">
        <div class="sign-up-title">
          <h1>欢迎注册账号</h1>
        </div>
        <div class="sing-up-step-box">
          <div class="sign-up-box">
            <transition mode="out-in">
              <router-view ></router-view>
            </transition>
          </div>
        </div>
      </i-col>
    </Row>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      index:0,
      goods:[{
        url:""
      }
      ],
      
    };
  },
  mounted(){
    this.getImageList()
  },
  methods: {
    getImageList() {
      if (this.$route.path == '/SignUp')
    this.$axios.post('/api/user/search',{
      }).then((response)=>{
      this.goods[0].url=response.data[0].url
    }
    )
  },
  },
  watch: {
'$route':'getImageList'
},
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  height: 485px;
  overflow: hidden;
}
.signup-img-box {
  width: 800px;
  height: 300px;
  margin-top: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-img-box>img {
  height: 68%;
}
.sign-up-title {
  width: 430px;
  margin: 15px auto;
  height: 80px;
  margin-top: -20px;
}
.sing-up-step-box {
  margin: 15px auto;
  padding-left: 30px;
  padding-top: 0px;
  width: 430px;
  height: 380px;
  border: 1px solid #495060;
}
.sign-up-box {
  margin: 30px 25px;
  width: 350px;
  display: flex;
  align-items: center;
}
</style>
