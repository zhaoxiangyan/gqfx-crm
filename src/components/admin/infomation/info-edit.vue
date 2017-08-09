<template>
<div>
	<div class="row wrapper border-bottom white-bg page-heading">
		<div class="col-lg-10">
			<h2 class="pull-left m-r-sm">Edit Infomation</h2>
			<div class="heading-tools"><button class="btn btn-sm"><i class="fa fa-chevron-left fa-fw"></i>Back</button></div>
		</div>
	</div>
	
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="row">
			<div class="col-lg-10">
				<div class="ibox float-e-margins">
					<div class="ibox-content">
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Display Setting</label>
								<div class="col-sm-8">
									<!--<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
										<optgroup label="Account Group">
											<option>Default</option>
											<option>XXXX</option>
										</optgroup>
										<optgroup label="Client Level">
											<option>Level-01</option>
											<option>Level-02</option>
											<option>VIP-XXX</option>
										</optgroup>
									</select>-->
<template>
  <el-select v-model="value" multiple placeholder="Nothing selected"  >
    <el-option-group
      v-for="group in options1"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>										
								</div>
							</div>
						</div>
						<div class="form-horizontal">
							<div class="form-group"><label class="col-sm-2 control-label">Publish Start Date</label>
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
      v-model="value1"
      type="datetime"
      placeholder="Select date time" 
	  >
    </el-date-picker>
</template>											
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Publish End Date</label>
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
      v-model="value2"
      type="datetime"
      placeholder="Select date time" 
	  >
    </el-date-picker>
</template>											
									</div>
								</div>
							</div>
							<div class="form-group"><label class="col-sm-2 control-label">Publish Date</label>
								<div class="col-sm-10">
									<div class="form-inline">
<template>
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      placeholder="Select date range">
    </el-date-picker>
</template>
										
									</div>
								</div>
							</div>							
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal">
							<h3>English</h3>
							<div class="form-group"><label class="col-sm-1 control-label">Title</label>
								<div class="col-sm-11"><input class="form-control" type="text"></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label">Text</label>
								<div class="col-sm-11"><div class="summernote1"></div></div>
							</div>
						</div>
						<hr class="hr-line-solid">
						<div class="form-horizontal">
							<h3>Chinese</h3>
							<div class="form-group"><label class="col-sm-1 control-label">Title</label>
								<div class="col-sm-11"><input class="form-control" type="text"></div>
							</div>
							<div class="form-group"><label class="col-sm-1 control-label">Text</label>
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

// import "../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css" 
// import "../../../assets/css/plugins/datapicker/datepicker3.css" 
// import "../../../assets/css/plugins/summernote/summernote.css" 
import "../../../assets/css/plugins/summernote/codemirror.min.css" 
import "../../../assets/css/plugins/summernote/monokai.min.css" 
// import "../../../assets/css/plugins/select/bootstrap-select.css" 

// import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
// import Xml  from "../../../assets/js/plugins/summernote/xml.min.js"
// import Formatting from "../../../assets/js/plugins/summernote/formatting.min.js"
import codemirror from '../../../assets/js/plugins/summernote/codemirror.min.js'
export default {
    name: 'info-edit',
	data () {
        return {
		    value1: '',
		    value2: '',
		    value3: '',
		    options1: [{
				label: 'Account Group',
				options: [{
					value: 'Default',
					label: 'Default'
				}, {
					value: 'xxxx',
					label: 'xxxx'
				}]
				}, {
				label: 'Client Level',
				options: [{
					value: 'Level-01',
					label: 'Level-01'
				}, {
					value: 'Level-02',
					label: 'Level-02'
				}, {
					value: 'VIP-XXX',
					label: 'VIP-XXX'
				}]
			    }],
			value: '',
	    };
	},
	components:{
        // Datepicker,
        // Xml,
        // Formatting
	},
    mounted: function(){
        // $('input[name="daterange"]').daterangepicker({
		// 		timePicker: true,
	    // });
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
<style>
.note-editor.note-frame{
	border:1px solid #a9a9a9!important;
}
/*全屏按钮bug，隐藏掉*/
.btn-fullscreen{
	display:none!important;
}
.el-select {
	width:100%;
}
</style>