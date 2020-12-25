<template>
  <div class="container">
    <Search></Search>
    <HomeNav></HomeNav>
    <div class="content">
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">每日特价</span>
        </div>
        <div class="item-class-content" v-for="(good, index) in goods" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
                <img :src="good.url" alt="" class="img-size">
              </router-link>
              <span><font size=5>{{good.title}} ¥{{good.price}}</font></span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">推荐商品</span>
        </div>
        <div class="item-class-content" v-for="(good1, index) in goods1" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
                <img :src="good1.url" alt="" class="img-size">
              </router-link>
              <span><font size=5>{{good1.title}} ¥{{good1.price}}</font></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Search from '@/components/Search';
import HomeNav from '@/components/nav/HomeNav';
export default {
  name: 'Index',
  mounted () {
    this.setIntervalObj = setInterval(function () {
    }, 1000);
    this.getImageList()
  },
  data () {
    return {
      setIntervalObj: null,
      url:"",
      goods:[],
      goods1:[],
      title:"",
      price:"",
      goodnumber:0
    };
  },
  methods: {
    getImageList() {
    this.$axios.post('/api/user/tiejia',{
      }).then((response)=>{
        this.goodnumber=response.data.length
        for(var i=0;i<this.goodnumber;i++){
         this.goods.push({
            url:response.data[i].url,
            title:response.data[i].title,
            price:response.data[i].price
         })
         }
    },
    ),
     this.$axios.post('/api/user/tuijian',{
      }).then((response)=>{
        this.goodnumber=response.data.length
        for(var i=0;i<this.goodnumber;i++){
         this.goods1.push({
            url:response.data[i].url,
            title:response.data[i].title,
            price:response.data[i].price
         })
         }
    },
    )
  }
  },
  components: {
    Search,
    HomeNav
  },
  watch: {
'$route':'getImageList'
},
  destroyed () {
    clearInterval(this.setIntervalObj);
  }
};
</script>

<style scoped>
.container {
  background-color: #F6F6F6;
}
.content {
  width: 1008px;
  margin: 0px auto;
}
.item-class {
  width: 100%;
  height: 350px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: white;
}
.item-class-head span{
  color:black;
}
.item-class-eat-head {
  background-color: #ecb226;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}

.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 260px;
}
.item-big-img img {
  margin-left: 0px;
  
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}

.img-size{
  width: 225px;
}
.img-size1{
  width:225px;
}
.item-big-img {
  width: 225px;
  height: 260px;
  float: left;
}
.item-class-content {
  width: 225px;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 10px;
  /*background-color: #cff;*/
  float: left;
}
.item-big-img span{
  color: black;
}
</style>
