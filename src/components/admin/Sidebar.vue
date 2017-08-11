<template>
<div class="navbar-default navbar-static-side navbar_bg" role="navigation">
			<div class="sidebar-collapse">
				<ul class="nav metismenu skin-3" id="side-menu">
					<li class="nav-header">
						<div class="dropdown profile-element"><span><img src="../../assets/img/logo-w.png" class="img-responsive"></span>
							<span class="block m-t-xs text-white"> <strong class="font-bold">Admin user name</strong></span>
						</div>
						<div class="logo-element">
							GQ
						</div>
					</li>
					<router-link @click.native="Routerclick" tag="li" to="/admin" exact><a><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a></router-link>
					<router-link @click.native="Routerclick" tag="li" to="/admin/client/index" exact><a><i class="fa fa-users"></i> <span class="nav-label">Client</span></a></router-link>
					<li>
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Apploval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li" to="/admin/approval/account" exact><a>Account Opening</a></router-link>
							<router-link tag="li" to="/admin/approval/deposit" exact><a>Deposit</a></router-link>
							<router-link tag="li" to="/admin/approval/withdrawal" exact><a>Withdrawal</a></router-link>
							<router-link tag="li" to="/admin/approval/rank" exact><a>Rank Request</a></router-link>
						</ul>
					</li>
					<router-link @click.native="Routerclick" tag="li" to="/admin/infomation/index" exact><a><i class="fa fa-flag"></i> <span class="nav-label">infomation</span></a></router-link>
					<li>
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">Campaign</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li" to="/admin/campaign/bonus" exact><a>Bonus</a></router-link>
							<router-link tag="li" to="/admin/campaign/bonuslog" exact><a>Bonus Log</a></router-link>
							<router-link tag="li" to="/admin/campaign/point" exact><a>Point</a></router-link>
							<router-link tag="li" to="/admin/campaign/list" exact><a>Campaign List</a></router-link>
						</ul>
					</li>
					<router-link  @click.native="Routerclick" tag="li" to="/admin/inquery/index" exact><a><i class="fa fa-inbox"></i> <span class="nav-label">Inquery</span></a></router-link>
					<li>
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Report</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li" to="/admin/report/history" exact><a>Transaction History</a></router-link>
							<router-link tag="li" to="/admin/report/ranking" exact><a>Trade Ranking</a></router-link>
							<router-link tag="li" to="/admin/report/volume" exact><a>Transaction Volume</a></router-link>
							<router-link tag="li" to="/admin/report/commission" exact><a>Commission</a></router-link>
							<router-link tag="li" to="/admin/report/deposit" exact><a>Deposits</a></router-link>
							<router-link tag="li" to="/admin/report/withdrawal" exact><a>Withdrawals</a></router-link>
							<router-link tag="li" to="/admin/report/transfer" exact><a>Internal Transfers</a></router-link>
							<router-link tag="li" to="/admin/report/summary" exact><a>Overall Summary</a></router-link>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">Agent</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li" to="/admin/agent/relationship" exact><a>IB Relationship</a></router-link>
							<router-link tag="li" to="/admin/agent/statistics" exact><a>IB Statistics</a></router-link>
							<router-link tag="li" to="/admin/agent/scheme" exact><a>Commission Scheme</a></router-link>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">Mail</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li" to="/admin/mail/stepmail" exact><a>Step Mail</a></router-link>
							<router-link tag="li" to="/admin/mail/maillog" exact><a>Mail Log</a></router-link>
							<router-link tag="li" to="/admin/mail/trigger" exact><a>Trigger Mail</a></router-link>
							<router-link tag="li" to="/admin/mail/template" exact><a>Mail Template</a></router-link>
						</ul>
					</li>
					<router-link  @click.native="Routerclick" tag="li" to="/admin/media/index"><a><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></a></router-link>
					<li>
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">System Settings</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<router-link tag="li"  to="/admin/system/user" exact><a>Admin User</a></router-link>
							<router-link tag="li"  to="/admin/system/role" exact><a>System Role</a></router-link>
							<router-link tag="li"  to="/admin/system/demo" exact><a>Demo Account</a></router-link>
							<router-link tag="li"  to="/admin/system/account-group" exact><a>Account Group</a></router-link>
							<router-link tag="li"  to="/admin/system/level" exact><a>Client Level</a></router-link>
							<router-link tag="li"  to="/admin/system/rank" exact><a>Ranks</a></router-link>
							<router-link tag="li"  to="/admin/system/d-w" exact><a>D/W Settings</a></router-link>
							<router-link tag="li"  to="/admin/system/rate" exact><a>Exchange Rate</a></router-link>
							<router-link tag="li"  to="/admin/system/email-profile" exact><a>Email Profile</a></router-link>
						</ul>
					</li>
				</ul>
			</div>
</div>
</template>
<script>
// import MetisMenu from '../../assets/js/plugins/metisMenu/jquery.metisMenu.js'
import MetisMenu from 'metismenu'
export default {
    name: 'sidebar',
	components: {
      MetisMenu
	},
	mounted: function(){
          $('#side-menu').metisMenu();
		    //  $(".router-link-active").parent("ul").attr('aria-expanded','true');
		    //  $(".router-link-active").parent("ul").prev().attr('aria-expanded','true');
			// $(".router-link-active").parent("ul").addClass("in");
			// $(".router-link-active").parents("li").addClass("active");
			this.Routeresponse();
	},
	methods: {
		// 直接输入网址url响应导航菜单
        Routeresponse(){
             if($(".router-link-exact-active.active").parent("ul").hasClass("collapse")){
                 $(".router-link-exact-active.active").parent("ul").addClass("in");
			     $(".router-link-exact-active.active").parents("li").addClass("active");
			 }
		},
		// 点击一级路由菜单关闭同级一级菜单的二级菜单
		Routerclick: function(){
			// alert(event.target.tagName);
			// $(".router-link-exact-active.active").siblings("li.active").children("a").attr('aria-expanded','false');
			// $(".router-link-exact-active.active").siblings("li.active").children("ul").attr('aria-expanded','false');
			// $(".router-link-exact-active.active").siblings("li.active").children("ul").removeClass("in");
            // $(".router-link-exact-active.active").siblings("li.active").removeClass("active");    
			$("#side-menu").children("li.active:not('.router-link-exact-active')").children("a").attr('aria-expanded','false');
			$("#side-menu").children("li.active:not('.router-link-exact-active')").children("ul").attr('aria-expanded','false');
			$("#side-menu").children("li.active:not('.router-link-exact-active')").children("ul").removeClass("in");
            $("#side-menu").children("li.active:not('.router-link-exact-active')").removeClass("active");    
		}
	}
}
</script>
<style scoped>
.navbar_bg{
	background:#2f4050;
	min-height:100%;
}
</style>