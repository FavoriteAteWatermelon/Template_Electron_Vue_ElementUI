<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'aoi_monitor'
  }
</script>

<style>
html ,body{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
 #app {
   color: #666;
   background: linear-gradient(#348f50,#56b4d3) ;
   min-height:100% ;
   overflow: hidden;
 }
  /* CSS */
</style>
