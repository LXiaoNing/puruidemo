<template>
	<div id="admin">
		<el-container>
		  <el-aside width="180px">
		  	<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-submenu index="1">
        <template slot="title"> 
        	<i class="el-icon-location"></i><span>商品管理</span>
        </template>
          <el-menu-item index="1-1">出库</el-menu-item>
          <el-menu-item index="1-2">单位</el-menu-item>
          <el-menu-item index="1-3">入库</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"> 
        	<i class="el-icon-location"></i><span>表单管理</span>
        </template>
          <el-menu-item index="2-1">订单</el-menu-item>
          <el-menu-item index="2-2">订单记录</el-menu-item>
          <el-menu-item index="2-3">库存</el-menu-item>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title"> 
        	<i class="el-icon-location"></i><span>账号管理</span>
        </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
		  </el-aside>
		  <el-container>
		    <el-header height='40px'>
		    </el-header>
		    <el-main>
		    	<router-view/>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>
<script>
//	import goods from './goods'
export default {
	name: 'admin',
	 components:{
// 			goods,
  				},
		  	data () {
		    	return {
							}
		 		 },
		methods:{
		},
	beforeCreate(){	
			},
	mounted(){

	}
}
</script>
<style scoped >
 #admin{
 min-width: 800px;
 }
 
.el-aside {
    height: 100%;
    min-height: 600px;
    background-color: rgb(48, 65, 86);
    
  }

  
 ul{
 	width:100%;
	float: left;
  	padding-top:20px;
    height: 100%;

   /*background-color: yellow;*/ 
}

li{	
	line-height:60px;
	margin-top: 1px;
	
}

li:hover{
    background-color: rgb(48, 65, 86);
		background-color: #999999;
		transition: .5s;
	}
	
li a{
    /*background-color: rgb(48, 65, 86);*/
    	height: 60px;
        display: block;
	
} 
/*******************头部*************/
 .el-header{
    background-color: #B3C0D1;
  
  } 
/*******************内容*************/
  
 .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>