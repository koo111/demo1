<template>
  <div>
    <div class="item-intro-show">
   
        <div class="item-intro-nav item-tabs">
          <Tabs>
            <TabPane label="商品介绍">
              <div class="remarks-title">
                <span>商品介绍</span>
              </div>
              <div class="item-intro-img" v-for="(item,index) in goods" :key="index">
                <img :src="item.url" alt="">
              </div>
            </TabPane>
            <TabPane label="规格参数">
            </TabPane>
            <TabPane label="售后保障">
            </TabPane>
            <TabPane label="商品评价">
            </TabPane>
          </Tabs>
        </div>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'ShowGoodsDetail',
  data () {
    return {
      index:0,
      url:"",
      goods:[],
      goodnumber:0
    };
  },
  mounted(){
    this.getImageList()
  },
  methods: {
    getImageList() {
    this.$axios.post('/api/user/goodsdetail',{
      }).then((response)=>{
      this.goodnumber=response.data.length
      for(var i=0;i<this.goodnumber;i++){
         this.goods.push({
            url:response.data[i].url
         })
         }
    }
    )
  },
  },
  store
};
</script>

<style scoped>
.item-intro-show{
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-intro-detail{
  margin-left: 30px;
  width: calc(80vw - 300px);
}
.item-intro-img{
  width: 100%;
  display: flex;
  flex-direction:column;
}
.remarks-title {
  padding-left: 15px;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 36px;
  color: #666666;
  background-color: #F7F7F7;
}
</style>