<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="container">
      <GoodsClassNav></GoodsClassNav>
      <div class="goods-box">
        <div class="goods-list-box">
          <div class="goods-list">
            <div class="goods-show-info" v-for="(item, index) in goods" :key="index">
              <div class="goods-show-img">
                <img :src="item.url" class="img-size" @click="toDetails(item)"/>
              </div>
              <div class="goods-show-price">
                <span>
                  <Icon type="social-yen text-danger"></Icon>
                  <span class="seckill-price text-danger">{{item.price}}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <span>{{item.title}}</span>
              </div>
              <div class="goods-show-seller">
                <span>{{item.dianpu}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-page">
        <Page :total="100" show-sizer></Page>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import GoodsClassNav from '@/components/nav/GoodsClassNav';
import store from '@/vuex/store';
export default {
  name: 'GoodsList',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data () {
    return {
      goodnumber:0,
      goods:[],
      url:"",
      title:"",
      price:"",
      dianpu:"",
    };
  },
  methods: {
    getImageList() {
    this.$axios.post('/api/user/goods',{
      }).then((response)=>{
        this.goodnumber=response.data.length
        for(var i=0;i<this.goodnumber;i++){
         this.goods.push({
            url:response.data[i].url,
            title:response.data[i].title,
            price:response.data[i].price,
            dianpu:response.data[i].dianpu
         })
         }
    },
    )},
      toDetails(good) {
      this.$router.push({
        name: 'GoodsDetail',
        params: {
          product: good
        }
      })
    },
  },
  mounted () {
    this.searchItem = this.$route.query.sreachData;
    this.getImageList()
  },
  components: {
    Search,
    GoodsListNav,
    GoodsClassNav
  },
  store,
   watch: {
'$route':'getImageList'
}
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  width: 93%;
  min-width: 1000px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}

.goods-list-box {
  margin-left: 15px;
  width: calc(100% - 215px);
}
.goods-list-tool{
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  background-color: #F1F1F1;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
}
.goods-list-tool li{
  float: left;
}
.goods-list-tool span{
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{
  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: #E4393C;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 250px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.img-size{
  width: 250px;
}
</style>
