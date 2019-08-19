import Vue from 'vue'
 Vue.filter('fint',function(vali){
 	vali=vali||0;
 	return parseInt(vali);
 })
 
 Vue.filter('date',function(val){
 	
 var a=new Date(parseInt(val)).toLocaleDateString();
	
 	return a;

});
Vue.filter('price',function(vali,unit){
			vali=vali||0;
			unit=unit||'￥'
 			vali=parseInt(vali);
 	return unit+vali.toFixed(2);
 })
 
 
