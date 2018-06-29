<template>
	<div>
		<div>我是子组件啊</div>
		<div class="childtxt">{{childtxt}}</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			'childtxt':'我是子组件的内容啊'
		}
	}
}
</script>

<style>
	.childtxt{
		color:red;
	}
</style>