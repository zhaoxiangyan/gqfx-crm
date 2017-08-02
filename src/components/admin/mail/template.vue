<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Mail Template</h2>
			<div class="heading-tools"><a href="template-new.html" class="btn btn-sm btn-default m-r-sm"><i class="fa fa-plus fa-fw"></i>New</a><a href="template-css.html" class="btn btn-default btn-sm"><i class="fa fa-edit fa-fw"></i>CSS</a></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-4">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<h5><strong>Default</strong></h5>
						<div class="ibox-tools">
							<a class="dropdown-toggle" aria-expanded="false" href="#" data-toggle="dropdown">
								<button class="btn btn-xs btn-info btn-outline">Actions</button>
							</a>
							<ul class="dropdown-menu dropdown-user">
								<li><a href="template-edit.html"><i class="fa fa-edit m-r-sm"></i>Edit</a></li>
							</ul>
						</div>
					</div>
					<div class="ibox-content">
						<a href="email-templates/01.html" target="_blank">
							<img class="img-responsive" alt="" src="./email-templates/img/image-01.jpg">
						</a>
					</div>
				</div>
			</div>
			
			<div class="col-lg-4">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<h5><strong>Template-2</strong></h5>
						<div class="ibox-tools">
							<a class="dropdown-toggle" aria-expanded="false" href="#" data-toggle="dropdown">
								<button class="btn btn-xs btn-info btn-outline">Actions</button>
							</a>
							<ul class="dropdown-menu dropdown-user">
								<li><a href="template-edit.html"><i class="fa fa-edit m-r-sm"></i>Edit</a></li>
								<li><a href="#"><i class="fa fa-trash m-r-sm"></i>Delete</a></li>
							</ul>
						</div>
					</div>
					<div class="ibox-content">
						<a href="email-templates/02.html" target="_blank">
							<img class="img-responsive" alt="" src="./email-templates/img/image-02.jpg">
						</a>
					</div>
				</div>
			</div>
			
			<div class="col-lg-4">
				<div class="ibox float-e-margins">
					<div class="ibox-title">
						<h5><strong>Template-3</strong></h5>
						<div class="ibox-tools">
							<a class="dropdown-toggle" aria-expanded="false" href="#" data-toggle="dropdown">
								<button class="btn btn-xs btn-info btn-outline">Actions</button>
							</a>
							<ul class="dropdown-menu dropdown-user">
								<li><a href="template-edit.html"><i class="fa fa-edit m-r-sm"></i>Edit</a></li>
								<li><a href="#"><i class="fa fa-trash m-r-sm"></i>Delete</a></li>
							</ul>
						</div>
					</div>
					<div class="ibox-content">
						<a href="email-templates/03.html" target="_blank">
							<img class="img-responsive" alt="" src="./email-templates/img/image-03.jpg">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="row"></div>
	
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
    name: 'template',
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