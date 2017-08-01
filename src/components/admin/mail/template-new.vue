<template>
<div>	
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">New Mail Template</h2>
			<div class="heading-tools"><button class="btn btn-sm"><i class="fa fa-chevron-left fa-fw"></i>Back</button></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-10">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2">Template Name</label>
								<div class="col-sm-10">
									<input class="form-control">
								</div>
							</div>
						</div>
						<hr class="hr-line-dashed">
						<h5 class="m-t-n">HTML Tag Editing</h5>
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-1 control-label"><h3>English</h3></label>
								<div class="col-sm-11">
									<div class="border-box">
										<textarea id="editor_en"></textarea>
									</div>
								</div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-1 control-label"><h3>Chinese</h3></label>
								<div class="col-sm-11">
									<div class="border-box">
										<textarea id="editor_zh-hans"></textarea>
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
</div>
</template>
<script>
// import '../../../assets/css/plugins/codemirror/codemirror.css'
// import '../../../assets/css/plugins/codemirror/ambiance.css'

// import Codemirror from '../../assets/js/plugins/codemirror/codemirror.js'
// import Javascript from '../../../assets/js/plugins/codemirror/mode/javascript/javascript.js'

import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
// import 'codemirror/mode/javascript/javascript'
export default {
    name: 'template-new',
	components:{
        CodeMirror
        // Javascript
	},
    mounted: function(){
       	var jsEditor = CodeMirror.fromTextArea(document.getElementById('editor_en'), {
			mode: "javascript",
			lineNumbers: true,
			indentUnit: 2
		});
		var jsEditor = CodeMirror.fromTextArea(document.getElementById('editor_zh-hans'), {
			mode: "javascript",
			lineNumbers: true,
			indentUnit: 2
		});
    }
}
</script>