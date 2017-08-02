<template>
<div>
		
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Ranking / <small>Top Winner and Top Loser</small></h2>
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
								<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
							</div>
							<div class="col-md-2">
								<label>No.of Rank</label>
								<select class="form-control">
									<option selected>10</option>
									<option>20</option>
									<option>50</option>
								</select>
							</div>
							<div class="col-md-7">
								<div class="form-inline m-t-mdl">
									<button class="btn btn-primary">Search</button>
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
						<div class="ibox-tools">
						<h5>Profit Amount</h5>
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="ranking-wrapper">
						<div class="col-lg-6">
							<div class="m-b-sm text-primary text-md">Top Winner</div>
							<div class="table-responsive">
								<table class="table report-rk-table">
									<thead>
										<tr class="gray-bg">
											<th width="5%">No</th>
											<th>Client ID</th>
											<th>Name</th>
											<th>P/L Amount</th>
											<th>Profit Margin(%)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>2</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>3</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>4</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>5</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>6</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>7</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>8</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>9</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>10</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>3,158.60</td>
											<td>71.30</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="m-b-sm text-danger text-md">Top Loser</div>
							<div class="table-responsive">
								<table class="table report-rk-table">
									<thead>
										<tr class="gray-bg">
											<th width="5%">No</th>
											<th>Client ID</th>
											<th>Name</th>
											<th>P/L Amount</th>
											<th>Profit Margin(%)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>2</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>3</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>4</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>71.30</td>
										</tr>
										<tr>
											<td>5</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>6</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>7</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>8</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>9</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>-71.30</td>
										</tr>
										<tr>
											<td>10</td>
											<td>22445588</td>
											<td>Patrick Smith</td>
											<td>-3,158.60</td>
											<td>71.30</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="clearfix"></div>
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
						<div class="ibox-tools">
							<h5>Profit Margin(%)</h5>
							<a class="collapse-link">
								<i class="fa fa-chevron-up"></i>
							</a>
						</div>
					</div>
					<div class="ibox-content">
						<div class="ranking-wrapper">
							<div class="col-lg-6">
								<div class="m-b-sm text-primary text-md">Top Winner</div>
								<div class="table-responsive">
									<table class="table report-rk-table">
										<thead>
											<tr class="gray-bg">
												<th width="5%">No</th>
												<th>Client ID</th>
												<th>Name</th>
												<th>P/L Amount</th>
												<th>Profit Margin(%)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>2</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>3</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>4</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>5</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>6</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>7</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>8</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>9</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>10</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>3,158.60</td>
												<td>71.30</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="m-b-sm text-danger text-md">Top Loser</div>
								<div class="table-responsive">
									<table class="table table-hover report-rk-table">
										<thead>
											<tr class="gray-bg">
												<th width="5%">No</th>
												<th>Client ID</th>
												<th>Name</th>
												<th>P/L Amount</th>
												<th>Profit Margin(%)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>2</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>3</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>4</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>71.30</td>
											</tr>
											<tr>
												<td>5</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>6</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>7</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>8</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>9</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>-71.30</td>
											</tr>
											<tr>
												<td>10</td>
												<td>22445588</td>
												<td>Patrick Smith</td>
												<td>-3,158.60</td>
												<td>71.30</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="clearfix"></div>
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
								<td>2017-02-14 16:10</td>
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
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'

import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
export default {
    name: 'ranking',
    components: {
      Datepicker
    },
    mounted: function(){
		// $('input[name="daterange"]').daterangepicker({
		// 	timePicker: false,
		// });
    }
}
</script>