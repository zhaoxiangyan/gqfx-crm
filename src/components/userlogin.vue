<template>
    <div class="userlogin">
            <div class="content">
                    <div class="login_wrap">
                        <div class="panel">
                            <div class="head_logo"><img src="../assets/logo-w.png"></div>
                            <form action="index.html" class="panel-body">
                                <div class="form-group clearfix">
                                    <i><img src="../assets/user/form_icon1.png"></i>
                                    <input type="text"  placeholder="Account Number" class="form-control fl" name="username" id="username" value="">
                                </div>
                                <div class="form-group clearfix">
                                    <i><img src="../assets/user/form_icon2.png"></i>
                                    <input type="password"  placeholder="Password" class="form-control fl" name="passwd" id="passwd" value="">
                                </div>
                                <div class="checkbox login_check">
                                    <label><input type="checkbox"  name="remember" id="remember" value="1" checked="checked">Remember</label>
                                </div>
                                <button type="button" class="btn btn-warning" name="loginin" id="loginin" @click="userloginbtn">Login</button>
                                <button type="button" class="btn btn-hui" name="signin" id="signin" @click="userregisterbtn">Register</button>
                            </form>
                            <div class="switch_box">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               English<span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><router-link to="/cn/userlogin">中文简体</router-link></li>
                                            <li><a href="javascript:void(0)" >English</a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- footer --> 
            <div class="footer_bottom">
                <div class="footer_center">
                    <p>
                        Risk Warning: TRADING FOREX and Derivatives carries a high level of risk to your capital and you should only trade with money you can afford to lose. The information on this website is of a general nature only and may contain advice that is not based on your personal objectives, financial situation or needs. Accordingly, you should consider how appropriate the advice (if any) is to those objectives, financial situation or needs before acting on the advice. Should you have any difficulty in understanding any of the content contained in this website, please contact our Customer Support team for further instruction and support.
                    </p>
                    <span>2012-2017 Starcom International Limited. | LICENSE NO.FSP304307</span>
                </div>
            </div> 
     </div>
</template>

<script>
export default {
    name: 'userlogin',
    data () {
        return {
            // 语言选择框数据绑定

        }
    },
    methods: {
        userloginbtn () {
            this.$router.push('/adminlogin')
        },
        userregisterbtn () {
            this.$router.push('/userregister')
        }
    }
}
</script>

<style scoped lang="less">
*{
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
}
img{
    vertical-align:middle;
    border:0;
}
input:focus{
    outline:0;
}
.userlogin{
    font-size:14px;
    color:#333;
    padding-top:6%;
    width:100%;
    height:100%;
    overflow-y:scroll;
    background:url(../assets/user/userlogin_bg.jpg) no-repeat center;
    .content{
       z-index:999;
       .login_wrap{
           width:350px;
           margin:0 auto;
           z-index:999;
           position:relative;
           .panel{
               background:#282a36;
               border-radius:2px;
               .head_logo{
                   padding:25px 0;
                   text-align:center;
                   img{margin:auto;}
               }
               form{
                   padding:0 35px;
                   .form-group{
                       position:relative;
                       margin-bottom:15px;
                       i{
                           position:absolute;
                           display:block;
                           width:45px;
                           height:42px;
                           left:0px;
                           top:0px;
                           z-index:9999;
                       }
                       input{
                           display:block;
                           padding:6px 12px 6px 45px;
                           font-size:14px;
                           line-height:1.428;
                           color:#555;
                           width:100%;
                           height:42px;
                           border:none;
                           box-shadow:none;
                           -webkit-box-shadow:none;
                           border-radius:2px;
                       }
                   }
                   .checkbox{
                       color:#fff;
                       margin-bottom:30px;
                       margin-top:15px;
                       text-align:left;
                       label{
                           min-height: 20px;
                           padding-left: 20px;
                           margin-bottom: 0;
                           font-weight: normal;
                           cursor: pointer; 
                           display: inline-block;
                           max-width: 100%;
                           input{
                               position: absolute;
                               margin: 2px 0 0 -20px;
                           }
                       }
                   }
                   button{
                       width:100%;
                       height:46px;
                       margin-bottom:15px;
                       border-radius:2px;
                       color:#fff;
                       border:0;
                       font-size:16px;
                   }
                   button.btn-warning{
                       background:#e3653c;
                   }
                   button.btn-hui{
                       background:#525566;
                   }
               }
               .switch_box{
                   padding:0px 35px 30px 35px;
                   text-align:right;
                   .el-select{
                       width:105px;
                   }      
               }    
           } 
       }
    }
    .footer_bottom{
        position: relative;
        bottom: 0px;
        margin-top: 210px;
        width: 100%;
        background:rgba(45,43,50,.7);
        padding: 40px 0;
        color: #cccccc;
        line-height: 20px;
        font-family: Arial;
        text-align: center;
        .footer_center{
            width: 80%;
            max-width:800px;
            margin: auto;
            p{font-size:12px;margin-bottom:10px;}
            span{display:block;margin-top:14px;font-size:12px;}
        }    
    }
}
</style>