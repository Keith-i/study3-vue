<template>
	<div>
		<div class="mytemp">{{mytest}}</div>
		<button @click='test'>测试</button>
		<child-view></child-view>
	</div>
</template>

<script>
import childcom from './childcom' 
export default {
	name: 'myfirtfile',
	data () {
		mytest: '这是我第一个测试文件'
		return {
		  mytest: '这是我第一个测试文件'
		}
	},
	components:{
		'child-view':childcom
	},
	methods:{
		test:function(){
			alert('我是测试')
		}
	}
}
</script>

<style scoped>
	.mytemp{
		font-size:16px;
		color:lightskyblue;
	}
</style>