<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Email Profile</h2>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-9">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">From Email Address</label>
								<div class="col-sm-4">
									<input class="form-control" type="text">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2">From Name</label>
								<div class="col-sm-4">
									<input class="form-control" type="text">
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

import '../../../assets/css/plugins/footable/footable.core.css'
export default {
    name: 'email-profile',
    components: {

    },
    mounted: function(){
          
    }
}
</script>