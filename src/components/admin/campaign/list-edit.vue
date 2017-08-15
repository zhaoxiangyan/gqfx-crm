<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Edit Campaign list</h2>
			<div class="heading-tools"><button class="btn btn-sm"><i class="fa fa-chevron-left fa-fw"></i>Back</button></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-10">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Campaign Title</label>
								<div class="col-sm-10">
								   <el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Publish Date</label>
								<div class="col-sm-10">
									<div class="form-inline">
<template>
    <el-date-picker
      v-model="value"
      type="daterange"
      placeholder="Select date range">
    </el-date-picker>
</template>
										
									</div>
								</div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal p-xs">
							<div class="form-group"><label class="col-sm-1"><h3>English</h3></label>
								<div class="col-sm-11"><div class="summernote1"></div></div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal p-xs">
							<div class="form-group"><label class="col-sm-1"><h3>Chinese</h3></label>
								<div class="col-sm-11"><div class="summernote2"></div></div>
							</div>
						</div>
					</div>
					<div class="ibox-footer">
						<button class="btn btn-primary">Save Changes</button>
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
import '../../../assets/css/plugins/summernote/codemirror.min.css'
import '../../../assets/css/plugins/summernote/monokai.min.css'

import codemirror from '../../../assets/js/plugins/summernote/codemirror.min.js'
export default {
    name: 'list-edit',
	data () {
		return {
			input: '',
			value: ''
		}
	},
	components:{

	},
    mounted: function(){

		$('.summernote1').summernote({
			height: 150,   //set editable area's height
			codemirror: { // codemirror options
			  theme: 'monokai'
			}
		});
		$('.summernote2').summernote({
			height: 150,   //set editable area's height
			codemirror: { // codemirror options
			   theme: 'monokai'
			}
		});
    }
}
</script>
<style scoped>
.note-editor.note-frame{
	border:1px solid #a9a9a9!important;
}
.CodeMirror-code pre{
	border-right:none;
	border-left:30px solid transparent;
}
</style>