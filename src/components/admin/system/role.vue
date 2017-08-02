<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">System Role</h2>
			<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-plus"></i> New</a></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-9">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<div class="ibox-tools">
							<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn"> <button class="btn btn-primary" type="button">Search
								</button> </span></div>
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
							<table class="table table-hover footable toggle-arrow-tiny setting-table">
								<thead>
									<tr>
										<th data-toggle="true">Name</th>
										<th data-hide="phone">Disctiption</th>
										<th data-class="expand">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Administrator</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>Admin-SUB</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>TEST-admin</td>
										<td></td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>Staff-01</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="#" data-cta-target=".role" data-disable-scroll="true"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
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
			</div>

		</div>
	</div>
	
	<div class="footer">
		<div>
			<strong>Copyright</strong> GQ capital &copy; 2017
		</div>
	</div>
	
	<!-- Modal Role-edit -->
	<div class="modal modal-2 role">
		<span class="modal-close-btn"></span>
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="ibox">
					<div class="ibox-title"><h4>System Role</h4></div>
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Name</label>
								<div class="col-sm-10"><input class="form-control" type="text"></div>
							</div>	
							<div class="form-group"><label class="col-sm-2 control-label">Operation</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="10" multiple data-actions-box="true">
											<option>Client</option>
											<optgroup label="Apploval">
												<option>Account Opening</option>
												<option>Deposit</option>
												<option>Withdrawal</option>
												<option>Rank Request</option>
											</optgroup>
											<option>Infomation</option>
											<optgroup label="Campaign">
												<option>Bonus</option>
												<option>Bonus Log</option>
												<option>Point</option>
												<option>Campaign List</option>
											</optgroup>
											<option>Inquery</option>
											<optgroup label="Report">
												<option>Transaction History</option>
												<option>Ranking</option>
												<option>Transaction Volume</option>
												<option>Commission</option>
												<option>Depoits</option>
												<option>Withdrawals</option>
												<option>Internal Transfer</option>
												<option>Overall Summary</option>
											</optgroup>
											<optgroup label="Agent">
												<option>IB Relationship</option>
												<option>IB Statistics</option>
												<option>Commission Scheme</option>
											</optgroup>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Settigns</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="10" multiple data-actions-box="true">
											<optgroup label="Mail">
												<option>Step Mail</option>
												<option>Mail Log</option>
												<option>Trigger Mail</option>
												<option>Mail Template</option>
											</optgroup>
											<option>Media Library</option>
											<optgroup label="System Settigs">
												<option>Admin User</option>
												<option>System Role</option>
												<option>Demo Account</option>
												<option>Account Group</option>
												<option>Client Level</option>
												<option>Ranks</option>
												<option>Account Group</option>
												<option>D/W Settings</option>
												<option>Exchange Rate</option>
												<option>Email Profile</option>
											</optgroup>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">CSV</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="2" multiple data-actions-box="true">
											<option>Client CSV Download</option>
											<option>Report CSV Download</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Other</label>
								<div class="col-sm-10">
									<div class="form-group p-w-sm m-b-none">
										<select class="selectpicker form-control" data-width="100%" data-size="2" multiple data-actions-box="true">
											<option>Risk Management</option>
											<option>Trade Monitor</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Discription</label>
								<div class="col-sm-10"><textarea class="form-control" rows="3"></textarea></div>
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

// import Bootstrapselect from '../../assets/js/plugins/select/bootstrap-select.min.js'
import Cta from '../../../assets/js/plugins/cta/cta.min.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'role',
    components: {
    //    Bootstrapselect, 
       Cta,
       Footable
    },
    mounted: function(){
            $('.footable').footable({
					breakpoints: {
						phone: 640,
						tablet: 1024
					}
			});
    }
}
</script>