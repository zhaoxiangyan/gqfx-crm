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
					<li class="active">
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
						<a href="media/index.html"><i class="fa fa-photo"></i> <span class="nav-label">Media Library</span></a>
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
			
			<div class="wrapper wrapper-content  animated fadeInRight">
				<div class="row">
					<div class="col-sm-8">
						<div class="ibox">
							<div class="ibox-content">
								<h2 class="m-b-md">Inquery</h2>
								<div class="inquery-list">
									<ul class="nav nav-tabs">
										<span class="pull-right small text-muted">1406 Elements</span>
										<li class="active"><a href="#tab-1" data-toggle="tab"><i class="fa fa-inbox fa-fw"></i>Inbox</a></li>
										<li><a href="#tab-2" data-toggle="tab"><i class="fa fa-paper-plane-o fa-fw"></i>Sent</a></li>
									</ul>
									<div class="tab-content">
										<div class="tab-pane active" id="tab-1">
											<div class="row p-h-sm">
												<div class="col-sm-4">
													<div class="btn-group">
														<button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fa fa-square-o"></i> <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#">Select All</a></li>
															<li><a href="#">Deselect</a></li>
														</ul>
													</div>
													<div class="btn-group">
														<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#">Mark as Read</a></li>
															<li><a href="#">Mark as Unread</a></li>
															<li><a href="#">Mark as Important</a></li>
															<li class="divider"></li>
															<li><a href="#"><i class="fa fa-trash fa-fw"></i>Delete</a></li>
														</ul>
													</div>
												</div>
												<div class="input-group col-sm-5">
													<input class="input form-control" type="text" placeholder="Search in Table">
													<span class="input-group-btn">
														<button class="btn btn btn-primary" type="button">Search</button>
													</span>
												</div>
											</div>
											<div class="table-responsive">
												<table class="table">
													<tbody>
														<tr class="unread">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-1"  data-toggle="tab">22557744</a></td>
															<td><a href="#contact-1"  data-toggle="tab">Micheal Jackson</a></td>
															<td> Tellus Institute</td>
															<td class="inquery-time">09:53</td>
														</tr>
														<tr class="unread">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-2"  data-toggle="tab">22994400</a></td>
															<td><a href="#contact-2"  data-toggle="tab">Rooney Lindsay</a></td>
															<td>Proin Limited test subject</td>
															<td class="inquery-time">08:58</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-3"  data-toggle="tab">33112288</a></td>
															<td><a href="#contact-3"  data-toggle="tab">Lionel Mcmillan</a></td>
															<td>Et Industries</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-4"  data-toggle="tab">22334466</a></td>
															<td><a href="#contact-4"  data-toggle="tab">Edan Randall</a></td>
															<td>Integer Sem Corp.</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-5"  data-toggle="tab">33223311</a></td>
															<td><a href="#contact-5"  data-toggle="tab">Jasper Carson</a></td>
															<td>Mone Industries</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
													</tbody>
												</table>
												<nav aria-label="Page navigation">
													<ul class="pagination pull-right">
														<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
														<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
													</ul>
												</nav>
											</div>
										</div>		
										<!--//.tab-pane-END -->		
										<div class="tab-pane" id="tab-2">
											<div class="row p-h-sm">
												<div class="col-sm-4">
													<div class="btn-group">
														<button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fa fa-square-o"></i> <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#">Select All</a></li>
															<li><a href="#">Deselect</a></li>
														</ul>
													</div>
												</div>
												<div class="input-group col-sm-5">
													<input class="input form-control" type="text" placeholder="Search in Table">
													<span class="input-group-btn">
														<button class="btn btn btn-primary" type="button">Search</button>
													</span>
												</div>
											</div>
											<div class="table-responsive">
												<table class="table">
													<tbody>
														<tr class="unread">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-1"  data-toggle="tab">22557744</a></td>
															<td><a href="#contact-1"  data-toggle="tab">Micheal Jackson</a></td>
															<td> Tellus Institute</td>
															<td class="inquery-time">09:53</td>
														</tr>
														<tr class="unread">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-2"  data-toggle="tab">22994400</a></td>
															<td><a href="#contact-2"  data-toggle="tab">Rooney Lindsay</a></td>
															<td>Proin Limited test subject</td>
															<td class="inquery-time">08:58</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-3"  data-toggle="tab">33112288</a></td>
															<td><a href="#contact-3"  data-toggle="tab">Lionel Mcmillan</a></td>
															<td>Et Industries</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-4"  data-toggle="tab">22334466</a></td>
															<td><a href="#contact-4"  data-toggle="tab">Edan Randall</a></td>
															<td>Integer Sem Corp.</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
														<tr class="read">
															<td class="check-mail"><input type="checkbox"></td>
															<td class="star-mail"><i class="fa fa-certificate text-warning"></i></td>
															<td><a href="#contact-5"  data-toggle="tab">33223311</a></td>
															<td><a href="#contact-5"  data-toggle="tab">Jasper Carson</a></td>
															<td>Mone Industries</td>
															<td class="inquery-time">2017-03-20</td>
														</tr>
													</tbody>
												</table>
												<nav aria-label="Page navigation">
													<ul class="pagination pull-right">
														<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
														<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
													</ul>
												</nav>
											</div>
										</div>
										<!--//.tab-pane-END -->
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="ibox">
							<div class="ibox-content">
								<div class="tab-content">
									<div class="tab-pane active" id="contact-1">
										<div class="row m-b-md">
											<div class="col-lg-7 text-center">
												<h2>Micheal Jackson</h2>
												<div class="m-b-sm">
													22557744
												</div>
											</div>
											<div class="col-lg-5">
												<a href="#" class="btn btn-sm btn-default btn-block" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a>
												<a href="#" class="btn btn-primary btn-sm btn-block" data-cta-target=".modal-message"><i class="fa fa-reply fa-fw"></i>Reply
												</a>
											</div>
										</div>
										<div class="m-r-xs">
											<strong>Message</strong>
											<span class="pull-right small"> 2017-03-15 15:45 </span>
											<ul class="list-group clear-list">
												<li class="list-group-item fist-item">
													Sample for Subject
												</li>
												<li class="list-group-item">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
													<p>
														<span><i class="fa fa-paperclip fa-fw"></i>attachments - </span>
														<a href="#">sample.txt</a>
														|
														<a href="#">image.jpg</a>
													</p>

												</li>
											</ul>
										</div>
										<div class="message-history">
											<strong>History</strong>
											<div class="vertical-container dark-timeline" id="vertical-timeline">
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-06 10:53 </span>
													</div>
												</div>
												
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p class="subject">TEST! test</p>
														<p>The generated Lorem Ipsum is therefore.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
											</div>
											<button class="btn btn-sm btn-default btn-block">Next</button>
										</div>
									</div>
									<!-- tab-pane End -->
									<div class="tab-pane" id="contact-2">
										<div class="row m-b-md">
											<div class="col-lg-7 text-center">
												<h2>Rooney Lindsay</h2>
												<div class="m-b-sm">
													22994400
												</div>
											</div>
											<div class="col-lg-5">
												<a href="#" class="btn btn-sm btn-default btn-block" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a>
												<a href="#" class="btn btn-primary btn-sm btn-block" data-cta-target=".modal-message"><i class="fa fa-reply fa-fw"></i>Reply
												</a>
											</div>
										</div>
										<div class="m-r-xs">
											<strong>Message</strong>
											<span class="pull-right small"> 2017-03-15 15:45 </span>
											<ul class="list-group clear-list">
												<li class="list-group-item fist-item">
													Sample for Subject
												</li>
												<li class="list-group-item">
													<p>India combines the hustle and bustle of Delhi and Mumbai with the calm of its meditation centres. And this contradiction is hypnotising. As Mark Twain wrote, this country has ‘an imperishable interest for alien persons’.</p>
												</li>
											</ul>
										</div>
										<div class="message-history">
											<strong>History</strong>
											<div class="vertical-container dark-timeline" id="vertical-timeline">
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-06 10:53 </span>
													</div>
												</div>

												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">Sample for Subject</p>
														<p>The cutting-edge crafts will offer a range of urban solutions from public transport to pollution sensing and water-based venues. 
															If trials are successful, a fleet of Roboats will soon be operating in the Dutch capital, and around the world. 
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p class="subject">TEST! test</p>
														<p>The generated Lorem Ipsum is therefore.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon gray-bg">
														<i class="fa fa-info"></i>
													</div>
													<div class="vertical-timeline-content gray-line">
														<p class="subject">TEST! test</p>
														<p>Many desktop publishing packages and web page editors now use Lorem. Many desktop publishing packages and web page editors now use Lorem.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
												<div class="vertical-timeline-block">
													<div class="vertical-timeline-icon lazur-bg">
														<i class="fa fa-user"></i>
													</div>
													<div class="vertical-timeline-content gray-bg">
														<p>Conference on the sales results for the previous year.
														</p>
														<span class="vertical-date small text-muted"> 2016-10-05 11:20 </span>
													</div>
												</div>
											</div>
											<button class="btn btn-sm btn-default btn-block">Next</button>
										</div>
									</div>
									<!-- tab-pane End -->
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
	
	<!-- Modal Send message -->
	<div class="modal modal-message">
		<span class="modal-close-btn m-t-n-xs"></span>
		<div class="ibox">
			<div class="ibox-title black-bg"><h5 class="text-white">Reply Message</h5></div>
			<div class="ibox-content">
				<div class="form-horizontal">
					<div class="form-group">
						<label class="col-sm-2 control-label">Template</label>
						<div class="col-sm-10">
							<div class="input-group">
								<select class="form-control">
									<option selected>Default</option>
									<option>Sample sample</option>
									<option>Test test test</option>
									<option>zserfvbgtyhn</option>
								</select>
								<span class="input-group-btn"><button class="btn btn-default">Read</button></span>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<input class="form-control" type="text" placeholder="Re:">
				</div>
				<div class="form-group">
					<textarea rows="10" class="form-control"></textarea>
				</div>
				<div class="fileinput fileinput-new" data-provides="fileinput">
					<span class="btn btn-default btn-file btn-sm"><span class="fileinput-new"><i class="fa fa-paperclip"></i> Select file</span><span class="fileinput-exists">Change</span><input type="hidden"><input name="..." type="file"></span>
					<span class="fileinput-filename"></span>
					<a class="close fileinput-exists" style="float: none" href="#" data-dismiss="fileinput">×</a>
				</div>
			</div>
			<div class="ibox-footer text-right">
				<button class="btn btn-warning">Send</button>
			</div>
		</div>
		<!-- ibox End -->		
	</div>

</div>
</template>
<script>

import "../../assets/css/plugins/jasny/jasny-bootstrap.min.css" 

// import Cta from '../../assets/js/plugins/cta/cta.js'
import Jasny from '../../assets/js/plugins/jasny/jasny-bootstrap.min.js'
export default {
    name: 'inquery-index',
	components:{
        // Cta,
        Jasny
	},
    mounted: function(){
       
    }
}
</script>