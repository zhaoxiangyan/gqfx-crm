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
    // element-UI国际化English
    import en from 'element-ui/lib/locale/lang/en'
    import locale from 'element-ui/lib/locale'
    locale.use(en)
    // element-UI国际化Japanse
    // import ja from 'element-ui/lib/locale/lang/ja'
    // locale.use(ja)
    export default {
      components: {
        vHead, vSidebar
      },
      computed: {

      }
    }
</script>

<style>
#page-wrapper{
    background:#f3f3f4;
}
</style>
