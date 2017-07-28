<template>
<div>
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
					<li>
						<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Report</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../report/history.html">Transaction History</a></li>
							<li><a href="../report/ranking.html">Trade Ranking</a></li>
							<li><a href="../report/volume.html">Transaction Volume</a></li>
							<li><a href="../report/commission.html">Commission</a></li>
							<li><a href="../report/deposit.html">Deposits</a></li>
							<li><a href="../report/withdrawal.html">Withdrawals</a></li>
							<li><a href="../report/transfer.html">Internal Transfers</a></li>
							<li><a href="../report/summary.html">Overall Summary</a></li>
						</ul>
					</li>
					<li class="active">
						<a href="#"><i class="fa fa-pie-chart"></i> <span class="nav-label">Agent</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li class="active"><a href="../agent/relationship.html">IB Relationship</a></li>
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
									<a href="../manage/withdrawal.index.html">
										<div>
											<i class="fa fa-suitcase fa-fw"></i> Withdrawal Request
											<span class="pull-right badge badge-danger m-t-xs">15</span>
										</div>
									</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="../manage/account.index.html">
										<div>
											<i class="fa fa-address-card-o fa-fw"></i> Document Request
											<span class="pull-right badge badge-success m-t-xs">15</span>
										</div>
									</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="../ib/rank.html">
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
				<div class="col-lg-12">
					<h2 class="pull-left m-r-sm">IB Relationship</h2>
					<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".move" data-disable-scroll="true"><i class="fa fa-arrows-h"></i> Move IB Group</a></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<div class="row">
									<div class="col-md-4">
										<label>Agent ID</label>
										<div class="input-group col-sm-12"><input class="form-control" type="text" placeholder=""> <span class="input-group-btn"> <button class="btn btn-primary" type="button">Search
											</button> </span></div>
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
						<div class="ibox">
							<div class="ibox-content relationship-area">
								<div id="jstree1" class="tree">
									<ul>
										<li class="jstree-open"><span class="id"><a href="#" data-toggle="modal" data-target="#client">22557744</a></span>Patrick Smith <span class="badge">55</span>
											<button title="" class="btn btn-xs btn-default" type="button" data-toggle="modal" data-target="#group">
												<i class="fa fa-pie-chart"></i>
											</button>
											<ul>
												<li><span class="id"><a href="#" data-toggle="modal" data-target="#client">22770011</a></span>Michael Jackson<span class="badge">3</span>
													<button title="" class="btn btn-xs btn-default" type="button" data-toggle="modal" data-target="#group">
														<i class="fa fa-pie-chart"></i>
													</button>
													<ul>
														<li><span class="id"><a href="#" data-toggle="modal" data-target="#client">33118877</a></span>Beat It <span class="badge">8</span>
															<button title="" class="btn btn-xs btn-default" type="button" data-toggle="modal" data-target="#group">
																<i class="fa fa-pie-chart"></i>
															</button>
														  <ul>
																<li><span class="id"><a href="#" data-toggle="modal" data-target="#client">22996633</a></span>Bellie Jean</li>
																<li><span class="id">22996633</span>Smoth Criminal</li>
																<li><span class="id">22996633</span>Thriller Bad</li>
															</ul>
														</li>
														<li><span class="id"><a href="#" data-toggle="modal" data-target="#client">22445500</a></span>Human Nature</li>
														<li><span class="id">22330099</span>Black or White</li>
													</ul>
												</li>
												<li><span class="id">22115522</span>Stivie Wonder
													<ul>
														<li><span class="id">22996633</span>Van Halen</li>
														<li><span class="id">22996633</span>Bob Duran</li>
														<li><span class="id">22996633</span>Paul McCartney
															<ul>
																<li><span class="id">22996633</span>Say Saysay</li>
																<li><span class="id">22996633</span>Ebony Andivory</li>
															</ul>
														</li>
													</ul>
												</li>
												<li><span class="id">22336699</span>David Bowie
													<ul>
														<li><span class="id">22996633</span>Van Halen</li>
														<li><span class="id">22996633</span>Bob Duran</li>
														<li><span class="id">22996633</span>Paul McCartney</li>
													</ul>
												</li>
												<li><span class="id">22008855</span>Geroge Michael
													<ul>
														<li><span class="id">22996633</span>Van Halen</li>
														<li><span class="id">22996633</span>Bob Duran</li>
														<li><span class="id">22996633</span>Paul McCartney</li>
													</ul>
												</li>
												<li><span class="id">33002244</span>Cyndi Lauper
													<ul>
														<li><span class="id">22996633</span>Van Halen</li>
														<li><span class="id">22996633</span>Bob Duran</li>
														<li><span class="id">22996633</span>Paul McCartney</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
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
	
	<!-- Modal Move Agent -->
	<div class="modal modal-2 move">
		<span class="modal-close-btn"></span>
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
				<div class="ibox">
					<div class="ibox-title"><h4>Move of IB Group</h4></div>
					<div class="ibox-content">
						<p class="text-center">Move the IB who is the introducer of the specified client.</p>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-3 control-label">Client ID</label>
								<div class="col-sm-6">
									<div class="input-group"><span class="input-group-addon"><i class="fa fa-user-circle"></i></span><input class="form-control" type="text"></div>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label">Move Agent ID</label>
								<div class="col-sm-6">
									<div class="input-group m-b-sm"><span class="input-group-addon">From</span><input class="form-control" type="text" placeholder="Current Agent ID"></div>
									<div class="input-group"><span class="input-group-addon"><span class="p-w-xs">To</span></span><input class="form-control" type="text" placeholder="Move Agent ID"></div>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label"></label>
								<div class="col-sm-9 small">
									<i class="fa fa-pencil"></i> Move is specified Client ID only. Do not move under.<br>
									The commission on the day on the move date is granted to the transfer source IB.
								</div>
							</div>
						</div>
					</div>
					<div class="ibox-footer">
						<div><button class="btn btn-primary">Save Changes</button></div>
					</div>
				</div>
				<!-- ibox End -->
			</div>
		</div>
	</div>

	<!-- Modal Client -->
	<div id="client" class="modal fade in client" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="wrapper-content">
						<div class="row m-b-lg">
							<div class="col-md-5">
								<div class="profile-image text-muted">
									<i class="fa fa-user-circle-o fa-5x"></i>
								</div>
								<div class="profile-info">
									<div class="m-b-sm">
										<h2 class="no-margins">Patrick Smith</h2>
										<h4><small>Client ID:</small> 22554499</h4>
										<small>
											<i class="fa fa-phone"></i> +852 44775522<br>
											<i class="fa fa-envelope-o"></i> smaple123@gmail.com
										</small>	
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<h4>Transaction Data <small>(This Month)</small></h4>
								<table class="table m-b-xs">
									<tbody>
										<tr>
											<td>Balance<strong> 15,800.50</strong></td>
											<td>Tran.Vol<strong> 54,000.00</strong></td>
										</tr>
										<tr>
											<td>Deposit<strong> 100,000.00</strong></td>
											<td>Withdrawal<strong> 2,000.00</strong></td>
										</tr>
										<tr>
											<td>Comm <strong>400.75</strong></td>
											<td>Point <strong> 150</strong></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-md-2">
								<div class="m-b-xs">
									<h4>Status</h4>
									<div class="statusbox p-w-xs">
										<label class="label label-info">Verified</label>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 col-md-6">
								<div class="ibox">
									<div class="ibox-content">
										<h3>Profile</h3>
										<div><label>Address</label><span>xxxxxxxxxxxx</span></div>
										<div><label>City</label><span>xxxxxxxxxxxx</span></div>
										<div><label>State/Province</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Zip/Postal Code</label><span>xxxxxxxxxxxx</span></div>
										<div><label>National ID</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Citizen</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Language</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Date of Birth</label><span>xxxxxxxxxxxx</span></div>
									</div>
								</div>

								<div class="ibox">
									<div class="ibox-content">
										<h3>Registration</h3>
										<div><label>Temporary Date</label><span>2017/03/20 15:20</span></div>
										<div><label>Signup Date</label><span>2017/03/20 15:30</span></div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="client-view-box">
									<h3>Account</h3>
									<div><label>Agent ID</label><span>33664488</span></div>
									<div><label>Account group</label><span>Real</span></div>
									<div><label>Client Level</label><span></span></div>
									<div><label>Rank</label><span>MIB</span> <span class="pull-right"><label class="label label-default"><i class="fa fa-file-pdf-o"></i></label></span></div>
								</div>
								<div class="client-view-box">
									<h3>Transaction</h3>
									<div><label>Last Login</label><span></span></div>
									<div><label>Last Depoit</label><span>xxxxxxxxxxxx</span></div>
									<div><label>Read Only</label><span>OFF</span></div>
								</div>
								<div class="client-view-box">
									<h3>Comment</h3>
									<p>Sample Text</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Point -->
	<div id="group" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-pie-chart modal-icon"></i><h3 class="modal-title">Group Transactions</h3>
				  <small>33118877</small>
				</div>
				<div class="modal-body">
					<h5>Volume</h5>
					<table class="table white-bg">
					  <tr>
						  <td>Today</td>
							<td>1,500.00</td>
						</tr>
						<tr>
							<td>This Month</td>
							<td>17,512.25</td>
						</tr>
					</table>
					<h5>Commission</h5>
					<table class="table white-bg">
						<tr>
							<td>Today</td>
							<td>218.50</td>
						</tr>
						<tr>
							<td>This Month</td>
							<td>2,450.82</td>
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import '../../assets/css/plugins/footable/footable.core.css'
import '../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../assets/css/plugins/datapicker/datepicker3.css'
import '../../assets/css/plugins/jsTree/style.min.css'
import Datepicker from '../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Tree from '../../assets/js/plugins/jsTree/jstree.min.js'
export default {
    name: 'relationship',
    components: {
      Datepicker,
      Tree
    },
    mounted: function(){
       $('#jstree1').jstree({
			'core': {
				'check_callback': true
			},
			'plugins': ['types', 'dnd'],
			'types': {
				'default': {
					'icon': 'fa fa-user-circle'
				},
			}
		});
    }
}
</script>
<style scoped>

</style>