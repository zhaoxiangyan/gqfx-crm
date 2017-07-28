<template>
<div class="row border-bottom">
					<nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
						<div class="navbar-header">
							<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
						</div>
						<ul class="nav navbar-top-links navbar-right">
							<li>
								<span class="m-r-sm text-muted welcome-message">Welcome to Risk Management</span>
							</li>
							<li class="dropdown">
								<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
									<img src="../../../assets/img/flags/16/United-Kingdom.png" alt="EN">
								</a>
								<ul class="dropdown-menu">
									<li>
										<a class="btn active"><img src="../../../assets/img/flags/16/United-Kingdom.png" alt="EN"> English</a>
									</li>
									<li>
										<a class="btn"><img src="../../../assets/img/flags/16/china.png" alt="ZH"> Chinese</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="login.html">
									<i class="fa fa-sign-out"></i> Log out
								</a>
							</li>
						</ul>
					</nav>
				</div>
</template>

<script>
    export default {
      name: 'top',  
      data () {
        return {
          // name: 'linxin'
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
