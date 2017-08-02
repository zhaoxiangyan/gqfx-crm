<template>
<div>
	
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Campaign Bunner and List / <small>Mypage of Client</small></h2>
			<div class="heading-tools"><a href="list-new.html" class="btn btn-sm btn-default"><i class="fa fa-plus"></i> New</a></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<h3 class="pull-left m-r-sm">Top Bunner Area</h3>
						<div class="pull-left m-xs">Displayed in the banner area at the top of My Page.</div>
						<div class="clearfix"></div>
						<ul class="campaign-bunner">
							<li class="danger-element ui-state-default">
								<div><img src="../../../assets/img/dummy_banner.png" class="img-responsive"></div>
								<div class="text-right">
									<a class="btn btn-sm btn-white text-info" href="#" data-toggle="modal" data-target="#bunner-edit"><i class="fa fa-edit fa-fw"></i>Edit</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<h3 class="pull-left m-r-sm">Campaign List</h3>
						<div class="pull-left m-xs">Switch display order by drag & drop.</div>
						<div class="clearfix"></div>
						<ul class="campaign-list" id="sortable">
							<li class="warning-element ui-state-default">
								<span class="title">Simply dummy text of the test sample exsample bonus</span>
								<div class="row detail">
									<div class="col-sm-8">
										<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
									</div>
									<div class="col-sm-4 text-right">
										<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
										<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
										<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
									</div>
								</div>
							</li>
							<li class="warning-element ui-state-default">
								<span class="title">Happy Bonus!!!!</span>
								<div class="row detail">
									<div class="col-sm-8">
										<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
									</div>
									<div class="col-sm-4 text-right">
										<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
										<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
										<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
									</div>
								</div>
							</li>
							<li class="warning-element ui-state-default">
								<span class="title">Ultra Bonus and Point UP!!!!!</span>
								<div class="row detail">
									<div class="col-sm-8">
										<span class="m-r-lg">Publish Date<i class="fa fa-clock-o"></i> 2017-04-01</span><span>End Date<i class="fa fa-clock-o"></i> 2017-04-30</span>
									</div>
									<div class="col-sm-4 text-right">
										<a class="btn btn-sm btn-white text-info" href="list-edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a>
										<a class="btn btn-sm btn-white" href="#" data-toggle="modal" data-target="#view"><i class="fa fa-eye fa-fw"></i>Preview</a>
										<a class="btn btn-sm btn-white" href="#"><i class="fa fa-trash"></i></a>
									</div>
								</div>
							</li>
						</ul>
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
	<!-- Modal List View -->
	<div id="view" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div>
						<label class="label label-lang">English</label>
						<h3>Sample Sample Test Bonus</h3>
						<p>asfsdfasdfasdf</p>
						<div><img src="../../../assets/img/p3.jpg" class="img-responsive"></div>
					</div>
					<div class="hr-line-dashed"></div>
					<div>
						<label class="label label-lang">Chinese</label>
						<h3>样品样品测试奖金</h3>
						<p>asfsdfasdfasdf</p>
						<div><img src="../../../assets/img/p3.jpg" class="img-responsive"></div>
					</div>
				</div>
				<div class="modal-footer p-sm">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Bunner Edit -->
	<div id="bunner-edit" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="form-horizontal p-xs">
						<div class="form-group"><label class="col-sm-1"><h3>English</h3></label>
							<div class="col-sm-11">
								<div class="input-group"><input class="form-control" type="text" placeholder="Enter image URL"><span class="input-group-btn"><button class="btn btn-default">Read</button></span></div>
								<div class="row p-h-sm">
									<div class="col-md-11"><img src="../../../assets/img/dummy_banner.png" class="img-responsive"></div>
									<div class="col-md-1"><button class="btn btn-sm btn-white"><i class="fa fa-trash"></i></button></div>
								</div>
							</div>
						</div>
					</div>
					<hr class="hr-line-solid">
					<div class="form-horizontal p-xs">
						<div class="form-group"><label class="col-sm-1"><h3>Chinese</h3></label>
							<div class="col-sm-11">
								<div class="input-group"><input class="form-control" type="text" placeholder="Enter image URL"><span class="input-group-btn"><button class="btn btn-default">Read</button></span></div>
								<div class="row p-h-sm">
									<div class="col-md-11"><img src="../../../assets/img/dummy_banner.png" class="img-responsive"></div>
									<div class="col-md-1"><button class="btn btn-sm btn-white"><i class="fa fa-trash"></i></button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer p-sm">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import JqueryUI from '../../../assets/js/plugins/jquery-ui/jquery-ui.min.js'
// import Custum from '../../assets/js/custum.js'
export default {
    name: 'list',
	components:{
	//   Custum,
      JqueryUI
	},
    mounted: function(){
      	$("#sortable").sortable();
		$("#sortable").disableSelection();
    }
}
</script>