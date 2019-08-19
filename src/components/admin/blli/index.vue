<template>
  <div id="blli">
    <div class="order_herder">
      <ul>
        <li class="bxg">
          <router-link to="/admin/billroot/order">订单</router-link>
        </li>
        <li class="bxg">
          <router-link to="/admin/billroot/putbill">入库单</router-link>
        </li>
        <li class="bxg">
          <router-link to="/admin/billroot/outbill">出库单</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view />
      <orderdetails></orderdetails>
    </div>
  </div>
</template>
<script>
//	import orderdetails from './OrderDetails'
export default {
  name: 'blli',
  components: {
    //			orderdetails,

  },
  data() {

    return {

    }
  },
  methods: {
    changeTitle: function() {
      //				this.title="13254"
      //				this.$emit("titlechanged","事件传值");
    }
  }

}

</script>
<style scoped>
#blli {
  position: relative;
  overflow: visible;
}

h2 {
  border-bottom: 1px solid #515151;
  height: 40px;
  line-height: 40px;
  font-weight: lighter;

}

/***************头部样式********************/
.goodsroot_herder {
  height: 50px;
  padding-top: 10px;
  padding-left: 25px;
  border-bottom: 1px solid #515151;

  /*border-bottom: 1px dashed #ccc;*/

}

ul {
  margin-left: 25px;

}

li {
  height: 30px;
  line-height: 30px;
  /*padding:0 20px;*/
  width: 160px;
  margin-right: 3px;

  /*margin-right: 10px;*/

}

li a {
  /*background-color: rgb(48, 65, 86);*/
  height: 100%;
  width: 100%;
  color: #222222;
  display: block;



}



/************表单样式*******************************************/

</style>
