<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">IB Statistics/ <small>Month-to-month basis</small></h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox">
					<div class="ibox-content">
						<div class="row">
							<div class="col-md-2">
								<label>Agent ID</label>
								<div class="form-group"><input class="form-control" type="text"></div>
							</div>
							<div class="col-md-4">
								<label>Month</label>
								<div class="form-group">
									<div class="input-group"><input class="form-control datepicker2" type="text" data-provide="datepicker"><span class="input-group-addon">To</span><input class="form-control datepicker2" type="text"  data-provide="datepicker"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-inline m-t-mdl">
									<button class="btn btn-primary">Search</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- ibox End -->
				<div class="ibox">	
					<div class="ibox-title">
						<h5>Agent ID: 22998811</h5>
						<div class="ibox-tools">
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="table-responsive">
							<table class="table table-hover table-bordered">
								<thead class="gray-bg">
									<tr>
										<th rowspan="2">Month</th>
										<th colspan="2">Depoit</th>
										<th colspan="2">Withdrawal</th>
										<th colspan="2">Tran.Volume</th>
										<th colspan="2">Account Opening</th>
									</tr>
									<tr>
										<th>Amount</th>
										<th>Increase Rate</th>
										<th>Amount</th>
										<th>Increase Rate</th>
										<th>Amount</th>
										<th>Increase Rate</th>
										<th>Amount</th>
										<th>Increase Rate</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>2017-03</td>
										<td>2500.00</td>
										<td><span class="text-primary"><i class="fa fa-caret-up"></i> 175%</span></td>
										<td>123.85</td>
										<td><span class="text-primary"><i class="fa fa-caret-up"></i> 101%</span></td>
										<td>5678.50</td>
										<td><span class="text-primary"><i class="fa fa-caret-up"></i> 120%</span></td>
										<td>108</td>
										<td><span class="text-primary"><i class="fa fa-caret-up"></i> 113%</span></td>
									</tr>
									<tr>
										<td>2017-02</td>
										<td>2300.00</td>
										<td><span class="text-danger"><i class="fa fa-caret-down"></i> 75%</span></td>
										<td>123.85</td>
										<td><span class="text-danger"><i class="fa fa-caret-down"></i> 98%</span></td>
										<td>5678.50</td>
										<td><span class="text-primary"><i class="fa fa-caret-up"></i> 220%</span></td>
										<td>108</td>
										<td><span class="text-danger"><i class="fa fa-caret-down"></i> 83%</span></td>
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
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../../assets/css/plugins/datapicker/datepicker3.css'
// import Moment from '../../assets/js/plugins/fullcalendar/moment.min.js'
// import Daterangepicker from '../../assets/js/plugins/daterangepicker/daterangepicker.js'
import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
 export default {
     name: 'statistics',
     components: {
        // Moment,
        // Daterangepicker,
        Datepicker 
     },
     mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 		timePicker: false,
		// });
        $('.datepicker1').datepicker({
			format: 'yyyy-mm-dd',
			startDate: '-3d'
		});
		$('.datepicker2').datepicker({
			format: 'yyyy-mm',
			minViewMode : 1
		});
     },
     methods: {
    
     }
 }
</script>
<style scoped>

</style>