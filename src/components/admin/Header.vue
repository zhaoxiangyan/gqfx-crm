<template>
<div class="row border-bottom">
				<nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
					<div class="navbar-header">
						<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0)"><i class="fa fa-bars"></i></a>
					</div>
					<ul class="nav navbar-top-links navbar-right">
						<li>
							<router-link to="/online" target="_blank"><i class="fa fa-superpowers fa-fw"></i>Trade Monitor</router-link>
						</li>
						<li>
						  <router-link to="/risk-mng" target="_blank"><i class="fa fa-shield fa-fw"></i>Risk Mangement</router-link>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-envelope"></i> <span class="label label-warning">12</span>
							</a>
							<ul class="dropdown-menu dropdown-messages">
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">20m ago</small>
											<strong>Mike Loreipsum started following Monica Smith</strong>.
											<br>
											<small class="text-muted">11:37 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">1h ago</small>
											<strong>Chris Johnatan Overtunk started following Monica Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">2h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">3h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="dropdown-messages-box">
										<div>
											<small class="pull-right">10h ago</small>
											<strong>Monica Smith love Kim Smith</strong>.
											<br>
											<small class="text-muted">10:30 - 2017-03-05</small>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="text-center link-block">
										<router-link to="/admin/inquery/index">
											<i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
										</router-link>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
							</a>
							<ul class="dropdown-menu dropdown-alerts">
								<li>
									<router-link to="/admin/approval/withdrawal">
										<div>
											<i class="fa fa-suitcase fa-fw"></i> Withdrawal Request
											<span class="pull-right badge badge-danger m-t-xs">15</span>
										</div>
									</router-link>
								</li>
								<li class="divider"></li>
								<li>
									<router-link to="/admin/approval/account">
										<div>
											<i class="fa fa-address-card-o fa-fw"></i> Document Request
											<span class="pull-right badge badge-success m-t-xs">15</span>
										</div>
									</router-link>
								</li>
								<li class="divider"></li>
								<li>
									<router-link to="/admin/approval/rank">
										<div>
											<i class="fa fa-pie-chart fa-fw"></i> Rank Request
											<span class="pull-right badge badge-info m-t-xs">2</span>
										</div>
									</router-link>
								</li>
							</ul>
						</li>
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<img src="../../assets/img/flags/16/United-Kingdom.png" alt="EN">
							</a>
							<ul class="dropdown-menu">
								<li>
									<a class="btn active"><img src="../../assets/img/flags/16/United-Kingdom.png" alt="EN"> English</a>
								</li>
								<li>
									<router-link to="/cn/admin" class="btn"><img src="../../assets/img/flags/16/china.png" alt="ZH"> Chinese</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/adminlogin">
								<i class="fa fa-sign-out"></i> Log out
							</router-link>
						</li>
					</ul>
				</nav>
			</div>
</template>
<script>
export default {
  name: 'header',
  mounted: function(){
	    $('.navbar-minimalize').on('click', function () {
			$("body").toggleClass("mini-navbar");
			SmoothlyMenu();
        }); 
	    function SmoothlyMenu() {
			if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
				// Hide menu in order to smoothly turn on when maximize menu
				$('#side-menu').hide();
				// For smoothly turn on menu
				setTimeout(
					function () {
						$('#side-menu').fadeIn(400);
					}, 200);
			} else if ($('body').hasClass('fixed-sidebar')) {
				$('#side-menu').hide();
				setTimeout(
					function () {
						$('#side-menu').fadeIn(400);
					}, 100);
			} else {
				// Remove all inline style from jquery fadeIn function to reset menu state
				$('#side-menu').removeAttr('style');
			}
        }
  }
}
</script>
<style scoped>
.navbar-right{
	margin-right:0px;
}
.nav>li.active{
	border-left:none;
	background:none;
}
.nav>li.active>a{
	color:#999c9c;
}
.dropdown-menu>.active>a{
	color:#333;
	color:inherit;
	background:#fff;
}
</style>