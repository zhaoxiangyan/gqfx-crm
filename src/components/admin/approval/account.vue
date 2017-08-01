<template>
<div>		
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Account Opening / <small>Approve for Document</small></h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="tabs-container">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active">
								<a href="#reqested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-success">8</span></a>
							</li>
							<li role="presentation">
								<a href="#pending" data-toggle="tab" aria-controls="pending">Pending <span class="badge">15</span></a>
							</li>
							<li role="presentation">
								<a href="#declined" data-toggle="tab" aria-controls="declined">Declined <span class="badge">3</span></a>
							</li>
						</ul>
						
						<div class="tab-content">
							<div class="tab-pane active" id="requested">
								<div class="panel-body">
									<h3>Requested</h3>
									<div class="m-b-sm">
										<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
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
									<div class="table-responsive">
										<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">Cilent ID</th>
													<th data-class="expand">Name</th>
													<th data-hide="phone,tablet">Phone</th>
													<th data-hide="phone,tablet">Email</th>
													<th data-hide="phone">Agent ID</th>
													<th data-hide="phone">Signup Date</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone">Verification</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22339911</td>
													<td>2017-03-10 15:00</td>
													<td>2017-03-10 15:07</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22339911</td>
													<td>2017-03-10 16:10</td>
													<td>2017-03-10 17:38</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558855</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>0</td>
													<td>2017-03-09 10:15</td>
													<td>2017-03-09 21:20</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2">Showing 1 to 25 of 57 entries</td>
													<td colspan="7">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
							<!-- tab-pane End -->
							<div class="tab-pane" id="pending">
								<div class="panel-body">
									<h3>Pending</h3>
									<div class="m-b-sm">
										<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
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
									<div class="table-responsive">
										<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">Cilent ID</th>
													<th data-class="expand">Name</th>
													<th data-hide="phone,tablet">Phone</th>
													<th data-hide="phone,tablet">Email</th>
													<th data-hide="phone">Agent ID</th>
													<th data-hide="phone">Signup Date</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone">Verification</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22660088</td>
													<td>2017-03-10 15:00</td>
													<td>2017-03-10 15:07</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22999900</td>
													<td>02017-03-10 16:10</td>
													<td>02017-03-10 17:38</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558855</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22999900</td>
													<td>2017-03-09 10:15</td>
													<td>2017-03-09 21:20</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2">Showing 1 to 25 of 57 entries</td>
													<td colspan="7">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
							<!-- tab-pane End -->
							<div class="tab-pane" id="declined">
								<div class="panel-body">
									<h3>Declined</h3>
									<div class="m-b-sm">
										<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn">  <button class="btn btn-primary" type="button">Search</button></span></div>
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
									<div class="table-responsive">
										<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">Cilent ID</th>
													<th data-class="expand">Name</th>
													<th data-hide="phone,tablet">Phone</th>
													<th data-hide="phone,tablet">Email</th>
													<th data-hide="phone">Agent ID</th>
													<th data-hide="phone">Signup Date</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone">Verification</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>0</td>
													<td>2017-03-09 15:00</td>
													<td>2017-03-09 15:07</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22445566</td>
													<td>2017-03-10 16:10</td>
													<td>2017-03-10 17:38</td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>22558855</td>
													<td>Patrick Smith</td>
													<td>+852 1144-8877</td>
													<td>sample123@gmail.com</td>
													<td>22334477</td>
													<td>2017-03-09 10:15</td>
													<td>2017-03-09 21:20</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="2">Showing 1 to 25 of 57 entries</td>
													<td colspan="7">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
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
	<!-- Modal Account-->
	<div id="account" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header"><h3 class="modal-title">Account Approval</h3>
					<small>Approve for Document</small>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-7">
							<div class="table-responsive">
								<table class="table table-bordered client-table white-bg">
									<tbody>
										<tr>
											<th>Client ID</th>
											<td></td>
										</tr>
										<tr>
											<th>Name</th>
											<td>Patrick Smith</td>
										</tr>
										<tr>
											<th>Agent ID</th>
											<td></td>
										</tr>
										<tr>
											<th>E-mail</th>
											<td></td>
										</tr>
										<tr>
											<th>Phone</th>
											<td></td>
										</tr>
										<tr>
											<th>Address</th>
											<td></td>
										</tr>
										<tr>
											<th>City</th>
											<td></td>
										</tr>
										<tr>
											<th>State/Province</th>
											<td></td>
										</tr>
										<tr>
											<th>Country</th>
											<td></td>
										</tr>
										<tr>
											<th>Zip/Postal Code</th>
											<td></td>
										</tr>
										<tr>
											<th>National ID</th>
											<td></td>
										</tr>
										<tr>
											<th>Citizen</th>
											<td></td>
										</tr>
										<tr>
											<th>Date of Birth</th>
											<td></td>
										</tr>
										<tr>
											<th>Male/Female</th>
											<td></td>
										</tr>
										<tr>
											<th>Language</th>
											<td></td>
										</tr>
										<tr>
											<th>Signup Date</th>
											<td></td>
										</tr>
										<tr>
											<th>Request Date</th>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="tabs-container">
								<ul class="nav nav-tabs" role="tablist">
									<li role="presentation" class="active">
										<a href="#id-photo" data-toggle="tab" aria-controls="id-photo">ID Photo</a>
									</li>
									<li role="presentation">
										<a href="#res-card" data-toggle="tab" aria-controls="res-card">Residence/Card</a>
									</li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane active" id="id-photo">
										<div class="panel-body">
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox1" type="checkbox"><label for="checkbox1"> ID(Front)</label></div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="static/img/p1.jpg" data-lightbox="image-1" data-title="ID(Front)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox2" type="checkbox"><label for="checkbox2"> ID(Back)</label></div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="static/img/12.jpg" data-lightbox="image-2" data-title="ID(Back)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/12.jpg" class="img-responsive"></div>
											</div>
											<div class="p-xs">
												<button class="btn btn-sm btn-primary btn-outline">Approve</button>
												<button class="btn btn-sm btn-warning btn-outline">Pending</button>
												<a href="#" data-toggle="modal" data-target="#reason"><button class="btn btn-sm btn-danger btn-outline">Decline</button></a>
											</div>
										</div>
									</div>
									<div class="tab-pane" id="res-card">
										<div class="panel-body">
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox4" type="checkbox"><label for="checkbox4"> Proof of Residence</label></div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="static/img/p1.jpg" data-lightbox="image-1" data-title="Proof of Residence"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox5" type="checkbox"><label for="checkbox5"> Debit/Credit Card(Front)</label></div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="static/img/12.jpg" data-lightbox="image-2" data-title="Debit/Credit Card(Front)"><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/12.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="checkbox pull-left"><input id="checkbox6" type="checkbox"><label for="checkbox6"> Debit/Credit Card(Back) </label></div>
												<div class="ibox-tools">
													<span class="label label-danger">Declined</span>
													<a href="static/img/p3.jpg" data-lightbox="image-3" data-title="Debit/Credit Card(Back) "><i class="fa fa-expand"></i></a>
													<a href=""><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/p3.jpg" class="img-responsive"></div>
											</div>
											<div class="p-xs">
												<button class="btn btn-sm btn-primary btn-outline">Approve</button>
												<button class="btn btn-sm btn-warning btn-outline">Pending</button>
												<a href="#" data-toggle="modal" data-target="#reason"><button class="btn btn-sm btn-danger btn-outline">Decline</button></a>
											</div>
										</div>
									</div>
								</div>
								<!-- tab-content END-->
							</div>
						</div>
					</div>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Decline Message -->
	<div id="reason" class="modal fade in m-t-lg" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-danger"><h3 class="modal-title">Reason of Declined</h3></div>
				<div class="modal-body">
					<textarea class="form-control" type="text" rows="5"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Send</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
// import '../../../assets/css/plugins/lightbox/lightbox.css'
import '../../../assets/css/plugins/jasny/jasny-bootstrap.min.css'
import '../../../assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css'

import Jasny from '../../../assets/js/plugins/jasny/jasny-bootstrap.min.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
// import Lightbox from '../../../assets/js/plugins/lightbox/lightbox.min.js'
import Lightbox from 'lightbox2'
import 'lightbox2/dist/css/lightbox.css'
// global. = Raphael
export default {
    name: 'account',
    components: {
         Lightbox,
        Jasny,
        Footable
    },
    mounted: function() {
        $('.footable').footable({
			breakpoints: {
				phone: 640,
				tablet: 1024
			}
	    });
    }
}
</script>
<style scoped>

</style>

