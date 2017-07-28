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
					<li  class="active">
						<a href="#"><i class="fa fa-puzzle-piece "></i> <span class="nav-label">Campaign</span><span class="fa arrow"></span></a>
						<ul class="nav nav-second-level collapse in">
							<li><a href="../campaign/bonus.html">Bonus</a></li>
							<li><a href="../campaign/bonuslog.html">Bonus Log</a></li>
							<li><a href="../campaign/point.html">Point</a></li>
							<li class="active"><a href="../campaign/list.html">Campaign List</a></li>
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
						<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0)"><i class="fa fa-bars"></i> </a>
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
					<h2 class="pull-left m-r-sm">Campaign Bunner and List / <small>Mypage of Client</small></h2>
					<div class="heading-tools"><a href="list-new.html" class="btn btn-sm btn-default"><i class="fa fa-plus"></i> New</a></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<h3 class="pull-left m-r-sm">Top Bunner Area</h3>
								<div class="pull-left m-xs">Displayed in the banner area at the top of My Page.</div>
								<div class="clearfix"></div>
								<ul class="campaign-bunner">
									<li class="danger-element ui-state-default">
										<div><img src="../../assets/img/dummy_banner.png" class="img-responsive"></div>
										<div class="text-right">
											<a class="btn btn-sm btn-white text-info" href="#" data-toggle="modal" data-target="#bunner-edit"><i class="fa fa-edit fa-fw"></i>Edit</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<h3 class="pull-left m-r-sm">Campaign List</h3>
								<div class="pull-left m-xs">Switch display order by drag & drop.</div>
								<div class="clearfix"></div>
								<ul class="campaign-list" id="sortable">
									<li class="warning-element ui-state-default">
										<span class="title">Simply dummy text of the test sample exsample bonus</span>
										<div class="row detail">
											<div class="col-sm-8">
												<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
											</div>
											<div class="col-sm-4 text-right">
												<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
												<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
												<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li class="warning-element ui-state-default">
										<span class="title">Happy Bonus!!!!</span>
										<div class="row detail">
											<div class="col-sm-8">
												<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
											</div>
											<div class="col-sm-4 text-right">
												<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
												<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
												<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
									<li class="warning-element ui-state-default">
										<span class="title">Ultra Bonus and Point UP!!!!!</span>
										<div class="row detail">
											<div class="col-sm-8">
												<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
											</div>
											<div class="col-sm-4 text-right">
												<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
												<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
												<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="ibox-footer">
								<div><button class="btn btn-primary">Save Changes</button></div>
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
	<!-- Modal List View -->
	<div id="view" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div>
						<label class="label label-lang">English</label>
						<h3>Sample Sample Test Bonus</h3>
						<p>asfsdfasdfasdf</p>
						<div><img src="../../assets/img/p3.jpg" class="img-responsive"></div>
					</div>
					<div class="hr-line-dashed"></div>
					<div>
						<label class="label label-lang">Chinese</label>
						<h3>样品样品测试奖金</h3>
						<p>asfsdfasdfasdf</p>
						<div><img src="../../assets/img/p3.jpg" class="img-responsive"></div>
					</div>
				</div>
				<div class="modal-footer p-sm">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Bunner Edit -->
	<div id="bunner-edit" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="form-horizontal p-xs">
						<div class="form-group"><label class="col-sm-1"><h3>English</h3></label>
							<div class="col-sm-11">
								<div class="input-group"><input class="form-control" type="text" placeholder="Enter image URL"><span class="input-group-btn"><button class="btn btn-default">Read</button></span></div>
								<div class="row p-h-sm">
									<div class="col-md-11"><img src="../../assets/img/dummy_banner.png" class="img-responsive"></div>
									<div class="col-md-1"><button class="btn btn-sm btn-white"><i class="fa fa-trash"></i></button></div>
								</div>
							</div>
						</div>
					</div>
					<hr class="hr-line-solid">
					<div class="form-horizontal p-xs">
						<div class="form-group"><label class="col-sm-1"><h3>Chinese</h3></label>
							<div class="col-sm-11">
								<div class="input-group"><input class="form-control" type="text" placeholder="Enter image URL"><span class="input-group-btn"><button class="btn btn-default">Read</button></span></div>
								<div class="row p-h-sm">
									<div class="col-md-11"><img src="../../assets/img/dummy_banner.png" class="img-responsive"></div>
									<div class="col-md-1"><button class="btn btn-sm btn-white"><i class="fa fa-trash"></i></button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer p-sm">
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
import JqueryUI from '../../assets/js/plugins/jquery-ui/jquery-ui.min.js'
// import Custum from '../../assets/js/custum.js'
export default {
    name: 'list',
	components:{
	//   Custum,
      JqueryUI
	},
    mounted: function(){
      	$("#sortable").sortable();
		$("#sortable").disableSelection();
    }
}
</script>