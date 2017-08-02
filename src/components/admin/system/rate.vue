<template>
<div>
		<div class="row wrapper border-bottom white-bg page-heading">
			<div class="col-lg-10">
				<h2 class="pull-left m-r-sm">Exchange Rate</h2>
				<div class="heading-tools">
					<a href="#" class="btn btn-sm btn-default" data-cta-target=".edit" data-disable-scroll="true">
						<i class="fa fa-plus fa-fw"></i>New
					</a>
				</div>
			</div>
		</div>		
	
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-lg-12">
					<div class="ibox float-e-margins">
						<div class="ibox-content">
							<div class="table-responsive">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th>Base Currency</th>
											<th>Target Currency</th>
											<th>Deposit Exchange Rate</th>
											<th>Withdrawal Exchange Rare</th>
											<th>Update Time</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>USD</td>
											<td>CNY</td>
											<td>6.850790</td>
											<td>6.786610</td>
											<td>2017-04-10 09:13:23</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".edit" data-disable-scroll="true"><i class="fa fa-pencil-square fa-fw"></i>Update</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>CNY</td>
											<td>USD</td>
											<td>7.123450</td>
											<td>7.365410</td>
											<td>2017-04-10 09:13:23</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".edit" data-disable-scroll="true"><i class="fa fa-pencil-square fa-fw"></i>Update</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
													</ul>
												</div>
											</td>
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
		
		<!-- Modal Ex Rate-edit -->
		<div class="modal modal-2 edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Exchange Rate</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-3 control-label">Base Currency</label>
									<div class="col-sm-9">
										<select class="form-control">
											<option selected>USD</option>
											<option>CNY</option>
											<option>EUR</option>
										</select>
									</div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Target Currency</label>
									<div class="col-sm-9">
										<select class="form-control">
											<option selected>USD</option>
											<option>CNY</option>
											<option>EUR</option>
										</select>
									</div>
								</div>
								<div class="form-group"><label class="col-sm-3 text-right">Deposit Exchange Rate</label>
									<div class="col-sm-9"><input class="form-control" type="number" placeholder="(six decimal)"></div>
								</div>
								<div class="form-group"><label class="col-sm-3 text-right">Withdrawal Exchange Rare</label>
									<div class="col-sm-9"><input class="form-control" type="number" placeholder="(six decimal)"></div>
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
    name: 'rate',
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