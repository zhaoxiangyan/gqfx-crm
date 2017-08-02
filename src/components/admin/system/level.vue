<template>
<div>		
		<div class="row wrapper border-bottom white-bg page-heading">
			<div class="col-lg-10">
				<h2 class="pull-left m-r-sm">Client Level</h2>
				<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".client-level" data-disable-scroll="true"><i class="fa fa-plus"></i> New</a></div>
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
								<table class="table footable toggle-arrow-tiny setting-table">
									<thead>
										<tr>
											<th data-toggle="true">No</th>
											<th data-class="expand">Level Name</th>
											<th data-hide="phone">Discription</th>
											<th data-class="expand">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Level-01</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".client-level" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Level-★★</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".client-level" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Level-★★</td>
											<td></td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".client-level" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Level-AAAA</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="edit.html"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="2">Showing 1 to 25 of 57 entries</td>
											<td colspan="2">
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


		<!-- Modal Level-edit -->
		<div class="modal modal-2 client-level">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Client Level</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-3 control-label">Lelel No.</label>
									<div class="col-sm-9"><div class="m-t-xs">1</div></div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Level Name</label>
									<div class="col-sm-9"><input class="form-control" type="text"></div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Discription</label>
									<div class="col-sm-9"><textarea class="form-control" rows="3"></textarea></div>
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

import Cta from '../../../assets/js/plugins/cta/cta.min.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'level',
    components: {
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