<template>
  <div>
    <Search></Search>
    <div class="add-info-box-container">
      <div class="add-info-box">
        <div class="add-info-detail">
          <div class="add-info-title">
            <p>
              <i class="fa fa-check-circle"></i> 商品已成功加入购物车！</p>
          </div>
          <div class="add-info-box-row" v-for="(good, index) in goods" :key="index">
            <div class="add-info-img">
              <img :src="good.url" alt="">
            </div>
            <div class="add-info-intro" v-for="(good, index) in goods" :key="index">
              <p>{{good.title}}</p>
              <p class="add-info-intro-detail">数量:{{good.count}}</p>
              <p>¥{{good.price}}</p>
            </div>
          </div>
        </div>
        <div class="car-btn-group">
          <div></div>
          <div class="car-btn-row">
            <router-link to="/order">
              <button class="btn-car btn-car-to-pay">去购物车结算 > </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import store from '@/vuex/store';
export default {
  name: 'ShoppingCart',
  data(){
    return{
      goods:[],
      url:"",
      title:"",
      price:"",
      count:0,
      num:0
    }
  },
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  mounted(){
    this.getImageList()
  },
  methods: {
    getImageList() {
    this.$axios.post('/api/user/selectcar',{
      }).then((response)=>{
         this.goods.push({
            url:response.data[response.data.length-1].url,
            title:response.data[response.data.length-1].title,
            price:response.data[response.data.length-1].price,
            count:response.data[response.data.length-1].count
         })
         
    }
    )
  }
  },
  components: {
    Search
  },
  store,
   watch: {
'$route':'getImageList'
},
};
</script>

<style scoped>
.add-info-box-container{
  width: 100%;
  background-color: #F5F5F5;
}
.add-info-box{
  width: 90%;
  margin: 0px auto;
  padding: 15px 0px;
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.add-info-detail{
  display: flex;
    flex-direction: column;
}
.add-info-title{
  font-size: 25px;
  color: #71b247;
}
.add-info-box-row{
  display: flex;
    flex-direction: row;
    margin-top: 15px;
}
.add-info-img{
  width: 56px;
  height: 56px;
  margin-right: 15px;
}
.add-info-img img{
  width: 100%;
}
.add-info-intro{
  display: flex;
    flex-direction: column;
    justify-content: center;
}
.add-info-intro-detail{
  font-size: 12px;
  color: #999999;
}
.car-btn-group{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.btn-car{
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 0px;
  border:none;
  margin-right: 15px;
}
.btn-car-to-detail{
  background-color: #fff;
  color: #e4393c;
  border:1px solid #fff;
}
.btn-car-to-detail:hover{
border:1px solid #e4393c;
}
.btn-car-to-pay{
  background-color: #e4393c;
  color: #fff;
  border:1px solid #e4393c;
}
.btn-car-to-pay:hover{
  background-color: #c91623;
  border:1px solid #c91623;
}
.other-user-buy-box{
  width: 90%;
  margin: 0px auto;
  display: flex;
    flex-direction: column;
}
.other-user-buy-title{
  margin-top: 25px;
  font-size: 14px;
  color: #666;
  font-weight: bold;
}
.other-user-buy-row{
  margin-top: 25px;
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.other-user-buy-item-box{
  display: flex;
    flex-direction: row;
}
.other-user-buy-item-img{
  width: 96px;
  height: 96px;
}
.other-user-buy-item-img img{
  width: 100%;
}
.other-buy-detail-box{
  width: 160px;
  margin-left: 15px;
  display: flex;
    flex-direction: column;
}
.other-buy-title{
  font-size: 12px;
}
.other-buy-title a{
  color: #2c2c2c;
  text-decoration: none;
}
.other-buy-price{
  font-size: 12px;
  font-weight: bold;
  color: #E4393C;
}
.other-buy-btn{
  padding: 3px 10px;
  color: #E4393C;
  font-size: 12px;
  border: 1px solid #E4393C;
  border-radius: 0px;
  background-color: #fff;
}
.other-buy-btn:hover{
  color: #c91623;
  border: 1px solid #c91623;
}
</style>
