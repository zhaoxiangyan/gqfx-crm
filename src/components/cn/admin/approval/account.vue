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
					<li class="active">
						<a href="#"><i class="fa fa-snowflake-o"></i> <span class="nav-label">Approval</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse">
							<li class="active"><a href="../approval/account.html">Account Opening</a></li>
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
					<h2 class="pull-left m-r-sm">Account Opening / <small>Approve for Document</small></h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="tabs-container">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active">
										<a href="#reqested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-success">8</span></a>
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
												<table class="table table-hover footable toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-toggle="true">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Phone</th>
															<th data-hide="phone,tablet">Email</th>
															<th data-hide="phone">Agent ID</th>
															<th data-hide="phone">Signup Date</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Verification</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22339911</td>
															<td>2017-03-10 15:00</td>
															<td>2017-03-10 15:07</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22339911</td>
															<td>2017-03-10 16:10</td>
															<td>2017-03-10 17:38</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>0</td>
															<td>2017-03-09 10:15</td>
															<td>2017-03-09 21:20</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
																<ul class="pagination pull-right m-n">
																</ul>
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
														<option selected>25</option>
														<option>50</option>
														<option>100</option>
													</select>
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="table-responsive">
												<table class="table table-hover footable toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-toggle="true">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Phone</th>
															<th data-hide="phone,tablet">Email</th>
															<th data-hide="phone">Agent ID</th>
															<th data-hide="phone">Signup Date</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Verification</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22660088</td>
															<td>2017-03-10 15:00</td>
															<td>2017-03-10 15:07</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22999900</td>
															<td>02017-03-10 16:10</td>
															<td>02017-03-10 17:38</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22999900</td>
															<td>2017-03-09 10:15</td>
															<td>2017-03-09 21:20</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
																<ul class="pagination pull-right m-n">
																</ul>
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
														<option selected>25</option>
														<option>50</option>
														<option>100</option>
													</select>
												</div>
												<div class="clearfix"></div>
											</div>
											<div class="table-responsive">
												<table class="table table-hover footable toggle-arrow-tiny">
													<thead>
														<tr>
															<th data-toggle="true">Cilent ID</th>
															<th data-class="expand">Name</th>
															<th data-hide="phone,tablet">Phone</th>
															<th data-hide="phone,tablet">Email</th>
															<th data-hide="phone">Agent ID</th>
															<th data-hide="phone">Signup Date</th>
															<th data-class="expand">Request Date</th>
															<th data-hide="phone">Verification</th>
															<th data-class="expand">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>22558833</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>0</td>
															<td>2017-03-09 15:00</td>
															<td>2017-03-09 15:07</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558844</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22445566</td>
															<td>2017-03-10 16:10</td>
															<td>2017-03-10 17:38</td>
															<td>Requested</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																		<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
																	</ul>
																</div>
															</td>
														</tr>
														<tr>
															<td>22558855</td>
															<td>Patrick Smith</td>
															<td>+852 1144-8877</td>
															<td>sample123@gmail.com</td>
															<td>22334477</td>
															<td>2017-03-09 10:15</td>
															<td>2017-03-09 21:20</td>
															<td>Declined</td>
															<td>
																<div class="btn-group">
																	<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
																	<ul class="dropdown-menu">
																		<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
																<ul class="pagination pull-right m-n">
																</ul>
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
	
	<!-- Modal Account-->
	<div id="account" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header"><h3 class="modal-title">Account Approval</h3>
					<small>Approve for Document</small>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-7">
							<div class="table-responsive">
								<table class="table table-bordered client-table white-bg">
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
											<th>Agent ID</th>
											<td></td>
										</tr>
										<tr>
											<th>E-mail</th>
											<td></td>
										</tr>
										<tr>
											<th>Phone</th>
											<td></td>
										</tr>
										<tr>
											<th>Address</th>
											<td></td>
										</tr>
										<tr>
											<th>City</th>
											<td></td>
										</tr>
										<tr>
											<th>State/Province</th>
											<td></td>
										</tr>
										<tr>
											<th>Country</th>
											<td></td>
										</tr>
										<tr>
											<th>Zip/Postal Code</th>
											<td></td>
										</tr>
										<tr>
											<th>National ID</th>
											<td></td>
										</tr>
										<tr>
											<th>Citizen</th>
											<td></td>
										</tr>
										<tr>
											<th>Date of Birth</th>
											<td></td>
										</tr>
										<tr>
											<th>Male/Female</th>
											<td></td>
										</tr>
										<tr>
											<th>Language</th>
											<td></td>
										</tr>
										<tr>
											<th>Signup Date</th>
											<td></td>
										</tr>
										<tr>
											<th>Request Date</th>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="tabs-container">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active">
										<a href="#id-photo" data-toggle="tab" aria-controls="id-photo">ID Photo</a>
									</li>
									<li role="presentation">
										<a href="#res-card" data-toggle="tab" aria-controls="res-card">Residence/Card</a>
									</li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane active" id="id-photo">
										<div class="panel-body">
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox1" type="checkbox"><label for="checkbox1"> ID(Front)</label></div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="../../assets/img/p1.jpg" data-lightbox="image-1" data-title="ID(Front)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox2" type="checkbox"><label for="checkbox2"> ID(Back)</label></div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="../../assets/img/12.jpg" data-lightbox="image-2" data-title="ID(Back)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../assets/img/12.jpg" class="img-responsive"></div>
											</div>
											<div class="p-xs">
												<button class="btn btn-sm btn-primary btn-outline">Approve</button>
												<button class="btn btn-sm btn-warning btn-outline">Pending</button>
												<a href="#" data-toggle="modal" data-target="#reason"><button class="btn btn-sm btn-danger btn-outline">Decline</button></a>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="res-card">
										<div class="panel-body">
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox4" type="checkbox"><label for="checkbox4"> Proof of Residence</label></div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="../../assets/img/p1.jpg" data-lightbox="image-1" data-title="Proof of Residence"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox5" type="checkbox"><label for="checkbox5"> Debit/Credit Card(Front)</label></div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="../../assets/img/12.jpg" data-lightbox="image-2" data-title="Debit/Credit Card(Front)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../assets/img/12.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox6" type="checkbox"><label for="checkbox6"> Debit/Credit Card(Back) </label></div>
												<div class="ibox-tools">
													<span class="label label-danger">Declined</span>
													<a href="../../assets/img/p3.jpg" data-lightbox="image-3" data-title="Debit/Credit Card(Back) "><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../assets/img/p3.jpg" class="img-responsive"></div>
											</div>
											<div class="p-xs">
												<button class="btn btn-sm btn-primary btn-outline">Approve</button>
												<button class="btn btn-sm btn-warning btn-outline">Pending</button>
												<a href="#" data-toggle="modal" data-target="#reason"><button class="btn btn-sm btn-danger btn-outline">Decline</button></a>
											</div>
										</div>
									</div>
								</div>
								<!-- tab-content END-->
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
	<div id="reason" class="modal fade in m-t-lg" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-danger"><h3 class="modal-title">Reason of Declined</h3></div>
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
import '../../assets/css/plugins/footable/footable.core.css'
import '../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../assets/css/plugins/lightbox/lightbox.css'
import '../../assets/css/plugins/jasny/jasny-bootstrap.min.css'
import '../../assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'

import Jasny from '../../assets/js/plugins/jasny/jasny-bootstrap.min.js'
import Footable from '../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'account',
    components: {

        Jasny,
        Footable
    },
    mounted: function() {
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

