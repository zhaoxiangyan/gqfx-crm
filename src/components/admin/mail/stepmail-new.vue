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
							<li class="active"><a href="../campaign/bonus.html">Bonus</a></li>
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
					<li class="active">
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
					<h2 class="pull-left m-r-sm">New Step Mail</h2>
					<div class="heading-tools"><button class="btn btn-sm"><i class="fa fa-chevron-left fa-fw"></i>Back</button></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-10">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<h5>Condition Setting</h5>
								<div class="ibox-tools">
									<a class="collapse-link">
										<i class="fa fa-chevron-up"></i>
									</a>
								</div>
							</div>
							<div class="ibox-content">
								<div class="panel-group" id="accordion">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h5 class="panel-title">
												<a aria-expanded="true" href="#collapse1" data-toggle="collapse" data-parent="#accordion">#1 Date Time</a>
											</h5>
										</div>
										<div class="panel-collapse collapse in" id="collapse1" aria-expanded="true">
											<div class="panel-body">
												<div class="m-b-sm">
													<div class="radio radio-default radio-inline">
														<input id="inlineRadio1" type="radio"><label for="inlineRadio1">Every Month Send to any day</label>
													</div>
													<div class="form-inline p-w-md m-xs">
														<div class="input-group">
															<input class="form-control" type="text" placeholder="dd"><span class="input-group-addon">Day</span>
															<select class="form-control">
																<option>00</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
																<option>05</option>
																<option>06</option>
																<option>07</option>
																<option>08</option>
																<option>09</option>
																<option>10</option>
																<option>11</option>
																<option>12</option>
																<option>13</option>
																<option>14</option>
																<option>15</option>
																<option>16</option>
																<option>17</option>
																<option>18</option>
																<option>19</option>
																<option>20</option>
																<option>21</option>
																<option>22</option>
																<option>23</option>
															</select>
															<span class="input-group-addon">：</span>
															<select class="form-control">
																<option>00</option>
																<option>05</option>
																<option>10</option>
																<option>15</option>
																<option>20</option>
																<option>25</option>
																<option>30</option>
																<option>35</option>
																<option>40</option>
																<option>45</option>
																<option>50</option>
																<option>55</option>
															</select>
														</div>
													</div>
												</div>
												<div class="m-b-sm">
													<div class="radio radio-default radio-inline">
														<input id="inlineRadio2" type="radio"><label for="inlineRadio2">Send to Birthday clients</label>
													</div>
													<div class="form-inline p-w-md m-xs">
														<div class="input-group">
															<select class="form-control">
																<option>00</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
																<option>05</option>
																<option>06</option>
																<option>07</option>
																<option>08</option>
																<option>09</option>
																<option>10</option>
																<option>11</option>
																<option>12</option>
																<option>13</option>
																<option>14</option>
																<option>15</option>
																<option>16</option>
																<option>17</option>
																<option>18</option>
																<option>19</option>
																<option>20</option>
																<option>21</option>
																<option>22</option>
																<option>23</option>
															</select>
															<span class="input-group-addon">：</span>
															<select class="form-control">
																<option>00</option>
																<option>05</option>
																<option>10</option>
																<option>15</option>
																<option>20</option>
																<option>25</option>
																<option>30</option>
																<option>35</option>
																<option>40</option>
																<option>45</option>
																<option>50</option>
																<option>55</option>
															</select>
														</div>
													</div>
												</div>
												<div>
													<div class="radio radio-default radio-inline">
														<input id="inlineRadio3" type="radio"><label for="inlineRadio3">No Date time</label>
													</div>
												</div>
											</div>
											<!-- panel-body End -->
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a class="collapsed" aria-expanded="false" href="#collapse2" data-toggle="collapse" data-parent="#accordion">#2 Attribute</a>
											</h4>
										</div>
										<div class="panel-collapse collapse" id="collapse2" aria-expanded="false" style="height: 0px;">
											<div class="panel-body">
												<div class="form-horizontal">
													<div class="form-group"><label class="col-sm-2 control-label">Client Level</label>
														<div class="col-sm-6">
															<div class="m-b-none input-group">
																<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
																	<option>Level-01</option>
																	<option>Level-02</option>
																	<option>Sample XXX</option>
																	<option>Level-TEST</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<div class="form-horizontal">
													<div class="form-group"><label class="col-sm-2 control-label">Rank</label>
														<div class="col-sm-6">
															<div class="m-b-none input-group">
																<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
																	<option>Trader</option>
																	<option>IB</option>
																	<option>MIB</option>
																	<option>PIB</option>
																</select>
															</div>
														</div>
													</div>
												</div>
												<small><i class="fa fa-pencil fa-fw"></i>Multiple selection possible</small>
											</div>
											<!-- panel-body End -->
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a class="collapsed" aria-expanded="false" href="#collapse3" data-toggle="collapse" data-parent="#accordion">#3 Transaction</a>
											</h4>
										</div>
										<div class="panel-collapse collapse" id="collapse3" aria-expanded="false">
											<div class="panel-body">
												<div class="form-horizontal">
													<div class="form-group"><label class="col-sm-2 control-label">Transaction Volume</label>
														<div class="col-sm-8 col-xs-10">
															<div class="form-inline">
																<select class="form-control">
																	<option>Select</option>
																	<option>Over</option>
																	<option>Under</option>
																</select>
																<div class="input-group">
																	<span class="input-group-addon">$</span><input class="form-control" type="number"><span class="input-group-addon">.00</span>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="form-horizontal m-b-md">
													<div class="form-group"><label class="col-sm-2 col-xs-2 control-label">Blance</label>
														<div class="col-sm-8 col-xs-10">
															<div class="form-inline">
																<select class="form-control">
																	<option>Select</option>
																	<option>Over</option>
																	<option>Under</option>
																</select>
																<div class="input-group">
																	<span class="input-group-addon">$</span><input class="form-control" type="number"><span class="input-group-addon">.00</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!-- panel-body End -->
										</div>
									</div>
								</div>
								
								<div class="form-horizontal">
									<div class="form-group">
										<label class="col-sm-1 control-label">Template</label>
										<div class="col-sm-6">
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
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-10">
						<div class="ibox float-e-margins">
							<div class="ibox-content">					
								<div class="form-horizontal">
									<h3>English</h3>
									<div class="form-group"><label class="col-sm-1 control-label">Subject</label>
										<div class="col-sm-11"><input class="form-control" type="text"></div>
									</div>
									<div class="form-group"><label class="col-sm-1 control-label">Text</label>
										<div class="col-sm-11"><div class="summernote1"></div></div>
									</div>
									<div class="form-group"><label class="col-sm-1 control-label"></label>
										<div class="col-sm-11">
											<button data-toggle="collapse" href="#code1" aria-expanded="false" aria-controls="code" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>Code</button>
											<div class="collapse" id="code1">
												<dl class="col-md-3 p-sm">
													<dt>ClientID</dt>
													<dd><span id="clientid">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#clientid"><i class="fa fa-copy"></i></button></dd>
													<dt>Name</dt>
													<dd><span id="name">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#name"><i class="fa fa-copy"></i></button></dd>
													<dt>E-mail</dt>
													<dd><span id="email">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#email"><i class="fa fa-copy"></i></button></dd>
													<dt>Cleint Level</dt>
													<dd><span id="clevel">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#clevel"><i class="fa fa-copy"></i></button></dd>
													<dt>Rank</dt>
													<dd><span id="rank">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#rank"><i class="fa fa-copy"></i></button></dd>
													<dt>Balance</dt>
													<dd><span id="balance">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#balance"><i class="fa fa-copy"></i></button></dd>
													<dt>Point</dt>
													<dd><span id="point">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#point"><i class="fa fa-copy"></i></button></dd>
												</dl>
											</div>
										</div>
									</div>
								</div>
								<hr class="hr-line-solid">
								<div class="form-horizontal">
									<h3>Chinese</h3>
									<div class="form-group"><label class="col-sm-1 control-label">Subject</label>
										<div class="col-sm-11"><input class="form-control" type="text"></div>
									</div>
									<div class="form-group"><label class="col-sm-1 control-label">Text</label>
										<div class="col-sm-11"><div class="summernote2"></div></div>
									</div>
									<div class="form-group"><label class="col-sm-1 control-label"></label>
										<div class="col-sm-11">
											<button data-toggle="collapse" href="#code2" aria-expanded="false" aria-controls="code" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>Code</button>
											<div class="collapse" id="code2">
												<dl class="col-md-3 p-sm">
													<dt>ClientID</dt>
													<dd><span id="clientid">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#clientid"><i class="fa fa-copy"></i></button></dd>
													<dt>Name</dt>
													<dd><span id="name">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#name"><i class="fa fa-copy"></i></button></dd>
													<dt>E-mail</dt>
													<dd><span id="email">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#email"><i class="fa fa-copy"></i></button></dd>
													<dt>Cleint Level</dt>
													<dd><span id="clevel">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#clevel"><i class="fa fa-copy"></i></button></dd>
													<dt>Rank</dt>
													<dd><span id="rank">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#rank"><i class="fa fa-copy"></i></button></dd>
													<dt>Balance</dt>
													<dd><span id="balance">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#balance"><i class="fa fa-copy"></i></button></dd>
													<dt>Point</dt>
													<dd><span id="point">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right" data-clipboard-target="#point"><i class="fa fa-copy"></i></button></dd>
												</dl>
											</div>
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
			
			<div class="footer">
				<div>
					<strong>Copyright</strong> GQ capital &copy; 2017
				</div>
			</div>
		</div>
	</div>


</template>
<script>
import '../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../assets/css/plugins/datapicker/datepicker3.css'
import '../../assets/css/plugins/summernote/summernote.css'
import '../../assets/css/plugins/summernote/codemirror.min.css'
import '../../assets/css/plugins/summernote/monokai.min.css'
import '../../assets/css/plugins/select/bootstrap-select.css'
import '../../assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'


import  Datepicker from '../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import  Xml from '../../assets/js/plugins/summernote/xml.min.js'
import  Formatting from '../../assets/js/plugins/summernote/formatting.min.js'
import  Clipboards from '../../assets/js/plugins/clipboard/clipboard.min.js'

export default {
    name: 'stepmail-new',
	components:{
        Datepicker,
        Xml,
        Formatting,
        Clipboards
	},
    mounted: function(){
        $('.summernote1').summernote({
			height: 150,   //set editable area's height
			codemirror: { // codemirror options
			}
		});
		$('.summernote2').summernote({
			height: 150,   //set editable area's height
			codemirror: { // codemirror options
			}
		});
        new Clipboard('.btn');
    }
}
</script>