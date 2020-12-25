<template>
  <div>
    <div class="container">
      <div class="logo1">
        <a href="index.html"><img src="static/img/logo.png" alt="" class="logo" ></a>
      </div>
      <div>
      <i-input v-model="sreachData" size="large" class="sreach" placeholder="手机">
        <Button class="search-color" slot="append" @click="sreach"><Icon type="ios-search" size="18" color="white"></Icon></Button>
      </i-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      sreachData: '',
    };
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags (index) {
      this.sreachData = this.promotionTags[index];
    },
    sreach () {
      this.$router.push({path: '/goodsList', query: { sreachData: this.sreachData }});
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0% auto;
  margin-bottom: 15px;
  width: 460px;
}
.logo1{
  margin-left: -250px;
  width: 150px;
  height: 50px;
}
.logo{
  width: 150px;
  height: 50px;
  margin-top: 15px;
}
.sreach {
  margin: 5px 0px;
  margin-top: -25px;
}
.search-color{
  background-color: red;
}
</style>
