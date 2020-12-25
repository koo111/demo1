<template>
  <div>
    <Search></Search>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="this.$route.params.product.url" alt="">
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            {{this.$route.params.product.title}}</p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">价格</span>
                <span class="item-price">￥{{this.$route.params.product.price}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num"> 1000条</span>
              </p>
            </div>
          </div>
        </div>
        <br>
        <div>
          <span class="item-dianpu-title">店铺:</span>
                <span class="item-price">{{this.$route.params.product.dianpu}}</span>
        </div>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCart()">加入购物车</Button>
          </div>
        </div>
      </div>
    </div>
    <ShowGoodsDetail></ShowGoodsDetail>
  </div>
</template>

<script>
import Search from '@/components/Search';
import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
export default {
  name: 'GoodsDetail',
  data () {
    return {   
      count:1
    };
  },
  methods:{
    addShoppingCart() {
      this.$axios
        .post("api/user/addshoppingcar", {
          data: {
            title: this.$route.params.product.title,
            price: this.$route.params.product.price,
            url: this.$route.params.product.url,
            dianpu: this.$route.params.product.dianpu,
            count:this.count
          },

        })
        .then((res) => {
        });
        this.$router.push({
        name: 'ShoppingCart'
      })
    }
  },
  components: {
    Search,
    ShowGoodsDetail
  }
};
</script>

<style scoped>
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}
.shop-nav-container {
  margin: 0px auto;
  width: 80%;
}
.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price {
  color: #e4393c;
  font-size: 23px;
  cursor: pointer;
}
.item-dianpu-title{
  font-size: 20px;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.add-buy-car-box {
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
.bigImg img{
  width: 300px;
  height: 300px;
}
.img2{
  display: none;
  top: 40px;
  position: absolute;
}
.img2 img{
  width: 300px;
  height: 300px;
}
.smallImg{
  width: 300px;
  
}
.small2{
  position: absolute;
  margin-left: 55px;
  margin-top: -53px;
}
.small3{
  position: absolute;
  margin-left: 110px;
  margin-top: -53px;
}
.small4{
  position: absolute;
  margin-left: 165px;
  margin-top: -53px;
}
.small5{
  position: absolute;
  margin-left: 220px;
  margin-top: -53px;
}
.s1:hover .img2{
  display: block;
}
.s2:hover .img2{
  display: block;
}
.s3:hover .img2{
  display: block;
}
.s4:hover .img2{
  display: block;
}
.s5:hover .img2{
  display: block;
}
.small1,.small2,.small3,.small4,.small5 {
  width: 50px;
  height: 50px;
}
</style>
