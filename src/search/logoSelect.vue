<template>
	<!--选择浏览器组件-->
	<div class="main-logo">
		<img src="../assets/images/360_logo.png" />
		<span class="logoList-arrow"></span>
		<!--<transition name='logofade'>
			<ul class="logoList">
				<li class="logoItem">
					<img src="../assets/images/360_logo.png">
				</li>
			</ul>
		</transition>-->
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		}
	}
</script>

<style scoped>
ul{list-style: none;padding: 0;margin: 0}
.main-logo {
    width: 600px;
    height: 140px;
    position: relative;
}

.main-logo img {
    display: block;
    margin: 0 auto;
    user-select: none;
    cursor: pointer;
}

.logoList-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    right: 100px;
    top: 66px;
    cursor: pointer
}

.logoList {
    position: absolute;
    top: 100%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 999999;
    border: 1px solid #d4d4d4
}

.logoList li {
    width: 100%;
    height: 80px;
    background-color: #FEFEFE; /*少个封号报错*/
    line-height: 80px;
    padding-top: 1px;
}

.logoList li img {
    width: 100%;
    margin-top: 10px;
}

.logofade-enter-active,
.logofade-leave-active {
    transition: all  .5s;
}

.logofade-enter,
.logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
}
.selectback{background-color: #eee !important;cursor: pointer}
</style>