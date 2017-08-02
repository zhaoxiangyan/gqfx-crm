<template>
<div class="navbar-default navbar-static-side" role="navigation">
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
					<li class="active">
						<router-link to="/admin" exact><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></router-link>
					</li>
					<li>
						<router-link to="/admin/client/index" exact><i class="fa fa-users"></i> <span class="nav-label">Client</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Apploval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/approval/account" exact>Account Opening</router-link></li>
							<li><router-link to="/admin/approval/deposit" exact>Deposit</router-link></li>
							<li><router-link to="/admin/approval/withdrawal" exact>Withdrawal</router-link></li>
							<li><router-link to="/admin/approval/rank" exact>Rank Request</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/infomation/index" exact><i class="fa fa-flag"></i> <span class="nav-label">infomation</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">Campaign</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/campaign/bonus" exact>Bonus</router-link></li>
							<li><router-link to="/admin/campaign/bonuslog" exact>Bonus Log</router-link></li>
							<li><router-link to="/admin/campaign/point" exact>Point</router-link></li>
							<li><router-link to="/admin/campaign/list" exact>Campaign List</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/inquery/index" exact><i class="fa fa-inbox"></i> <span class="nav-label">Inquery</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Report</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/report/history" exact>Transaction History</router-link></li>
							<li><router-link to="/admin/report/ranking" exact>Trade Ranking</router-link></li>
							<li><router-link to="/admin/report/volume" exact>Transaction Volume</router-link></li>
							<li><router-link to="/admin/report/commission" exact>Commission</router-link></li>
							<li><router-link to="/admin/report/deposit" exact>Deposits</router-link></li>
							<li><router-link to="/admin/report/withdrawal" exact>Withdrawals</router-link></li>
							<li><router-link to="/admin/report/transfer" exact>Internal Transfers</router-link></li>
							<li><router-link to="/admin/report/summary" exact>Overall Summary</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">Agent</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/agent/relationship" exact>IB Relationship</router-link></li>
							<li><router-link to="/admin/agent/statistics" exact>IB Statistics</router-link></li>
							<li><router-link to="/admin/agent/scheme" exact>Commission Scheme</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">Mail</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/mail/stepmail" exact>Step Mail</router-link></li>
							<li><router-link to="/admin/mail/maillog" exact>Mail Log</router-link></li>
							<li><router-link to="/admin/mail/trigger" exact>Trigger Mail</router-link></li>
							<li><router-link to="/admin/mail/template" exact>Mail Template</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/media/index"><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">System Settings</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/system/user" exact>Admin User</router-link></li>
							<li><router-link to="/admin/system/role" exact>System Role</router-link></li>
							<li><router-link to="/admin/system/demo" exact>Demo Account</router-link></li>
							<li><router-link to="/admin/system/account-group" exact>Account Group</router-link></li>
							<li><router-link to="/admin/system/level" exact>Client Level</router-link></li>
							<li><router-link to="/admin/system/rank" exact>Ranks</router-link></li>
							<li><router-link to="/admin/system/d-w" exact>D/W Settings</router-link></li>
							<li><router-link to="/admin/system/rate" exact>Exchange Rate</router-link></li>
							<router-link tag="li" to="/admin/system/email-profile" exact><a>Email Profile</a></router-link>
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
		//   alert($router);
	}
}
</script>
<style scoped>
.skin-3 .nav>li.router-link-active{
   border:none;
   background:#38283c;
}
.skin-3 .nav>li.router-link-active>a{
	color:#fff;
}
</style>