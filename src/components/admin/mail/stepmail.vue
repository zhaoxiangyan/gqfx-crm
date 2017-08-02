<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Step Mail</h2>
			<div class="heading-tools"><a href="stepmail-new.html" class="btn btn-sm btn-default"><i class="fa fa-plus fa-fw"></i>New</a></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<div class="ibox-tools">
							<div class="input-group col-sm-4 pull-left"><input class="form-control" type="text" placeholder="Table in Search"> <span class="input-group-btn"> <button class="btn btn-primary" type="button">Search
								</button> </span></div>
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
							<table class="table table-hover footable toggle-arrow-tiny">
								<thead>
									<tr>
										<th data-toggle="true">Mail ID</th>
										<th data-class="expand">Date Time</th>
										<th data-class="expand">Client Level</th>
										<th data-class="expand">Rank</th>
										<th data-class="expand">Volume</th>
										<th data-class="expand">Balance</th>
										<th data-hide="phone">Subject</th>
										<th data-class="expand">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1001</td>
										<td>None</td>
										<td>Sample Level</td>
										<td>Trader,IB</td>
										<td>Over 1,000</td>
										<td>Under 100</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="../mail/stepmail-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>1002</td>
										<td>Every Month 10 day 15:00</td>
										<td>Level-01</td>
										<td>None</td>
										<td>Over 5,000</td>
										<td>None</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="../mail/stepmail-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>1003</td>
										<td>Every Month 30 day 15:00</td>
										<td>None</td>
										<td>Trader,IB,MIB,PIB</td>
										<td>None</td>
										<td>Under 10</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="../mail/stepmail-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
									<tr>
										<td>1004</td>
										<td>Birthday</td>
										<td>None</td>
										<td>None</td>
										<td>None</td>
										<td>None</td>
										<td>Sample is Smaple of Text</td>
										<td>
											<div class="btn-group">
												<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
												<ul class="dropdown-menu">
													<li><a href="../mail/stepmail-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
													<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
												</ul>
											</div>
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="2">Showing 1 to 25 of 57 entries</td>
										<td colspan="6">
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
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'

import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
export default {
    name: 'stepmail',
	components:{
        Footable
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