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
								<li><a href="../limitation/amount.html">Amount Limit</a></li>
								<li class="active"><a href="../limitation/symbols.html">Symbol Limit</a></li>
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
					<h2 class="pull-left m-r-sm">Trade Limitation<span class="p-w-xs">></span>Symbols Limit</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<p>Specified client can not trade the specified symbol.<br>
					<span class="text-orange">Multiple client ID setting</span>: line feed or comma</p>
				<div class="row">
					<div class="col-lg-6">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<table class="table limit-client">
									<thead>
										<tr>
											<th width="40%">Symbol</th>
											<th width="50%">Client ID</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<a class="editable editable-click" id="symbol1" style="display: inline;" href="#" data-type="select"><span class="unit">AUDUSDbo</span></a>
											</td>
											<td>
												<a class="editable editable-click" id="client1" style="display: inline;" href="#" data-type="textarea"><span class="unit">22668877</span></a>
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
												<td width="40%">
													<a class="editable editable-click" id="symbol-add" style="display: inline;" href="#" data-type="select"><span class="unit">Empty</span></a>
												</td>
												<td width="50%">
													<a class="editable editable-click" id="client-add" style="display: inline;" href="#" data-type="textarea"><span class="unit">Empty</span></a>
												</td>
												<td width="10%"></td>
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
import '../../../assets/css/plugins/select/bootstrap-select.css'

// import Bootstrapselect from '../../../assets/js/plugins/select/bootstrap-select.min.js'
import Editable from '../../../assets/js/plugins/editable/editable.js'
export default {
    name: 'limitation-symbols',
    components: {
    //    Bootstrapselect,
       Editable
    },
    mounted: function(){
          	$.fn.editable.defaults.mode = 'inline';
			$('#client1').editable({
				url: '/post',
				title: 'Enter comments',
				rows: 20
			});
			$('#client-add').editable({
				url: '/post',
				title: 'Enter comments',
				rows: 20
			});
			$('#symbol1').editable({
				value: [], 
				source: [
					{value: 1, text: 'AUDUSDbo'},
					{value: 2, text: 'EURUSDbo'},
					{value: 3, text: 'GBPUSDbo'},
					{value: 4, text: 'USDCADbo'},
					{value: 5, text: 'EURGBPbo'},
					{value: 6, text: 'AUDUSDbo'},
					{value: 7, text: 'EURJPYbo'},
					{value: 8, text: 'GBPJPYbo'},
					{value: 9, text: 'AUDJPYbo'},
					{value: 10, text: 'NZDJPYbo'},
					{value: 11, text: 'XAGUSDbo'},
					{value: 12, text: 'XAUUSDbo'},
					{value: 12, text: 'WTICrudebo'},
					{value: 13, text: 'BrentCrudebo'}
				]
			});
			$('#symbol-add').editable({
				value: [], 
				source: [
					{value: 1, text: 'AUDUSDbo'},
					{value: 2, text: 'EURUSDbo'},
					{value: 3, text: 'GBPUSDbo'},
					{value: 4, text: 'USDCADbo'},
					{value: 5, text: 'EURGBPbo'},
					{value: 6, text: 'AUDUSDbo'},
					{value: 7, text: 'EURJPYbo'},
					{value: 8, text: 'GBPJPYbo'},
					{value: 9, text: 'AUDJPYbo'},
					{value: 10, text: 'NZDJPYbo'},
					{value: 11, text: 'XAGUSDbo'},
					{value: 12, text: 'XAUUSDbo'},
					{value: 12, text: 'WTICrudebo'},
					{value: 13, text: 'BrentCrudebo'}
				]
			});
    }
}
</script>