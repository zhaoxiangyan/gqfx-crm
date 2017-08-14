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
								<a href="#requested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-success">8</span></a>
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
										<div class="input-group col-sm-4 pull-left">
											<el-input class="table_cell right_radius" v-model="input1" placeholder="Table in Search"></el-input>
											<el-button class="table_cell left_radius" type="primary">Search</el-button>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="table-responsive">
										<!--<table class="table table-hover footable toggle-arrow-tiny">
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
										</table>-->
<template>
  <el-table
    :data="RequestedData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
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
      prop="phone"
      label="Phone"
      sortable>
    </el-table-column>
	<el-table-column
      prop="email"
      label="Email"
      sortable>
    </el-table-column>
    <el-table-column
      prop="agentID"
      label="Agent ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="signupDate"
      label="Signup Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="verification"
      label="Verification"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
      :total="100">
    </el-pagination>
</template>									
								</div>
							</div>
							<!-- tab-pane End -->
							<div class="tab-pane" id="pending">
								<div class="panel-body">
									<h3>Pending</h3>
									<div class="m-b-sm">
										<div class="input-group col-sm-4 pull-left">
										    <el-input class="table_cell right_radius" v-model="input2" placeholder="Table in Search"></el-input>
											<el-button class="table_cell left_radius" type="primary">Search</el-button>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="table-responsive">
<template>
  <el-table
    :data="PendingData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
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
      prop="phone"
      label="Phone"
      sortable>
    </el-table-column>
	<el-table-column
      prop="email"
      label="Email"
      sortable>
    </el-table-column>
    <el-table-column
      prop="agentID"
      label="Agent ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="signupDate"
      label="Signup Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="verification"
      label="Verification"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
      :total="100">
    </el-pagination>
</template>										
								</div>
							</div>
							<!-- tab-pane End -->
							<div class="tab-pane" id="declined">
								<div class="panel-body">
									<h3>Declined</h3>
									<div class="m-b-sm">
										<div class="input-group col-sm-4 pull-left">
									        <el-input class="table_cell right_radius" v-model="input3" placeholder="Table in Search"></el-input>
											<el-button class="table_cell left_radius" type="primary">Search</el-button>
										</div>
										<div class="clearfix"></div>
									</div>
									<div class="table-responsive">
<template>
  <el-table
    :data="DeclinedData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
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
      prop="phone"
      label="Phone"
      sortable>
    </el-table-column>
	<el-table-column
      prop="email"
      label="Email"
      sortable>
    </el-table-column>
    <el-table-column
      prop="agentID"
      label="Agent ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="signupDate"
      label="Signup Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="verification"
      label="Verification"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
				<ul class="dropdown-menu">
					<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
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
      :total="100">
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
												<div class="pull-left">
												     <!-- <input id="checkbox1" type="checkbox"><label for="checkbox1"> ID(Front)</label>-->
<template>
  <el-checkbox >ID(Front)</el-checkbox>
</template>
												</div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="static/img/p1.jpg" data-lightbox="image-1" data-title="ID(Front)"><i class="fa fa-expand"></i></a>
													<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="pull-left">
<template>
  <el-checkbox >ID(Back)</el-checkbox>
</template>												
												</div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="static/img/12.jpg" data-lightbox="image-2" data-title="ID(Back)"><i class="fa fa-expand"></i></a>
													<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
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
												<div class="pull-left">
<template>
  <el-checkbox >Proof of Residence</el-checkbox>
</template>													
												</div>
												<div class="ibox-tools">
													<span class="label label-primary">Approved</span>
													<a href="static/img/p1.jpg" data-lightbox="image-1" data-title="Proof of Residence"><i class="fa fa-expand"></i></a>
													<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/p1.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="pull-left">
<template>
  <el-checkbox >Debit/Credit Card(Front)</el-checkbox>
</template>													
												</div>
												<div class="ibox-tools">
													<span class="label label-warning">Pending</span>
													<a href="static/img/12.jpg" data-lightbox="image-2" data-title="Debit/Credit Card(Front)"><i class="fa fa-expand"></i></a>
													<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
												</div>
												<div class="m-t-xs"><img src="../../../assets/img/12.jpg" class="img-responsive"></div>
											</div>
											<div class="doc-box m-b-md">
												<div class="pull-left">
<template>
  <el-checkbox >Debit/Credit Card(Back)</el-checkbox>
</template>													
												</div>
												<div class="ibox-tools">
													<span class="label label-danger">Declined</span>
													<a href="static/img/p3.jpg" data-lightbox="image-3" data-title="Debit/Credit Card(Back) "><i class="fa fa-expand"></i></a>
													<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
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
import Lightbox from 'lightbox2'
import 'lightbox2/dist/css/lightbox.css'
// global. = Raphael
export default {
    name: 'account',
	data () {
		return {
			// 搜索框数据
			input1: '',
			input2: '',
			input3: '',
			// Requested表格数据
			RequestedData: [{
				clientID: '22558833',
				name: 'Patrick Smith',
				phone: '1517982071',
				email: '9876703@qq.com',
				agentID: '22001177',
				signupDate: '2017-02-10 14:30',
				requestDate: '2017-08-07 17:46',
				verification: 'Verified'
			    },{
				clientID: '22558833',
				name: 'Patrick Smith',
				phone: '1517982071',
				email: '9876703@qq.com',
				agentID: '22001177',
				signupDate: '2017-02-10 14:30',
				requestDate: '2017-08-07 17:46',
				verification: 'Verified'
			    },{
				clientID: '22558833',
				name: 'Patrick Smith',
				phone: '1517982071',
				email: '9876703@qq.com',
				agentID: '22001177',
				signupDate: '2017-02-10 14:30',
				requestDate: '2017-08-07 17:46',
				verification: 'Verified'
			}],
			// 分页
			currentPage1: 3,
			// Pending表格数据
			PendingData: [{
				clientID: '22451833',
				name: 'Andy',
				phone: '8883797',
				email: '151416703@qq.com',
				agentID: '4781177',
				signupDate: '2017-08-01 14:30',
				requestDate: '2017-08-09 17:46',
				verification: 'Verified'
			    },{
				clientID: '22451833',
				name: 'Andy',
				phone: '8883797',
				email: '151416703@qq.com',
				agentID: '4781177',
				signupDate: '2017-08-01 14:30',
				requestDate: '2017-08-09 17:46',
				verification: 'Verified'
			    },{
				clientID: '22451833',
				name: 'Andy',
				phone: '8883797',
				email: '151416703@qq.com',
				agentID: '4781177',
				signupDate: '2017-08-01 14:30',
				requestDate: '2017-08-09 17:46',
				verification: 'Verified'	
			}],
		    // 分页
			currentPage2: 4,
			// Declined表格数据
			DeclinedData: [{
				clientID: '22451222',
				name: 'Zhao',
				phone: '8145623797',
				email: '14516703@qq.com',
				agentID: '47814877',
				signupDate: '2017-06-22 14:30',
				requestDate: '2017-08-01 17:46',
				verification: 'Verified'
			    },{
				clientID: '224547133',
				name: 'Adsf',
				phone: '888127487',
				email: '168456703@qq.com',
				agentID: '4781117577',
				signupDate: '2017-05-01 14:30',
				requestDate: '2017-07-02 17:46',
				verification: 'Verified'
			    },{
				clientID: '21476833',
				name: 'Yan',
				phone: '1745864',
				email: '52701803@qq.com',
				agentID: '47174677',
				signupDate: '2017-07-22 14:30',
				requestDate: '2017-06-12 17:46',
				verification: 'Verified'
			}],
			// 分页
			currentPage3: 5
		}
	},
    components: {
         Lightbox
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
    mounted: function() {

    }
}
</script>
<style scoped>
.tab-content td .dropdown-menu{
	top:0;
}
.tab-content tr:last-child .dropdown-menu{
	top:-30px;
}
/*checkbox复选框*/
/*.el-checkbox{
	color:#676a6c;
}*/
</style>

