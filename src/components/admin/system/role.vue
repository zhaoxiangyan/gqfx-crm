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
							<li class="active"><a href="../mail/stepmail.html">Step Mail</a></li>
							<li><a href="../mail/maillog.html">Mail Log</a></li>
							<li><a href="../mail/trigger.html">Trigger Mail</a></li>
							<li><a href="../mail/template.html">Mail Template</a></li>
						</ul>
					</li>
					<li>
						<a href="../media/index.html"><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></a>
					</li>
					<li class="active">
						<a href="#"><i class="fa fa-cogs"></i> <span class="nav-label">System Settings</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../system/user.html">Admin User</a></li>
							<li class="active"><a href="../system/role.html">System Role</a></li>
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
									<a class="btnn"><img src="../../assets/img/flags/16/china.png" alt="ZH"> Chinese</a>
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
					<h2 class="pull-left m-r-sm">System Role</h2>
					<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-plus"></i> New</a></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-9">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn"> <button class="btn btn-primary" type="button">Search
										</button> </span></div>
									<div class="input-group input-sm pull-right">
										<span class="input-group-addon no-borders">Show</span>
										<select class="form-control">
											<option>10</option>
											<option selected>25</option>
											<option>50</option>
											<option>100</option>
										</select>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="table table-hover footable toggle-arrow-tiny setting-table">
										<thead>
											<tr>
												<th data-toggle="true">Name</th>
												<th data-hide="phone">Disctiption</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Administrator</td>
												<td>Sample is Smaple of Text</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>Admin-SUB</td>
												<td>Sample is Smaple of Text</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>TEST-admin</td>
												<td></td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>Staff-01</td>
												<td>Sample is Smaple of Text</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="2">Showing 1 to 25 of 57 entries</td>
												<td colspan="4">
													<ul class="pagination pull-right m-n">
													</ul>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
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
	
	<!-- Modal Role-edit -->
	<div class="modal modal-2 role">
		<span class="modal-close-btn"></span>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="ibox">
					<div class="ibox-title"><h4>System Role</h4></div>
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Name</label>
								<div class="col-sm-10"><input class="form-control" type="text"></div>
							</div>	
							<div class="form-group"><label class="col-sm-2 control-label">Operation</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="10" multiple data-actions-box="true">
											<option>Client</option>
											<optgroup label="Apploval">
												<option>Account Opening</option>
												<option>Deposit</option>
												<option>Withdrawal</option>
												<option>Rank Request</option>
											</optgroup>
											<option>Infomation</option>
											<optgroup label="Campaign">
												<option>Bonus</option>
												<option>Bonus Log</option>
												<option>Point</option>
												<option>Campaign List</option>
											</optgroup>
											<option>Inquery</option>
											<optgroup label="Report">
												<option>Transaction History</option>
												<option>Ranking</option>
												<option>Transaction Volume</option>
												<option>Commission</option>
												<option>Depoits</option>
												<option>Withdrawals</option>
												<option>Internal Transfer</option>
												<option>Overall Summary</option>
											</optgroup>
											<optgroup label="Agent">
												<option>IB Relationship</option>
												<option>IB Statistics</option>
												<option>Commission Scheme</option>
											</optgroup>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Settigns</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="10" multiple data-actions-box="true">
											<optgroup label="Mail">
												<option>Step Mail</option>
												<option>Mail Log</option>
												<option>Trigger Mail</option>
												<option>Mail Template</option>
											</optgroup>
											<option>Media Library</option>
											<optgroup label="System Settigs">
												<option>Admin User</option>
												<option>System Role</option>
												<option>Demo Account</option>
												<option>Account Group</option>
												<option>Client Level</option>
												<option>Ranks</option>
												<option>Account Group</option>
												<option>D/W Settings</option>
												<option>Exchange Rate</option>
												<option>Email Profile</option>
											</optgroup>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">CSV</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="2" multiple data-actions-box="true">
											<option>Client CSV Download</option>
											<option>Report CSV Download</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Other</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="2" multiple data-actions-box="true">
											<option>Risk Management</option>
											<option>Trade Monitor</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Discription</label>
								<div class="col-sm-10"><textarea class="form-control" rows="3"></textarea></div>
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
	
</div>
</template>
<script>
import '../../assets/css/plugins/footable/footable.core.css'
import '../../assets/css/plugins/select/bootstrap-select.css'

// import Bootstrapselect from '../../assets/js/plugins/select/bootstrap-select.min.js'
import Cta from '../../assets/js/plugins/cta/cta.min.js'
import Footable from '../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'role',
    components: {
    //    Bootstrapselect, 
       Cta,
       Footable
    },
    mounted: function(){
            $('.footable').footable({
					breakpoints: {
						phone: 640,
						tablet: 1024
					}
			});
    }
}
</script>