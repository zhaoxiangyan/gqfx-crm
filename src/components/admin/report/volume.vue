<template>
<div>		
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Transaction Volume</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="row">
							<div class="col-md-5">
								<label>Date</label>
								<div class="form-group">
									<div class="btn-group">
										<button class="btn btn-default active">Daily</button>
										<button class="btn btn-default">Weekly</button>
										<button class="btn btn-default">Monthly</button>
									</div>
									<div class="pull-left"><input name="daterange" class="form-control" type="text"></div>
								</div>
							</div>
							<div class="col-md-2">
								<label>Account Group</label>
								<div class="form-group">
									<select class="form-control">
										<option>Nothing Selected</option>
										<option>Default</option>
										<option>FX-01</option>
									</select>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-inline m-t-mdl">
									<button class="btn btn-primary">Search</button>
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
						<h5>Total: <span class="agg">Login</span>2,715｜<span class="agg">Volume</span>432,428</h5>
						<div class="ibox-tools">
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="table-responsive">
							<table class="table table-hover footable toggle-arrow-tiny report-vl-table">
								<thead>
									<tr>
										<th data-toggle="true">Date</th>
										<th data-class="expand">Login Active</th>
										<th data-class="expand">Transaction Volume(Total)</th>
										<th data-class="expand">Volume(Standard)</th>
										<th data-class="expand">Volume(Short)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>2017-03-04</td>
										<td>1,147</td>
										<td>2,833,909</td>
										<td>33,909</td>
										<td>19,800</td>
									</tr>
									<tr>
										<td>2017-03-03</td>
										<td>1,147</td>
										<td>2,833,909</td>
										<td>33,909</td>
										<td>19,800</td>
									</tr>
									<tr>
										<td>2017-03-02</td>
										<td>1,147</td>
										<td>2,833,909</td>
										<td>33,909</td>
										<td>19,800</td>
									</tr>
									<tr>
										<td>2017-03-01</td>
										<td>1,147</td>
										<td>2,833,909</td>
										<td>33,909</td>
										<td>19,800</td>
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

import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'volume',
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
    }
}
</script>