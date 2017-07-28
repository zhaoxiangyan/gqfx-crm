<template>
<div class="navbar-default navbar-static-side" role="navigation">
			<div class="sidebar-collapse">
				<ul class="nav metismenu skin-3" id="side-menu">
					<li class="nav-header">
						<div class="dropdown profile-element"><span><img src="../../../assets/img/logo-w.png" class="img-responsive"></span>
							<span class="block m-t-xs text-white"> <strong class="font-bold">Admin user name</strong></span>
						</div>
						<div class="logo-element">
							GQ
						</div>
					</li>
					<li class="active">
						<router-link to="/cn/admin"><i class="fa fa-th-large"></i> <span class="nav-label">仪表板</span></router-link>
					</li>
					<li>
						<router-link to="/cn/admin/client/index"><i class="fa fa-users"></i> <span class="nav-label">客户</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">批准</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/approval/account">Account Opening</router-link></li>
							<li><router-link to="/cn/admin/approval/deposit">Deposit</router-link></li>
							<li><router-link to="/cn/admin/approval/withdrawal">Withdrawal</router-link></li>
							<li><router-link to="/cn/admin/approval/rank">Rank Request</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/cn/admin/infomation/index"><i class="fa fa-flag"></i> <span class="nav-label">信息</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">运动</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/campaign/bonus">Bonus</router-link></li>
							<li><router-link to="/cn/admin/campaign/bonuslog">Bonus Log</router-link></li>
							<li><router-link to="/cn/admin/campaign/point">Point</router-link></li>
							<li><router-link to="/cn/admin/campaign/list">Campaign List</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/cn/admin/inquery/index"><i class="fa fa-inbox"></i> <span class="nav-label">查询</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">报告</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/report/history">Transaction History</router-link></li>
							<li><router-link to="/cn/admin/report/ranking">Trade Ranking</router-link></li>
							<li><router-link to="/cn/admin/report/volume">Transaction Volume</router-link></li>
							<li><router-link to="/cn/admin/report/commission">Commission</router-link></li>
							<li><router-link to="/cn/admin/report/deposit">Deposits</router-link></li>
							<li><router-link to="/cn/admin/report/withdrawal">Withdrawals</router-link></li>
							<li><router-link to="/cn/admin/report/transfer">Internal Transfers</router-link></li>
							<li><router-link to="/cn/admin/report/summary">Overall Summary</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">代理商</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/agent/relationship">IB Relationship</router-link></li>
							<li><router-link to="/cn/admin/agent/statistics">IB Statistics</router-link></li>
							<li><router-link to="/cn/admin/agent/scheme">Commission Scheme</router-link></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">邮件</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/mail/stepmail">Step Mail</router-link></li>
							<li><router-link to="/cn/admin/mail/maillog">Mail Log</router-link></li>
							<li><router-link to="/cn/admin/mail/trigger">Trigger Mail</router-link></li>
							<li><router-link to="/cn/admin/mail/template">Mail Template</router-link></li>
						</ul>
					</li>
					<li>
						<router-link to="/cn/admin/media/index"><i class="fa fa-photo"></i> <span class="nav-label">媒体库</span></router-link>
					</li>
					<li>
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">系统设置</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><router-link to="/cn/admin/system/user">Admin User</router-link></li>
							<li><router-link to="/cn/admin/system/role">System Role</router-link></li>
							<li><router-link to="/cn/admin/system/demo">Demo Account</router-link></li>
							<li><router-link to="/cn/admin/system/account-group">Account Group</router-link></li>
							<li><router-link to="/cn/admin/system/level">Client Level</router-link></li>
							<li><router-link to="/cn/admin/system/rank">Ranks</router-link></li>
							<li><router-link to="/cn/admin/system/d-w">D/W Settings</router-link></li>
							<li><router-link to="/cn/admin/system/rate">Exchange Rate</router-link></li>
							<li><router-link to="/cn/admin/system/email-profile">Email Profile</router-link></li>
						</ul>
					</li>
				</ul>
			</div>
</div>
</template>
<script>
export default {
    name: 'sidebar',
	mounted: function(){
          $('#side-menu').metisMenu();
	}
}
</script>