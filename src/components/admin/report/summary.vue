<template>
<div>			
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Overall Summary</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="row">
							<div class="col-md-3">
								<label>Date</label>
								<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
							</div>
							<div class="col-md-2">
								<label>MT5 Account</label>
								<div class="form-group"><input class="form-control"></div>
							</div>
							<div class="col-md-2">
								<label>Client ID</label>
								<div class="form-group"><input class="form-control"></div>
							</div>
							<div class="col-md-2">
								<label>Account Group</label>
								<div class="form-group">
									<select class="form-control">
										<option>Notihig Selected</option>
										<option>Default</option>
										<option>XXXXX</option>
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
				</div>
				<!-- ibox End -->
			</div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<div class="ibox-tools">
							<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="table-responsive">
							<table class="table table-hover footable toggle-arrow-tiny report-os-table">
								<thead>
									<tr>
										<th data-toggle="true">MT5 Account</th>
										<th data-class="expand">Client ID</th>
										<th data-hide="phone">Name</th>
										<th data-hide="phone,tablet">Ac.Grou</th>
										<th data-hide="phone,tablet">Client Level</th>
										<th data-hide="phone,tablet">Rank</th>
										<th data-hide="phone,tablet">Agent ID</th>
										<th data-hide="phone,tablet">Equity</th>
										<th data-class="expand">Volume</th>
										<th data-class="expand">Commission</th>
										<th data-class="expand">Net Deposit</th>
										<th data-class="expand">Profit</th>
										<th data-hide="phone">Last Balance</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>55446655</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Default</td>
										<td>Level-01</td>
										<td>IB</td>
										<td>22447711</td>
										<td>5,000.00</td>
										<td>1,456.80</td>
										<td>157.25</td>
										<td>-200.00</td>
										<td>577.65</td>
										<td>4,405.50</td>
									</tr>
									<tr>
										<td>55446655</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Default</td>
										<td>Level-01</td>
										<td>IB</td>
										<td>22447711</td>
										<td>5,000.00</td>
										<td>1,456.80</td>
										<td>157.25</td>
										<td>-200.00</td>
										<td>577.65</td>
										<td>4,405.50</td>
									</tr>
									<tr>
										<td>55441199</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>FX-XX</td>
										<td>Level-01</td>
										<td>Trader</td>
										<td>22447711</td>
										<td>5,000.00</td>
										<td>1,456.80</td>
										<td>0</td>
										<td>840.00</td>
										<td>577.65</td>
										<td>4,405.50</td>
									</tr>
									<tr>
										<td>55441122</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>FX-05</td>
										<td>Level-01</td>
										<td>IB</td>
										<td>22447711</td>
										<td>5,000.00</td>
										<td>1,456.80</td>
										<td>157.25</td>
										<td>-200.00</td>
										<td>577.65</td>
										<td>4,405.50</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="3">Showing 1 to 25 of 57 entries</td>
										<td colspan="10">
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
		</div>
	</div>
	
	<div class="footer">
		<div>
			<strong>Copyright</strong> GQ capital &copy; 2017
		</div>
	</div>
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'

import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'summary',
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
		// $('input[name="daterange"]').daterangepicker({
		// 	timePicker: false,
		// });
        $('.datepicker').datepicker({
			format: 'yyyy-mm-dd',
			startDate: '-3d'
		});
    }
}
</script>