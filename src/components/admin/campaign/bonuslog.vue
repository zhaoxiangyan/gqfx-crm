<template>
<div>			
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Bonus log</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<!--<div class="ibox-tools">
									<div class="input-group col-sm-2 pull-left m-b-sm m-r-sm"><input class="form-control" type="text" placeholder="Table in Search"> </div>
									<div class="input-group col-sm-4 pull-left m-b-sm m-r-sm">
										<span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="text" name="daterange" placeholder="Bonus Addition Date">
									</div>
									<div class="input-group col-sm-2 pull-left m-b-sm">
										<div class="form-group">
											<select class="form-control">
												<option>Type</option>
												<option>Deposit</option>
												<option>Welcome</option>
												<option>Withdrawal Fee</option>
												<option>Other</option>
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
								</div>-->								
								<div class="ibox-tools">
							       	<div class="input-group col-sm-4 pull-left m-b-sm m-r-sm">
<template>
<el-date-picker
      v-model="value"
      type="daterange"
      placeholder="Select date range">
</el-date-picker>
</template>
                                     </div>
									 <div class="input-group col-sm-6 pull-left m-b-sm m-r-sm">
<el-input placeholder="Table in Search" v-model="input">
    <el-select v-model="select" slot="prepend" placeholder="Bonus Type" class="Width150">
      <el-option label="Deposit" value="1"></el-option>
      <el-option label="Welcome" value="2"></el-option>
      <el-option label="Withdrawal Fee" value="3"></el-option>
	  <el-option label="Other"  value="4"></el-option>
    </el-select>
    <el-button slot="append" icon="search"></el-button>
</el-input>					
                                    </div>	
									<div class="clearfix"></div>		
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<!--<table class="footable table table-hover toggle-arrow-tiny">
										<thead>
											<tr>
												<th data-toggle="true">Bonus ID</th>
												<th data-class="expand">Client ID</th>
												<th data-hide="phone">Name</th>
												<th data-class="expand">Bonus Type</th>
												<th data-class="expand">Amount</th>
												<th data-class="expand">Balance</th>
												<th data-hide="phone">Date</th>
												<th data-hide="phone,tablet">Verification</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>50000123</td>
												<td>22553366</td>
												<td>Patrick Smith</td>
												<td>Deposit</td>
												<td>1,000.00</td>
												<td>1,000.00</td>
												<td>2017-03-10 14:30</td>
												<td>Verified</td>
											</tr>
											<tr>
												<td>50000122</td>
												<td>22998800</td>
												<td>Alan Smith</td>
												<td>Welcome</td>
												<td>500.00</td>
												<td>500.00</td>
												<td>2017-03-10 13:30</td>
												<td>Verified</td>
											</tr>
											<tr>
												<td>50000121</td>
												<td>22887766</td>
												<td>Alan Smith</td>
												<td>Withdrawal Fee</td>
												<td>0</td>
												<td>5,750.40</td>
												<td>2017-03-10 13:30</td>
												<td>Verified</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="2">Showing 1 to 25 of 57 entries</td>
												<td colspan="6">
													<ul class="pagination pull-right"></ul>
												</td>
											</tr>
										</tfoot>
									</table>-->
<template>
  <el-table
    :data="BonuslogData"
    border
    style="width: 100%;font-size:13px;">
	<el-table-column
      prop="bonusID"
      label="Bonus ID"
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
      prop="bonusType"
      label="Bonus Type"
      sortable>
    </el-table-column>
	<el-table-column
      prop="amount"
      label="Amount"
      sortable>
    </el-table-column>
	<el-table-column
      prop="balance"
      label="Balance"
      sortable>
    </el-table-column>
	<el-table-column
      prop="date"
      label="Date"
      sortable>
    </el-table-column>
	<el-table-column
      prop="verification"
      label="Verification"
      sortable>
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
	</div>
</template>
<script>
// import '../../../assets/css/plugins/footable/footable.core.css'
// import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
// import '../../../assets/css/plugins/clockpicker/clockpicker.css'
// import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
// import Datapicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'

export default {
    name: 'bonuslog',
	data () {
		return {
			value: '',
			input: '',
			select: '',
			BonuslogData: [{
			    bonusID: '50000123',
				clientID: '22553366',
				name: 'Patrick Smith',
				bonusType: 'Deposit',
				amount: '1,000.00',
				balance: '1,000.00',
				date: '2017-03-10 14:30',
				verification: 'Verified'
			    },{
				bonusID: '50000122',
				clientID: '22998800',
				name: 'Alan Smith',
				bonusType: 'Welcome',
				amount: '500.00',
				balance: '500.00',
				date: '2017-03-10 12:30',
				verification: 'Verified'
			    },{
				bonusID: '50000121',
				clientID: '22887766',
				name: 'Andy Smith',
				bonusType: 'Withdrawal Fee',
				amount: '0',
				balance: '5,750.40',
				date: '2017-03-10 11:30',
				verification: 'Verified'
			}],
			// 分页
			currentPage: 2
		}
	},
	components:{
    //   Footable,  
    //   Datapicker
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
    mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 		timePicker: false,
	    // });
        // $('.datepicker').datepicker({
		// 	format: 'yyyy-mm-dd',
		// 	startDate: '-3d'
		// });

		// $(function() {
		// 	$('.footable').footable({
		// 		breakpoints: {
		// 			phone: 640,
		// 			tablet: 1024
		// 		}
		// 	});
		// });
    }
}
</script>
<style scoped>

</style>