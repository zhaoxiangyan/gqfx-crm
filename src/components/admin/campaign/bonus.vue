<template>
<div>
			
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Bonus</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<h3 class="m-b-md">Deposit Bonus</h3>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label">Deposit Amount</label>
								<div class="col-sm-5">
									<table class="table m-b-xs">
										<thead>
											<tr>
												<td>Over($)</td>
												<td>Bonus Amount</td>
												<td>Withdrawal limit</td>
												<td width="10%">Action</td>
											</tr>  
										</thead>
										<tbody>
											<tr>
												<td><input class="form-control" type="text" value="1,000"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td></td>
											</tr>
											<tr>
												<td><input class="form-control" type="text" value="10,000"></td>
												<td><input class="form-control" type="text" value="200"></td>
												<td><input class="form-control" type="text" value="200"></td>
												<td><a href="#" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a></td>
											</tr>
										</tbody>
									</table>
									<div>
										<button data-toggle="collapse" href="#amount" aria-expanded="false" aria-controls="amount" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>New Condition</button>
									</div>
									<div class="collapse" id="amount">
										<table class="table">
										    <tbody>
												<tr>
													<td><input class="form-control" type="text" placeholder="Over $"></td>
													<td><input class="form-control" type="text" placeholder="Bonus $"></td>
													<td><input class="form-control" type="text" placeholder="Volume $"></td>
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
								<div class="col-sm-4">
									<small><i class="fa fa-pencil"></i> Withdrawal Limit:　Can withdraw at specified transaction amount or more.</small>
								</div>
							</div>
						</div>
						<div class="hr-line-dashed"></div>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label">Welcome</label>
								<div class="col-sm-5">
									<table class="table m-b-xs">
										<thead>
											<tr>
												<td>Over($)</td>
												<td>Bonus Amount</td>
												<td>Withdrawal limit</td>
												<td width="10%">Action</td>
											</tr> 
										</thead>
										<tbody>
											<tr>
												<td><input class="form-control" type="text" value="1,000"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td><input class="form-control" type="text" value="0"></td>
												<td></td>
											</tr>
											<tr>
												<td><input class="form-control" type="text" value="1,000"></td>
												<td><input class="form-control" type="text" value="100"></td>
												<td><input class="form-control" type="text" value="0"></td>
												<td><a href="#" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a></td>
											</tr>
										</tbody>
									</table>
									<div>
										<button data-toggle="collapse" href="#welcome" aria-expanded="false" aria-controls="welcome" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>New Condition</button>
									</div>
									<div class="collapse" id="welcome">
										<table class="table">
										    <tbody>
												<tr>
													<td><input class="form-control" type="text" placeholder="Over $"></td>
													<td><input class="form-control" type="text" placeholder="Bonus $"></td>
													<td><input class="form-control" type="text" placeholder="Volume $"></td>
													<td><button class="btn btn-sm btn-default text-info" data-toggle="tooltip" data-placement="top" title="Add"><i class="fa fa-check"></i></button></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-sm-1 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="welcome-bonus" type="checkbox" checked="">
										<label class="onoffswitch-label" for="welcome-bonus">
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
								<div class="col-sm-4">
									<small><i class="fa fa-pencil"></i> First Deposit after Account Opening.</small><br>
									<small><i class="fa fa-pencil"></i> Withdrawal Limit:　Can withdraw at specified transaction amount or more.</small>
								</div>
							</div>
						</div>
						<div class="hr-line-dashed"></div>
						<h3 class="m-b-md">No Withdrawal Fee</h3>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label">Amount</label>
								<div class="col-sm-3">
									<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></div>
								</div>
								<div class="col-sm-2 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="w-fee-amount" type="checkbox" checked="">
										<label class="onoffswitch-label" for="w-fee-amount">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>-->
<el-switch
  v-model="value3"
  on-color="#13ce66"
  off-color="#ff4949"
  on-text="开"
  off-text="关">
</el-switch>									
								</div>
								<div class="col-sm-3 col-sm-offset-1">
									<small><i class="fa fa-pencil"></i> When 0, apply to everyone</small>
								</div>	
							</div>
						</div>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label">No. of Deposit</label>
								<div class="col-sm-3">
									<div class="input-group"><span class="input-group-addon">Over</span> <input class="form-control" type="text"> </div>
								</div>
								<div class="col-sm-2 p-xxs">
									<!--<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="w-fee-times" type="checkbox" checked="">
										<label class="onoffswitch-label" for="w-fee-times">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>-->
<el-switch
  v-model="value4"
  on-color="#13ce66"
  off-color="#ff4949"
  on-text="开"
  off-text="关">
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

	<!-- Modal bonus -->
	<div id="bonus" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-tv modal-icon"></i><h3 class="modal-title">Depoit Bonus</h3></div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="col-sm-2 control-label">Over</label>
							<div class="col-sm-10">
								<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> </div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">Bonus</label>
							<div class="col-sm-10">
								<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> </div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">Withdrawal Limit</label>
							<div class="col-sm-10">
								<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> </div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Submit</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
    name: 'bonus',
	data() {
      return {
        value1: true,
        value2: false,
		value3: true,
		value4: false
      }
    },
	components:{
   
	},
    mounted: function(){
      
    }
}
</script>