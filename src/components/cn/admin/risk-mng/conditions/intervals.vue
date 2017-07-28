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
						<li class="active">
							<a href="#"><i class="fa fa-sliders"></i> <span class="nav-label">Conditions</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li><a href="../conditions/symbols.html">Symbols</a></li>
								<li class="active"><a href="../conditions/intervals.html">Intervals</a></li>
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
					<h2 class="pull-left">Condistions<span class="p-w-xs">></span>Intervals</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<p class="p-w-md">Interval Time from Start to Maturity. The set Symbol Separately takes precedence.</p>
					<div class="col-lg-4">
						<div class="ibox float-e-margins">
							<div class="ibox-title"><h3>Short</h3></div>
							<div class="ibox-content">
								<div class="table-responsive">
								  <table class="table intervals">
										<thead>
											<tr>
												<th>Term</th>
												<th>Interval</th>
											</tr>
										</thead>
									  <tbody>
										  <tr>
												<td>Term1</td>
											  <td>
													<a class="editable editable-click" id="term1" style="display: inline;" href="#" data-type="text"><span class="term-min">1</span></a><small class="m-l-md">min</small>
												</td>
											</tr>
											<tr>
												<td>Term2</td>
												<td>
													<a class="editable editable-click" id="term2" style="display: inline;" href="#" data-type="text"><span class="term-min">5</span></a><small class="m-l-md">min</small>
												</td>
											</tr>
											<tr>
												<td>Term3</td>
												<td>
													<a class="editable editable-click" id="term3" style="display: inline;" href="#" data-type="text"><span class="term-min">15</span></a><small class="m-l-md">min</small>
												</td>
											</tr>
											<tr>
												<td>Term4</td>
												<td>
													<a class="editable editable-click" id="term4" style="display: inline;" href="#" data-type="text"><span class="term-min">30</span></a><small class="m-l-md">min</small>
												</td>
											</tr>
											<tr>
												<td>Term5</td>
												<td>
													<a class="editable editable-click" id="term5" style="display: inline;" href="#" data-type="text"><span class="term-min">60</span></a><small class="m-l-md">min</small>
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
    name: 'intervals',
    components: {
       Editable
    },
    mounted: function(){
       $.fn.editable.defaults.mode = 'inline';
			$(document).ready(function() {
				$('#term1').editable();
			});
			$(document).ready(function() {
				$('#term2').editable();
			});
			$(document).ready(function() {
				$('#term3').editable();
			});
			$(document).ready(function() {
				$('#term4').editable();
			});
			$(document).ready(function() {
				$('#term5').editable();
			});
			$(document).ready(function() {
				$('#term-lv-1').editable();
			});
    }
}
</script>