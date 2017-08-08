<template>
    <div id="wrapper">
        <v-sidebar></v-sidebar>
        <div id="page-wrapper" clsss="gray-bg" style="min-height:974px;">
             <v-head></v-head>
             <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue'
    import vSidebar from './Sidebar.vue'
    // import {mapGetters} from 'vuex'
    import cn from 'element-ui/lib/locale/lang/zh-CN'
    import locale from 'element-ui/lib/locale'
    // locale.use(cn)
    export default {
      components: {
        vHead, vSidebar
      },
      created: function(){
          locale.use(cn);
      },
      computed: {
        //    locale.use(cn)
      }
    }
</script>

<style>
#page-wrapper{
    background:#f3f3f4;
}
</style>
