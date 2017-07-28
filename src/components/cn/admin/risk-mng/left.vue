<template>
<div class="navbar-default navbar-static-side" role="navigation">
				<div class="sidebar-collapse">
					<ul class="nav metismenu skin-2" id="side-menu">
						<li class="nav-header">
							<div class="dropdown profile-element text-center"><span><img src="../../../../assets/img/logo-w.png" class="img-responsive"></span>
								<span class="block m-t-xs text-white"> <strong class="font-bold">Risk Management</strong></span>
							</div>
							<div class="logo-element">
								GQ
							</div>
						</li>
						<li class="active">
							<a href="../index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Home</span></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-sliders"></i> <span class="nav-label">Conditions</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse">
								<li><a href="../conditions/symbols.html">Symbols</a></li>
								<li><a href="../conditions/intervals.html">Intervals</a></li>
								<li><a href="../conditions/payouts.html">Payouts</a></li>
								<li><a href="../conditions/amount-range.html">Trade Amount Range</a></li>
								<li><a href="../conditions/maxtotal.html">Max Total</a></li>
							</ul>
						</li>
						<li>
							<a href="../alerts/index.html"><i class="fa fa-bell"></i> <span class="nav-label">Alerts</span></a>
						</li>
						<li class="active">
							<a href="#"><i class="fa fa-hourglass-2"></i> <span class="nav-label">Trade Limitation</span><span class="fa arrow"></span></a>
							<ul class="nav nav-second-level collapse in">
								<li><a href="../limitation/default.html">Default Settings</a></li>
								<li><a href="../limitation/amount.html">Amount Limit</a></li>
								<li class="active"><a href="../limitation/symbols.html">Symbol Limit</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
</template>

<script>
    export default {
      name: 'left',
      data () {
          return {
			  
		  }
      },
      computed: {

      },
      methods: {

	  }
    }

</script>

<style scoped>

</style>
