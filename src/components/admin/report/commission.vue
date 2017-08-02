<template>
<div>		
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Commission</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="tabs-container">
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#daily" data-toggle="tab" aria-controls="daily">Daily</a>
						</li>
						<li role="presentation">
							<a href="#monthly" data-toggle="tab" aria-controls="monthly">Monthly</a>
						</li>
					</ul>

					<div class="tab-content">
						<div class="tab-pane active" id="daily">
							<div class="panel-body m-b-md">
								<div class="row">
									<div class="col-md-3">
										<label>Date</label>
										<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
									</div>
									<div class="col-md-2">
										<label>MT5 Account</label>
										<div class="form-group"><input class="form-control" type="text"></div>
									</div>
									<div class="col-md-2">
										<label>Client ID</label>
										<div class="form-group"><input class="form-control" type="text"></div>
									</div>
									<div class="col-md-2">
										<label>Rank</label>
										<div class="form-group">
											<select class="form-control">
												<option selected>Nothing Selected</option>
												<option>IB</option>
												<option>MIB</option>
												<option>PIB</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-inline m-t-mdl">
											<button class="btn btn-primary">Search</button>
											<div class="input-group input-sm pull-right">
												<span class="input-group-addon no-borders">Show</span>
												<select class="form-control">
													<option>10</option>
													<option selected>25</option>
													<option>50</option>
													<option>100</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="ibox">	
								<div class="ibox-title">
									<h5>Total: <span class="agg">Amount</span>350.45</h5>
									<div class="ibox-tools">
										<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
										<a class="collapse-link">
											<i class="fa fa-chevron-up"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content">
									<div class="table-responsive">
										<table class="table table-hover footable toggle-arrow-tiny report-co-table">
											<thead>
												<tr>
													<th data-toggle="true">MT5 Account</th>
													<th data-class="expand">Client ID</th>
													<th data-hide="phone">Name</th>
													<th data-class="expand">Rank</th>
													<th data-class="expand">Paid Time</th>
													<th data-class="expand">Profit</th>
													<th data-class="expand">Comment</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>55110033</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>IB</td>
													<td>2017-03-05 00:05:10</td>
													<td>150.50</td>
													<td>BO1.0%</td>
												</tr>
												<tr>
													<td>55110099</td>
													<td>22448899</td>
													<td>Micheal Jackson</td>
													<td>MIB</td>
													<td>2017-03-05 00:05:10</td>
													<td>1,800.75</td>
													<td>BO1.5%</td>
												<tr>
													<td>55119933</td>
													<td>22990011</td>
													<td>Patrick Smith</td>
													<td>PIB</td>
													<td>2017-03-05 00:05:10</td>
													<td>2,000.60</td>
													<td>BO2.0%</td>
												</tr>
												<tr>
													<td>55660033</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>IB</td>
													<td>2017-03-05 00:05:10</td>
													<td>10.50</td>
													<td>BO1.0%</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="3">Showing 1 to 25 of 57 entries</td>
													<td colspan="4">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
							<!-- ibox End -->
						</div>
						<!-- tab-pane End -->
						<div class="tab-pane" id="monthly">
							<div class="panel-body m-b-md">
								<div class="row">
									<div class="col-md-3">
										<label>Month</label>
										<div class="form-group">
											<div class="input-group"><input class="form-control datepicker2" type="text" data-provide="datepicker"><span class="input-group-addon">To</span><input class="form-control datepicker2" type="text"  data-provide="datepicker"></div>
										</div>
									</div>
									<div class="col-md-2">
										<label>Client ID</label>
										<div class="form-group"><input class="form-control" type="text"></div>
									</div>
									<div class="col-md-3">
										<label>Rank</label>
										<div class="form-group">
											<select class="form-control">
												<option selected>Nothing Selected</option>
												<option>Trader</option>
												<option>IB</option>
												<option>MIB</option>
												<option>PIB</option>
											</select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-inline m-t-mdl">
											<button class="btn btn-primary">Search</button>
											<div class="input-group input-sm pull-right">
												<span class="input-group-addon no-borders">Show</span>
												<select class="form-control">
													<option>10</option>
													<option selected>25</option>
													<option>50</option>
													<option>100</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="ibox">	
								<div class="ibox-title">
									<h5>Total: <span class="agg">Amount</span>7,650.00</h5>
									<div class="ibox-tools">
										<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
										<a class="collapse-link">
											<i class="fa fa-chevron-up"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content">
									<div class="table-responsive">
										<table class="table table-hover footable toggle-arrow-tiny report-co-table">
											<thead>
												<tr>
													<th data-toggle="true">Paid Month</th>
													<th data-class="expand">Client ID</th>
													<th data-class="expand">Name</th>
													<th data-class="expand">Rank</th>
													<th data-class="expand">Profit</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>2017-03</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>IB</td>
													<td>150.50</td>
												</tr>
												<tr>
													<td>2017-03</td>
													<td>22448899</td>
													<td>Micheal Jackson</td>
													<td>MIB</td>
													<td>1,800.75</td>
												</tr>
												<tr>
													<td>2017-03</td>
													<td>22990011</td>
													<td>Patrick Smith</td>
													<td>PIB</td>
													<td >2,000.60</td>
												</tr>
												<tr>
													<td>2017-03</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>IB</td>
													<td>10.50</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2">Showing 1 to 25 of 57 entries</td>
													<td colspan="4">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
							<!-- ibox End -->
						</div>
						<!-- tab-pane End -->
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

	<!-- Modal Detail -->
	<div id="detail" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-bar-chart-o modal-icon"></i><h3 class="modal-title">D/W Detail</h3></div>
				<div class="modal-body">
					<table class="table">
						<tbody>
							<tr>
								<th width="30%"> ID</th>
								<td>100001234</td>
							</tr>
							<tr>
								<th>Client ID</th>
								<td></td>
							</tr>
							<tr>
								<th>Name</th>
								<td></td>
							</tr>
							<tr>
								<th>D/W</th>
								<td></td>
							</tr>
							<tr>
								<th>Method</th>
								<td></td>
							</tr>
							<tr>
								<th>Deposit Amount</th>
								<td></td>
							</tr>
							<tr>
								<th>Withdrawal Amount</th>
								<td></td>
							</tr>
							<tr>
								<th>Balance</th>
								<td></td>
							</tr>
							<tr>
								<th>Date</th>
								<td>02/15 2017 16:10</td>
							</tr>
							<tr>
								<th>Note</th>
								<td>Test Test</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../../assets/css/plugins/datapicker/datepicker3.css'

import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'commission',
    components: {
      Datepicker,
      Footable
    },
    mounted: function(){
       $('.footable').footable({
				breakpoints: {
					phone: 640,
					tablet: 1024
				}
		});
        // $(function() {
		// 	$('input[name="daterange"]').daterangepicker({
		// 		timePicker: false,
		// 	});
		// });

		$('.datepicker1').datepicker({
			format: 'yyyy-mm-dd',
			startDate: '-3d'
		});
		
		$('.datepicker2').datepicker({
			format: 'yyyy-mm',
			minViewMode : 1
		});
    }
}
</script>