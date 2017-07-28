<template>
<div>			
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left">Home</h2>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-6">
						<div class="ibox float-e-margins">
							<div class="ibox-content">
								<h3>Set Risk Manegement</h3>
								<ul>
								  <li>Conditions
									  <ul>
										  <li>Symbols</li>
											<li>Intervals</li>
											<li>Payouts</li>
											<li>Trade Amount Range</li>
											<li>Max Total (Simultaneous Amount/Maximum Amount)</li>
										</ul>
									</li>
									<li>Alerts</li>
									<li>Trade Limitation
									  <ul>
										  <li>Default Settings</li>
											<li>Amount Limit</li>
											<li>Symbol Limit</li>
										</ul>
									</li>
								</ul>
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
		
		<!-- Modal User-edit -->
		<div class="modal modal-2 edit">
			<span class="modal-close-btn"></span>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<div class="ibox">
						<div class="ibox-title"><h4>Symbol Settings</h4></div>
						<div class="ibox-content">
							<div class="form-horizontal">
								<div class="form-group"><label class="col-sm-2 text-right">Client Level</label>
									<div class="col-sm-10">Level-01</div>
								</div>
								<div class="form-group"><label class="col-sm-2 text-right">Symbol</label>
									<div class="col-sm-10">
										<div class="form-group p-w-sm m-b-none">
											<select class="selectpicker form-control" data-width="100%" data-size="15" multiple data-actions-box="true">
												<option>AUDUSD</option>
												<option>EURUSD</option>
												<option>USDCAD</option>
												<option>EURGBP</option>
												<option>AUDUSD</option>
												<option>EURJPY</option>
												<option>GBPJPY</option>
												<option>AUDJPY</option>
												<option>NZDJPY</option>
												<option>XAGUSD</option>
												<option>XAUUSD</option>
												<option>WTICrude</option>
												<option>BrentCrude</option>
											</select>
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
</div>
</template>
<script>

export default {
    name: 'risk-mng-index',
    components: {

    },
    mounted: function(){
      
    }
}
</script>