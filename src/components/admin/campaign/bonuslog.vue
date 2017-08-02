<template>
<div>			
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Bonus log</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<div class="input-group col-sm-2 pull-left m-b-sm m-r-sm"><input class="form-control" type="text" placeholder="Table in Search"> </div>
									<div class="input-group col-sm-4 pull-left m-b-sm m-r-sm">
										<span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="text" name="daterange" placeholder="Bonus Addition Date">
									</div>
									<div class="input-group col-sm-2 pull-left m-b-sm">
										<div class="form-group">
											<select class="form-control">
												<option>Type</option>
												<option>Deposit</option>
												<option>Welcome</option>
												<option>Withdrawal Fee</option>
												<option>Other</option>
											</select>
										</div>
									</div>
									<div class="input-group pull-left m-l-xs"><button class="btn btn-primary" type="button">Search</button></div>
									<div class="input-group input-sm pull-right">
										<span class="input-group-addon no-borders">Show</span>
										<select class="form-control">
											<option>10</option>
											<option selected>25</option>
											<option>50</option>
											<option>100</option>
										</select>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="footable table table-hover toggle-arrow-tiny">
										<thead>
											<tr>
												<th data-toggle="true">Bonus ID</th>
												<th data-class="expand">Client ID</th>
												<th data-hide="phone">Name</th>
												<th data-class="expand">Bonus Type</th>
												<th data-class="expand">Amount</th>
												<th data-class="expand">Balance</th>
												<th data-hide="phone">Date</th>
												<th data-hide="phone,tablet">Verification</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>50000123</td>
												<td>22553366</td>
												<td>Patrick Smith</td>
												<td>Deposit</td>
												<td>1,000.00</td>
												<td>1,000.00</td>
												<td>2017-03-10 14:30</td>
												<td>Verified</td>
											</tr>
											<tr>
												<td>50000122</td>
												<td>22998800</td>
												<td>Alan Smith</td>
												<td>Welcome</td>
												<td>500.00</td>
												<td>500.00</td>
												<td>2017-03-10 13:30</td>
												<td>Verified</td>
											</tr>
											<tr>
												<td>50000121</td>
												<td>22887766</td>
												<td>Alan Smith</td>
												<td>Withdrawal Fee</td>
												<td>0</td>
												<td>5,750.40</td>
												<td>2017-03-10 13:30</td>
												<td>Verified</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="2">Showing 1 to 25 of 57 entries</td>
												<td colspan="6">
													<ul class="pagination pull-right"></ul>
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
import '../../../assets/css/plugins/clockpicker/clockpicker.css'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
import Datapicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'

export default {
    name: 'bonuslog',
	components:{
      Footable,  
      Datapicker
	},
    mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 		timePicker: false,
	    // });
        $('.datepicker').datepicker({
			format: 'yyyy-mm-dd',
			startDate: '-3d'
		});

		$(function() {
			$('.footable').footable({
				breakpoints: {
					phone: 640,
					tablet: 1024
				}
			});
		});
    }
}
</script>