<template>
  <div id="goods">
  	<div id="us" v-for="goods in goodsils">
  		
    <h3>{{goods.goods_name}}</h3>
    <p>库存：{{goods.goods_surplus| fint}}{{goods.goods_units}}</p>
    <p>规格:{{goods.goods_unitsvalue}}x{{goods.goods_spec}}</p>
    <p>保质期:{{goods.goods_vdate}}天</p>
    <p>单价:{{goods.goods_price | price}}</p>
     <button @click>详细</button>
     <button @click>购买</button>

  	</div>
     
  </div>
</template>
  
<script>
import axios from 'axios'
	
export default {
  name: 'goods',
  
  props:{
  		goodsils:{
		  		type:Array ,
		  		required:true,
  					}
  			},
  data () {	
    	return {
   				 }
  			 },
  			 methods:{
    	
    
  }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#goods{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
	/*background-color: red;*/
	
}
#us{
	/*flex-grow: 1;*/
	flex-basis: 160px;
		border-radius: 5px;
	margin: 2px;
	text-align: center;
	padding: 10px;
	border: 1px solid #222;
	background-color: #9AC0CD;
}
p{
	/*line-height: 30px;*/
	margin-top: 8px;
	text-align: left;
	margin-left:12px ;
	/*float: left;*/
}
button{
	margin-top:10px ;
}

</style>
