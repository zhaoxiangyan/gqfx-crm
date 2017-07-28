<template>
<div class="black-bg login">
<div class="pull-right p-md">
		<div class="btn-group">
			<button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"><img src="../assets/img/flags/16/United-Kingdom.png" alt="EN"> English <span class="caret"></span></button>
			<ul class="dropdown-menu">
				<li><a href="#"><img src="../assets/img/flags/16/United-Kingdom.png" alt="EN"> English</a></li>
				<li><a href="#"><img src="../assets/img/flags/16/china.png" alt="ZH"> Chinese</a></li>
			</ul>
		</div>
	</div>
	<div class="middle-box text-center loginscreen animated fadeInDown">
		<div class="m-t-lg">
			<div class="logo-container m-b-lg">
				<img src="../assets/img/logo-w.png" class="img-responsive">
			</div>
			<h3 class="text-muted">Welcome to Admin CRM</h3>
			<p>Login in. To see it in action.</p>
			<form id="form" class="m-t" role="form" action="index.html">
				<div class="form-group">
					<input name="min" type="text" class="form-control" placeholder="Login ID" required="">
				</div>
				<div class="form-group">
					<input name="password" type="password" class="form-control" placeholder="Password" required="">
				</div>
				<div class="checkbox">
					<label><input type="checkbox"> Remember Me</label>
				</div>
				<button type="submit" class="btn btn-orange block full-width m-b">Login</button>
				<small>gqfx.com </small>
			</form>
		</div>
	</div>
</div>
</template>
<script>

</script>
<style scoped>
.login{
    height:100%;
}
</style>