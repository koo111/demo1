import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
const Login = resolve => require(['@/components/Login'], resolve);
const SignUp = resolve => require(['@/components/SignUp'], resolve);
const InputInfo = resolve => require(['@/components/signUp/InputInfo'], resolve);
const SignUpDone = resolve => require(['@/components/signUp/SignUpDone'], resolve);
const GoodsList = resolve => require(['@/components/GoodsList'], resolve);
const GoodsDetail = resolve => require(['@/components/GoodsDetail'], resolve);
const ShoppingCart = resolve => require(['@/components/ShoppingCart'], resolve);
const Order = resolve => require(['@/components/Order'], resolve);
const OrderDetail = resolve => require(['@/components/OrderDetail'], resolve);
const Pay = resolve => require(['@/components/Pay'], resolve);
const PayDone = resolve => require(['@/components/PayDone'], resolve);
const AddAddress = resolve => require(['@/components/AddAddress'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
      children: [
        {
          path: '/',
          name: 'index',
          component: InputInfo
        },
        {
          path: 'signUpDone',
          name: 'SignUpDone',
          component: SignUpDone
        }
      ]
    },
    {
      path: '/goodsList', 
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/orderdetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/payDone', 
      name: 'PayDone',
      component: PayDone
    },
    {
      path: '/addAddress',
      name: 'AddAddress',
      component: AddAddress
    }
  ]
});
