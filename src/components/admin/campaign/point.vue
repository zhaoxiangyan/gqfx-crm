<template>
<div>			
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Point</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">Transaction Volume</label>
								<div class="col-sm-6">
									<table class="table m-b-xs">
										<thead>
											<tr>
												<td>Over($)</td>
												<td>Point</td>
												<td width="45%">Term</td>
												<td width="10%">Action</td>
											</tr>  
										</thead>
										<tbody>
											<tr>
												<td><input class="form-control" type="text" value="1,000"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td><input class="form-control" type="text" value="2017-04-01-2017-04-30"></td>
												<td></td>
											</tr>
											<tr>
												<td><input class="form-control" type="text" value="1,000"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td><input class="form-control" type="text" value="2017-04-01-2017-04-30"></td>
												<td><a href="javascript:void(0)" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a></td>
											</tr>
										</tbody>
									</table>
									<div>
										<button data-toggle="collapse" href="#volume" aria-expanded="false" aria-controls="volume" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>New Condition</button>
									</div>
									<div class="collapse" id="volume">
										<table class="table">
										    <tbody>
												<tr>
													<td><input class="form-control" type="text" placeholder="Over $"></td>
													<td><input class="form-control" type="text" placeholder="Point"></td>
													<td width="50%">
													<!--<input class="form-control" type="text" name="daterange" placeholder="Term">-->
<template>
    <el-date-picker
      v-model="value"
      type="daterange"
      placeholder="Select date range"
	  class="eee">
    </el-date-picker>
</template>													
													</td>
													<td><button class="btn btn-sm btn-default text-info" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-check"></i></button></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-sm-1 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="deposit-bouns" type="checkbox" checked="">
										<label class="onoffswitch-label" for="deposit-bouns">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>-->
<el-switch
  v-model="value1"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>									
								</div>
								<div class="col-sm-3">
									<small><i class="fa fa-pencil"></i> Transaction volume within the period.</small>
								</div>
							</div>
						</div>
						<div class="hr-line-dashed clearfix"></div>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">Deposit Amount</label>
								<div class="col-sm-4">
									<table class="table m-b-xs">
										<thead>
											<tr>
												<td width="45%">Over($)</td>
												<td width="45%">Point</td>
												<td>Action</td>
											</tr>  
										</thead>
										<tbody>
											<tr>
												<td><input class="form-control" type="text" value="10,000"></td>
												<td><input class="form-control" type="text" value="200"></td>
												<td></td>
											</tr>
											<tr>
												<td><input class="form-control" type="text" value="10,000"></td>
												<td><input class="form-control" type="text" value="200"></td>
												<td><a href="javascript:void(0)" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a></td>
											</tr>	
										</tbody>
									</table>
									<div>
										<button data-toggle="collapse" href="#deposit" aria-expanded="false" aria-controls="deposit" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>New Condition</button>
									</div>
									<div class="collapse" id="deposit">
										<table class="table">
										    <tbody>
												<tr>
													<td><input class="form-control" type="text" placeholder="Over $"></td>
													<td><input class="form-control" type="text" placeholder="Point"></td>
													<td><button class="btn btn-sm btn-default text-info" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-check"></i></button></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-sm-1 col-sm-offset-2 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="deposit-bouns" type="checkbox" checked="">
										<label class="onoffswitch-label" for="deposit-bouns">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>-->
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>									
								</div>
								<div class="col-sm-3">
									<small><i class="fa fa-pencil"></i> For one deposit amount.</small>
								</div>
							</div>
						</div>
						<div class="hr-line-dashed clearfix"></div>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">Birthday</label>
								<div class="col-sm-3">
									<div class="input-group"><span class="input-group-addon">P</span> <input class="form-control" type="text"></div>
								</div>
								<div class="col-sm-1 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="deposit-bouns" type="checkbox" checked="">
										<label class="onoffswitch-label" for="deposit-bouns">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>-->
<el-switch
  v-model="value3"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>									
								</div>
							</div>
						</div>
					</div>
					<div class="ibox-footer">
						<div><button class="btn btn-primary">Save Changes</button></div>
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
// import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
// import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
export default {
    name: 'point',
	data() {
      return {
        value1: true,
        value2: false,
		value3: true,
		value: ''
      }
    },
    components: {
    //    Datepicker
    },
    mounted: function(){
    //   $('input[name="daterange"]').daterangepicker({
	// 			timePicker: false,
	//   });
    //   $('.datepicker').datepicker({
	// 		format: 'yyyy-mm-dd',
	// 		startDate: '-3d'
	//   });     
    }
}
</script>
<style>
.eee>.el-input__inner{
	height:34px;
}
</style>