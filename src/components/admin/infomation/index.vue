<template>
<div>		
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Infomation</h2>
					<div class="heading-tools"><a href="info-new.html" class="btn btn-sm btn-default"><i class="fa fa-plus fa-fw"></i>New</a></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in search"> <span class="input-group-btn"> <button class="btn btn-primary" type="button">Search
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
								<div class="table-resonsive">
									<table class="table table-hover footable toggle-arrow-tiny">
										<thead>
											<tr>
												<th data-toggle="true">Publish Start Date</th>
												<th data-hide="phone">End Date</th>
												<th data-class="expand">Title</th>
												<th data-class="expand">Account Group</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>2017-02-15 09:45</td>
												<td>2017-04-30 09:45</td>
												<td>System Version up：Infomation on System Version up for Mypage</td>
												<td>Default</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="info-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>2017-02-15 09:45</td>
												<td>2017-02-28 23:50</td>
												<td>System Version up：Infomation on System Version up for Mypage</td>
												<td>Default</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="info-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>2017-02-15 09:45</td>
												<td>2017-02-15 12:45</td>
												<td>System Version up：Infomation on System Version up for Mypage</td>
												<td>FX-01</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="info-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="5">
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
</div>			
</template>
<script>

import "../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css" 
import "../../../assets/css/plugins/datapicker/datepicker3.css" 
import "../../../assets/css/plugins/footable/footable.core.css" 
import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'infomation-index',
	components:{
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
    }
}
</script>