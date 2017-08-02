<template>
<div>		
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Media Library</h2>
			<div class="heading-tools">
				<div class="fileinput fileinput-new" data-provides="fileinput">
					<span class="btn btn-default btn-file"><span class="fileinput-new"><i class="fa fa-upload fa-fw"></i>Select file</span><span class="fileinput-exists"><i class="fa fa-upload"></i> Select file</span><input type="hidden"><input name="..." type="file"></span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content">
		<div class="row">
			<div class="col-lg-12">
				<div class="ibox float-e-margins">
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="image">
									<img class="img-responsive" alt="image" src="../../../assets/img/p5.jpg">
								</div>
							</a>
							<div class="file-name">
								Italy street_000005...
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>	
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="image">
									<img class="img-responsive" alt="image" src="../../../assets/img/p1.jpg">
								</div>
							</a>
							<div class="file-name">
								Italy street.jpg
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>	
						</div>
					</div>	
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="image">
									<img class="img-responsive" alt="image" src="../../../assets/img/p2.jpg">
								</div>
							</a>
							<div class="file-name">
								My feel.png
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="icon">
									<i class="fa fa-music"></i>
								</div>
							</a>
							<div class="file-name">
								Michal Jackson.mp3
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>	
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="image">
									<img class="img-responsive" alt="image" src="../../../assets/img/p3.jpg">
								</div>
							</a>
							<div class="file-name">
								so_cool.png
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>	
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="icon">
									<i class="img-responsive fa fa-film"></i>
								</div>
							</a>
							<div class="file-name">
								Monica's birthday.mpg4
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="icon">
									<img class="img-responsive" alt="image" src="../../../assets/img/p4.jpg">
								</div>
							</a>
							<div class="file-name">
								xxxxxxxx.gif
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>
						</div>
					</div>
					<div class="file-box">
						<div class="file">
							<a href="#" data-toggle="modal" data-target="#media-image">
								<span class="corner"></span>
								<div class="image">
									<img class="img-responsive" alt="image" src="../../../assets/img/p7.jpg">
								</div>
							</a>
							<div class="file-name">
								Italy street.jpg
								<div class="pull-right"><button class="btn btn-default btn-xs" title="Delete"><i class="fa fa-trash"></i></button></div>
							</div>
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

	<!-- Modal Media -->
	<div id="media-image" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="m-b-md"><img src="../../../assets/img/12.jpg" class="img-responsive"></div>
					<h4 id="copytext">xxxxxx/xxxxx/xxxxx.jpg</h4>
					<button class="btn btn-white btn-sm" data-clipboard-target="#copytext"><i class="fa fa-copy"></i> Copy</button>
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
import '../../../assets/css/plugins/jasny/jasny-bootstrap.min.css'

import Jasny from '../../../assets/js/plugins/jasny/jasny-bootstrap.min.js'
import Clipboards from '../../../assets/js/plugins/clipboard/clipboard.min.js'
export default {
    name: 'media-index',
    components: {
        Jasny,
        Clipboards
    },
    mounted: function(){
        $('input[id=lefile]').change(function() {
			$('#upload').val($(this).val());
		});
        new Clipboard('.btn');
    }
}
</script>