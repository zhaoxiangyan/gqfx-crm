<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Step Mail log</h2>
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
								<span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="text" name="daterange" placeholder="Send Date">
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
							<table class="footable table table-hover toggle-arrow-tiny maillog-table">
								<thead>
									<tr>
										<th data-toggle="true">Sent ID</th>
										<th data-class="expand">Mail ID</th>
										<th data-class="expand">Send Date</th>
										<th data-class="expand">Completion date</th>
										<th data-hide="phone">No.of Target</th>
										<th data-hide="phone">No.of Success</th>
										<th data-class="expand">Subject</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>50000123</td>
										<td>1001</td>
										<td>2017-03-10 14:30</td>
										<td>2017-03-10 14:33</td>
										<td>140</td>
										<td>130</td>
										<td>Sample Sample Sample Subject</td>
									</tr>
									<tr>
										<td>50000122</td>
										<td>1002</td>
										<td>2017-03-10 12:30</td>
										<td>2017-03-10 12:35</td>
										<td>1,200</td>
										<td>1,191</td>
										<td>Sample Sample Sample Subject</td>
									</tr>
									<tr>
										<td>50000121</td>
										<td>1005</td>
										<td>2017-03-10 09:00</td>
										<td>2017-03-10 09:02</td>
										<td>4</td>
										<td>4</td>
										<td>Sample Sample Sample Subject</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="3">Showing 1 to 25 of 57 entries</td>
										<td colspan="4">
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
import '../../../assets/css/plugins/footable/footable.core.css'

import  Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
import  Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
export default {
    name: 'maillog',
	components:{
        Footable,
        Datepicker
	},
    mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 		timePicker: false,
		// });
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