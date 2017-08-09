<template>
<div>
			
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Withdrawal Request</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="tabs-container">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active">
								<a href="#requested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-danger">23</span></a>
							</li>
							<li role="presentation">
								<a href="#pending"  data-toggle="tab" aria-controls="pending">Pending <span class="badge">10</span></a>
							</li>
							<li role="presentation">
								<a href="#declined" data-toggle="tab" aria-controls="declined">Declined <span class="badge">2</span></a>
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
										<!--<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">MT5 Account</th>
													<th data-hide="phone">Cilent ID</th>
													<th data-class="expand">Name</th>
													<th data-hide="phone,tablet">Method</th>
													<th data-class="expand">Req.Amount</th>
													<th data-hide="phone">Fee</th>
													<th data-hide="phone">Ex.Rate</th>
													<th data-hide="phone">Wd.Amount</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone,tablet">Audit Date</th>
													<th data-hide="phone,tablet">Status</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>55330011</td>
													<td>22778822</td>
													<td>Alan Smith</td>
													<td>CNY</td>
													<td>25,000.00</td>
													<td>500</td>
													<td>6.124566</td>
													<td><span class="currency">CNY</span>4,500.50</td>
													<td>2017-03-10 10:55</td>
													<td></td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55229922</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>5,000.00</td>
													<td>500</td>
													<td>6.124566</td>
													<td><span class="currency">CNY</span>718.50</td>
													<td>2017-03-10 10:55</td>
													<td></td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55228822</td>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>1,000.00</td>
													<td>500</td>
													<td>6.124566</td>
													<td><span class="currency">CNY</span>800.15</td>
													<td>2017-03-09 12:35</td>
													<td></td>
													<td>Requested</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="4">Showing 1 to 25 of 57 entries</td>
													<td colspan="9">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>-->
<template>
  <el-table
    :data="RequestedData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
	<el-table-column
      prop="account"
      label="MT5 Account"
      sortable>
    </el-table-column>
    <el-table-column
      prop="clientID"
      label="Client ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable>
    </el-table-column>
    <el-table-column
      prop="method"
      label="Method"
      sortable>
    </el-table-column>
	<el-table-column
      prop="reqAmount"
      label="Req.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="fee"
      label="Fee"
      sortable>
    </el-table-column>
    <el-table-column
      prop="exRate"
      label="Ex.Rate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="wdAmount"
      label="Wd.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="RequestDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="auditDate"
      label="AuditDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="status"
      label="Status"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
						<li><a href="javascript:void(0)"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
					</ul>
	   </template>
	</el-table-column>
  </el-table>
</template>													
									</div>
<template>
<el-pagination
      @size-change="handleSizeChange1"
      @current-change="handleCurrentChange1"
      :current-page="currentPage1"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next "
      :total="100"
	  style="text-align:right;padding:8px 0;">
    </el-pagination>
</template>										
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
												<option selected>20</option>
												<option>50</option>
												<option>100</option>
											</select>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="table-responsive">
										<!--<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">MT5 Account</th>
													<th data-class="expand">Cilent ID</th>
													<th data-hide="phone">Name</th>
													<th data-hide="phone,tablet">Method</th>
													<th data-class="expand">Req.Amount</th>
													<th data-hide="phone">Fee</th>
													<th data-hide="phone">Ex.Rate</th>
													<th data-hide="phone">Wd.Amount</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone,tablet">Audit Date</th>
													<th data-hide="phone,tablet">Status</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>55113322</td>
													<td>22778822</td>
													<td>Alan Smith</td>
													<td>CNY</td>
													<td>7,400.00</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>180.00</td>
													<td>2017-03-10 10:55</td>
													<td>2017-03-15 12:20</td>
													<td>Pending</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55112244</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>2,000.00</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>878.26</td>
													<td>2017-03-10 10:55</td>
													<td>2017-03-15 12:20</td>
													<td>Pending</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55884411</td>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>1,900.00</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>878.26</td>
													<td>2017-03-09  12:35</td>
													<td>2017-03-15 12:20</td>
													<td>Pending</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="4">Showing 1 to 25 of 57 entries</td>
													<td colspan="9">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>-->
<template>
  <el-table
    :data="PendingData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
	<el-table-column
      prop="account"
      label="MT5 Account"
      sortable>
    </el-table-column>
    <el-table-column
      prop="clientID"
      label="Client ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable>
    </el-table-column>
    <el-table-column
      prop="method"
      label="Method"
      sortable>
    </el-table-column>
	<el-table-column
      prop="reqAmount"
      label="Req.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="fee"
      label="Fee"
      sortable>
    </el-table-column>
    <el-table-column
      prop="exRate"
      label="Ex.Rate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="wdAmount"
      label="Wd.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="RequestDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="auditDate"
      label="AuditDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="status"
      label="Status"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
						<li><a href="javascript:void(0)"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
					</ul>
	   </template>
	</el-table-column>
  </el-table>
</template>										
									</div>
<template>
<el-pagination
      @size-change="handleSizeChange2"
      @current-change="handleCurrentChange2"
      :current-page="currentPage2"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next "
      :total="100"
	  style="text-align:right;padding:8px 0;">
    </el-pagination>
</template>										
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
										<!--<table class="table table-hover footable toggle-arrow-tiny">
											<thead>
												<tr>
													<th data-toggle="true">MT5 Account</th>
													<th data-class="expand">Cilent ID</th>
													<th data-hide="phone">Name</th>
													<th data-hide="phone,tablet">Method</th>
													<th data-class="expand">Req.Amount</th>
													<th data-hide="phone">Fee</th>
													<th data-hide="phone">Ex.Rate</th>
													<th data-hide="phone">Wd.Amount</th>
													<th data-class="expand">Request Date</th>
													<th data-hide="phone,tablet">Audit Date</th>
													<th data-hide="phone,tablet">Status</th>
													<th data-class="expand">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>55441122</td>
													<td>22778822</td>
													<td>Alan Smith</td>
													<td>CNY</td>
													<td>5,000.00</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>878.26</td>
													<td>2017-03-10 10:55</td>
													<td>2017-03-11 18:00</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55005500</td>
													<td>22558833</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>5,000.75</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>878.26</td>
													<td>2017-03-10 10:55</td>
													<td>2017-03-15 13:18</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
												<tr>
													<td>55225500</td>
													<td>22558844</td>
													<td>Patrick Smith</td>
													<td>CNY</td>
													<td>20,000.00</td>
													<td>500</td>
													<td>6.7894</td>
													<td><span class="currency">CNY</span>5,878.26</td>
													<td>2017-03-09 12:35</td>
													<td>2017-03-15 13:18</td>
													<td>Declined</td>
													<td>
														<div class="btn-group">
															<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
															<ul class="dropdown-menu">
																<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
																<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
																<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
															</ul>
														</div>
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td colspan="4">Showing 1 to 25 of 57 entries</td>
													<td colspan="9">
														<ul class="pagination pull-right m-n">
														</ul>
													</td>
												</tr>
											</tfoot>
										</table>-->
<template>
  <el-table
    :data="DeclinedData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
	<el-table-column
      prop="account"
      label="MT5 Account"
      sortable>
    </el-table-column>
    <el-table-column
      prop="clientID"
      label="Client ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable>
    </el-table-column>
    <el-table-column
      prop="method"
      label="Method"
      sortable>
    </el-table-column>
	<el-table-column
      prop="reqAmount"
      label="Req.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="fee"
      label="Fee"
      sortable>
    </el-table-column>
    <el-table-column
      prop="exRate"
      label="Ex.Rate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="wdAmount"
      label="Wd.Amount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="RequestDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="auditDate"
      label="AuditDate"
      sortable>
    </el-table-column>
	<el-table-column
      prop="status"
      label="Status"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><a href="#" data-toggle="modal" data-target="#audit"><i class="fa fa-pencil-square fa-fw"></i>Audit</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
						<li><a href="javascript:void(0)"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
					</ul>
	   </template>
	</el-table-column>
  </el-table>
</template>												
									</div>
<template>
<el-pagination
      @size-change="handleSizeChange3"
      @current-change="handleCurrentChange3"
      :current-page="currentPage3"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next "
      :total="100"
	  style="text-align:right;padding:8px 0;">
    </el-pagination>
</template>										
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

	<!-- Modal Audit -->
	<div id="audit" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-briefcase modal-icon"></i><h3 class="modal-title">Withdrawal Request Audit</h3><small>W-d ID: 100001234</small></div>
				<div class="modal-body">
					<table class="table">
						<tbody>
							<tr>
								<th width="30%">MT5 Account</th>
								<td></td>
							</tr>
							<tr>
								<th>Client ID</th>
								<td></td>
							</tr>
							<tr>
								<th>Name</th>
								<td></td>
							</tr>
							<tr>
								<th>Method</th>
								<td>CNY</td>
							</tr>
							<tr>
								<th>Request Amount</th>
								<td></td>
							</tr>
							<tr>
								<th>Fee</th>
								<td></td>
							</tr>
							<tr>
								<th>Exchange Rate</th>
								<td></td>
							</tr>
							<tr>
								<th>Withdrawal Amount</th>
								<td><span class="currency">CNY</span>24,000.00</td>
							</tr>
							<tr>
								<th>Status</th>
								<td></td>
							</tr>
							<tr>
								<th>Note</th>
								<td></td>
							</tr>
						</tbody>
					</table>
					<h4>Bank Account</h4>
					<table class="table">
						<tbody>
							<tr>
								<th>Bank Name</th>
								<td></td>
							</tr>
							<tr>
								<th>Branch Name</th>
								<td></td>
							</tr>
							<tr>
								<th>Type of Account</th>
								<td></td>
							</tr>
							<tr>
								<th>Account Number</th>
								<td></td>
							</tr>
							<tr>
								<th>Account Holder</th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary btn-sm btn-outline">Process</button>
					<button type="button" class="btn btn-warning btn-sm btn-outline">Pending</button>
					<a href="#" data-toggle="modal" data-target="#reson"><button type="button" class="btn btn-danger btn-sm btn-outline">Declined</button></a>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Client -->
	<div id="client" class="modal fade in client" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="wrapper-content">
						<div class="row m-b-lg">
							<div class="col-md-5">
								<div class="profile-image">
									<i class="fa fa-user-circle-o fa-5x"></i>
								</div>
								<div class="profile-info">
									<div class="m-b-sm">
										<h2 class="no-margins">Patrick Smith</h2>
										<h4><small>Client ID:</small> 22554499</h4>
										<small>
											<i class="fa fa-phone"></i> +852 44775522<br>
											<i class="fa fa-envelope-o"></i> smaple123@gmail.com
										</small>	
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<h4>Transaction Data <small>(This Month)</small></h4>
								<table class="table m-b-xs">
									<tbody>
										<tr>
											<td>Balance<strong> 15,800.50</strong></td>
											<td>Tran.Vol<strong> 54,000.00</strong></td>
										</tr>
										<tr>
											<td>Deposit<strong> 100,000.00</strong></td>
											<td>Withdrawal<strong> 2,000.00</strong></td>
										</tr>
										<tr>
											<td>Comm <strong>400.75</strong></td>
											<td>Point <strong> 150</strong></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-md-2">
								<div class="m-b-xs">
									<h4>Status</h4>
									<div class="statusbox p-w-xs">
										<label class="label label-info">Verified</label>
										<label class="label black-bg text-white">Black</label>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 col-md-6">
								<div class="ibox">
									<div class="ibox-content">
										<h3>Profile</h3>
										<div><label>Address</label><span>xxxxxxxxxxxx</span></div>
										<div><label>City</label><span>xxxxxxxxxxxx</span></div>
										<div><label>State/Province</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Zip/Postal Code</label><span>xxxxxxxxxxxx</span></div>
										<div><label>National ID</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Citizen</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Language</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Date of Birth</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Male/Female</label><span>xxxx</span></div>
									</div>
								</div>

								<div class="ibox">
									<div class="ibox-content">
										<h3>Registration</h3>
										<div><label>Temporary Date</label><span>2017/03/20 15:20</span></div>
										<div><label>Signup Date</label><span>2017/03/20 15:30</span></div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="client-view-box">
									<h3>Account</h3>
									<div><label>Agent ID</label><span>33664488</span></div>
									<div><label>Account Group</label><span>Default</span></div>
									<div><label>Client Level</label><span></span></div>
									<div><label>Rank</label><span>MIB</span> <span class="pull-right"><label class="label label-default"><i class="fa fa-file-pdf-o"></i></label></span></div>
								</div>
								<div class="client-view-box">
									<h3>Transaction</h3>
									<div><label>Last Login</label><span></span></div>
									<div><label>Last Depoit</label><span>xxxxxxxxxxxx</span></div>
									<div><label>Read Only</label><span>OFF</span></div>
									<div><label>Leverage</label><span>1:100</span></div>
								</div>
								<div class="client-view-box">
									<p>Comment Sample Text</p>
								</div>
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
	<div id="reson" class="modal fade in m-t-lg m-l-lg" tabindex="-1" role="dialog">
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
// import '../../../assets/css/plugins/footable/footable.core.css'
// import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
// import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
// import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
export default {
    name: 'withdrawal',
	data () {
		return {
			// Requested表格数据
			RequestedData: [{
				account: '55001188',
				clientID: '22451222',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 10:55',
				status: 'Requested'
			    },{
				account: '55001188',
				clientID: '22451222',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 10:55',
				status: 'Requested'
			    },{
				account: '55001188',
				clientID: '22451222',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 10:55',
				status: 'Requested'
			}],
			// 分页
			currentPage1: 3,
			// Pending表格数据
			PendingData: [{
				account: '55113322',
				clientID: '22778822',
				name: 'Patrick Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 12:20',
				status: 'Pending'
			    },{
				account: '55113322',
				clientID: '22778822',
				name: 'Patrick Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 12:20',
				status: 'Pending'
			    },{
				account: '55113322',
				clientID: '22778822',
				name: 'Patrick Smith',
				method: 'CNY',
                reqAmount: '7,400.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 180.00',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 12:20',
				status: 'Pending'
			}],
		    // 分页
			currentPage2: 4,
			// Declined表格数据
			DeclinedData: [{
				account: '55441122',
				clientID: '22778822',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '5,000.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 878.26',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 18:00',
				status: 'Declined'
			    },{
				account: '55441122',
				clientID: '22778822',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '5,000.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 878.26',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 18:00',
				status: 'Declined'
			    },{
				account: '55441122',
				clientID: '22778822',
				name: 'Alan Smith',
				method: 'CNY',
                reqAmount: '5,000.00',
				fee: '500',
				exRate: '6.7894',
				wdAmount: 'CNY 878.26',
				requestDate: '2017-03-08 10:55',
				auditDate: '2017-03-10 18:00',
				status: 'Declined'
			}],
			// 分页
			currentPage3: 5
		}
	},
    components: {
        // Footable,
        // Datepicker
    },
	methods: {
		// Requested表格
		// formatter(row, column) {
        //    return row.address;
        // },
		// 饿了么分页
		handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
		},
		handleCurrentChange1(val) {
			console.log(`当前页: ${val}`);
		},
		handleSizeChange2(val) {
        console.log(`每页 ${val} 条`);
		},
		handleCurrentChange2(val) {
			console.log(`当前页: ${val}`);
		},
		handleSizeChange3(val) {
        console.log(`每页 ${val} 条`);
		},
		handleCurrentChange3(val) {
			console.log(`当前页: ${val}`);
		}
	},
    mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 	timePicker: false,
		// });
        // $('.datepicker').datepicker({
		// 	format: 'yyyy/dd/mm',
		// 	startDate: '-3d'
		// });
        // $('.footable').footable({
        //     breakpoints: {
        //         phone: 640,
        //         tablet: 1024
        //     }
		// });
    }
}
</script>
<style scoped>
/*action展开菜单*/
.tab-content td .dropdown-menu{
	top:0;
}
.tab-content tr:last-child .dropdown-menu{
	top:-63px;
}
</style>