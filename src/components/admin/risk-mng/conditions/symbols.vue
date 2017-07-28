<template>
<div>
<div id="wrapper">
			<nav class="navbar-default navbar-static-side" role="navigation">
				<div class="sidebar-collapse">
					<ul class="nav metismenu skin-2" id="side-menu">
						<li class="nav-header">
							<div class="dropdown profile-element text-center"><span><img src="../../../assets/img/logo-w.png" class="img-responsive"></span>
								<span class="block m-t-xs text-white"> <strong class="font-bold">Risk Management</strong></span>
							</div>
							<div class="logo-element">
								GQ
							</div>
						</li>
						<li>
							<a href="../index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Home</span></a>
						</li>
						<li class="active">
							<a href="#"><i class="fa fa-sliders"></i> <span class="nav-label">Conditions</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li class="active"><a href="../conditions/symbols.html">Symbols</a></li>
								<li><a href="../conditions/intervals.html">Intervals</a></li>
								<li><a href="../conditions/payouts.html">Payouts</a></li>
								<li><a href="../conditions/amount-range.html">Trade Amount Range</a></li>
								<li><a href="../conditions/maxtotal.html">Max Total</a></li>
							</ul>
						</li>
						<li>
							<a href="../alerts/index.html"><i class="fa fa-bell"></i> <span class="nav-label">Alerts</span></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-hourglass-2"></i> <span class="nav-label">Trade Limitation</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li><a href="../limitation/default.html">Default Settings</a></li>
								<li><a href="../limitation/amount.html">Amount Limit</a></li>
								<li><a href="../limitation/symbols.html">Symbol Limit</a></li>
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
								<span class="m-r-sm text-muted welcome-message">Welcome to Risk Management</span>
							</li>
							<li class="dropdown">
								<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
									<img src="../../../assets/img/flags/16/United-Kingdom.png" alt="EN">
								</a>
								<ul class="dropdown-menu">
									<li>
										<a class="btn active"><img src="../../../assets/img/flags/16/United-Kingdom.png" alt="EN"> English</a>
									</li>
									<li>
										<a class="btn"><img src="../../../assets/img/flags/16/china.png" alt="ZH"> Chinese</a>
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
					<h2 class="pull-left">Conditions<span class="p-w-xs">></span>Symbols</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="table table-hover risk-table">
										<thead>
											<tr>
												<th data-toggle="true"></th>
												<th data-class="expand" width="85%">Tradable Symbol(Short)</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><strong>Default</strong></td>
												<td class="symbol"><label class="label label-symbol">USDJPYbo</label><label class="label label-symbol">USDCHFbo</label><label class="label label-symbol">USDCADbo</label><label class="label label-symbol">EURUSDbo</label><label class="label label-symbol">EURGBPbo</label><label class="label label-symbol">AUDJPYbo</label><label class="label label-symbol">GBPUSDbo</label><label class="label label-symbol">AUDUSDbo</label><label class="label label-symbol">NZDJPYbo</label><label class="label label-symbol">NZDUSDbo</label><label class="label label-symbol">AUDCADbo</label><label class="label label-symbol">AUDCHFbo</label><label class="label label-symbol">EURAUDbo</label><label class="label label-symbol">GBPAUDbo</label><label class="label label-symbol">EURJPYbo</label><label class="label label-symbol">JPN225bo</label><label class="label label-symbol">GER30bo</label><label class="label label-symbol">US30bo</label><label class="label label-symbol">NAS100bo</label><label class="label label-symbol">SPX500bo</label><label class="label label-symbol">FRA40bo</label><label class="label label-symbol">EUSTX50bo</label><label class="label label-symbol">UK100bo</label><label class="label label-symbol">USOilbo</label><label class="label label-symbol">WTICrude</label><label class="label label-symbol">BrentCrude</label><label class="label label-symbol">XAGUSD</label><label class="label label-symbol">XAUUSD</label></td>
												<td>
													<a href="#" class="btn btn-sm btn-default" data-cta-target=".default-edit" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- ibox End -->
						<div class="ibox float-e-margins">
							<p>Set symbols that can be traded by Client level. The set Client level takes precedence.</p>
							<div class="ibox-title"><h3>Individual Client Level</h3>
								<div class="m-t-n-xs"><a href="#" class="btn btn-sm btn-default m-l-sm" data-cta-target=".level-edit" data-disable-scroll="true"><i class="fa fa-plus fa-fw"></i>New</a></div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="table table-hover risk-table">
										<thead>
											<tr>
												<th data-toggle="true">No</th>
												<th data-class="expand">Client Level</th>
												<th data-class="expand" width="65%">Tradable Symbol(Short)</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1001</td>
												<td>Level-01</td>
												<td class="symbol"><label class="label label-symbol">USDJPYbo</label><label class="label label-symbol">USDCHFbo</label><label class="label label-symbol">USDCADbo</label><label class="label label-symbol">EURUSDbo</label><label class="label label-symbol">EURGBPbo</label><label class="label label-symbol">AUDJPYbo</label><label class="label label-symbol">GBPUSDbo</label><label class="label label-symbol">AUDUSDbo</label><label class="label label-symbol">NZDJPYbo</label><label class="label label-symbol">NZDUSDbo</label><label class="label label-symbol">AUDCADbo</label><label class="label label-symbol">AUDCHFbo</label><label class="label label-symbol">EURAUDbo</label><label class="label label-symbol">GBPAUDbo</label><label class="label label-symbol">EURJPYbo</label><label class="label label-symbol">JPN225bo</label><label class="label label-symbol">GER30bo</label><label class="label label-symbol">US30bo</label><label class="label label-symbol">NAS100bo</label><label class="label label-symbol">SPX500bo</label><label class="label label-symbol">FRA40bo</label><label class="label label-symbol">EUSTX50bo</label><label class="label label-symbol">UK100bo</label><label class="label label-symbol">USOilbo</label><label class="label label-symbol">WTICrude</label><label class="label label-symbol">BrentCrude</label><label class="label label-symbol">XAGUSD</label><label class="label label-symbol">XAUUSD</label></td>
												<td>
													<a href="#" class="btn btn-sm btn-default" data-cta-target=".level-edit" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a>
												</td>
											</tr>
											<tr>
												<td>1002</td>
												<td>Level-02TEST</td>
												<td class="symbol"><label class="label label-symbol">USDJPYbo</label><label class="label label-symbol">USDCHFbo</label><label class="label label-symbol">USDCADbo</label><label class="label label-symbol">EURUSDbo</label><label class="label label-symbol">EURGBPbo</label><label class="label label-symbol">AUDJPYbo</label><label class="label label-symbol">GBPUSDbo</label><label class="label label-symbol">AUDUSDbo</label><label class="label label-symbol">NZDJPYbo</label><label class="label label-symbol">NZDUSDbo</label><label class="label label-symbol">AUDCADbo</label><label class="label label-symbol">AUDCHFbo</label><label class="label label-symbol">EURAUDbo</label><label class="label label-symbol">GBPAUDbo</label><label class="label label-symbol">EURJPYbo</label><label class="label label-symbol">JPN225bo</label><label class="label label-symbol">GER30bo</label><label class="label label-symbol">US30bo</label><label class="label label-symbol">NAS100bo</label><label class="label label-symbol">SPX500bo</label><label class="label label-symbol">FRA40bo</label><label class="label label-symbol">EUSTX50bo</label><label class="label label-symbol">UK100bo</label><label class="label label-symbol">USOilbo</label><label class="label label-symbol">WTICrude</label><label class="label label-symbol">BrentCrude</label><label class="label label-symbol">XAGUSD</label><label class="label label-symbol">XAUUSD</label></td>
												<td>
													<a href="#" class="btn btn-sm btn-default" data-cta-target=".level-edit" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a>
												</td>
											</tr>
											<tr>
												<td>1003</td>
												<td>sampletestLevel</td>
												<td class="symbol"><label class="label label-symbol">USDJPYbo</label><label class="label label-symbol">USDCHFbo</label><label class="label label-symbol">USDCADbo</label><label class="label label-symbol">EURUSDbo</label><label class="label label-symbol">EURGBPbo</label><label class="label label-symbol">AUDJPYbo</label><label class="label label-symbol">GBPUSDbo</label><label class="label label-symbol">AUDUSDbo</label><label class="label label-symbol">NZDJPYbo</label><label class="label label-symbol">NZDUSDbo</label><label class="label label-symbol">AUDCADbo</label><label class="label label-symbol">AUDCHFbo</label><label class="label label-symbol">EURAUDbo</label><label class="label label-symbol">GBPAUDbo</label><label class="label label-symbol">EURJPYbo</label><label class="label label-symbol">JPN225bo</label><label class="label label-symbol">GER30bo</label><label class="label label-symbol">US30bo</label><label class="label label-symbol">NAS100bo</label><label class="label label-symbol">SPX500bo</label><label class="label label-symbol">FRA40bo</label><label class="label label-symbol">EUSTX50bo</label><label class="label label-symbol">UK100bo</label><label class="label label-symbol">USOilbo</label><label class="label label-symbol">WTICrude</label><label class="label label-symbol">BrentCrude</label><label class="label label-symbol">XAGUSD</label><label class="label label-symbol">XAUUSD</label></td>
												<td>
													<a href="#" class="btn btn-sm btn-default" data-cta-target=".level-edit" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a>
												</td>
											</tr>
										</tbody>
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
		
		<!-- Modal default-edit -->
		<div class="modal modal-2 default-edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Symbol Settings</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-2 text-right">Default</label>
									<div class="col-sm-10"></div>
								</div>
								<div class="form-group"><label class="col-sm-2 text-right">Symbol</label>
									<div class="col-sm-10">
										<div class="form-group p-w-sm m-b-none">
											<select class="selectpicker form-control" data-width="100%" data-size="15" multiple data-actions-box="true">
												<option>USDJPYbo</option>
												<option>USDCHFbo</option>
												<option>USDCADbo</option>
												<option>EURUSDbo</option>
												<option>AUDJPYbo</option>
												<option>GBPUSDbo</option>
												<option>AUDUSDbo</option>
												<option>NZDJPYbo</option>
												<option>NZDUSDbo</option>
												<option>AUDCADbo</option>
												<option>EURAUDbo</option>
												<option>GBPAUDbo</option>
												<option>EURJPYbo</option>
												<option>JPN225bo</option>
												<option>GER30bo</option>
												<option>US30bo</option>
												<option>NAS100bo</option>
												<option>SPX500bo</option>
												<option>FRA40bo</option>
												<option>EUSTX50bo</option>
												<option>UK100bo</option>
												<option>USOilbo</option>
												<option>WTICrudebo</option>
												<option>BrentCrudebo</option>
												<option>XAGUSDbo</option>
												<option>XAUUSDbo</option>
											</select>
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
		
		<!-- Modal level-edit -->
		<div class="modal modal-2 level-edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Symbol Settings</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-2 text-right">Client Level</label>
									<div class="col-sm-10">
										<div class="form-group p-w-sm m-b-none">
											<select class="form-control">
												<option>Select</option>
												<option>Level-01</option>
												<option>Level-02TEST</option>
												<option>sampletestLevel</option>
												<option>Level-XX</option>
											</select>
										</div>
									</div>
								</div>
								<div class="form-group"><label class="col-sm-2 text-right">Symbol</label>
									<div class="col-sm-10">
										<div class="form-group p-w-sm m-b-none">
											<select class="selectpicker form-control" data-width="100%" data-size="15" multiple data-actions-box="true">
												<option>USDJPYbo</option>
												<option>USDCHFbo</option>
												<option>USDCADbo</option>
												<option>EURUSDbo</option>
												<option>AUDJPYbo</option>
												<option>GBPUSDbo</option>
												<option>AUDUSDbo</option>
												<option>NZDJPYbo</option>
												<option>NZDUSDbo</option>
												<option>AUDCADbo</option>
												<option>EURAUDbo</option>
												<option>GBPAUDbo</option>
												<option>EURJPYbo</option>
												<option>JPN225bo</option>
												<option>GER30bo</option>
												<option>US30bo</option>
												<option>NAS100bo</option>
												<option>SPX500bo</option>
												<option>FRA40bo</option>
												<option>EUSTX50bo</option>
												<option>UK100bo</option>
												<option>USOilbo</option>
												<option>WTICrudebo</option>
												<option>BrentCrudebo</option>
												<option>XAGUSDbo</option>
												<option>XAUUSDbo</option>
											</select>
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
</div>

</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/select/bootstrap-select.css'


// import Bootstrapselect from '../../../assets/js/plugins/select/bootstrap-select.min.js'
import  Cta from '../../../assets/js/plugins/cta/cta.min.js'
import  Footable from '../../../assets/js/plugins/footable/footable.all.min.js'

export default {
    name: 'symbols',
    components: {
    //    Bootstrapselect,
       Cta,
       Footable
    },
    mounted: function(){
     
    }
}
</script>