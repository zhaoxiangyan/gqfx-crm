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
								<li><a href="../limitation/default.html">Default Settings</a></li>
								<li class="active"><a href="../limitation/amount.html">Amount Limit</a></li>
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
					<h2 class="pull-left m-r-sm">Trade Limitation<span class="p-w-xs">></span>Trade Amount Limit</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<p>Specified client can not trade beyond the specified amount.<br>
					<span class="text-orange">Multiple client ID setting</span>: line feed or comma</p>
				<div class="row">
					<div class="col-lg-6">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<table class="table limit-client">
									<thead>
										<tr>
											<th width="40%">Amount(USD)</th>
											<th width="50%">Client ID</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<a class="editable editable-click" id="amount1" style="display: inline;" href="#" data-type="text"><span class="unit">1,000,000</span></a>
											</td>
											<td>
												<a class="editable editable-click" id="client1" style="display: inline;" href="#" data-type="textarea"><span class="unit">22445577</span></a>
											</td>
											<td><button class="btn btn-sm btn-default"><i class="fa fa-trash"></i></button></td>
										</tr>
										<tr>
											<td>
												<a class="editable editable-click" id="amount2" style="display: inline;" href="#" data-type="text"><span class="unit">500,000</span></a>
											</td>
											<td>
												<a class="editable editable-click" id="client2" style="display: inline;" href="#" data-type="textarea"><span class="unit">22005599</span></a>
											</td>
											<td><button class="btn btn-sm btn-default"><i class="fa fa-trash"></i></button></td>
										</tr>
									</tbody>
								</table>
								<div>
									<button data-toggle="collapse" href="#add" aria-expanded="false" aria-controls="amount" class="btn btn-xs btn-default"><i class="fa fa-plus"></i> Add Limit</button>
								</div>
								<div class="collapse limit-client" id="add">
									<table class="table">
										<tbody>
											<tr>
												<td width="40%"><input class="form-control"></td>
												<td width="50%">
													<a class="editable editable-click" id="client-add" style="display: inline;" href="#" data-type="textarea"><span class="unit">Empty</span></a>
												</td>
												<td><button class="btn btn-sm btn-default text-info"><i class="fa fa-check"></i></button></td>
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


</template>
<script>
import '../../../assets/css/plugins/editable/editable.css'


import Editable from '../../../assets/js/plugins/editable/editable.js'
export default {
    name: 'amount',
    components: {
       Editable
    },
    mounted: function(){
          $.fn.editable.defaults.mode = 'inline';
			$(document).ready(function() {
				$('#amount1').editable();
			});
			$(document).ready(function() {
				$('#amount2').editable();
			});
			$('#client1').editable({
				url: '/post',
				title: 'Enter comments',
				rows: 20
			});
			$('#client2').editable({
				url: '/post',
				title: 'Enter comments',
				rows: 20
			});
			$('#client-add').editable({
				url: '/post',
				title: 'Enter comments',
				rows: 20
			});
    }
}
</script>