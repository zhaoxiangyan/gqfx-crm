<template>
    <div id="wrapper">
        <v-left></v-left>
        <div id="page-wrapper" clsss="gray-bg" style="min-height:974px;">
             <v-top></v-top>
             <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vTop from './top.vue'
    import vLeft from './left.vue'
    // import {mapGetters} from 'vuex'
    export default {
      components: {
        vTop, vLeft
      },
      computed: {
        // 使用对象展开运算符将getters混入computed对象中
        // ...mapGetters([
        //     'getcollapsed'
        // ]) 
      }
    }
</script>

<style>
#page-wrapper{
    background:#f3f3f4;
}
</style>
