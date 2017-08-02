<template>
<div>
		<div class="row wrapper border-bottom white-bg page-heading">
			<div class="col-lg-10">
				<h2 class="pull-left m-r-sm">Deposit and Withdrawal Settings</h2>
			</div>
		</div>
		
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-lg-12">
					<div class="ibox float-e-margins">
						<div class="tabs-container">
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active">
									<a href="#deposit" data-toggle="tab" aria-controls="requested">Deposit</a>
								</li>
								<li role="presentation">
									<a href="#withdrawal" data-toggle="tab" aria-controls="pending">Withdwaral</a>
								</li>
							</ul>
							<div class="tab-content">
								<div class="tab-pane active" id="deposit">
									<div class="panel-body">
										<div>
											<a href="#" class="btn btn-sm btn-default" data-cta-target=".d-edit" data-disable-scroll="true"><i class="fa fa-plus fa-fw"></i>New</a>
										</div>
										<div class="table-responsive">
											<table class="table table-bordered">
												<thead>
													<tr>
														<th>Settlement Name</th>
														<th>Client Level</th>
														<th>Minimum Amount</th>
														<th>Fee (% or Amount)</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Unionpay</td>
														<td>
															Level-1<br>
															Level-2
														</td>
														<td class="text-right">10</td>
														<td class="text-right">5 %</td>
														<td><a href="#" class="btn btn-sm btn-default text-info" data-cta-target=".d-edit" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></td>
													</tr>
													<tr>
														<td>XXX Pay</td>
														<td>Level-1</td>
														<td class="text-right">100</td>
														<td class="text-right">4 %</td>
														<td><a href="#" class="btn btn-sm btn-default text-info" data-cta-target=".d-edit" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></td>
													</tr>
													<tr>
														<td>Bank Transefer</td>
														<td>None</td>
														<td class="text-right">100</td>
														<td class="text-right">10 USD</td>
														<td><a href="#" class="btn btn-sm btn-default text-info" data-cta-target=".d-edit" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- tab-pane End -->
								<div class="tab-pane" id="withdrawal">
									<div class="panel-body">
										<div>
											<a href="#" class="btn btn-sm btn-default" data-cta-target=".w-edit" data-disable-scroll="true"><i class="fa fa-plus fa-fw"></i>New</a>
										</div>
										<div class="table-responsive">
											<table class="table table-bordered">
												<thead>
													<tr>
														<th>Withdrawal Method</th>
														<th>Client Level</th>
														<th>Minimum Amount</th>
														<th>Maximum Amount</th>
														<th>Fee (% or Amount)</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Bank Transefer</td>
														<td>None</td>
														<td class="text-right">100</td>
														<td class="text-right">100,000</td>
														<td class="text-right">10 USD</td>
														<td><a href="#" class="btn btn-sm btn-default text-info" data-cta-target=".w-edit" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- tab-pane End -->
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
		
		<!-- Modal Depoist-edit -->
		<div class="modal modal-2 d-edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Deposit Settings</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-3 text-right">Settlement Name</label>
									<div class="col-sm-9">XXXXPay</div>
								</div>
								<div class="form-group"><label class="col-sm-3 text-right">Client Level</label>
									<div class="col-sm-9">
										<div class="input-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Level-1</option>
												<option>Level-2</option>
												<option>Smaple Sample</option>
											</select>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 text-right">Minimum Deposit Amount</label>
									<div class="col-sm-6">
										<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"></div>
									</div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Deposit Fee</label>
									<div class="col-sm-9">
										<div class="form-inline m-b-sm">
											<div class="radio radio-inline col-sm-4"><input id="radio3" type="radio"> <label for="radio3">Amount</label></div>
											<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"></div>
										</div>
										<div class="form-inline">
											<div class="radio radio-inline col-sm-4"><input id="radio3" type="radio"> <label for="radio4"> Percentage</label></div>
											<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
										</div>
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
		
		
		<!-- Modal W-edit -->
		<div class="modal modal-2 w-edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Withdrawal Settings</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-3 text-right">Withdrawal Method</label>
									<div class="col-sm-9">Bank Transefer</div>
								</div>
								<div class="form-group"><label class="col-sm-3 text-right">Client Level</label>
									<div class="col-sm-9">
										<div class="input-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Level-1</option>
												<option>Level-2</option>
												<option>Smaple Sample</option>
											</select>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 text-right">Minimum Amount</label>
									<div class="col-sm-6">
										<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 text-right">Maximum Amount</label>
									<div class="col-sm-6">
										<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-3 text-right">Withdrawal Fee</label>
									<div class="col-sm-9">
										<div class="form-inline m-b-sm">
											<div class="radio radio-inline col-sm-4"><input id="radio1" type="radio"> <label for="radio1">Fixed</label></div>
											<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"></div>
										</div>
										<div class="form-inline">
											<div class="radio radio-inline col-sm-4"><input id="radio2" type="radio"> <label for="radio2"> Percentage</label></div>
											<div class="input-group"><input class="form-control" type="text" placeholder="0.00"><span class="input-group-addon">%</span></div>
										</div>
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
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/select/bootstrap-select.css'
import '../../../assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'


// import Bootstrapselect from '../../assets/js/plugins/select/bootstrap-select.min.js'
import Cta from '../../../assets/js/plugins/cta/cta.min.js'
export default {
    name: 'd-w',
    components: {
        // Bootstrapselect,
        Cta
    },
    mounted: function(){
          
    }
}
</script>