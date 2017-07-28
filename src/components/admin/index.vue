<template>
			<div class="wrapper wrapper-content">
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<span class="label label-success pull-right">Today</span>
								<h5>Account</h5>
							</div>
							<div class="ibox-content">
								<h1 class="no-margins">130</h1>
								<small>No.of Client</small>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<span class="label label-info pull-right">This Month</span>
								<h5>Account</h5>
							</div>
							<div class="ibox-content">
								<h1 class="no-margins">19,821</h1>
								<div class="stat-percent font-bold text-navy">120% <i class="fa fa-level-up"></i></div>
								<small>No.of Client</small>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<span class="label label-success pull-right">Today</span>
								<h5>Commission</h5>
							</div>
							<div class="ibox-content">
								<h1 class="no-margins">6,247.80</h1>
								<div class="stat-percent font-bold text-navy">144% <i class="fa fa-level-up"></i></div>
								<small>Commission Paid</small>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<span class="label label-info pull-right">This Month</span>
								<h5>Commission</h5>
							</div>
							<div class="ibox-content">
								<h1 class="no-margins">54,057.52</h1>
								<div class="stat-percent font-bold text-danger">98% <i class="fa fa-level-down"></i></div>
								<small>Commission Paid</small>
							</div>
						</div>
					</div>
				</div>
				
				<!--<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<h5>Activity</h5>
								<div class="pull-right">
									<div class="btn-group">
										<button type="button" class="btn btn-xs btn-white active">Today</button>
										<button type="button" class="btn btn-xs btn-white">Monthly</button>
										<button type="button" class="btn btn-xs btn-white">Annual</button>
									</div>
								</div>
							</div>
							<div class="ibox-content">
								<div class="row">
									<div class="col-lg-9">
										<div class="flot-chart">
											<div class="flot-chart-content" id="flot-dashboard-chart"></div>
										</div>
									</div>
									<div class="col-lg-3">
										<ul class="stat-list">
											<li>
												<h2 class="no-margins">2,346</h2>
												<small>Active Login</small>
												<div class="stat-percent">112% <i class="fa fa-level-up text-navy"></i></div>
												<div class="progress progress-mini">
													<div style="width: 100%;" class="progress-bar"></div>
												</div>
											</li>
											<li>
												<h2 class="no-margins ">744,422</h2>
												<small>Transaction Volume</small>
												<div class="stat-percent">90% <i class="fa fa-level-down text-navy"></i></div>
												<div class="progress progress-mini">
													<div style="width: 90%;" class="progress-bar"></div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>-->

				<div class="row">
					<div class="col-lg-6 col-md-6">
						<div class="widget style1">
							<div class="row">
								<div class="col-xs-2 text-center">
									<i class="fa fa-trophy fa-5x"></i>
								</div>
								<div class="col-xs-5 text-right">
									<span> Today Deposit </span>
									<h2 class="font-bold">$ 3,300.00</h2>
								</div>
								<div class="col-xs-5 text-right">
									<span> This Month Deposit </span>
									<h2 class="font-bold">$ 84,232.00</h2>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6">
						<div class="widget style1">
							<div class="row">
								<div class="col-xs-2 text-center">
									<i class="fa fa-briefcase fa-5x"></i>
								</div>
								<div class="col-xs-5 text-right">
									<span> Today Withdrawal </span>
									<h2 class="font-bold">$ 1,232.00</h2>
								</div>
								<div class="col-xs-5 text-right">
									<span> This Month Withdrawal </span>
									<h2 class="font-bold">$ 4,232.50</h2>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="wrapper wrapper-content">
					<div class="row">
						<div class="col-lg-8">
							<div class="ibox float-e-margins">
								<div class="ibox-title">
									<h5>Close Trade</h5>
									<div class="ibox-tools">
										<a class="collapse-link" @click.native="collapse">
											<i class="fa fa-chevron-up"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content">
									<div class="tabs-container">
										<ul class="nav nav-tabs" role="tablist">
											<li role="presentation" class="active">
												<a href="#fx-today" data-toggle="tab" aria-controls="fx-today">FX<small class="label-white-outline m-l-xs">Today</small></a>
											</li>
											<li role="presentation">
												<a href="#fx-monthly" data-toggle="tab" aria-controls="sfx-monthly">FX<small class="label-white-outline m-l-xs">This Month</small></a>
											</li>
											<li role="presentation">
												<a href="#bo-today" data-toggle="tab" aria-controls="bo-today">BO<small class="label-white-outline m-l-xs">Today</small></a>
											</li>
											<li role="presentation">
												<a href="#bo-monthly" data-toggle="tab" aria-controls="bo-monthly">BO<small class="label-white-outline m-l-xs">This Month</small></a>
											</li>
										</ul>

										<div class="tab-content">
											<div class="tab-pane active" id="fx-today">
												<div class="panel-body">
													<div class="row text-center">
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>USDCAD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURGBP</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>XAGUSD</small><h4>14,560.00</h4>
														</div>	
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>XAUUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>WTICrude</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>BrentCrude</small><h4>14,560.00</h4>
														</div>
													</div>
												</div>
											</div>
											<!-- tab-pane END -->
											<div class="tab-pane" id="fx-monthly">
												<div class="panel-body">
													<div class="row text-center">
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>USDCAD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURGBP</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>XAGUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>XAUUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>WTICrude</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>BrentCrude</small><h4>214,560.00</h4>
														</div>
													</div>
												</div>
											</div>
											<!-- tab-pane END -->
											<div class="tab-pane" id="bo-today">
												<div class="panel-body">
													<div class="row text-center">
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>USDCAD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURGBP</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPJPY</small><h4>14,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDJPY</small><h4>14,560.00</h4>
														</div>
													</div>
												</div>
											</div>
											<!-- tab-pane END -->
											<div class="tab-pane" id="bo-monthly">
												<div class="panel-body">
													<div class="row text-center">
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>USDCAD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>NZDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURGBP</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDUSD</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>EURJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>GBPJPY</small><h4>214,560.00</h4>
														</div>
														<div class="col-sm-2 col-xs-4 m-b-xs">
															<small>AUDJPY</small><h4>214,560.00</h4>
														</div>
													</div>
												</div>
											</div>
											<!-- tab-pane END -->
										</div>
									</div>
								</div>
							</div>
							<!-- ibox END -->
						</div>
						
						<div class="col-lg-4">
							<div class="ibox float-e-margins">
								<div class="ibox-title">
									<h5>Rank Statistics</h5>
									<div class="ibox-tools">
										<a class="collapse-link" @click.native="collapse">
											<i class="fa fa-chevron-up"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content p-xs">
									<div id="donut-chart"></div>
								</div>
							</div>
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
import '../../assets/css/plugins/morris/morris-0.4.3.min.css';
// import Raphael from '../../assets/js/plugins/morris/raphael.js'
import Morri from '../../assets/js/plugins/morris/morris.js'

export default {
    name: 'index',
    data () {
      return {
     
      }
    },
    components: {
    //   Raphael,
	  Morri
    },
    mounted: function(){
		Morris.Donut({
			element: 'donut-chart',
			data: [{ label: "Trader", value: 20125 },
					{ label: "IB", value: 2587 },
					{ label: "MIB", value: 151 },
					{ label: "PIB", value: 36 } ],
			resize: true,
			colors: ['#87d6c6', '#54cdb4','#1ab394'],
		});
		$('.collapse-link').on('click', function () {
		    var ibox = $(this).closest('div.ibox');
		    var button = $(this).find('i');
		    var content = ibox.find('div.ibox-content');
		    content.slideToggle(200);
		    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
		    ibox.toggleClass('').toggleClass('border-bottom');
		    setTimeout(function () {
		        ibox.resize();
		        ibox.find('[id^=map-]').resize();
		    }, 50);
		});
    },
	methods: {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

