<template>
  <div class="box">
    <div class="nav">
      <ul>
        <li class="in">
          你好，欢迎登录购物网
        </li>
      </ul>
      <ul class="detail">
        <li class="first" v-show="!flag">
          <router-link to="/login">登录</router-link> |<router-link to="/SignUp"><font color="red">免费注册</font></router-link>
        </li>
        <li v-show="flag">
          <Dropdown>
            <p class="username-p">
              <span class="username">{{this.username}} </span>
              <Icon type="ios-arrow-down"></Icon>
            </p>
            <DropdownMenu slot="list">
                <div class="my-page">    
                  <div class="sign-out" @click="signOutFun">
                    <p>退出登录</p>
                  </div>
                </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Dropdown  placement="bottom-start">
            <a href="javascript:void(0)" @click="goToPay">
              购物车
            </a>
            <DropdownMenu slot="list">
              <div class="shopping-cart-null" v-show="goods.length <= 0">
                <span>你的购物车没有空空哦</span>
                <span>赶快去添加商品吧~</span>
              </div>
              <div class="shopping-cart-list" v-show="goods.length > 0">
                <div class="shopping-cart-box" v-for="(item,index) in goods" :key="index">
                  <div class="shopping-cart-img">
                    <img :src="item.url">
                  </div>
                  <div class="shopping-cart-info">
                    <div class="shopping-cart-title">
                      <p>{{item.title.substring(0, 22)}}...</p>
                    </div>
                    <div class="shopping-cart-detail">
                      <p>
                        数量:
                        <span class="shopping-cart-text">
                          {{item.count}}
                        </span>
                        价格:
                        <span class="shopping-cart-text">
                          {{item.price}}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="go-to-buy">
                  <Button type="error" size="small" @click="goToPay">
                    去结账
                  </Button>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li><router-link to="/">商城首页</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'M-Header',
  data () {
    return {
       goods:[],
      url:"",
      title:"",
      price:"",
      count:0,
      goodnumber:0,
      username:"",
      flag:""
    };
  },
  mounted(){
    this.getImageList(),
    this.isLogin()
  },
  methods: {
    goToPay () {
      this.$router.push('/order')
    },
    myInfo () {
      this.$router.push('/home')
    },
    signOutFun () {
      localStorage.clear()
      this.$router.push({name: 'Index', query: {modelId: modelId}});
    },
    isLogin(){
      if(localStorage.getItem('username')!=null){
        this.flag=1
        this.username=localStorage.getItem('username')
      }
      else
        this.flag=0
    },
    getImageList() {
    this.$axios.post('/api/user/selectcar',{
      }).then((response)=>{
         this.goodnumber=response.data.length
        for(var i=0;i<this.goodnumber;i++){
         this.goods.push({
            url:response.data[i].url,
            title:response.data[i].title,
            price:response.data[i].price,
            dianpu:response.data[i].dianpu,
            count:response.data[i].count
         })
         }
    }
    )
  }
  },
  watch:{
    "$route": "isLogin"
  },
  store
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 35px;
  background-color: #e3e4e5;
}
.nav {
  margin: 0% auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav ul {
  list-style: none;
}
.nav li {
  float: left;
  font-size: 14px;
  line-height: 35px;
  margin-right: 15px;
  font-weight: bold;
}
.nav a {
  text-decoration: none;
  color: #999999;
  padding-left: 15px;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: #d9534f;
}
.location {
  color: #999999;
}
.icon {
  color: #d9534f;
}
.in{
  margin-left: 100px;
}
.first {
  color: #999999;
  margin-left: 600px;
}
.first a:first-child {
  padding-left: 3px;
  border-left: none;
}
.city {
  padding: 10px 15px;
}
.city-item {
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
}
.city-item:hover {
  color: #d9534f;
}
.person-icon {
  color: #d9534f;
  background-color:  #f0cdb2;
}
.username {
  color: #999999;
}
.shopping-cart-list {
  padding: 3px 15px;
}
.shopping-cart-box {
  margin: 8px 0px;
  margin-top: 15px;
  padding-bottom: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px #ccc dotted;
}
.shopping-cart-box:first-child {
  margin-top: 8px;
}
.shopping-cart-img {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.shopping-cart-img img {
  width: 100%;
}
.shopping-cart-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 200px;
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
}
.shopping-cart-detail {
  color: #999999;
}
.shopping-cart-text {
  color: #ccc;
}
.go-to-buy {
  display: flex;
  justify-content: flex-end;
}
.shopping-cart-null {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart-null-icon {
  font-size: 38px;
  margin-bottom: 15px;
}
.shopping-cart-null span {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
}
.username-p {
  cursor: pointer;
}
.my-page {
  padding: 3px 5px;
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-page a {
  margin: 0px;
  padding: 0px;
  border: none;
}
.my-info {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.my-info:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.my-info i {
  font-size: 28px;
}
.my-info p {
  font-size: 12px;
}
.sign-out {
  padding: 5px;
  width: 50%;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.sign-out:hover {
  box-shadow: 0px 0px 5px #ccc;
}
.sign-out i {
  font-size: 28px;
}
.sign-out p {
  font-size: 12px;
}
.text-color-red span{
  color: red;
}
</style>
