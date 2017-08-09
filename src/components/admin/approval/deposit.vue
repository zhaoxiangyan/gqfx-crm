<template>
<div>		
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Deposit</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<div class="input-group col-sm-2 pull-left m-b-sm m-r-sm"><input class="form-control" type="text" placeholder="Table in Search"> </div>
									<div class="input-group col-sm-2 pull-left m-b-sm">
										<div class="form-group">
											<select class="form-control">
												<option>Status</option>
												<option>Processed</option>
												<option>Processing</option>
												<option>failed</option>
											</select>
										</div>
									</div>
									<div class="input-group pull-left m-l-xs"><button class="btn btn-primary" type="button">Search</button></div>
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
									<!--<table class="table table-hover footable toggle-arrow-tiny">
										<thead>
											<tr>
												<th data-toggle="true">MT5 Account</th>
												<th data-class="expand">Cilent ID</th>
												<th data-hide="phone">Name</th>
												<th data-hide="phone">Method</th>
												<th data-hide="phone">Payed Amount</th>
												<th data-hide="phone,tablet">Fee</th>
												<th data-hide="phone,tablet">Ex.Rate</th>
												<th data-class="expand">Deposit Amount</th>
												<th data-hide="phone">Deposit Date</th>
												<th ddata-class="expand">Status</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>55001188</td>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>UnionPay</td>
												<td><span class="currency">USD</span>1,000</td>
												<td>50.00</td>
												<td>1</td>
												<td>950.00</td>
												<td>2017-03-10 10:55</td>
												<td>Processing</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>55001188</td>
												<td>22558833</td>
												<td>Patrick Smith</td>	
												<td>UnionPay</td>
												<td><span class="currency">USD</span>1,000</td>
												<td>50.00</td>
												<td>1</td>
												<td>950.00</td>
												<td>2017-03-10 10:55</td>
												<td>Processed</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>55221166</td>
												<td>22558844</td>
												<td>Patrick Smith</td>
												<td>UnionPay</td>
												<td><span class="currency">USD</span>800</td>
												<td>40.00</td>
												<td>1</td>
												<td>760.24</td>
												<td>2017-03-10 9:38</td>
												<td>Failed</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>55004477</td>
												<td>22558855</td>
												<td>Patrick Smith</td>
												<td>Bank Transfer</td>
												<td><span class="currency">CNY</span>3,000</td>
												<td>150.00</td>
												<td>6.415263</td>
												<td>2,850.50</td>
												<td>2017-03-09 21:20</td>
												<td>Declined</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Client</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="3">Showing 1 to 25 of 57 entries</td>
												<td colspan="8">
													<ul class="pagination pull-right m-n">
													</ul>
												</td>
											</tr>
										</tfoot>
									</table>-->
<template>
  <el-table
    :data="DepositData"
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
      prop="payedAmount"
      label="Payed Amount"
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
      prop="depositAmount"
      label="DepositAmount"
      sortable>
    </el-table-column>
    <el-table-column
      prop="depositDate"
      label="DepositDate"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	            <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
				<ul class="dropdown-menu">
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next "
      :total="100"
	  style="text-align:right;padding:8px 0;">
    </el-pagination>
</template>									
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
</div>
</template>
<script>
// import '../../../assets/css/plugins/footable/footable.core.css'
// import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
   name: 'deposite',
   data () {
	   return {
		   DepositData: [{
			    account: '55001188',
				clientID: '22451222',
				name: 'Zhao',
				method: 'UnionPay',
				payedAmount: 'USD 1000',
				fee: '50.00',
				exRate: '1',
				depositAmount: '950.00',
				depositDate: '2017-03-10 10:55',
				status: 'Processing'
			    },{
				account: '55001188',
				clientID: '22451222',
				name: 'Zhao',
				method: 'UnionPay',
				payedAmount: 'USD 1000',
				fee: '50.00',
				exRate: '1',
				depositAmount: '950.00',
				depositDate: '2017-03-10 10:55',
				status: 'Processing'
			    },{
				account: '55001188',
				clientID: '22451222',
				name: 'Zhao',
				method: 'UnionPay',
				payedAmount: 'USD 1000',
				fee: '50.00',
				exRate: '1',
				depositAmount: '950.00',
				depositDate: '2017-03-10 10:55',
				status: 'Processing'
				},{
				account: '55001188',
				clientID: '22451222',
				name: 'Zhao',
				method: 'UnionPay',
				payedAmount: 'USD 1000',
				fee: '50.00',
				exRate: '1',
				depositAmount: '950.00',
				depositDate: '2017-03-10 10:55',
				status: 'Processing'
			}],
			// 分页
			currentPage: 2
	   }
   },
   components: {
    //  Footable 
   },
   methods: {
	    // 饿了么分页
		handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
   },
   mounted: function() {
        // $('.footable').footable({
		// 		breakpoints: {
		// 			phone: 640,
		// 			tablet: 1024
		// 		}
	    // });
   }
}
</script>
<style scoped>
/*action展开菜单*/
.ibox-content td .dropdown-menu{
	top:0;
}
.ibox-content tr:last-child .dropdown-menu{
	top:-30px;
}
</style>