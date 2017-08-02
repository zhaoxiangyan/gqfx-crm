<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Demo Account</h2>
		</div>
	</div>		

	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-9">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">Demo Account Active</label>
								<div class="col-sm-2">
									<div class="onoffswitch">
										<input class="onoffswitch-checkbox" id="deposit-bouns" type="checkbox" checked="">
										<label class="onoffswitch-label" for="deposit-bouns">
											<span class="onoffswitch-inner"></span>
											<span class="onoffswitch-switch"></span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2">Initial Amount</label>
								<div class="col-sm-4">
									<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"><span class="input-group-addon">.00</span></div>
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
</div>
</template>
<script>
export default {
    name: 'demo',
    components: {
    },
    mounted: function(){
          
    }
}
</script>