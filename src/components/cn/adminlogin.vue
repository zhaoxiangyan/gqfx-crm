<template>
   <div class="login">


<div class="main">
  <div class="header">
    <img src="../../assets/logo.png">
    <span>管理后台登录</span>
  </div>
  <div class="content"> 
      <form action="index-.html" class="panel-body">
                    <div class="form-group">
                        <label class="control-label" style="color:#fff;">用户名</label>
                        <input type="text" placeholder="用户名" class="form-control" name="username" id="username" value="">
                    </div>
                    <div class="form-group">
                        <label class="control-label" style="color:#fff;">密码</label>
                        <input type="password" placeholder="密码" class="form-control" name="passwd" id="passwd" value="">
                    </div>
                    <div class="form-group">
                        <label class="control-label" style="color:#fff;">验证码</label>
                        <input type="text" id="code" name="code" class="form-control">
                    </div>
                    <div class="form-group ">
                        <a href="#" class="fr" style="margin-top: 20px;
                           display: block; "><img src="../../assets/index.png" id="imgCode" style="cursor:pointer;"></a>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input type="checkbox" name="remember" id="remember" value="1">
                            保持登录状态 </label>
                    </div>
                    <button type="button" class="btn btn-warning" name="loginin" id="loginin" style="width: 100%; font-family:'微软雅黑'">
                           <router-link to="/cn/admin">登 录</router-link></button>
                    <div class="line line-dashed"></div>
                </form>
  </div>
</div>
   </div>	
</template>
<script>
  // import FSS from "../../static/js/FSS.js"
	export default {
  name: 'adminlogin',
  created: function(){
    // FSS("canvas-warp","output");
	
	}
  }
</script>
<!-- scoped  样式只对当前组件起作用 -->
<style scoped>
.login{
  width:100%;
  height:100%;
  overflow:hidden;
  background:#1845a0;
}
.login .main{
  padding-top:8%;
  position:absolute;
  z-index:999;
  top:0;
  left:50%;
  margin-left:-210px;
}
.main .header{
  padding: 20px 30px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px
}
.header img{
  vertical-align:middle;
}
.header span{
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    padding-left: 20px;
    line-height: 73px;
    font-family: "微软雅黑";
    height:73px;
    display:inline-block;
}
.main .content{
  width: 420px;
  margin: 0 auto;
   background-color: rgba(0,0,0,0.2);
}
.content form{
  padding:30px;
}
.content form button{
  width:100%;
  font-size:15px;
}
.content form button a{
    color:#fff;
    display:block;
}
</style>
