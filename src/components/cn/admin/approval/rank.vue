<template>
<div>
    <div id="wrapper">
		<nav class="navbar-default navbar-static-side" role="navigation">
			<div class="sidebar-collapse">
				<ul class="nav metismenu skin-3" id="side-menu">
					<li class="nav-header">
						<div class="dropdown profile-element">
						    <span><img src="../../assets/img/logo-w.png" class="img-responsive"></span>
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
					<li class="active">
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Approval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li><a href="../approval/account.html">Account Opening</a></li>
							<li><a href="../approval/deposit.html">Deposit</a></li>
							<li><a href="../approval/withdrawal.html">Withdrawal</a></li>
							<li class="active"><a href="../approval/rank.html">Rank Request</a></li>
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
									<a class="btn set_en"><img src="../../assets/img/flags/16/china.png" alt="ZH"> Chinese</a>
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
					<h2 class="pull-left m-r-sm">Rank Request</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="tabs-container">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active">
										<a href="#reqested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-info">2</span></a>
									</li>
									<li role="presentation">
										<a href="#pending" data-toggle="tab" aria-controls="pending">Pending <span class="badge">15</span></a>
									</li>
									<li role="presentation">
										<a href="#declined" data-toggle="tab" aria-controls="declined">Declined <span class="badge">3</span></a>
									</li>
								</ul>
								
								<div class="tab-content">
									<div class="tab-pane active" id="requested">
										<div class="panel-body">
											<h3>Requested</h3>
											<div class="m-b-sm">
												<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
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
											<div class="table-responsive">
												<table class="footable table table-hover toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-class="expand">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Client Level</th>
															<th data-hide="phone">Current Rank</th>
															<th data-class="expand">Requested Rank</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Rank Up Condition</th>
															<th data-hide="phone">Status</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>Level-1</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-03-10 14:30</td>
															<td>Achived</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>Level-2</td>
															<td>IB</td>
															<td>MIB</td>
															<td>2017-02-10 17:30</td>
															<td>Achived</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>Levlel-2</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-02/08 10:50</td>
															<td>Unachieved</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td colspan="2">Showing 1 to 25 of 57 entries</td>
															<td colspan="7">
																<ul class="pagination pull-right"></ul>
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									<!-- tab-pane End -->
									<div class="tab-pane" id="pending">
										<div class="panel-body">
											<h3>Pending</h3>
											<div class="m-b-sm">
												<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
												<div class="input-group input-sm pull-right">
													<span class="input-group-addon no-borders">Show</span>
													<select class="form-control">
														<option>10</option>
														<option selected>20</option>
														<option>50</option>
														<option>100</option>
													</select>
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="table-responsive">
												<table class="footable table table-hover toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-class="expand">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Client Level</th>
															<th data-hide="phone">Current Rank</th>
															<th data-class="expand">Requested Rank</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Rank Up Condition</th>
															<th data-hide="phone">Status</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>Level-1</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-03-10 14:30</td>
															<td>Achived</td>
															<td>Pending</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>Level-2</td>
															<td>IB</td>
															<td>MIB</td>
															<td>2017-02-10 17:30</td>
															<td>Achived</td>
															<td>Pending</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>Levlel-2</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-02-08 10:50</td>
															<td>Achived</td>
															<td>Pending</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td colspan="2">Showing 1 to 25 of 57 entries</td>
															<td colspan="7">
																<ul class="pagination pull-right"></ul>
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									<!-- tab-pane End -->
									<div class="tab-pane" id="declined">
										<div class="panel-body">
											<h3>Declined</h3>
											<div class="m-b-sm">
												<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
												<div class="input-group input-sm pull-right">
													<span class="input-group-addon no-borders">Show</span>
													<select class="form-control">
														<option>10</option>
														<option selected>20</option>
														<option>50</option>
														<option>100</option>
													</select>
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="table-responsive">
												<table class="footable table table-hover toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-class="expand">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Client Level</th>
															<th data-hide="phone">Current Rank</th>
															<th data-class="expand">Requested Rank</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Rank Up Condition</th>
															<th data-hide="phone">Status</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>Level-1</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-03-10 14:30</td>
															<td>Achived</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>Level-2</td>
															<td>IB</td>
															<td>MIB</td>
															<td>2017-02-10 17:30</td>
															<td>Unachived</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>Levlel-2</td>
															<td>Trader</td>
															<td>IB</td>
															<td>2017-02-08 10:50</td>
															<td>Unachived</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-file fa-fw"></i>Detail</a></li>
																		<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td colspan="2">Showing 1 to 25 of 57 entries</td>
															<td colspan="7">
																<ul class="pagination pull-right"></ul>
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
									<!-- tab-pane End -->
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
	
	<!-- Modal Rank request -->
	<div id="rank-request" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-star-o modal-icon"></i><h3 class="modal-title">Rank Approval</h3><small>Rank Req ID: 50000125</small></div>
				<div class="modal-body">
					<table class="table">
						<tbody>
							<tr>
								<th>Client ID</th>
								<td></td>
							</tr>
							<tr>
								<th>Name</th>
								<td>Patrick Smith</td>
							</tr>
							<tr>
								<th>Client Level</th>
								<td></td>
							</tr>
							<tr>
								<th>Rank</th>
								<td>
									<div class="pull-left">Current Rank:<br><strong class="text-md">Trader</strong></div>
									<div class="p-w-md pull-left"><i class="fa fa-arrow-right m-t-md"></i></div>
									<div class="pull-left">Requested Rank:<br><strong class="text-md">IB</strong></div>
								</td>
							</tr>
							<tr>
								<th>Request Date</th>
								<td>2017-03-20 14:40</td>
							</tr>
							<tr>
								<th>Rank Condition</th>
								<td>Achived</td>
							</tr>
							<tr>
								<th>Status</th>
								<td>Pending</td>
							</tr>
							<tr>
								<th>IB Document</th>
								<td>
									<span class="m-r-sm"><i class="fa fa-file-pdf-o fa-fw"></i>IB-agreetment.pdf</span>
									<a href="" class="btn btn-link"><i class="fa fa-download"></i></a>
								</td>
							</tr>
						</tbody>
					</table>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary btn-sm btn-outline">Approve</button>
					<button type="button" class="btn btn-warning btn-sm btn-outline">Pending</button>
					<a href="#" data-toggle="modal" data-target="#reson"><button type="button" class="btn btn-danger btn-sm btn-outline">Declined</button></a>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
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
								<div class="profile-image">
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
										<label class="label black-bg text-white">Black</label>
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
										<div><label>Male/Female</label><span>xxxx</span></div>
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
									<div><label>Account Group</label><span>Default</span></div>
									<div><label>Client Level</label><span></span></div>
									<div><label>Rank</label><span>MIB</span> <span class="pull-right"><label class="label label-default"><i class="fa fa-file-pdf-o"></i></label></span></div>
								</div>
								<div class="client-view-box">
									<h3>Transaction</h3>
									<div><label>Last Login</label><span></span></div>
									<div><label>Last Depoit</label><span>xxxxxxxxxxxx</span></div>
									<div><label>Read Only</label><span>OFF</span></div>
									<div><label>Leverage</label><span>1:100</span></div>
								</div>
								<div class="client-view-box">
									<p>Comment Sample Text</p>
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
	
	<!-- Modal Decline Message -->
	<div id="reson" class="modal fade in m-t-lg m-l-lg" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-danger"><h3 class="modal-titler">Reason of Declined</h3></div>
				<div class="modal-body">
					<textarea class="form-control" type="text" rows="5"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Send</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import '../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../assets/css/plugins/clockpicker/clockpicker.css'
import '../../assets/css/plugins/footable/footable.core.css'
import Footable from '../../assets/js/plugins/footable/footable.all.min.js'
import Datepicker from '../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
export default {
    name: 'rank',
    components: {
       Footable,
       Datepicker
    },
    mounted: function(){
        $('input[name="daterange"]').daterangepicker({
			timePicker: true,
	    });
        $('.datepicker').datepicker({
			format: 'yyyy/dd/mm',
			startDate: '-3d'
	    });
        $('.footable').footable({
            breakpoints: {
                phone: 640,
                tablet: 1024
            }
        });
    }
}
</script>
<style scoped>

</style>