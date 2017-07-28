<template>
<div id="wrapper">
		<nav class="navbar-default navbar-static-side" role="navigation">
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
					<li>
						<a href="../index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
					</li>
					<li>
						<a href="../client/index.html"><i class="fa fa-users"></i> <span class="nav-label">Client</span></a>
					</li>
					<li>
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Apploval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../approval/account.html">Account Opening</a></li>
							<li><a href="../approval/deposit.html">Deposit</a></li>
							<li><a href="../approval/withdrawal.html">Withdrawal</a></li>
							<li><a href="../approval/rank.html">Rank Request</a></li>
						</ul>
					</li>
					<li>
						<a href="../infomation/index.html"><i class="fa fa-flag"></i> <span class="nav-label">infomation</span></a>
					</li>
					<li>
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">Campaign</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../campaign/bonus.html">Bonus</a></li>
							<li><a href="../campaign/bonuslog.html">Bonus Log</a></li>
							<li><a href="../campaign/point.html">Point</a></li>
							<li><a href="../campaign/list.html">Campaign List</a></li>
						</ul>
					</li>
					<li>
						<a href="../inquery/index.html"><i class="fa fa-inbox"></i> <span class="nav-label">Inquery</span></a>
					</li>
					<li class="active">
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Report</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../report/history.html">Transaction History</a></li>
							<li><a href="../report/ranking.html">Trade Ranking</a></li>
							<li><a href="../report/volume.html">Transaction Volume</a></li>
							<li><a href="../report/commission.html">Commission</a></li>
							<li><a href="../report/deposit.html">Deposits</a></li>
							<li><a href="../report/withdrawal.html">Withdrawals</a></li>
							<li><a href="../report/transfer.html">Internal Transfers</a></li>
							<li class="active"><a href="../report/summary.html">Overall Summary</a></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">Agent</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../agent/relationship.html">IB Relationship</a></li>
							<li><a href="../agent/statistics.html">IB Statistics</a></li>
							<li><a href="../agent/scheme.html">Commission Scheme</a></li>
						</ul>
					</li>
					<li>
						<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label">Mail</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../mail/stepmail.html">Step Mail</a></li>
							<li><a href="../mail/maillog.html">Mail Log</a></li>
							<li><a href="../mail/trigger.html">Trigger Mail</a></li>
							<li><a href="../mail/template.html">Mail Template</a></li>
						</ul>
					</li>
					<li>
						<a href="../media/index.html"><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></a>
					</li>
					<li>
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">System Settings</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../system/user.html">Admin User</a></li>
							<li><a href="../system/role.html">System Role</a></li>
							<li><a href="../system/demo.html">Demo Account</a></li>
							<li><a href="../system/account-group.html">Account Group</a></li>
							<li><a href="../system/level.html">Client Level</a></li>
							<li><a href="../system/rank.html">Ranks</a></li>
							<li><a href="../system/d-w.html">D/W Settings</a></li>
							<li><a href="../system/rate.html">Exchange Rate</a></li>
							<li><a href="../system/email-profile.html">Email Profile</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>

		<div id="page-wrapper" class="gray-bg">
			<div class="row border-bottom">
				<nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
					<div class="navbar-header">
						<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
					</div>
					<ul class="nav navbar-top-links navbar-right">
						<li>
							<span class="m-r-sm text-muted welcome-message">Welcome to GQFX Admin.</span>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-envelope"></i> <span class="label label-warning">12</span>
							</a>
							<ul class="dropdown-menu dropdown-messages">
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">20m ago</small>
											<strong>Mike Loreipsum started following Monica Smith</strong>.
											<br>
											<small class="text-muted">11:37 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">1h ago</small>
											<strong>Chris Johnatan Overtunk started following Monica Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">2h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">3h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">10h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="text-center link-block">
										<a href="../inquery/index.html">
											<i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
										</a>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
							</a>
							<ul class="dropdown-menu dropdown-alerts">
								<li>
									<a href="../approval/withdrawal.html">
										<div>
											<i class="fa fa-suitcase fa-fw"></i> Withdrawal Request
											<span class="pull-right badge badge-danger m-t-xs">15</span>
										</div>
									</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="../approval/account.index.html">
										<div>
											<i class="fa fa-address-card-o fa-fw"></i> Document Request
											<span class="pull-right badge badge-success m-t-xs">15</span>
										</div>
									</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="../approval/rank.html">
										<div>
											<i class="fa fa-pie-chart fa-fw"></i> Rank Request
											<span class="pull-right badge badge-info m-t-xs">2</span>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<img src="../../assets/img/flags/16/United-Kingdom.png" alt="EN">
							</a>
							<ul class="dropdown-menu">
								<li>
									<a class="btn active"><img src="../../assets/img/flags/16/United-Kingdom.png" alt="EN"> English</a>
								</li>
								<li>
									<a class="btn"><img src="../../assets/img/flags/16/china.png" alt="ZH"> Chinese</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="login.html">
								<i class="fa fa-sign-out"></i> Log out
							</a>
						</li>
					</ul>
				</nav>
			</div>
			
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Overall Summary</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<div class="row">
									<div class="col-md-3">
										<label>Date</label>
										<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
									</div>
									<div class="col-md-2">
										<label>MT5 Account</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
								  <div class="col-md-2">
									  <label>Client ID</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-md-2">
										<label>Account Group</label>
										<div class="form-group">
											<select class="form-control">
												<option>Notihig Selected</option>
												<option>Default</option>
												<option>XXXXX</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-inline m-t-mdl">
											<button class="btn btn-primary">Search</button>
											<div class="input-group input-sm pull-right">
												<span class="input-group-addon no-borders">Show</span>
												<select class="form-control">
													<option>10</option>
													<option selected>25</option>
													<option>50</option>
													<option>100</option>
												</select>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<!-- ibox End -->
					</div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
									<a class="collapse-link">
										<i class="fa fa-chevron-up"></i>
									</a>
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="table table-hover footable toggle-arrow-tiny report-os-table">
										<thead>
											<tr>
												<th data-toggle="true">MT5 Account</th>
												<th data-class="expand">Client ID</th>
												<th data-hide="phone">Name</th>
												<th data-hide="phone,tablet">Ac.Grou</th>
												<th data-hide="phone,tablet">Client Level</th>
												<th data-hide="phone,tablet">Rank</th>
												<th data-hide="phone,tablet">Agent ID</th>
												<th data-hide="phone,tablet">Equity</th>
												<th data-class="expand">Volume</th>
												<th data-class="expand">Commission</th>
												<th data-class="expand">Net Deposit</th>
												<th data-class="expand">Profit</th>
												<th data-hide="phone">Last Balance</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>55446655</td>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>Default</td>
												<td>Level-01</td>
												<td>IB</td>
												<td>22447711</td>
												<td>5,000.00</td>
												<td>1,456.80</td>
												<td>157.25</td>
												<td>-200.00</td>
												<td>577.65</td>
												<td>4,405.50</td>
											</tr>
											<tr>
												<td>55446655</td>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>Default</td>
												<td>Level-01</td>
												<td>IB</td>
												<td>22447711</td>
												<td>5,000.00</td>
												<td>1,456.80</td>
												<td>157.25</td>
												<td>-200.00</td>
												<td>577.65</td>
												<td>4,405.50</td>
											</tr>
											<tr>
												<td>55441199</td>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>FX-XX</td>
												<td>Level-01</td>
												<td>Trader</td>
												<td>22447711</td>
												<td>5,000.00</td>
												<td>1,456.80</td>
												<td>0</td>
												<td>840.00</td>
												<td>577.65</td>
												<td>4,405.50</td>
											</tr>
											<tr>
												<td>55441122</td>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>FX-05</td>
												<td>Level-01</td>
												<td>IB</td>
												<td>22447711</td>
												<td>5,000.00</td>
												<td>1,456.80</td>
												<td>157.25</td>
												<td>-200.00</td>
												<td>577.65</td>
												<td>4,405.50</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="3">Showing 1 to 25 of 57 entries</td>
												<td colspan="10">
													<ul class="pagination pull-right m-n">
													</ul>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
						<!-- ibox End -->
					</div>
				</div>
			</div>
			
			<div class="footer">
				<div>
					<strong>Copyright</strong> GQ capital &copy; 2017
				</div>
			</div>
		</div>
	</div>

</template>
<script>
import '../../assets/css/plugins/footable/footable.core.css'
import '../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'

import Datepicker from '../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Footable from '../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'summary',
    components: {
      Datepicker,
      Footable
    },
    mounted: function(){
        $('.footable').footable({
				breakpoints: {
					phone: 640,
					tablet: 1024
				}
		});
		$('input[name="daterange"]').daterangepicker({
			timePicker: false,
		});
        $('.datepicker').datepicker({
			format: 'yyyy-mm-dd',
			startDate: '-3d'
		});
    }
}
</script>