<template>
<div>
			
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Rank Request</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="tabs-container">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active">
								<a href="#requested" data-toggle="tab" aria-controls="requested">Requested <span class="badge badge-info">2</span></a>
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
<template>
  <el-table
    :data="RequestedData"
    border
    style="width: 100%;font-size:13px;">
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
      prop="clientLevel"
      label="Client Level"
      sortable>
    </el-table-column>
	<el-table-column
      prop="currentRank"
      label="Current Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestedRank"
      label="Requested Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="rankupCondition"
      label="Rank Up Condition"
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
						<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
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
    style="width: 100%;font-size:13px;" >
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
      prop="clientLevel"
      label="Client Level"
      sortable>
    </el-table-column>
	<el-table-column
      prop="currentRank"
      label="Current Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestedRank"
      label="Requested Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="rankupCondition"
      label="Rank Up Condition"
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
						<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
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
    style="width: 100%;font-size:13px;">
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
      prop="clientLevel"
      label="Client Level"
      sortable>
    </el-table-column>
	<el-table-column
      prop="currentRank"
      label="Current Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestedRank"
      label="Requested Rank"
      sortable>
    </el-table-column>
    <el-table-column
      prop="requestDate"
      label="Request Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="rankupCondition"
      label="Rank Up Condition"
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
						<li><a href="#" data-toggle="modal" data-target="#rank-request"><i class="fa fa-pencil-square fa-fw"></i>Approve</a></li>
						<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
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

	<!-- Modal Rank request -->
	<div id="rank-request" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-star-o modal-icon"></i><h3 class="modal-title">Rank Approval</h3><small>Rank Req ID: 50000125</small></div>
				<div class="modal-body">
					<table class="table">
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
								<th>Client Level</th>
								<td></td>
							</tr>
							<tr>
								<th>Rank</th>
								<td>
									<div class="pull-left">Current Rank:<br><strong class="text-md">Trader</strong></div>
									<div class="p-w-md pull-left"><i class="fa fa-arrow-right m-t-md"></i></div>
									<div class="pull-left">Requested Rank:<br><strong class="text-md">IB</strong></div>
								</td>
							</tr>
							<tr>
								<th>Request Date</th>
								<td>2017-03-20 14:40</td>
							</tr>
							<tr>
								<th>Rank Condition</th>
								<td>Achived</td>
							</tr>
							<tr>
								<th>Status</th>
								<td>Pending</td>
							</tr>
							<tr>
								<th>IB Document</th>
								<td>
									<span class="m-r-sm"><i class="fa fa-file-pdf-o fa-fw"></i>IB-agreetment.pdf</span>
									<a href="javascript:void(0)" class="btn btn-link"><i class="fa fa-download"></i></a>
								</td>
							</tr>
						</tbody>
					</table>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary btn-sm btn-outline">Approve</button>
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
				<div class="modal-header bg-danger"><h3 class="modal-titler">Reason of Declined</h3></div>
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
// import '../../../assets/css/plugins/clockpicker/clockpicker.css'
export default {
    name: 'rank',
	data () {
		return {
			// 搜索框数据
			input1: '',
			input2: '',
			input3: '',
			// Requested表格数据
			RequestedData: [{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Requested'
			    },{
				clientID: '1985142',
				name: 'Bob',
				clientLevel: 'Level-2',
				currentRank: 'IB',
				requestedRank: 'MIB',
				requestDate: '2017-02-07 08:32',
				rankupCondition: 'Achived',
				status: 'Requested'
			    },{
				clientID: '2141574138',
				name: 'Paul',
				clientLevel: 'Level-3',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-05-02 19:14',
				rankupCondition: 'Unachived',
				status: 'Requested'
			}],
			// 分页
			currentPage1: 3,
			// Pending表格数据
			PendingData: [{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Pending'
			    },{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Pending'
			    },{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Pending'
			}],
		    // 分页
			currentPage2: 4,
			// Declined表格数据
			DeclinedData: [{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Declined'
			    },{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Declined'
			    },{
				clientID: '22451222',
				name: 'Alan Smith',
				clientLevel: 'Level-1',
				currentRank: 'Trader',
				requestedRank: 'IB',
				requestDate: '2017-03-08 10:55',
				rankupCondition: 'Achived',
				status: 'Declined'
			}],
			// 分页
			currentPage3: 5
		}
	},
    components: {

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

    }
}
</script>
<style scoped>
/*action展开菜单*/
.tab-content td .dropdown-menu{
	top:-70%;
}
.tab-content tr:first-child .dropdown-menu{
	top:0
}
.tab-content tr:last-child .dropdown-menu{
	top:-63px;
}
</style>