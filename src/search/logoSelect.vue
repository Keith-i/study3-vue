<template>
	<!--选择浏览器组件-->
	<div>
		<div class="main-logo">
			<text>{{linkUrl}}</text>
			<img :src="logoData[selectedNow].imgSrc" @click="toggleFlag"/>
			<span class="logoList-arrow"></span>
			<transition name='logofade'>
				<ul class="logoList" v-show='mouseLeaveFlag' @mouseleave="mouseLeaveList">
					<li class="logoItem" v-for='(item,index) in logoData' :key="index" @mousemove="logoListHover(index)" :class="{selectback:logoNow==index}" @click="logoSelected(index)">
						<img :src="item.imgSrc" />
					</li>
				</ul>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{
		props:['linkUrl'],
		data(){
			return{
				selectedNow:0,
				mouseLeaveFlag:false,
				logoNow:-1,
				logoData:[
					{imgSrc:'/static/images/360_logo.png',linkdata:'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=',name:'360搜索'},
					{imgSrc:'/static/images/baidu_logo.png',linkdata:'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=',name:'百度搜索'},
					{imgSrc:'/static/images/sougou_logo.png',linkdata:'https://www.sogou.com/web?query=',name:'搜狗搜索'}
				]
			}
		},
		methods:{
			toggleFlag:function(){
				this.mouseLeaveFlag = !this.mouseLeaveFlag;
//				this.mouseLeaveFlag = true;
			},
			logoListHover:function(index){
				this.logoNow = index;
			},
			logoSelected:function(index){
				this.selectedNow = index;
				this.mouseLeaveFlag = false;
				this.$emit('sellink',this.logoData[index]);
			},
			//鼠标离开事件
			mouseLeaveList:function(){
				this.mouseLeaveFlag=false;
			}
		},
		mounted:function(){
			console.log(this.linkUrl)
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