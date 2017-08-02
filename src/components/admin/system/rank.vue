<template>
<div>		
		<div class="row wrapper border-bottom white-bg page-heading">
			<div class="col-lg-10">
				<h2 class="pull-left m-r-sm">Ranks</h2>
				<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".rank" data-disable-scroll="true"><i class="fa fa-plus"></i> New</a></div>
			</div>
		</div>
		
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-lg-12">
					<div class="ibox float-e-margins">
						<div class="ibox-content">
							<div class="table-responsive">
								<table class="table table-hover setting-table">
									<thead>
										<tr>
											<th>No</th>
											<th>Rank Name</th>
											<th>Rank Up Condition</th>
											<th>Discription</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Trader</td>
											<td>---</td>
											<td>---</td>
											<td></td>
										</tr>
										<tr>
											<td>2</td>
											<td>IB</td>
											<td>
												<ul class="p-w-xs">
													<li>Personal transaction amount is <span class="ranks-number">$5,000</span> or more</li>
													<li>Number of people referral directly<span class="ranks-number">3</span> or more</li>
													<li>Deposit amount of the entire group under <span class="ranks-number">$10,000</span> or more</li>
													<li>Transaction value of the entire group under <span class="ranks-number">$50,000</span> or more</li>
												</ul>
											</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".rank" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>MIB</td>
											<td>
												<ul class="p-w-xs">
													<li>Number of people referral directly<span class="ranks-number">3</span> or more</li>
													<li>Among those who introduced directly, the rank directly under active is<span class="ranks-number">2</span> or more</li>
													<li>Deposit amount of the entire group under <span class="ranks-number">$10,000</span> or more</li>
													<li>Transaction value of the entire group under <span class="ranks-number">$50,000</span> or more</li>
													<li>Transaction amount of person who introduced directly is <span class="ranks-number">$50,000</span> or more</li>
												</ul>
											</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".rank" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>PIB</td>
											<td>
												<ul class="p-w-xs">	
													<li>Among those who introduced directly, the rank directly under active is<span class="ranks-number">2</span> or more</li>
												</ul>
											</td>
											<td>Sample is Smaple of Text</td>
											<td>
												<div class="btn-group">
													<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
													<ul class="dropdown-menu">
														<li><a href="#" data-cta-target=".rank" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
														<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
													</ul>
												</div>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="9"></td>
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

		<!-- Modal Rank-edit -->
		<div class="modal modal-2 rank">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Rank</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-3 control-label">Rank No.</label>
									<div class="col-sm-9"><div class="m-t-xs">2</div></div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Rank Name</label>
									<div class="col-sm-9"><input class="form-control" type="text"></div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Condition</label>
									<div class="col-sm-9">
										<div class="checkbox col-sm-12"><input type="checkbox">
											Personal transaction amount is <span class="input-group col-sm-6"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></span> or more
										</div>
										<div class="checkbox col-sm-12"><input type="checkbox">
											Number of people referral directly <span class="input-group col-sm-5"> <input class="form-control" type="text"></span> or more
										</div>	
										<div class="checkbox col-sm-12"><input type="checkbox">
											Among those who introduced directly, the IB directly under is <span class="input-group col-sm-5"><input class="form-control" type="text"></span> or more
											<div class="p-w-sm m-xs">
												<select class="form-control">
													<option selected>IB: Number of IB (Default)</option>
													<option>IB: Number of active</option>
												</select>
												<p><small><i class="fa fa-pencil fa-fw"></i>Active = State in which transactions are carried out within 7 days (within 8 days after putting in the day)</small></p>
											</div>
										</div>
										<div class="checkbox col-sm-12"><input type="checkbox">
											Deposit amount of the entire group under <span class="input-group col-sm-6"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></span> or more
										</div>
										<div class="checkbox col-sm-12"><input type="checkbox">
											Transaction value of the entire group under  <span class="input-group col-sm-6"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></span> or more
										</div>
										<div class="checkbox col-sm-12"><input type="checkbox">
											Transaction amount of person who introduced directly is  <span class="input-group col-sm-6"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></span> or more
										</div>
									</div>
								</div>
								<div class="form-group"><label class="col-sm-3 control-label">Discription</label>
									<div class="col-sm-9"><textarea class="form-control" rows="3"></textarea></div>
								</div>
							</div>
						</div>
						<div class="ibox-footer">
							<div><button class="btn btn-primary">Save Changes</button></div>
						</div>
					</div>
					<!-- ibox End -->
				</div>
			</div>
		</div>
</div>
</template>
<script>
import Cta from '../../../assets/js/plugins/cta/cta.min.js'
export default {
    name: 'system-rank',
    components: {
       Cta
    },
    mounted: function(){
          
    }
}
</script>