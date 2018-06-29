<template>
	<div>
		<div class="mytemp">{{mytest}}</div>
		<button @click='test'>测试</button>
		<div class="mytest">我是测试文字</div>
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
			$('.mytest').text('666')
			alert('我是测试')
		}
	}
}
</script>

<style scoped>
	.mytemp{
		font-size:0.2133rem;
		color:lightskyblue;
	}
</style>