<template>
<div id="message">
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Send Message</h2>
			<div class="heading-tools"><button class="btn btn-sm"><i class="fa fa-chevron-left fa-fw"></i>Back</button></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-10">
				<div class="ibox float-e-margins">
		<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Sent Date</label>
								<div class="col-sm-10">
									<div class="form-inline">
										<!--<div class="input-group date">
											<span class="input-group-addon"><i class="fa fa-calendar"></i></span><input class="form-control" type="text" data-provide="datepicker">
										</div>
										<select class="form-control">
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
											<option>13</option>
											<option>14</option>
											<option>15</option>
											<option>16</option>
											<option>17</option>
											<option>18</option>
											<option>19</option>
											<option>20</option>
											<option>21</option>
											<option>22</option>
											<option>23</option>
										</select>
										:
										<select class="form-control">
											<option>00</option>
											<option>05</option>
											<option>10</option>
											<option>15</option>
											<option>20</option>
											<option>25</option>
											<option>30</option>
											<option>35</option>
											<option>40</option>
											<option>45</option>
											<option>50</option>
											<option>55</option>
										</select>-->
<template>
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="Select date time"  >
    </el-date-picker>
</template>					
									</div>
								</div>
							</div>
						</div>
						<div class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 control-label">Template</label>
								<div class="col-sm-7">
									<div class="input-group">
										<select class="form-control">
											<option selected>Default</option>
											<option>Sample sample</option>
											<option>Test test test</option>
											<option>zserfvbgtyhn</option>
										</select>
										<span class="input-group-btn"><button class="btn btn-default">Read</button></span>
									</div>
								</div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal">
							<h3>English</h3>
							<div class="form-group"><label class="col-sm-1 control-label">Subject</label>
								<div class="col-sm-11"><input class="form-control" type="text"></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label">Text</label>
								<div class="col-sm-11"><div class="summernote1"></div></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label"></label>
								<div class="col-sm-11">
									<button data-toggle="collapse" href="#code1" aria-expanded="false" aria-controls="code" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>Code</button>
									<div class="collapse" id="code1">
										<dl class="col-md-3 p-sm">
											<dt>ClientID</dt>
											<dd><span id="clientid">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#clientid"><i class="fa fa-copy"></i></button></dd>
											<dt>Name</dt>
											<dd><span id="name">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#name"><i class="fa fa-copy"></i></button></dd>
											<dt>E-mail</dt>
											<dd><span id="email">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#email"><i class="fa fa-copy"></i></button></dd>
											<dt>Cleint Level</dt>
											<dd><span id="clevel">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#clevel"><i class="fa fa-copy"></i></button></dd>
											<dt>Rank</dt>
											<dd><span id="rank">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#rank"><i class="fa fa-copy"></i></button></dd>
											<dt>Balance</dt>
											<dd><span id="balance">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#balance"><i class="fa fa-copy"></i></button></dd>
											<dt>Point</dt>
											<dd><span id="point">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#point"><i class="fa fa-copy"></i></button></dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal">
							<h3>Chinese</h3>
							<div class="form-group"><label class="col-sm-1 control-label">Subject</label>
								<div class="col-sm-11"><input class="form-control" type="text"></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label">Text</label>
								<div class="col-sm-11"><div class="summernote2"></div></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label"></label>
								<div class="col-sm-11">
									<button data-toggle="collapse" href="#code2" aria-expanded="false" aria-controls="code" class="btn btn-xs btn-default"><i class="fa fa-plus fa-fw"></i>Code</button>
									<div class="collapse" id="code2">
										<dl class="col-md-3 p-sm">
											<dt>ClientID</dt>
											<dd><span id="clientid">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#clientid"><i class="fa fa-copy"></i></button></dd>
											<dt>Name</dt>
											<dd><span id="name">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#name"><i class="fa fa-copy"></i></button></dd>
											<dt>E-mail</dt>
											<dd><span id="email">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#email"><i class="fa fa-copy"></i></button></dd>
											<dt>Cleint Level</dt>
											<dd><span id="clevel">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#clevel"><i class="fa fa-copy"></i></button></dd>
											<dt>Rank</dt>
											<dd><span id="rank">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#rank"><i class="fa fa-copy"></i></button></dd>
											<dt>Balance</dt>
											<dd><span id="balance">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#balance"><i class="fa fa-copy"></i></button></dd>
											<dt>Point</dt>
											<dd><span id="point">xxxxxxxxxx</span> <button class="btn btn-white btn-xs pull-right cli" data-clipboard-target="#point"><i class="fa fa-copy"></i></button></dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ibox-footer">
						<button class="btn btn-warning">Send</button>
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
// import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
// import '../../../assets/css/plugins/datapicker/datepicker3.css'
// import '../../../assets/css/plugins/summernote/summernote.css'
import '../../../assets/css/plugins/summernote/codemirror.min.css'
import '../../../assets/css/plugins/summernote/monokai.min.css'
// import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
// import Xml from '../../../assets/js/plugins/summernote/xml.min.js'
// import Formatting from '../../../assets/js/plugins/summernote/formatting.min.js'
// import Clipboardmin from '../../../assets/js/plugins/clipboard/clipboard.min.js'
import Clipboard from 'clipboard'
// import codemirror from '../../../assets/js/plugins/summernote/codemirror.min.js'
export default {
    name: 'message',
	// props: ["value1"],
	data () {
        return {
		    value: ''
		    // pickerOptions1: {	
			// 		onClick(picker) {
			// 		const date = new Date();
			// 		picker.$emit('pick', date);
			// 		}
			// }
	    };
	},
	props: {
		valueData: ''
	},
	methods: {
		
	},
	components:{
    //   Datepicker,
    //   Xml,
    //   Formatting,
      Clipboard
	//   codemirror
	},
    mounted: function(){
        $('.summernote1').summernote({
			height:150,    //set editable area's height
			codemirror: {
				theme: 'monokai'
			}
			// htmlMode:true
		});
		$('.summernote2').summernote({
			height: 150,   //set editable area's height
			codemirror: { // codemirror options
			  theme: 'monokai'
			}
		});
		// $(document).ready(function (){
			new Clipboard('.cli');
		// });
    }
}
</script>
<style>
#message{

}
.note-editor.note-frame{
	border:1px solid #a9a9a9!important;
}
.CodeMirror-code pre{
	border-right:none;
	border-left:30px solid transparent;
}
/*全屏按钮bug，隐藏掉*/
.btn-fullscreen{
	display:none!important;
}
</style>