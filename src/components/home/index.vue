<template>
	<div id="home">
		<el-container>
  			<el-header height='80px'>
  				<div >
				<p >普瑞咖啡</p>
			</div>
			<ul>
			<li>
				<!--<i class="el-icon-user"></i>个人中心-->
				<el-dropdown trigger="click">
				  <span class="el-dropdown-link">
				   	 <i class="el-icon-user-solid"></i>个人中心
				  </span>
				  <el-dropdown-menu slot="dropdown" >
				    <el-dropdown-item><i class="el-icon-user-solid"></i>我的资料</el-dropdown-item>
				    <el-dropdown-item><i class="el-icon-s-tools"></i>修改密码</el-dropdown-item>
				    <el-dropdown-item ><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
								
			</li>
			<li><i class="el-icon-s-order"></i>我的订单</li>
			<li><i class="el-icon-shopping-cart-1"></i>购物车</li>
			</ul>
  			</el-header>
	  		<el-container>
	   		 <el-aside width="140px" >
	   		 	<div  v-for=" (data,i) in classes" :key="data.id" >
						<div class="classes" v-on:click="shuwlis(i)">
							{{data.classes_name}}
						</div>
						<ul v-show="data.show" >
							<li v-on:click="getgoods(classer2.id)" class="classes" v-for="classer2 in data.classesils" :key='classer2.id' >{{classer2.classes_name}}{{classer2.id}}</li>
						</ul>
				</div>
	   		 </el-aside>
	   	 <el-main><goods :goodsils="goods"></goods></el-main>
	 	 </el-container>
		</el-container>
	</div>
</template>
<script>
	import goods from './goods'
export default {
	name: 'home',
	 components:{
   			goods,
  				},
		  	data () {
		    	return {
		    		input4: '',
		    		classes:[],
		    		goods: [],
		    		a:1,
							}
		 		 },
		methods:{
	shuwlis:function(i){
			
     //遍历：点击的选项显示就隐藏，并且把其余的都关闭;隐藏的就打开,并且把其余的都关闭
      this.classes.map((item,index)=>{
      return item.show = index===i?!item.show:false;
     });
     console.log(i,this.classes);
  },
 	getgoods: function(id) {
			    console.log(id);
				this.$axios.get('http://localhost/tp/index/goods/goods', {
    		params: {
    			goods_classes:id
   				 }
		})
			.then((res) =>{
				this.goods=res.data;
				console.log(res.data);
				})
			.catch((error) => {
			    console.log(error);
				});
		},
		},
	beforeCreate(){	
		this.$axios.get('http://localhost/tp/index/index/classes', {
    		params: {}
		}).then((res) =>{
				res.data.map((item,index)=>{return item.show = false;});
				this.classes=res.data;
				
				})
			.catch((error) => {
			    console.log(error);
				});
		this.$axios.get('http://localhost/tp/index/goods/goods', {
    		params: {
    			goods_classes:13
   				 }
		})
			.then((res) =>{
				this.goods=res.data;
				console.log(res.data);
				})
			.catch((error) => {
			    console.log(error);
				});
	},
	mounted(){

	}
}
</script>
<style scoped >
#home{
	min-width: 800px;
}
/***************头部***********/
.el-header{
	/*min-height: 200px;*/
    background-color: #B3C0D1;
    color: #333;
	position:relative;
  
}
  .el-header p{
  	font-size: 28px;
	text-align: center;
	line-height: 80px;
}
	
.el-header ul{
	position:absolute;
	right:10px;
	bottom: 0;
	font-size: 14px;
	
/*margin-top:20px ;*/
}

.el-header ul li{
	float: right;
	height: 26px;
	width: 80px;
	line-height: 26px;
	text-align: center;
	margin-right: 10px;
}
.el-header ul li:hover{
	color: #fff;
}


.el-header ul li i{
  margin-right:6px ;
	 line-height: 30px;
}
  
/***************侧栏***********/
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 600px;
    padding-top: 20px;
  
  }
  
  .classes{
	/*height: 35px;*/
	line-height: 35px;
	width: 100%;
	margin-bottom:1px ;
	background-color: #8DB6CD;
	text-align: center;
	border-radius:5px
}

.el-aside div ul li{
	line-height: 35px;
	width: 100%;
	margin-bottom:1px ;
	background-color: #B4CDCD;
	text-align: center;
	border-radius:2px;
	/*display:none;*/
}
.el-aside div ul li:hover{
	background-color:#BCD2EE;
}
/***************内容***********/
  
 .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
    text-align: center;
    
  }
</style>