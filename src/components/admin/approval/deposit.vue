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
<div class="col-sm-6" style="padding:0px;">								
<el-input placeholder="Table in Search" v-model="input">
    <el-select v-model="select" slot="prepend" placeholder="Please select">
	  <el-option label="All" value="0"></el-option>
      <el-option label="Processing" value="1"></el-option>
      <el-option label="Processed" value="2"></el-option>
      <el-option label="Failed" value="3"></el-option>
	  <el-option label="Declined" value="4"></el-option>
    </el-select>
    <el-button slot="append" icon="search"></el-button>
</el-input>	
</div>									
									<div class="clearfix"></div>
								</div>
							</div>

							<div class="ibox-content">
								<div class="table-responsive">
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
export default {
   name: 'deposite',
   data () {
	   return {
		//    搜索框
		   input: '',
		   select: '',
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
				status: 'Processed'
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
				status: 'Failed'
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
				status: 'Declined'
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
.ibox-title{
	padding:15px 20px;
}
</style>