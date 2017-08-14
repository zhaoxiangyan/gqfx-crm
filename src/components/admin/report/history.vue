<template>
<div>

	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Transaction History</h2>
		</div>
	</div>

	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					
					<div class="ibox-content">
						<div class="row">
							<div class="col-md-3">
								<label>Date</label>
								<div class="form-group">
<template>
    <el-date-picker
      v-model="value1"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
</template>
								</div>
							</div>
							<div class="col-md-2">
								<label>MT5 Account</label>
								<div class="form-group">
<el-input v-model="input2" placeholder="请输入内容"></el-input>
								</div>
							</div>
							<div class="col-md-2">
								<label>Client ID</label>
								<div class="form-group">
<el-input v-model="input3" placeholder="请输入内容"></el-input>								
								</div>
							</div>
							<div class="col-md-2">
								<label>Account Group</label>
								<div class="form-group">
<el-select v-model="select" placeholder="请选择">
    <el-option label="餐厅名" value="1"></el-option>
    <el-option label="订单号" value="2"></el-option>
    <el-option label="用户电话" value="3"></el-option>
</el-select>								
								</div>
							</div>
							<div class="col-md-3">
								<div class="form-inline m-t-mdl">
									<button class="btn btn-primary">Search</button>
									<div class="input-group input-sm pull-right">
										<span class="input-group-addon no-borders">Show</span>
										<select class="form-control">
											<option>10</option>
											<option selected>25</option>
											<option>50</option>
											<option>100</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- ibox End -->
			</div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<h5>Total: <span class="agg">Volume</span>355,720｜<span class="agg">Loss</span>1,457.50</h5>
						<div class="ibox-tools">
							<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="table-responsive">
							<table class="table table-hover footable toggle-arrow-tiny report-hs-table">
								<thead>
									<tr>
										<th data-toggle="true">Order ID</th>
										<th data-class="expand">MT5 Account</th>
										<th data-hide="phone">Client ID</th>
										<th data-hide="phone,tablet">Name</th>
										<th data-class="expand">Symbol</th>
										<th data-class="expand">Type</th>
										<th data-class="expand">Volume</th>
										<th data-class="expand">Order Date</th>
										<th data-class="expand">Order Rate</th>
										<th data-hide="phone">S/L</th>
										<th data-hide="phone">T/P</th>
										<th data-class="expand">Period Date</th>
										<th data-class="expand">Period Rate</th>
										<th data-class="expand">Profit</th>
										<th data-hide="phone,tablet">Channel</th>
										<th data-hide="phone,tablet">Note</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>100001234</td>
										<td>55440022</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>USDJPYbo</td>
										<td>Up</td>
										<td>100</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.501015</td>
										<td>0</td>
										<td>0</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.645515</td>
										<td>76.00</td>
										<td>MT5PC</td>
										<td>1m-76%</td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55440022</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>USDJPYbo</td>
										<td>Down</td>
										<td>100</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.501015</td>
										<td>0</td>
										<td>0</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.645515</td>
										<td>76.00</td>
										<td>MT5PC</td>
										<td>1m-76%</td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55440022</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>USDJPY</td>
										<td>BUY</td>
										<td>1</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.501015</td>
										<td>0</td>
										<td>0</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.645515</td>
										<td><span class="text-danger">-100.00</span></td>
										<td>APPiOS</td>
										<td></td>
									</tr>
									<tr>
										<td>100001234</td>
										<td>55440022</td>
										<td>22558833</td>
										<td>Patrick Smith</td>
										<td>USDJPY</td>
										<td>SELL</td>
										<td>0.01</td>
										<td>2017-03-09 15:20:33</td>
										<td>112.501015</td>
										<td>0</td>
										<td>0</td>
										<td>2017-03-09 15:20:33</td>
										<td>111.406874</td>
										<td>76.00</td>
										<td>APPAnd</td>
										<td></td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="4">Showing 1 to 25 of 57 entries</td>
										<td colspan="12">
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
	
	<!-- Modal Detail -->
	<div id="detail" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-bar-chart-o modal-icon"></i><h3 class="modal-title">D/W Detail</h3></div>
				<div class="modal-body">
					<table class="table">
						<tbody>
							<tr>
								<th width="30%"> ID</th>
								<td>100001234</td>
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
								<th>D/W</th>
								<td></td>
							</tr>
							<tr>
								<th>Method</th>
								<td></td>
							</tr>
							<tr>
								<th>Deposit Amount</th>
								<td></td>
							</tr>
							<tr>
								<th>Withdrawal Amount</th>
								<td></td>
							</tr>
							<tr>
								<th>Balance</th>
								<td></td>
							</tr>
							<tr>
								<th>Date</th>
								<td>02/15 2017 16:10</td>
							</tr>
							<tr>
								<th>Note</th>
								<td>Test Test</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
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
										<h4><small>Clinet ID:</small> 22554499</h4>
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
											<td>Balance<strong> 15,800</strong></td>
											<td>Tran.Volume<strong> 54,000</strong></td>
										</tr>
										<tr>
											<td>Deposit<strong> 100,000</strong></td>
											<td>Withdrawal<strong> 2,000</strong></td>
										</tr>
										<tr>
											<td>Commission <strong>400</strong></td>
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
									<div><label>Account group</label><span>Real</span></div>
									<div><label>Client Level</label><span></span></div>
									<div><label>Rank</label><span>MIB</span> <span class="pull-right"><label class="label label-default"><i class="fa fa-file-pdf-o"></i></label></span></div>
								</div>
								<div class="client-view-box">
									<h3>Transaction</h3>
									<div><label>Last Login</label><span></span></div>
									<div><label>Last Depoit</label><span>xxxxxxxxxxxx</span></div>
									<div><label>Read Only</label><span>OFF</span></div>
								</div>
								<div class="client-view-box">
									<h3>Comment</h3>
									<p>Sample Text</p>
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
// import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'

// import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
// import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'history',
	data () {
       return {
		   value1: '',
		   value2: '',
		   value3: ''
	   }
	},
    components: {
    //   Datepicker,
    //   Footable
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