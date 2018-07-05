<template>
	<div>
		<logo-select></logo-select>
		<div class="search-input">
			<input type="text" v-model='keyword' @keyup="get($event)">
			<span class="search-reset">&times;</span>
			<button class="search-btn">搜一下</button>
			<div class="search-select">
				<transition-group name="itemfade" tag='ul'>
					<li v-for="(item,index) in myData" :key='index' class="search-select-option search-select-list" key=''>{{item}}</li>
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
			}
		},
		components:{
			'logo-select':logoselect
		},
		methods:{
			//搜索关键词联想
			get:function(e){
				console.log(e)
				var urls = 'https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8'
//				console.log(this.$http)
//				console.log(this.axios)
				this.$http.jsonp(urls).then(function(res){
					console.log(res.data.s)
					this.myData = res.data.s
				})
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