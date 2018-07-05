<template>
	<div>
		<logo-select></logo-select>
		<div class="search-input">
			<input type="text" v-model='keyword' @keyup="get($event)" @click="get($event,'climouse')" @keydown.down='selectDown()' @keydown.up.prevent='selectUp()'>
			<span class="search-reset" @click='clearInput()'>&times;</span>
			<button class="search-btn">搜一下</button>
			<div class="search-select" v-if='ifshow'>
				<transition-group name="itemfade" tag='ul'>
					<li v-for="(item,index) in myData" :key='index' :class="{selectback:index==now}" class="search-select-option search-select-list" @mouseover="selectHover(index)" @click="selectClick(index)">{{item}}</li>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script>
	import logoselect from './logoSelect.vue'
	export default{
		data(){
			return{
				myData:[],
				keyword:'',//搜索内容
				now:-1,
				ifshow:true
			}
		},
		components:{
			'logo-select':logoselect
		},
		methods:{
			//搜索关键词联想
			get:function(e,mouse){
				// 如果按得键是上或者下，就不进行ajax
	            if (e.keyCode == 38 || e.keyCode == 40) {
	                return;
	            }
//	            console.log(e)
				if(mouse == 'climouse'){
					this.myData = []
				}
				var urls = 'https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8'
//				console.log(this.$http)
//				console.log(this.axios)
				this.$http.jsonp(urls).then(function(res){
					console.log(res.data.s)
					this.myData = res.data.s
				})
				this.ifshow = true;
			},
			selectHover:function(index){
				this.now = index;
			},
			selectClick:function(index){
				this.keyword = this.myData[index];
				this.ifshow = false;
			},
			selectUp:function(){
				console.log(this.now)
				this.now--;
				if(this.now <= -1){
					this.now = this.myData.length-1;
				}
				this.keyword = this.myData[this.now]
			},
			selectDown:function(){
				console.log(this.now)
				console.log(this.myData.length)
				this.now++;
				if(this.now == this.myData.length){
					this.now = 0;
				}
				this.keyword = this.myData[this.now]
			},
			clearInput:function(){
				this.keyword = ''
				this.myData = []
			}
		}
	}
</script>

<style scoped>
.search-input{
	height: 45px;
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}
.search-input:first-child {
    height: 45px;
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}

.search-input input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
}

.search-btn {
    height: 45px;
    width: 100px;
    border: 1px solid mediumseagreen;
    background-color: mediumseagreen;
    color: white;
    font-size: 16px;
    font-weight: bold;
    float: left;
}

.search-btn {
    cursor: pointer
}

.search-select {
    position: absolute;
    top: 45px;
    width: 500px;
    box-sizing: border-box;
    z-index: 999;
}

.search-select li {
    border: 1px solid #d4d4d4;
    ;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%
}

.search-select-option {
    box-sizing: border-box;
    padding: 7px 10px;
}

.selectback {
    background-color: #eee !important;
    cursor: pointer
}

input::-ms-clear {
    display: none
}

.search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px
}

.search-select-list {
    transition: all 0.5s
}

.itemfade-enter,
.itemfade-leave-active {
    opacity: 0;
}

.itemfade-leave-active {
    position: absolute;
}

.selectback {
    background-color: #eee !important;
    cursor: pointer
}
.search-select ul{margin:0;text-align: left; }
</style>