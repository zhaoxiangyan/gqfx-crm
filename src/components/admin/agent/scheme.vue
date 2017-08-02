<template>
<div>	
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Commission Scheme</h2>
			<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".scheme" data-disable-scroll="true"><i class="fa fa-plus"></i> New</a></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="scheme-item">
							<div class="row">
								<div class="col-md-3">
									<div class="scheme-icon">
										<i class="fa fa-bookmark-o"></i>
									</div>
									<div class="scheme-item-title">BO-01</div>
									<div class="scheme-sub-title">Sample text about sample about anything memo note.</div>
								</div>
								<div class="col-md-5">
									<table class="table">
										<tbody>
											<tr>
												<th>IB</th>
												<td class="scheme-info">
													<span class="views-number">1.0%</span>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<span class="views-number">10.0%</span>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
											<tr>
												<th>MIB</th>
												<td class="scheme-info">
													<span class="views-number">1.5%</span>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<span class="views-number">10.0%</span>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
											<tr>
												<th>PIB</th>
												<td class="scheme-info">
													<span class="views-number">2.0%</span>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<span class="views-number">10.0%</span>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-md-2 text-right">
									<div class="btn-group">
										<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
										<ul class="dropdown-menu">
											<li><a href="#" data-cta-target=".scheme" data-disable-scroll="true"><i class="fa fa-edit"></i> Edit</a></li>
											<li><a href="#"><span class="text-danger"><i class="fa fa-trash"></i> Delete</span></a></li>
										</ul>
									</div>
								</div>
								<div class="col-md-1">
									<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="bo-scheme-1" type="checkbox" checked="">
										<label class="onoffswitch-label" for="bo-scheme-1">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>
								</div>
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
	
	<div class="footer">
		<div>
			<strong>Copyright</strong> GQ capital &copy; 2017
		</div>
	</div>
	
	<!-- Modal Scheme -->
	<div class="modal modal-2 scheme">
		<span class="modal-close-btn"></span>
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
				<div class="ibox">
					<div class="ibox-title"><h4>Commission Scheme</h4></div>
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-3 text-right">Commission Name</label>
								<div class="col-sm-9">
									<div class="input-group"><input class="form-control" type="text"></div>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label">Commission Rate</label>
								<div class="col-sm-9">
									<table class="table">
										<tbody>
											<tr>
												<th>IB</th>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
											<tr>
												<th>MIB</th>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
											<tr>
												<th>PIB</th>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Commission</small></div>
												</td>
												<td class="scheme-info">
													<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon">%</span></div>
													<div><small>Same Rank</small></div>
												</td>
											</tr>
										</tbody>
									</table>
									<p><small><i class="fa fa-pencil"></i> Same Rank：% For commission amount.</small></p>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label">Discription</label>
								<div class="col-sm-9 p-w-lg">
									<div class="form-group">
										<textarea class="form-control" rows="3"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ibox-footer">
						<div><button class="btn btn-warning">Submit</button></div>
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
    name: 'scheme',
    components: {
      Cta
    } 
}
</script>
<style scoped>

</style>