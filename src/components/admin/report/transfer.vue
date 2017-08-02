<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Internal Transfers</h2>
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
							<div class="col-md-5">
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
						<h5>Total: 1,000.00</h5>
						<div class="ibox-tools">
							<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="table-responsive">
							<table class="table table-hover footable toggle-arrow-tiny">
								<thead>
									<tr>
										<th data-toggle="true">ID</th>
										<th data-class="expand">MT5 Account</th>
										<th data-class="expand">Cilent ID</th>
										<th data-hide="expand">Name</th>
										<th data-hide="phone,tablet">Client Level</th>
										<th data-class="expand">Transfer<br> Amount</th>
										<th data-hide="expand">Transferred<br>MT5 Account</th>
										<th data-hide="expand">Transferred<br>Client ID</th>
										<th data-hide="phone">Transferred<br>Ciient Name</th>
										<th data-hide="expand">Date</th>
										<th data-hide="phone,tablet">Comment</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>100001234</td>
										<td>55112244</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Level-01</td>
										<td>200.00</td>
										<td>55667788</td>
										<td>33001133</td>
										<td>David Bowie</td>
										<td>2017-03-05 14:12</td>
										<td>Exsample</td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55112222</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Level-01</td>
										<td>200.00</td>
										<td>55667700</td>
										<td>33001133</td>
										<td>David Bowie</td>
										<td>2017-03-05 14:12</td>
										<td>Exsample</td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55112244</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Level-01</td>
										<td>3,000.00</td>
										<td>55551188</td>
										<td>33001133</td>
										<td>David Bowie</td>
										<td>2017-03-05 14:12</td>
										<td>Exsample</td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55662244</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>Level-01</td>
										<td>3,000.00</td>
										<td>55667788</td>
										<td>33001133</td>
										<td>David Bowie</td>
										<td>2017-03-05 14:12</td>
										<td>Exsample</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="3">Showing 1 to 25 of 57 entries</td>
										<td colspan="8">
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
    name: 'transfer',
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