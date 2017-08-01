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
						<router-link to="/admin"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></router-link>
					</li>
					<li>
						<router-link to="/admin/client/index"><i class="fa fa-users"></i> <span class="nav-label">Client</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Apploval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/approval/account">Account Opening</router-link></li>
							<li><router-link to="/admin/approval/deposit">Deposit</router-link></li>
							<li><router-link to="/admin/approval/withdrawal">Withdrawal</router-link></li>
							<li><router-link to="/admin/approval/rank">Rank Request</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/infomation/index"><i class="fa fa-flag"></i> <span class="nav-label">infomation</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">Campaign</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/campaign/bonus">Bonus</router-link></li>
							<li><router-link to="/admin/campaign/bonuslog">Bonus Log</router-link></li>
							<li><router-link to="/admin/campaign/point">Point</router-link></li>
							<li><router-link to="/admin/campaign/list">Campaign List</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/inquery/index"><i class="fa fa-inbox"></i> <span class="nav-label">Inquery</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Report</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/report/history">Transaction History</router-link></li>
							<li><router-link to="/admin/report/ranking">Trade Ranking</router-link></li>
							<li><router-link to="/admin/report/volume">Transaction Volume</router-link></li>
							<li><router-link to="/admin/report/commission">Commission</router-link></li>
							<li><router-link to="/admin/report/deposit">Deposits</router-link></li>
							<li><router-link to="/admin/report/withdrawal">Withdrawals</router-link></li>
							<li><router-link to="/admin/report/transfer">Internal Transfers</router-link></li>
							<li><router-link to="/admin/report/summary">Overall Summary</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">Agent</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/agent/relationship">IB Relationship</router-link></li>
							<li><router-link to="/admin/agent/statistics">IB Statistics</router-link></li>
							<li><router-link to="/admin/agent/scheme">Commission Scheme</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">Mail</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/mail/stepmail">Step Mail</router-link></li>
							<li><router-link to="/admin/mail/maillog">Mail Log</router-link></li>
							<li><router-link to="/admin/mail/trigger">Trigger Mail</router-link></li>
							<li><router-link to="/admin/mail/template">Mail Template</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/admin/media/index"><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">System Settings</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/admin/system/user">Admin User</router-link></li>
							<li><router-link to="/admin/system/role">System Role</router-link></li>
							<li><router-link to="/admin/system/demo">Demo Account</router-link></li>
							<li><router-link to="/admin/system/account-group">Account Group</router-link></li>
							<li><router-link to="/admin/system/level">Client Level</router-link></li>
							<li><router-link to="/admin/system/rank">Ranks</router-link></li>
							<li><router-link to="/admin/system/d-w">D/W Settings</router-link></li>
							<li><router-link to="/admin/system/rate">Exchange Rate</router-link></li>
							<li><router-link to="/admin/system/email-profile">Email Profile</router-link></li>
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
	}
}
</script>