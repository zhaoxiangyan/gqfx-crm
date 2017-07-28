<template>
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
						<li>
							<a href="#"><i class="fa fa-sliders"></i> <span class="nav-label">Conditions</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li><a href="../conditions/symbols.html">Symbols</a></li>
								<li><a href="../conditions/intervals.html">Intervals</a></li>
								<li><a href="../conditions/payouts.html">Payouts</a></li>
								<li><a href="../conditions/amount-range.html">Trade Amount Range</a></li>
								<li><a href="../conditions/maxtotal.html">Max Total</a></li>
							</ul>
						</li>
						<li>
							<a href="../alerts/index.html"><i class="fa fa-bell"></i> <span class="nav-label">Alerts</span></a>
						</li>
						<li class="active">
							<a href="#"><i class="fa fa-hourglass-2"></i> <span class="nav-label">Trade Limitation</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li class="active"><a href="../limitation/default.html">Default Settings</a></li>
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
					<h2 class="pull-left">Trade Limitation<span class="p-w-xs">></span>Default Settings</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<p>When limitation setting is executed, it notifies the trade monitor. It displays until the limit is canceled.<br>
					<span class="text-orange">Trading Amount Limit by Symbol:</span> When set for each symbol, that symbol takes precedence over the oveall setting.</p>
				<div class="row">
					<div class="col-lg-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title"><h5>Overall Setting</h5></div>
							<div class="ibox-content">		
								<div class="table-responsive">
									<table class="table limit-default">
										<thead>
											<tr>
												<th width="40%">Item</th>
												<th>Limitation Content</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Trading Halt</td>
												<td>
													<a class="editable editable-click" id="halt" style="display: inline;" href="#" data-type="text"><span class="unit">24</span></a><small class="m-l-md">Hour</small>
												</td>
											</tr>
											<tr>
												<td>Trading Amount Limit</td>
												<td>
													<a class="editable editable-click" id="amount" style="display: inline;" href="#" data-type="text"><span class="unit">10,000</span></a><small class="m-l-md">USD</small>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="ibox-footer">
								<button class="btn btn-primary">Save Changes</button>
							</div>
						</div>
						<!-- ibox End -->
					</div>
				</div>
				<div class="row">	
					<div class="col-lg-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title"><h5>Trading Amount Limit by Symbol</h5></div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="table limit-max">
										<thead>
											<tr>
												<th width="40%">Symbol</th>
												<th>Maximum(USD)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>AUDUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>EURUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>GBPUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>USDCAD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>EURGBP</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>AUDUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>EURJPY</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>GBPJPY</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>AUDJPY</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>NZDJPY</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>XAGUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>XAUUSD</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>WTICrude</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
											<tr>
												<td>BrentCrude</td>
												<td>
													<a class="editable editable-click" id="max1" style="display: inline;" href="#" data-type="text"><span class="unit">Empty</span></a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="ibox-footer">
								<button class="btn btn-primary">Save Changes</button>
							</div>
						</div>
						<!-- ibox End -->
					</div>
				</div>
				<div>
					<button class="btn btn-primary">Save Changes</button>
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
import '../../../assets/css/plugins/editable/editable.css'

import Editable from '../../../assets/js/plugins/editable/editable.js'
export default {
    name: 'default',
    components: {
       Editable
    },
    mounted: function(){
          $.fn.editable.defaults.mode = 'inline';
			$(document).ready(function() {
				$('#halt').editable();
			});
			$(document).ready(function() {
				$('#amount').editable();
			});
			
			$(document).ready(function() {
				$('#max1').editable();
			});
			$(document).ready(function() {
				$('#max2').editable();
			});
    }
}
</script>