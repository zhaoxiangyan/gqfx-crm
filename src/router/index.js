import Vue from 'vue'
import Router from 'vue-router'
// 安装vue-router插件
Vue.use(Router)

export default new Router({
   linkActiveClass:'active',  
  // mode: 'history',
  routes: [
    // 用户登录、用户注册、管理员登录 路由地址
    {
      // 默认为重定向至用户登录页
      path:'/',
      redirect:'/userlogin'
    },
    {
      path: '/userlogin',
      component: resolve => require(['../components/userlogin.vue'], resolve)    
    },
    {
      path:'/userregister',
      component: resolve => require(['../components/userregister.vue'], resolve)
    },
    {
      path:'/adminlogin',
      component: resolve => require(['../components/adminlogin.vue'], resolve)
    },
    // 管理员路由地址
    {
      path:'/admin',
      component: resolve => require(['../components/admin/Home.vue'], resolve),
      // 子路由地址
      children: [
        {
            path: '/',
            component: resolve => require(['../components/admin/index.vue'], resolve)
        },
        {
            path: '/admin/agent/relationship',
            component: resolve => require(['../components/admin/agent/relationship.vue'], resolve)
        },
        {
            path: '/admin/agent/scheme',
            component: resolve => require(['../components/admin/agent/scheme.vue'], resolve)
        },  
        {
            path: '/admin/agent/statistics',
            component: resolve => require(['../components/admin/agent/statistics.vue'], resolve)
        }, 
        {
            path: '/admin/approval/account',
            component: resolve => require(['../components/admin/approval/account.vue'], resolve)
        }, 
        {
            path: '/admin/approval/deposit',
            component: resolve => require(['../components/admin/approval/deposit.vue'], resolve)
        }, 
        {
            path: '/admin/approval/rank',
            component: resolve => require(['../components/admin/approval/rank.vue'], resolve)
        }, 
        {
            path: '/admin/approval/withdrawal',
            component: resolve => require(['../components/admin/approval/withdrawal.vue'], resolve)
        },       
        {
            path: '/admin/campaign/bonus',
            component: resolve => require(['../components/admin/campaign/bonus.vue'], resolve)
        }, 
        {
            path: '/admin/campaign/bonuslog',
            component: resolve => require(['../components/admin/campaign/bonuslog.vue'], resolve)
        }, 
        // {
        //     path: '/admin/campaign/list-edit',
        //     component: resolve => require(['../components/admin/campaign/list-edit.vue'], resolve)
        // }, 
        {
            path: '/admin/campaign/list-new',
            component: resolve => require(['../components/admin/campaign/list-new.vue'], resolve)
        }, 
        {
            path: '/admin/campaign/list',
            component: resolve => require(['../components/admin/campaign/list.vue'], resolve)
        }, 
        {
            path: '/admin/campaign/point',
            component: resolve => require(['../components/admin/campaign/point.vue'], resolve)
        }, 
        {
            path: '/admin/client/index',
            component: resolve => require(['../components/admin/client/index.vue'], resolve)
        },       
        {
            path: '/admin/client/edit',
            component: resolve => require(['../components/admin/client/edit.vue'], resolve)
        },  
        {
            path: '/admin/client/message',
            component: resolve => require(['../components/admin/client/message.vue'], resolve)
        },  
        {
            path: '/admin/infomation/info-edit',
            component: resolve => require(['../components/admin/infomation/info-edit.vue'], resolve)
        },      
        {
            path: '/admin/infomation/info-new',
            component: resolve => require(['../components/admin/infomation/info-new.vue'], resolve)
        },      
        {
            path: '/admin/infomation/index',
            component: resolve => require(['../components/admin/infomation/index.vue'], resolve)
        },      
        {
            path: '/admin/inquery/index',
            component: resolve => require(['../components/admin/inquery/index.vue'], resolve)
        },                     
        {
            path: '/admin/mail/maillog',
            component: resolve => require(['../components/admin/mail/maillog.vue'], resolve)
        },  
        // {
        //     path: '/admin/mail/stepmail-edit',
        //     component: resolve => require(['../components/admin/mail/stepmail-edit.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/stepmail-new',
        //     component: resolve => require(['../components/admin/mail/stepmail-new.vue'], resolve)
        // },
        {
            path: '/admin/mail/stepmail',
            component: resolve => require(['../components/admin/mail/stepmail.vue'], resolve)
        },
        // {
        //     path: '/admin/mail/template-css',
        //     component: resolve => require(['../components/admin/mail/template-css.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/template-edit',
        //     component: resolve => require(['../components/admin/mail/template-edit.vue'], resolve)
        // },
        {
            path: '/admin/mail/template-new',
            component: resolve => require(['../components/admin/mail/template-new.vue'], resolve)
        },
        {
            path: '/admin/mail/template',
            component: resolve => require(['../components/admin/mail/template.vue'], resolve)
        },
        // {
        //     path: '/admin/mail/trigger-edit',
        //     component: resolve => require(['../components/admin/mail/trigger-edit.vue'], resolve)
        // },
        {
            path: '/admin/mail/trigger',
            component: resolve => require(['../components/admin/mail/trigger.vue'], resolve)
        },  
        // {
        //     path: '/admin/mail/email-templates/01',
        //     component: resolve => require(['../components/admin/mail/email-templates/01.vue'], resolve)
        // },   
        // {
        //     path: '/admin/mail/email-templates/02',
        //     component: resolve => require(['../components/admin/mail/email-templates/02.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/email-templates/03',
        //     component: resolve => require(['../components/admin/mail/email-templates/03'], resolve)
        // }, 
        {
            path: '/admin/media/index',
            component: resolve => require(['../components/admin/media/index.vue'], resolve)
        },
        {
             path: '/admin/report/commission',
             component: resolve => require(['../components/admin/report/commission.vue'], resolve)
        },
        {
             path: '/admin/report/deposit',
             component: resolve => require(['../components/admin/report/deposit.vue'], resolve)
        },
        {
             path: '/admin/report/history',
             component: resolve => require(['../components/admin/report/history.vue'], resolve)
        },
        {
             path: '/admin/report/ranking',
             component: resolve => require(['../components/admin/report/ranking.vue'], resolve)
        },
        {
             path: '/admin/report/summary',
             component: resolve => require(['../components/admin/report/summary.vue'], resolve)
        },
        {
             path: '/admin/report/transfer',
             component: resolve => require(['../components/admin/report/transfer.vue'], resolve)
        },
        {
             path: '/admin/report/volume',
             component: resolve => require(['../components/admin/report/volume.vue'], resolve)
        },
        {
             path: '/admin/report/withdrawal',
             component: resolve => require(['../components/admin/report/withdrawal.vue'], resolve)
        },
        {
             path: '/admin/system/account-group',
             component: resolve => require(['../components/admin/system/account-group.vue'], resolve)
        },
        {
             path: '/admin/system/d-w',
             component: resolve => require(['../components/admin/system/d-w.vue'], resolve)
        },
        {
             path: '/admin/system/demo',
             component: resolve => require(['../components/admin/system/demo.vue'], resolve)
        },
        {
             path: '/admin/system/email-profile',
             component: resolve => require(['../components/admin/system/email-profile.vue'], resolve)
        },
        {
             path: '/admin/system/level',
             component: resolve => require(['../components/admin/system/level.vue'], resolve)
        },
        {
             path: '/admin/system/rank',
             component: resolve => require(['../components/admin/system/rank.vue'], resolve)
        },
        {
             path: '/admin/system/rate',
             component: resolve => require(['../components/admin/system/rate.vue'], resolve)
        },
        {
             path: '/admin/system/role',
             component: resolve => require(['../components/admin/system/role.vue'], resolve)
        },
        {
             path: '/admin/system/user',
             component: resolve => require(['../components/admin/system/user.vue'], resolve)
        }
      ]
    },
    // Trade Monitor路由地址
    {
          path: '/bo',
          component: resolve => require(['../components/admin/monitor/bo.vue'], resolve)
    },
    {
          path: '/fx',
          component: resolve => require(['../components/admin/monitor/fx.vue'], resolve)
    },
    {
          path: '/online',
          component: resolve => require(['../components/admin/monitor/online.vue'], resolve)
    },
    // Risk Management路由地址  子路由
    {
          path:'/risk-mng',
          component: resolve => require(['../components/admin/risk-mng/risk-mng.vue'], resolve),
          // 子路由地址
          children: [
            {
                path:'/',
                redirect: '/risk-mng/index'
            },
            {
                path:'/risk-mng/index',
                component: resolve => require(['../components/admin/risk-mng/index.vue'], resolve)
            }
    //         {
    //             path: '/admin/risk-mng/alerts/index',
    //             component: resolve => require(['../components/admin/risk-mng/alerts/index.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/amount-range',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/amount-range.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/intervals',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/intervals.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/maxtotal',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/maxtotal.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/payouts',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/payouts.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/symbols',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/symbols.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/amount',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/amount.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/default',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/default.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/symbols',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/symbols.vue'], resolve)
    //         }
          ]
    },
// 中文版路由地址设置
    // 用户登录、用户注册、管理员登录
    {
       path:'/cn/userlogin',
       component: resolve => require(['../components/cn/userlogin.vue'], resolve)
    },
    {
       path: '/cn/userregister',
       component: resolve => require(['../components/cn/userregister.vue'], resolve)
    },
    {
       path: '/cn/adminlogin',
       component: resolve => require(['../components/cn/adminlogin.vue'], resolve)
    },
      // 管理员路由地址
    {
      path:'/cn/admin',
      component: resolve => require(['../components/cn/admin/Home.vue'], resolve),
      // 子路由地址
      children: [
        {
            path: '/',
            component: resolve => require(['../components/cn/admin/index.vue'], resolve)
        },
        // {
        //     path: '/admin/agent/relationship',
        //     component: resolve => require(['../components/admin/agent/relationship.vue'], resolve)
        // },
        // {
        //     path: '/admin/agent/scheme',
        //     component: resolve => require(['../components/admin/agent/scheme.vue'], resolve)
        // },  
        // {
        //     path: '/admin/agent/statistics',
        //     component: resolve => require(['../components/admin/agent/statistics.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/approval/account',
        //     component: resolve => require(['../components/admin/approval/account.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/approval/deposit',
        //     component: resolve => require(['../components/admin/approval/deposit.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/approval/rank',
        //     component: resolve => require(['../components/admin/approval/rank.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/approval/withdrawal',
        //     component: resolve => require(['../components/admin/approval/withdrawal.vue'], resolve)
        // },       
        // {
        //     path: '/admin/campaign/bonus',
        //     component: resolve => require(['../components/admin/campaign/bonus.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/campaign/bonuslog',
        //     component: resolve => require(['../components/admin/campaign/bonuslog.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/campaign/list-edit',
        //     component: resolve => require(['../components/admin/campaign/list-edit.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/campaign/list-new',
        //     component: resolve => require(['../components/admin/campaign/list-new.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/campaign/list',
        //     component: resolve => require(['../components/admin/campaign/list.vue'], resolve)
        // }, 
        // {
        //     path: '/admin/campaign/point',
        //     component: resolve => require(['../components/admin/campaign/point.vue'], resolve)
        // }, 
        {
            path: '/cn/admin/client/index',
            component: resolve => require(['../components/cn/admin/client/index.vue'], resolve)
        }       
        // {
        //     path: '/admin/client/edit',
        //     component: resolve => require(['../components/admin/client/edit.vue'], resolve)
        // },  
        // {
        //     path: '/admin/client/message',
        //     component: resolve => require(['../components/admin/client/message.vue'], resolve)
        // },  
        // {
        //     path: '/admin/infomation/info-edit',
        //     component: resolve => require(['../components/admin/infomation/info-edit.vue'], resolve)
        // },      
        // {
        //     path: '/admin/infomation/info-new',
        //     component: resolve => require(['../components/admin/infomation/info-new.vue'], resolve)
        // },      
        // {
        //     path: '/admin/infomation/index',
        //     component: resolve => require(['../components/admin/infomation/index.vue'], resolve)
        // },      
        // {
        //     path: '/admin/inquery/index',
        //     component: resolve => require(['../components/admin/inquery/index.vue'], resolve)
        // },                     
        // {
        //     path: '/admin/mail/maillog',
        //     component: resolve => require(['../components/admin/mail/maillog.vue'], resolve)
        // },  
        // {
        //     path: '/admin/mail/stepmail-edit',
        //     component: resolve => require(['../components/admin/mail/stepmail-edit.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/stepmail-new',
        //     component: resolve => require(['../components/admin/mail/stepmail-new.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/stepmail',
        //     component: resolve => require(['../components/admin/mail/stepmail.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/template-css',
        //     component: resolve => require(['../components/admin/mail/template-css.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/template-edit',
        //     component: resolve => require(['../components/admin/mail/template-edit.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/template-new',
        //     component: resolve => require(['../components/admin/mail/template-new.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/template',
        //     component: resolve => require(['../components/admin/mail/template.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/trigger-edit',
        //     component: resolve => require(['../components/admin/mail/trigger-edit.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/trigger',
        //     component: resolve => require(['../components/admin/mail/trigger.vue'], resolve)
        // },  
        // {
        //     path: '/admin/mail/email-templates/01',
        //     component: resolve => require(['../components/admin/mail/email-templates/01.vue'], resolve)
        // },   
        // {
        //     path: '/admin/mail/email-templates/02',
        //     component: resolve => require(['../components/admin/mail/email-templates/02.vue'], resolve)
        // },
        // {
        //     path: '/admin/mail/email-templates/03',
        //     component: resolve => require(['../components/admin/mail/email-templates/03'], resolve)
        // }, 
        // {
        //     path: '/admin/media/index',
        //     component: resolve => require(['../components/admin/media/index.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/commission',
        //      component: resolve => require(['../components/admin/report/commission.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/deposit',
        //      component: resolve => require(['../components/admin/report/deposit.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/history',
        //      component: resolve => require(['../components/admin/report/history.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/ranking',
        //      component: resolve => require(['../components/admin/report/ranking.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/summary',
        //      component: resolve => require(['../components/admin/report/summary.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/transfer',
        //      component: resolve => require(['../components/admin/report/transfer.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/volume',
        //      component: resolve => require(['../components/admin/report/volume.vue'], resolve)
        // },
        // {
        //      path: '/admin/report/withdrawal',
        //      component: resolve => require(['../components/admin/report/withdrawal.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/account-group',
        //      component: resolve => require(['../components/admin/system/account-group.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/d-w',
        //      component: resolve => require(['../components/admin/system/d-w.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/demo',
        //      component: resolve => require(['../components/admin/system/demo.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/eamil-profile',
        //      component: resolve => require(['../components/admin/system/email-profile.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/level',
        //      component: resolve => require(['../components/admin/system/level.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/rank',
        //      component: resolve => require(['../components/admin/system/rank.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/rate',
        //      component: resolve => require(['../components/admin/system/rate.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/role',
        //      component: resolve => require(['../components/admin/system/role.vue'], resolve)
        // },
        // {
        //      path: '/admin/system/user',
        //      component: resolve => require(['../components/admin/system/user.vue'], resolve)
        // }
      ]
    },
    // Trade Monitor路由地址
    {
          path: '/cn/bo',
          component: resolve => require(['../components/cn/admin/monitor/bo.vue'], resolve)
    },
    {
          path: '/cn/fx',
          component: resolve => require(['../components/cn/admin/monitor/fx.vue'], resolve)
    },
    {
          path: '/cn/online',
          component: resolve => require(['../components/cn/admin/monitor/online.vue'], resolve)
    },
    // Risk Management路由地址  子路由
    {
          path:'/cn/risk-mng',
          component: resolve => require(['../components/cn/admin/risk-mng/risk-mng.vue'], resolve),
          // 子路由地址
          children: [
            {
                path:'/',
                redirect: '/cn/risk-mng/index'
            },
            {
                path:'/cn/risk-mng/index',
                component: resolve => require(['../components/cn/admin/risk-mng/index.vue'], resolve)
            }
    //         {
    //             path: '/admin/risk-mng/alerts/index',
    //             component: resolve => require(['../components/admin/risk-mng/alerts/index.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/amount-range',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/amount-range.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/intervals',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/intervals.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/maxtotal',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/maxtotal.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/payouts',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/payouts.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/conditions/symbols',
    //             component: resolve => require(['../components/admin/risk-mng/conditions/symbols.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/amount',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/amount.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/default',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/default.vue'], resolve)
    //         },
    //         {
    //             path: '/admin/risk-mng/limitation/symbols',
    //             component: resolve => require(['../components/admin/risk-mng/limitation/symbols.vue'], resolve)
    //         }
          ]
    }
  ]
})
