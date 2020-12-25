<template>
  <div>
    <Search></Search>
    <div class="goods-list-container">
      <Table border ref="selection" :columns="columns" :data="goods" size="large" @on-selection-change="select">
      </Table>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>订单总额：</span> <span class="money"><Icon type="social-yen"></Icon> {{totalPrice.toFixed(2)}}</span></p>
          <div class="pay-btn">
            <router-link to="/orderdetail"><Button type="error" size="large">去结账</Button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import store from '@/vuex/store';
import OrderDetail from '@/components/OrderDetail';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data () {
    return {
      goods:[],
      url:"",
      title:"",
      price:"",
      count:0,
      goodnumber:0,
      goodsCheckList: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          title:'全选',
          align: 'center'
        },
        {
          title: '图片',
          key: 'url',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.url,style:'width:50px'
                }
              })
            ]); 
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 80,
          key: 'price',
          align: 'center'
        },
        {
        title: '删除',
        key: 'Action',
        width: 80,
        render: (h, params) => {
          return h('div', [
            h('Icon', {
              props: {
                type: 'trash-a' // iview自带的删除icon
              },
              style: {
                fontSize: '25px', // 改变icon的样式
                color: '#559DF9'
              },
              on: {
                click: (index) => {
                    this.$axios.post('/api/user/delete',{
                      data:{
                        url:this.goods[params.index].url
                      }
                }).then((response)=>{})
                }
              }
            })
          ])
        }
        }]
    }
  },
  computed: {
    totalPrice () {
      let price = 0;
      this.goodsCheckList.forEach(good => {
        price += good.price * good.count
      });
      return price;
    }
  },
  methods: {
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
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
  mounted () {
    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
    this.getImageList()
  },
  components: {
    Search,
    OrderDetail
  },
  store
};
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
