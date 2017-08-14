<template>
<div>		
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Infomation</h2>
					<div class="heading-tools"><router-link to="/admin/infomation/info-new" class="btn btn-sm btn-default"><i class="fa fa-plus fa-fw"></i>New</router-link></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<div class="ibox-tools">
									<div class="input-group col-sm-4 pull-left">
									         <el-input class="table_cell right_radius" v-model="input" placeholder="Table in Search"></el-input>
											 <el-button class="table_cell left_radius" type="primary">Search</el-button>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-resonsive">

<template>
  <el-table
    :data="InfomationData"
    border
    style="width: 100%;font-size:13px;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
	<el-table-column
      prop="startDate"
      label="Publish Start Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="endDate"
      label="End Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="title"
      label="Title"
      sortable
	  width="430">
    </el-table-column>
    <el-table-column
      prop="accountGroup"
      label="Account Group"
      sortable>
    </el-table-column>
	<el-table-column 
	   label="Action"
	   width="100">
	   <template scope="scope">
	           <button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><router-link to="/admin/infomation/info-edit"><i class="fa fa-edit fa-fw"></i>Edit</router-link></li>
						<li><a href="javascript:void(0)"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
					</ul>
	   </template>
	</el-table-column>
  </el-table>
</template>										
								</div>
<template>
<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next "
      :total="100"
	  style="text-align:right;padding:8px 0;">
    </el-pagination>
</template>									
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
    name: 'infomation-index',
	data () {
	   return {
		//    搜索框数据
		   input: '',
		   InfomationData: [{
			    startDate: '2017-02-15 09:45',
				endDate: '2017-08-11 10:15',
				title: 'System Version up:Infomation on System Version up for Mypage',
				accountGroup: 'Default'
			    },{
				startDate: '2017-02-15 09:45',
				endDate: '2017-08-11 10:15',
				title: 'System Version up:Infomation on System Version up for Mypage',
				accountGroup: 'Default'
			    },{
				startDate: '2017-02-15 09:45',
				endDate: '2017-08-11 10:15',
				title: 'System Version up:Infomation on System Version up for Mypage',
				accountGroup: 'FX-01'
			}],
			// 分页
			currentPage: 2
	   }
    },
	components:{

	},
	methods: {
	    // 饿了么分页
		handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
    },
    mounted: function(){
 
    }
}
</script>
<style scoped>
.ibox-content tr:last-child .dropdown-menu{
	
}
.ibox-content tr:first-child .dropdown-menu{
   top:0;
}
.ibox-title{
	padding:15px 20px;
}
</style>