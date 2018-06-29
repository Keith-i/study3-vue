<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>666</div>
    <ul>
    	<li>
    		<router-link to="/myfirtfile">我第一个文件</router-link>
    	</li>
    	<li>
    		<router-link to="*">404</router-link>
    	</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
