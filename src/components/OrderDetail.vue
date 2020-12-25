<template>
  <div class="context">
    <Search></Search>
    <div class="address-container">
      <h3>收货人信息</h3>
      <div class="address-box">
          <div class="address-add-name">
              <router-link to="addAddress">
            <span><Icon type="ios-checkmark-outline"></Icon>增加地址</span>
              </router-link>
          </div>
        <div class="address-check">
          <div class="address-check-name">
            <span
              ><Icon type="ios-checkmark-outline"></Icon>
              {{ checkAddress.name }}</span>
          </div>
          <div class="address-detail">
            <p>{{ checkAddress.address }}</p>
          </div>
        </div>
        <Collapse>
          <Panel>
            选择地址
            <p slot="content">
              <RadioGroup vertical size="large" @on-change="changeAddress">
                <Radio :label="item.addressId" v-for="(item, index) in address" :key="index">
                  <span>{{ item.name }} {{ item.province }} {{ item.city }}{{ item.address }} {{ item.phone }} {{ item.postalcode }}</span>
                </Radio>
              </RadioGroup>
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
    <div class="remarks-container">
      <h3>备注</h3>
      <i-input
        v-model="remarks"
        size="large"
        placeholder="在这里填写备注信息"
        class="remarks-input"
      ></i-input>
    </div>
    <div class="invoices-container">
      <h3>发票信息</h3>
      <p>该商品不支持开发票</p>
    </div>
    <div class="pay-btn">
            <router-link to="/pay"><Button type="error" size="large">支付订单</Button></router-link>
          </div>
  </div>
</template>
<script>
import Search from '@/components/Search';
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
import Pay from '@/components/Pay';
export default {
    name: 'OrderDetail',
  created () {
    this.loadAddress();
  },
  data () {
    return {
      checkAddress: {
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    };
  },
  computed: {
    ...mapState(['address', 'shoppingCart']),
    totalPrice () {
      let price = 0;
      this.goodsCheckList.forEach(item => {
        price += item.price * item.count;
      });
      return price;
    }
  },
  methods: {
    ...mapActions(['loadAddress']),
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      const father = this;
      this.address.forEach(item => {
        if (item.addressId === data) {
          father.checkAddress.name = item.name;
          father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
        }
      });
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
  },
  components: {
    Search,
    Pay
  },
  store
};
</script>

<style scoped>
.address-container {
  margin-top: 15px;
  width: 80%;
  margin: 15px auto;
}
.address-box {
  margin-top: 15px;
  margin: auto;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-add-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color:red;
}
.address-add-name span {
  width: 120px;
  height: 100%;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px auto;
  width: 80%;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container{
  margin: 15px auto;
  width: 80%;
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-btn {
  margin: 15px auto;
  width: 80%;
  display: flex;
  justify-content: flex-end;
}
</style>