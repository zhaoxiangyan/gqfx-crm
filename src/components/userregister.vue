<template>
<div class="userregister">
<!-- 头部导航内容块 -->
   <div class="nav">
       <div class="nav_header" v-bind:class="[ collapsestate ? '' : 'width90']">
           <div class="nav_brand">
              <img class="nav_brand_logo" src="../assets/logo-w.png" >
           </div>
       </div>
       <div class="nav_container clearfixx" v-bind:class="[ collapsestate ? '' : 'margin-left90']">
            <ul class="nav_toolbar">
               <li id="toggleMenubar" @click.prevent="changecollapse"><a><i class="fa" v-bind:class="[ collapsestate ? 'fa-arrow-left' : 'fa-bars']" ></i></a></li>
               <li v-if="fullscreen" id="toggleFullscreen" @click="fullScreen()"><a><i class="fa fa-arrows-alt"></i></a></li>
               <li v-else @click="cancelFullScreen()"><a><i class="fa fa-compress"></i></a></li>
               <li class="dropdown">
                  <a id="toggleQuick" @click="togglestate=!togglestate">Fast Navigate<i class="fa fa-angle-down"></i></a>
                  <span v-show="togglestate">
                        <div><i class="fa fa-angle-right"></i><router-link to="/userlogin">Login</router-link></div>
                        <div><i class="fa fa-angle-right"></i><router-link to="/userregister">Register</router-link></div>
                  </span>
               </li>
            </ul>
            <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
                        <li class="dropdown">
                            <a class="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
                               data-animation="scale-up" role="button">
                                <span class="">
                                   <img src="../assets/English.png" alt="...">English                                    
                                </span>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li role="presentation" >
                                    <a href="#" role="menuitem"><img src="../assets/English.png" alt="..." > English</a>
                                </li>
                                <li role="presentation">
                                    <a href="#" role="menuitem" ><img src="../assets/China.png" alt="..." > 中文简体</a>
                                </li>
                                <li role="presentation" >
                                    <a href="#" role="menuitem"><img src="../assets/Japan.png" alt="..." > 日本语</a>
                                </li>
                            </ul>
                        </li>
            </ul>

       </div>
   </div>
   <!--左边折叠导航栏-->
   <div class="left_collapse" v-bind:class="[ collapsestate ? '' : 'width90']">
        <ul v-show="collapsestate">
           <li>Navigation</li>
        </ul>
   </div>
   <!--注册表单内容块-->
   <div class="content" v-bind:class="[ collapsestate ? '' : 'margin-left90']">
        <div class="content_title">
           <h1>Registered real account</h1>
           <ol class="breadcrumb">
            <li><a href="javascript:void(0);">Current page</a></li>
            <li><a href="javascript:void(0);">Registered real account</a></li>
           </ol>  
        </div>
        <div class="main">
          <form>
             <h3 class="form_title">Registered real account</h3>
             <div class="form_body">
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Name：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="uusername" name="uusername" placeholder="" data-rules="empty" data-message="内容必填" />      
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Recommended NO：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="parentid" name="parentid" value=""  placeholder="" data-rules="empty" data-message="必填" />                        
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*ID Number：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="identifier" name="identifier" value=""  placeholder="" data-rules="empty" data-message="必填" />                    
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Mobile：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="mobile" name="mobile" value=""  placeholder="" data-rules="empty" data-message="必填" />            
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Email：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="email" name="email" value=""  placeholder="" data-rules="empty" data-message="必填" />                   
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*National：</div>
                            <div class="col-sm-6 col-lg-6">
                                <select class="form-control" style="" id="country" name="country">
                                    <option value="Aland Islands">Aland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option valu <option value="Burkina Faso">Burkina Faso</option>
                                </select>
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Province/State：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="province" name="province" placeholder="" data-rules="empty" data-message="内容必填" />  
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*City：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="city" name="city" placeholder="" data-rules="empty" data-message="内容必填" />
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*County：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="town" name="town" placeholder="" data-rules="empty" data-message="内容必填" />
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Details：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="text" id="address" name="address" placeholder="" data-rules="empty" data-message="内容必填" />
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Account Password：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="password" id="passwd" name="passwd" value="" placeholder="Cipher numbers plus 6-8 digits, letters must be above 2 digits" data-rules="empty" data-message="内容必填" />         
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Confirm the Account Password：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="" type="password" id="mkpasswd" name="mkpasswd" value="" placeholder="Cipher numbers plus 6-8 digits, letters must be above 2 digits" data-rules="empty" data-message="内容必填" />                    
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Upfront：</div>
                            <div class="col-sm-6 col-lg-6">
                                 <input class="form-control" style="padding-bottom:40px;" type="file" id="image1" name="image1" value="" placeholder="" data-rules="empty" data-message="内容必填" /> 
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">Prevview：</div>
                            <div class="col-sm-6 col-lg-6" id="img_pre1"></div>
                            <input class="form-control" style="padding-bottom:40px;" type="hidden" id="image1url" name="image1url" value="" placeholder="" data-rules="empty" data-message="上传身份证正面必填" />                  
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*Upload ID Negative：</div>
                            <div class="col-sm-6 col-lg-6">
                                <input class="form-control" style="padding-bottom:40px;" type="file" id="image2" name="image2" value="" placeholder="" data-rules="empty" data-message="内容必填" />             
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">Prevview：</div>
                            <div class="col-sm-6 col-lg-6" id="img_pre2"></div>
                            <input class="form-control" style="padding-bottom:40px;" type="hidden" id="image2url" name="image2url" value="" placeholder="" data-rules="empty" data-message="上传身份证反面必填" />              
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;">*</div>
                            <div class="col-sm-6 col-lg-6">pay attention to matters：upload single picture size limit their statements to no more than 200 k; otherwise instructs the impact!</div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="example-title col-sm-6 col-lg-3 text-right" style="padding:6px;"></div>
                            <div class="col-sm-6 col-lg-6">
                                <div class="checkbox checkbox-circle col-lg-1">
                                    <input class="" type="checkbox" id="agree" name="agree" value=""  />
                                </div>
                                <div class="checkbox checkbox-circle col-lg-11" style="margin-top: 10px;">i have read, understood and accepted the
                                     <a href="/upfile/files/S1FX_Client_Agreement.pdf" style="color:red;" target="_blank"> client agreement</a>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-top-10">
                            <div class="col-md-offset-3 col-sm-6 col-lg-6">
                                <button class="btn btn-primary" type="button" name="signin" id="signin" style="padding-left:50px;padding-right:50px;" disabled="true">Registered</button>
                            </div>
                        </div>
             </div>
          </form>
        </div>
   </div>
</div>
</template>

<script>
export default {
    name: 'userregister',
    data () {
       return {
        //  国家选择模拟数据  
          options: [{
          value: '选项1',
          label: 'China'
        }, {
          value: '选项2',
          label: 'Japan'
        }, {
          value: '选项3',
          label: 'English'
        }, {
          value: '选项4',
          label: 'America'
        }, {
          value: '选项5',
          label: 'New Zealand'
        }],
        value: '',
        // 身份证上传
        imageUrl: '',
        // 勾选框数据
        checked: true,
        // 快捷导航展开隐藏
        togglestate: false,
        // 控制全屏状态
        fullscreen: true,
        // 左边导航栏折叠
        collapsestate: true
      } 
    },
    // component:{
    // },
    methods: {
        // 左边导航栏折叠
        changecollapse: function(){
           this.collapsestate = !this.collapsestate;
        },
        // 全屏
        fullScreen: function() { 
            if(document.documentElement.requestFullScreen) { 
            document.documentElement.requestFullScreen(); 
            } else if(document.documentElement.webkitRequestFullScreen ) { 
            document.documentElement.webkitRequestFullScreen(); 
            } else if(document.documentElement.mozRequestFullScreen) { 
            document.documentElement.mozRequestFullScreen(); 
            } else if(document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();    
            }
            this.fullscreen = !this.fullscreen;
        },
        // 退出全屏
        cancelFullScreen: function() { 
            if(document.exitFullscreen) { 
            document.exitFullscreen(); 
            } else if(document.msExitFullscreen) { 
            document.msExitFullscreen();
            } else if(document.mozCancelFullScreen) { 
            document.mozCancelFullScreen();
            } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();    
            } 
            this.fullscreen = !this.fullscreen;
        },
        // 身份证上传
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}    
</script>

<style scoped lang="less">
*{
    font-size:16px;
}
ul,li{
    list-style:none;
}
.fl{
    float:left;
}
.fr{
    float:right;
}
.clearfixx:after { content:"."; display:block; height:0; visibility:hidden; clear:both; }                                                            
/*伪类清除*/
.clearfixx { zoom:1; }   
.margin-top-10{margin-top:10px;}

.nav_toolbar li>a{
        position: relative;
        display: block;
        padding: 10px 15px; 
        overflow: hidden;
        padding-top: 22px;
        padding-bottom: 22px;
        line-height: 22px;
        color: #76838f;
    }
.userregister{
    width:100%;
    height:100%;
    overflow-y:scroll;
    background:#f1f4f5;
    >.nav{
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1500;
        top: 0;
        width: 100%;
        background-color: #3a3f51;
        height:66px;
        -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.08);
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        .nav_header{
            float: left;
            width: 260px;
            .nav_brand{
                float: left;
                height: 66px;
                img{height: 42px;
                    margin:12px 0 0 11px;}
            }
        }
        .nav_container{
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            background-color: #fff;
            position:relative;
            margin-left: 260px;
            height:66px;
            min-width:360px;
            ul.nav_toolbar{
                float:left;
                margin:0px;padding:0px;
                li{float:left;display:block;}
                li#toggleMenubar{}
                li#toggleFullscreen{}
                li.dropdown{
                    position: static;
                    a{
                        cursor:pointer;
                        i{margin-left:5px;}
                    }
                    span{
                        position:absolute;
                        box-sizing:border-box;
                        -webkit-box-sizing:border-box;
                        -moz-box-sizing:border-box;
                        padding:20px 30px;
                        width:98%;
                        left:5px;
                        right:5px;
                        margin-top:5px;
                        border:1px solid #e4eaec;
                        z-index:1000;
                        background:#fff; 
                        border-radius:3px;
                        div{
                            position: relative;
                            float: left;
                            min-height: 1px;
                            padding-left: 15px;
                            padding-right: 15px;
                            width:160px;
                            text-align:left;
                            i{
                                font-size:18px;
                                margin-right:6px;
                                color: #76838f;
                            }
                            a{color:#63a8ea;
                              display:inline-block;}
                        }
                    }
                }
            }
            ul.navbar-right{
                height:66px;
                min-width:160px;
                text-align:center;
                li{
                    img{
                        height:30px;
                    }
                    a{
                        padding:18px 0;
                        font-weight:normal;
                    }
                    ul{
                        li{
                            a{
                                // text-align:left;
                                padding:0px;
                                padding-left:20px;
                            }
                        }
                    }
                }
            }
        }
    }
    .left_collapse{
        z-index: 1400;
        position: fixed;
        top: 66px;
        height: 100%;
        // height: -webkit-calc(100% - 66px);
        // height: calc(100% - 66px);
        background: #3a3f51;
        color: rgba(163,175,183,.9);
        font-family: 'microsoft yahei', Roboto, sans-serif;
        -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.08);
        box-shadow: 0 2px 4px rgba(0,0,0,.08);
        width:260px;
        ul{
            margin:0;
            padding:0;
            li{
                -webkit-transition: all .25s, font .1s .15s, color .1s .15s;
                -o-transition: all .25s, font .1s .15s, color .1s .15s;
                transition: all .25s, font .1s .15s, color .1s .15s;
                font-size: 15px;
                padding: 0 24px;
                color: #76838f;
                line-height: 38px;
                text-transform: uppercase;
                margin-top: 20px;
                text-align:left;
            }
        }
    }
    .content{
        background:#f1f4f5;
        // background:hotpink;
        position: relative;
        // min-height: -webkit-calc(100% - 44px);
        // min-height: calc(100% - 44px);
        margin-left:260px;
        margin-top:66px;
        .content_title{
            margin: 44px 0 22px;  
            padding: 30px 30px;
            margin-top: 0;
            margin-bottom: 0;
            background: 0 0;
            position: relative;
            border-bottom: none;
            h1{font-size:26px;text-shadow: rgba(0,0,0,.15) 0 0 1px;
            color: #37474f;text-align:left;font-weight:400;margin-bottom:5px;}
        }
        .main{
            // padding:15px;
            // padding-top:0;
            background:#fff;
            margin:15px;
            border-radius:4px;
            margin-bottom:100px;
            padding-bottom:30px;
            form{
                h3{
                   padding: 20px 30px;
                   font-size: 18px;
                   color: #37474f; 
                   font-weight:400;
                   text-align:left;
                }
                .form_body{
                    padding:0 30px;
                    font-size:16px;
                    div.checkbox.col-lg-1{
                        width:15px;
                        padding:0;
                    }
                    .checkbox input{
                        margin:2px 0;
                        margin-left:0;
                    }
                }
            }
        }
    }
}
@media(max-width:768px){
.userregister .content .main form .form_body .el-row .input_title{
    text-align:left;
}}
// 语言选择样式
.language_box li img{height:29px;}  
// bootstrap面包屑样式
.breadcrumb{font-size:15px;background:transparent;}
// 上传图片

// 导航栏折叠
.width90{
    width:90px!important;
}
.margin-left90{
    margin-left:90px!important;
}
</style>
