<template>
<div>
			
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">
					<h2 class="pull-left m-r-sm">Client</h2>
					<div class="heading-tools"><a href="#" class="btn btn-sm btn-default" data-cta-target=".new" data-disable-scroll="true"><i class="fa fa-plus fa-fw"></i>New</a></div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<h5>Search</h5>
								<div class="ibox-tools">
									<a class="collapse-link">
										<i class="fa fa-chevron-up"></i>
									</a>
								</div>
							</div>
							<div class="ibox-content">
								<div class="row">
								  <div class="col-sm-3">
										<label>Client ID</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-sm-3">
										<label>Name</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-sm-3">
										<label>MT5 Account</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-sm-3">
										<label>Phone</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-3">
										<label>E-mail</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-sm-3">
										<label>Agent ID</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
									<div class="col-sm-3">
										<label>Status</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" data-size="10" multiple>
												<optgroup label="Registration">
													<option>Temporary</option>
													<option>Registered</option>
													<option>Unsubscribe</option>
												</optgroup>
												<optgroup label="Verification">
													<option>Pending</option>
													<option>Requested</option>
													<option>Verified</option>
													<option>Declined</option>
												</optgroup>
												<optgroup label="Client Status">
													<option>Normal</option>
													<option>Black List</option>
												</optgroup>
											</select>
										</div>
									</div>
									<div class="col-sm-3">
										<label>National ID</label>
										<div class="form-group"><input class="form-control"></div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-3">
										<label>Client Level</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Level-01</option>
												<option>Level-02</option>
												<option>Level-03</option>
												<option>Level-04</option>
												<option>VIP-01</option>
												<option>VIP-02</option>
												<option>Diamond</option>
											</select>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Rank</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Trader</option>
												<option>IB</option>
												<option>MIB</option>
												<option>PIB</option>
											</select>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Account Group</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Default</option>
												<option>FX-01</option>
												<option>FX-02</option>
											</select>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Month of Birth</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" data-size="5" multiple>
												<option>Jan:01</option>
												<option>Feb:02</option>
												<option>Mar:03</option>
												<option>Apl:04</option>
												<option>May:05</option>
												<option>Jun:06</option>
												<option>Jul:07</option>
												<option>Aug:08</option>
												<option>Sep:09</option>
												<option>Oct:10</option>
												<option>Nov:11</option>
												<option>Dec:12</option>
											</select>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-3">
										<label>Transaction Volume</label>
										<div class="form-group">
										  <div class="input-group"><input class="form-control" type="text"><span class="input-group-addon no-borders">～</span><input class="form-control" type="text"></div>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Transaction Balance</label>
										<div class="form-group">
											<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon no-borders">～</span><input class="form-control" type="text"></div>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Commission Amount</label>
										<div class="form-group">
											<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon no-borders">～</span><input class="form-control" type="text"></div>
										</div>
									</div>
									<div class="col-sm-3">
										<label>Point</label>
										<div class="form-group">
											<div class="input-group"><input class="form-control" type="text"><span class="input-group-addon no-borders">～</span><input class="form-control" type="text"></div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-3">
										<label>Signup Date</label>
										<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
									</div>
									<div class="col-sm-3">
										<label>Last Login</label>
										<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
									</div>
									<div class="col-sm-3">
										<label>Last Deposit Date</label>
										<div class="form-group"><input name="daterange" class="form-control" type="text"></div>
									</div>
									<div class="col-sm-3">
										<label>Male/Female</label>
										<div class="form-group">
											<select class="selectpicker form-control" data-width="100%" multiple>
												<option>Male</option>
												<option>Female</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="ibox-footer">
								<div class="pull-left">
									<button class="btn btn-primary">Search</button>
									<button class="btn btn-default">Reset</button>
								</div>
								<div class="input-group input-sm pull-right">
									<span class="input-group-addon no-borders">Show</span>
									<select class="form-control">
										<option>10</option>
										<option selected>25</option>
										<option>50</option>
										<option>100</option>
									</select>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="wrapper wrapper-content animated fadeInRight">
				<div class="row">
					<div class="col-lg-12">
						<div class="ibox float-e-margins">
							<div class="ibox-title">
								<h5>Total: 11,700</h5>
								<div class="ibox-tools">
									<a class="btn btn-xs btn-default btn-rounded" href="#">CSV Download</a>
									<a class="collapse-link">
										<i class="fa fa-chevron-up"></i>
									</a>
								</div>
							</div>
							<div class="ibox-content">
								<div class="table-responsive">
									<table class="footable table table-hover toggle-arrow-tiny">
										<thead>
											<tr>
												<th data-toggle="true">Cilent ID</th>
												<th data-class="expand">Name</th>
												<th data-hide="phone">Ac.Group</th>
												<th data-hide="phone">Client Level</th>
												<th data-hide="phone">Rank</th>
												<th data-hide="phone">Agent ID</th>
												<th data-hide="phone,tablet">E-mail</th>
												<th data-hide="phone,tablet">City</th>
												<th data-hide="phone">Signup Date</th>
												<th data-hide="phone,tablet">Last Login</th>
												<th data-hide="phone,tablet">Registration</th>
												<th data-class="expand">Verification</th>
												<th data-class="expand">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>Default</td>
												<td>Level-01</td>
												<td>Trader</td>
												<td>22001177</td>
												<td>abcd12345@mail.com</td>
												<td>London</td>
												<td>2017-02-10 14:30</td>
												<td>2017-03-10 10:51</td>
												<td>Registered</td>
												<td>Verified</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
															<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-cube fa-fw"></i>Account</a></li>
															<li><a href="edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>FX-01</td>
												<td>Level-01</td>
												<td>Trader</td>
												<td>22001177</td>
												<td>testsample@qq.com</td>
												<td>Hongkong</td>
												<td>2017-02-10 14:30</td>
												<td>2017-03-10 10:51</td>
												<td>Registered</td>
												<td>Pending</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
															<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-cube fa-fw"></i>Account</a></li>
															<li><a href="edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>FX-01</td>
												<td>Level-01</td>
												<td>Trader</td>
												<td>22001177</td>
												<td>abcd12345@mail.com</td>
												<td>London</td>
												<td>2017-02-10 14:30</td>
												<td>2017-03-10 10:51</td>
												<td>Registered</td>
												<td>Requested</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
															<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-cube fa-fw"></i>Account</a></li>
															<li><a href="edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td>22558833</td>
												<td>Patrick Smith</td>
												<td>FX-01</td>
												<td>Level-01</td>
												<td>Trader</td>
												<td>22001177</td>
												<td>abcd12345@mail.com</td>
												<td>London</td>
												<td>2017-02-10 14:30</td>
												<td>2017-03-10 10:51</td>
												<td>Registered</td>
												<td>Requested</td>
												<td>
													<div class="btn-group">
														<button class="btn btn-default btn-sm text-info dropdown-toggle" data-toggle="dropdown">Actions <span class="caret"></span></button>
														<ul class="dropdown-menu">
															<li><a href="#" data-toggle="modal" data-target="#client"><i class="fa fa-user-circle fa-fw"></i>Cilent</a></li>
															<li><a href="#" data-toggle="modal" data-target="#account"><i class="fa fa-cube fa-fw"></i>Account</a></li>
															<li><a href="edit.html"><i class="fa fa-edit fa-fw"></i>Edit</a></li>
															<li><a href="#"><span class="text-danger"><i class="fa fa-trash fa-fw"></i>Delete</span></a></li>
														</ul>
													</div>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="4">Showing 1 to 25 of 57 entries</td>
												<td colspan="9">
													<ul class="pagination pull-right"></ul>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
							<div class="ibox-footer">
								<p>Process search results.</p>
								<div class="col-md-4">
									<a href="message.html" class="btn btn-primary">Send Message</a>
									<button type="button" class="btn btn-default text-info" data-toggle="modal" data-target="#bonus">Bonus</button>
									<button type="button" class="btn btn-default text-info" data-toggle="modal" data-target="#point">Point</button>
								</div>
								<div class="input-group col-md-4">
									<select class="form-control">
										<option selected>Client Level</option>
										<option>Level-01</option>
										<option>Level-02</option>
										<option>Level-03</option>
									</select>
									<span class="input-group-btn"><button class="btn btn-primary">Changes</button></span>
								</div>
							</div>
						</div>
						<!-- ibox End -->
					</div>
				</div>
			</div>
			<div class="fh-30"></div>
			<div class="footer">
				<div>
					<strong>Copyright</strong> GQ capital &copy; 2017
				</div>
			</div>

	<!-- Modal New -->
	<div class="modal modal-2 new">
		<span class="modal-close-btn"></span>
		<div class="row">
			<div class="col-lg-6 col-lg-offset-3">
				<div class="ibox">
					<div class="ibox-title"><h4>New Register</h4></div>
					<div class="ibox-content">
						<div class="tabs-container">
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active">
									<a href="#p-info" data-toggle="tab" aria-controls="p-info">Personal Info</a>
								</li>
								<li role="presentation">
									<a href="#t-info" data-toggle="tab" aria-controls="t-info">Account Info</a>
								</li>
								<li role="presentation">
									<a href="#leverage" data-toggle="tab" aria-controls="leverage">Leverage</a>
								</li>
								<li role="presentation">
									<a href="#sec" data-toggle="tab" aria-controls="sec">Security</a>
								</li>
							</ul>
							<div class="tab-content">
								<div class="tab-pane active" id="p-info">
									<div class="panel-body">
										<h3>Personal Info</h3>
										<div class="table-responsive">
											<table class="table table-bordered">
												<tbody>
													<tr>
														<th>Name</th>
														<td>
															<div class="form-group">
																<div class="input-group"><input class="form-control" type="text" style="width:50%;" placeholder="First Name"><input class="form-control" type="text" style="width:50%;" placeholder="Last Name"></div>
															</div>
														</td>
													</tr>
													<tr>
														<th>E-mail</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Phone</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Address</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>City</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>State/Province</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Country</th>
														<td>
															<div class="form-group">
																<select class="chosen-select form-control">
																	<option value="">Choose a Country...</option>
																	<option value="Afghanistan">Afghanistan</option>
																	<option value="Aland Islands">Aland Islands</option>
																	<option value="Albania">Albania</option>
																	<option value="Algeria">Algeria</option>
																	<option value="American Samoa">American Samoa</option>
																	<option value="Andorra">Andorra</option>
																	<option value="Angola">Angola</option>
																	<option value="Anguilla">Anguilla</option>
																	<option value="Antarctica">Antarctica</option>
																	<option value="Antigua and Barbuda">Antigua and Barbuda</option>
																	<option value="Argentina">Argentina</option>
																	<option value="Armenia">Armenia</option>
																	<option value="Aruba">Aruba</option>
																	<option value="Australia">Australia</option>
																	<option value="Austria">Austria</option>
																	<option value="Azerbaijan">Azerbaijan</option>
																	<option value="Bahamas">Bahamas</option>
																	<option value="Bahrain">Bahrain</option>
																	<option value="Bangladesh">Bangladesh</option>
																	<option value="Barbados">Barbados</option>
																	<option value="Belarus">Belarus</option>
																	<option value="Belgium">Belgium</option>
																	<option value="Belize">Belize</option>
																	<option value="Benin">Benin</option>
																	<option value="Bermuda">Bermuda</option>
																	<option value="Bhutan">Bhutan</option>
																	<option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
																	<option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
																	<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
																	<option value="Botswana">Botswana</option>
																	<option value="Bouvet Island">Bouvet Island</option>
																	<option value="Brazil">Brazil</option>
																	<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
																	<option value="Brunei Darussalam">Brunei Darussalam</option>
																	<option value="Bulgaria">Bulgaria</option>
																	<option value="Burkina Faso">Burkina Faso</option>
																	<option value="Burundi">Burundi</option>
																	<option value="Cambodia">Cambodia</option>
																	<option value="Cameroon">Cameroon</option>
																	<option value="Canada">Canada</option>
																	<option value="Cape Verde">Cape Verde</option>
																	<option value="Cayman Islands">Cayman Islands</option>
																	<option value="Central African Republic">Central African Republic</option>
																	<option value="Chad">Chad</option>
																	<option value="Chile">Chile</option>
																	<option value="China">China</option>
																	<option value="Christmas Island">Christmas Island</option>
																	<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
																	<option value="Colombia">Colombia</option>
																	<option value="Comoros">Comoros</option>
																	<option value="Congo">Congo</option>
																	<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
																	<option value="Cook Islands">Cook Islands</option>
																	<option value="Costa Rica">Costa Rica</option>
																	<option value="Cote D'ivoire">Cote D'ivoire</option>
																	<option value="Croatia">Croatia</option>
																	<option value="Cuba">Cuba</option>
																	<option value="Curacao">Curacao</option>
																	<option value="Cyprus">Cyprus</option>
																	<option value="Czech Republic">Czech Republic</option>
																	<option value="Denmark">Denmark</option>
																	<option value="Djibouti">Djibouti</option>
																	<option value="Dominica">Dominica</option>
																	<option value="Dominican Republic">Dominican Republic</option>
																	<option value="Ecuador">Ecuador</option>
																	<option value="Egypt">Egypt</option>
																	<option value="El Salvador">El Salvador</option>
																	<option value="Equatorial Guinea">Equatorial Guinea</option>
																	<option value="Eritrea">Eritrea</option>
																	<option value="Estonia">Estonia</option>
																	<option value="Ethiopia">Ethiopia</option>
																	<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
																	<option value="Faroe Islands">Faroe Islands</option>
																	<option value="Fiji">Fiji</option>
																	<option value="Finland">Finland</option>
																	<option value="France">France</option>
																	<option value="French Guiana">French Guiana</option>
																	<option value="French Polynesia">French Polynesia</option>
																	<option value="French Southern Territories">French Southern Territories</option>
																	<option value="Gabon">Gabon</option>
																	<option value="Gambia">Gambia</option>
																	<option value="Georgia">Georgia</option>
																	<option value="Germany">Germany</option>
																	<option value="Ghana">Ghana</option>
																	<option value="Gibraltar">Gibraltar</option>
																	<option value="Greece">Greece</option>
																	<option value="Greenland">Greenland</option>
																	<option value="Grenada">Grenada</option>
																	<option value="Guadeloupe">Guadeloupe</option>
																	<option value="Guam">Guam</option>
																	<option value="Guatemala">Guatemala</option>
																	<option value="Guernsey">Guernsey</option>
																	<option value="Guinea">Guinea</option>
																	<option value="Guinea-bissau">Guinea-bissau</option>
																	<option value="Guyana">Guyana</option>
																	<option value="Haiti">Haiti</option>
																	<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
																	<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
																	<option value="Honduras">Honduras</option>
																	<option value="Hong Kong">Hong Kong</option>
																	<option value="Hungary">Hungary</option>
																	<option value="Iceland">Iceland</option>
																	<option value="India">India</option>
																	<option value="Indonesia">Indonesia</option>
																	<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
																	<option value="Iraq">Iraq</option>
																	<option value="Ireland">Ireland</option>
																	<option value="Isle of Man">Isle of Man</option>
																	<option value="Israel">Israel</option>
																	<option value="Italy">Italy</option>
																	<option value="Jamaica">Jamaica</option>
																	<option value="Japan">Japan</option>
																	<option value="Jersey">Jersey</option>
																	<option value="Jordan">Jordan</option>
																	<option value="Kazakhstan">Kazakhstan</option>
																	<option value="Kenya">Kenya</option>
																	<option value="Kiribati">Kiribati</option>
																	<option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
																	<option value="Korea, Republic of">Korea, Republic of</option>
																	<option value="Kuwait">Kuwait</option>
																	<option value="Kyrgyzstan">Kyrgyzstan</option>
																	<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
																	<option value="Latvia">Latvia</option>
																	<option value="Lebanon">Lebanon</option>
																	<option value="Lesotho">Lesotho</option>
																	<option value="Liberia">Liberia</option>
																	<option value="Libya">Libya</option>
																	<option value="Liechtenstein">Liechtenstein</option>
																	<option value="Lithuania">Lithuania</option>
																	<option value="Luxembourg">Luxembourg</option>
																	<option value="Macao">Macao</option>
																	<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
																	<option value="Madagascar">Madagascar</option>
																	<option value="Malawi">Malawi</option>
																	<option value="Malaysia">Malaysia</option>
																	<option value="Maldives">Maldives</option>
																	<option value="Mali">Mali</option>
																	<option value="Malta">Malta</option>
																	<option value="Marshall Islands">Marshall Islands</option>
																	<option value="Martinique">Martinique</option>
																	<option value="Mauritania">Mauritania</option>
																	<option value="Mauritius">Mauritius</option>
																	<option value="Mayotte">Mayotte</option>
																	<option value="Mexico">Mexico</option>
																	<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
																	<option value="Moldova, Republic of">Moldova, Republic of</option>
																	<option value="Monaco">Monaco</option>
																	<option value="Mongolia">Mongolia</option>
																	<option value="Montenegro">Montenegro</option>
																	<option value="Montserrat">Montserrat</option>
																	<option value="Morocco">Morocco</option>
																	<option value="Mozambique">Mozambique</option>
																	<option value="Myanmar">Myanmar</option>
																	<option value="Namibia">Namibia</option>
																	<option value="Nauru">Nauru</option>
																	<option value="Nepal">Nepal</option>
																	<option value="Netherlands">Netherlands</option>
																	<option value="New Caledonia">New Caledonia</option>
																	<option value="New Zealand">New Zealand</option>
																	<option value="Nicaragua">Nicaragua</option>
																	<option value="Niger">Niger</option>
																	<option value="Nigeria">Nigeria</option>
																	<option value="Niue">Niue</option>
																	<option value="Norfolk Island">Norfolk Island</option>
																	<option value="Northern Mariana Islands">Northern Mariana Islands</option>
																	<option value="Norway">Norway</option>
																	<option value="Oman">Oman</option>
																	<option value="Pakistan">Pakistan</option>
																	<option value="Palau">Palau</option>
																	<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
																	<option value="Panama">Panama</option>
																	<option value="Papua New Guinea">Papua New Guinea</option>
																	<option value="Paraguay">Paraguay</option>
																	<option value="Peru">Peru</option>
																	<option value="Philippines">Philippines</option>
																	<option value="Pitcairn">Pitcairn</option>
																	<option value="Poland">Poland</option>
																	<option value="Portugal">Portugal</option>
																	<option value="Puerto Rico">Puerto Rico</option>
																	<option value="Qatar">Qatar</option>
																	<option value="Reunion">Reunion</option>
																	<option value="Romania">Romania</option>
																	<option value="Russian Federation">Russian Federation</option>
																	<option value="Rwanda">Rwanda</option>
																	<option value="Saint Barthelemy">Saint Barthelemy</option>
																	<option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
																	<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
																	<option value="Saint Lucia">Saint Lucia</option>
																	<option value="Saint Martin (French part)">Saint Martin (French part)</option>
																	<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
																	<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
																	<option value="Samoa">Samoa</option>
																	<option value="San Marino">San Marino</option>
																	<option value="Sao Tome and Principe">Sao Tome and Principe</option>
																	<option value="Saudi Arabia">Saudi Arabia</option>
																	<option value="Senegal">Senegal</option>
																	<option value="Serbia">Serbia</option>
																	<option value="Seychelles">Seychelles</option>
																	<option value="Sierra Leone">Sierra Leone</option>
																	<option value="Singapore">Singapore</option>
																	<option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
																	<option value="Slovakia">Slovakia</option>
																	<option value="Slovenia">Slovenia</option>
																	<option value="Solomon Islands">Solomon Islands</option>
																	<option value="Somalia">Somalia</option>
																	<option value="South Africa">South Africa</option>
																	<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
																	<option value="South Sudan">South Sudan</option>
																	<option value="Spain">Spain</option>
																	<option value="Sri Lanka">Sri Lanka</option>
																	<option value="Sudan">Sudan</option>
																	<option value="Suriname">Suriname</option>
																	<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
																	<option value="Swaziland">Swaziland</option>
																	<option value="Sweden">Sweden</option>
																	<option value="Switzerland">Switzerland</option>
																	<option value="Syrian Arab Republic">Syrian Arab Republic</option>
																	<option value="Taiwan, Province of China">Taiwan, Province of China</option>
																	<option value="Tajikistan">Tajikistan</option>
																	<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
																	<option value="Thailand">Thailand</option>
																	<option value="Timor-leste">Timor-leste</option>
																	<option value="Togo">Togo</option>
																	<option value="Tokelau">Tokelau</option>
																	<option value="Tonga">Tonga</option>
																	<option value="Trinidad and Tobago">Trinidad and Tobago</option>
																	<option value="Tunisia">Tunisia</option>
																	<option value="Turkey">Turkey</option>
																	<option value="Turkmenistan">Turkmenistan</option>
																	<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
																	<option value="Tuvalu">Tuvalu</option>
																	<option value="Uganda">Uganda</option>
																	<option value="Ukraine">Ukraine</option>
																	<option value="United Arab Emirates">United Arab Emirates</option>
																	<option value="United Kingdom">United Kingdom</option>
																	<option value="United States">United States</option>
																	<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
																	<option value="Uruguay">Uruguay</option>
																	<option value="Uzbekistan">Uzbekistan</option>
																	<option value="Vanuatu">Vanuatu</option>
																	<option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
																	<option value="Viet Nam">Viet Nam</option>
																	<option value="Virgin Islands, British">Virgin Islands, British</option>
																	<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
																	<option value="Wallis and Futuna">Wallis and Futuna</option>
																	<option value="Western Sahara">Western Sahara</option>
																	<option value="Yemen">Yemen</option>
																	<option value="Zambia">Zambia</option>
																	<option value="Zimbabwe">Zimbabwe</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Zip/Postal Code</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>National ID</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Verification Status</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Pending</option>
																	<option>Requested</option>
																	<option>Verified</option>
																	<option>Declined</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Regstration Status</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Temporary</option>
																	<option>Registered</option>
																	<option>Unsubscribe</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Citizen</th>
														<td>
															<div class="form-group">
																<select class="chosen-select form-control">
																	<option value="">Choose a Citizen...</option>
																	<option value="Afghanistan">Afghanistan</option>
																	<option value="Aland Islands">Aland Islands</option>
																	<option value="Albania">Albania</option>
																	<option value="Algeria">Algeria</option>
																	<option value="American Samoa">American Samoa</option>
																	<option value="Andorra">Andorra</option>
																	<option value="Angola">Angola</option>
																	<option value="Anguilla">Anguilla</option>
																	<option value="Antarctica">Antarctica</option>
																	<option value="Antigua and Barbuda">Antigua and Barbuda</option>
																	<option value="Argentina">Argentina</option>
																	<option value="Armenia">Armenia</option>
																	<option value="Aruba">Aruba</option>
																	<option value="Australia">Australia</option>
																	<option value="Austria">Austria</option>
																	<option value="Azerbaijan">Azerbaijan</option>
																	<option value="Bahamas">Bahamas</option>
																	<option value="Bahrain">Bahrain</option>
																	<option value="Bangladesh">Bangladesh</option>
																	<option value="Barbados">Barbados</option>
																	<option value="Belarus">Belarus</option>
																	<option value="Belgium">Belgium</option>
																	<option value="Belize">Belize</option>
																	<option value="Benin">Benin</option>
																	<option value="Bermuda">Bermuda</option>
																	<option value="Bhutan">Bhutan</option>
																	<option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
																	<option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
																	<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
																	<option value="Botswana">Botswana</option>
																	<option value="Bouvet Island">Bouvet Island</option>
																	<option value="Brazil">Brazil</option>
																	<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
																	<option value="Brunei Darussalam">Brunei Darussalam</option>
																	<option value="Bulgaria">Bulgaria</option>
																	<option value="Burkina Faso">Burkina Faso</option>
																	<option value="Burundi">Burundi</option>
																	<option value="Cambodia">Cambodia</option>
																	<option value="Cameroon">Cameroon</option>
																	<option value="Canada">Canada</option>
																	<option value="Cape Verde">Cape Verde</option>
																	<option value="Cayman Islands">Cayman Islands</option>
																	<option value="Central African Republic">Central African Republic</option>
																	<option value="Chad">Chad</option>
																	<option value="Chile">Chile</option>
																	<option value="China">China</option>
																	<option value="Christmas Island">Christmas Island</option>
																	<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
																	<option value="Colombia">Colombia</option>
																	<option value="Comoros">Comoros</option>
																	<option value="Congo">Congo</option>
																	<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
																	<option value="Cook Islands">Cook Islands</option>
																	<option value="Costa Rica">Costa Rica</option>
																	<option value="Cote D'ivoire">Cote D'ivoire</option>
																	<option value="Croatia">Croatia</option>
																	<option value="Cuba">Cuba</option>
																	<option value="Curacao">Curacao</option>
																	<option value="Cyprus">Cyprus</option>
																	<option value="Czech Republic">Czech Republic</option>
																	<option value="Denmark">Denmark</option>
																	<option value="Djibouti">Djibouti</option>
																	<option value="Dominica">Dominica</option>
																	<option value="Dominican Republic">Dominican Republic</option>
																	<option value="Ecuador">Ecuador</option>
																	<option value="Egypt">Egypt</option>
																	<option value="El Salvador">El Salvador</option>
																	<option value="Equatorial Guinea">Equatorial Guinea</option>
																	<option value="Eritrea">Eritrea</option>
																	<option value="Estonia">Estonia</option>
																	<option value="Ethiopia">Ethiopia</option>
																	<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
																	<option value="Faroe Islands">Faroe Islands</option>
																	<option value="Fiji">Fiji</option>
																	<option value="Finland">Finland</option>
																	<option value="France">France</option>
																	<option value="French Guiana">French Guiana</option>
																	<option value="French Polynesia">French Polynesia</option>
																	<option value="French Southern Territories">French Southern Territories</option>
																	<option value="Gabon">Gabon</option>
																	<option value="Gambia">Gambia</option>
																	<option value="Georgia">Georgia</option>
																	<option value="Germany">Germany</option>
																	<option value="Ghana">Ghana</option>
																	<option value="Gibraltar">Gibraltar</option>
																	<option value="Greece">Greece</option>
																	<option value="Greenland">Greenland</option>
																	<option value="Grenada">Grenada</option>
																	<option value="Guadeloupe">Guadeloupe</option>
																	<option value="Guam">Guam</option>
																	<option value="Guatemala">Guatemala</option>
																	<option value="Guernsey">Guernsey</option>
																	<option value="Guinea">Guinea</option>
																	<option value="Guinea-bissau">Guinea-bissau</option>
																	<option value="Guyana">Guyana</option>
																	<option value="Haiti">Haiti</option>
																	<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
																	<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
																	<option value="Honduras">Honduras</option>
																	<option value="Hong Kong">Hong Kong</option>
																	<option value="Hungary">Hungary</option>
																	<option value="Iceland">Iceland</option>
																	<option value="India">India</option>
																	<option value="Indonesia">Indonesia</option>
																	<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
																	<option value="Iraq">Iraq</option>
																	<option value="Ireland">Ireland</option>
																	<option value="Isle of Man">Isle of Man</option>
																	<option value="Israel">Israel</option>
																	<option value="Italy">Italy</option>
																	<option value="Jamaica">Jamaica</option>
																	<option value="Japan">Japan</option>
																	<option value="Jersey">Jersey</option>
																	<option value="Jordan">Jordan</option>
																	<option value="Kazakhstan">Kazakhstan</option>
																	<option value="Kenya">Kenya</option>
																	<option value="Kiribati">Kiribati</option>
																	<option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
																	<option value="Korea, Republic of">Korea, Republic of</option>
																	<option value="Kuwait">Kuwait</option>
																	<option value="Kyrgyzstan">Kyrgyzstan</option>
																	<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
																	<option value="Latvia">Latvia</option>
																	<option value="Lebanon">Lebanon</option>
																	<option value="Lesotho">Lesotho</option>
																	<option value="Liberia">Liberia</option>
																	<option value="Libya">Libya</option>
																	<option value="Liechtenstein">Liechtenstein</option>
																	<option value="Lithuania">Lithuania</option>
																	<option value="Luxembourg">Luxembourg</option>
																	<option value="Macao">Macao</option>
																	<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
																	<option value="Madagascar">Madagascar</option>
																	<option value="Malawi">Malawi</option>
																	<option value="Malaysia">Malaysia</option>
																	<option value="Maldives">Maldives</option>
																	<option value="Mali">Mali</option>
																	<option value="Malta">Malta</option>
																	<option value="Marshall Islands">Marshall Islands</option>
																	<option value="Martinique">Martinique</option>
																	<option value="Mauritania">Mauritania</option>
																	<option value="Mauritius">Mauritius</option>
																	<option value="Mayotte">Mayotte</option>
																	<option value="Mexico">Mexico</option>
																	<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
																	<option value="Moldova, Republic of">Moldova, Republic of</option>
																	<option value="Monaco">Monaco</option>
																	<option value="Mongolia">Mongolia</option>
																	<option value="Montenegro">Montenegro</option>
																	<option value="Montserrat">Montserrat</option>
																	<option value="Morocco">Morocco</option>
																	<option value="Mozambique">Mozambique</option>
																	<option value="Myanmar">Myanmar</option>
																	<option value="Namibia">Namibia</option>
																	<option value="Nauru">Nauru</option>
																	<option value="Nepal">Nepal</option>
																	<option value="Netherlands">Netherlands</option>
																	<option value="New Caledonia">New Caledonia</option>
																	<option value="New Zealand">New Zealand</option>
																	<option value="Nicaragua">Nicaragua</option>
																	<option value="Niger">Niger</option>
																	<option value="Nigeria">Nigeria</option>
																	<option value="Niue">Niue</option>
																	<option value="Norfolk Island">Norfolk Island</option>
																	<option value="Northern Mariana Islands">Northern Mariana Islands</option>
																	<option value="Norway">Norway</option>
																	<option value="Oman">Oman</option>
																	<option value="Pakistan">Pakistan</option>
																	<option value="Palau">Palau</option>
																	<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
																	<option value="Panama">Panama</option>
																	<option value="Papua New Guinea">Papua New Guinea</option>
																	<option value="Paraguay">Paraguay</option>
																	<option value="Peru">Peru</option>
																	<option value="Philippines">Philippines</option>
																	<option value="Pitcairn">Pitcairn</option>
																	<option value="Poland">Poland</option>
																	<option value="Portugal">Portugal</option>
																	<option value="Puerto Rico">Puerto Rico</option>
																	<option value="Qatar">Qatar</option>
																	<option value="Reunion">Reunion</option>
																	<option value="Romania">Romania</option>
																	<option value="Russian Federation">Russian Federation</option>
																	<option value="Rwanda">Rwanda</option>
																	<option value="Saint Barthelemy">Saint Barthelemy</option>
																	<option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
																	<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
																	<option value="Saint Lucia">Saint Lucia</option>
																	<option value="Saint Martin (French part)">Saint Martin (French part)</option>
																	<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
																	<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
																	<option value="Samoa">Samoa</option>
																	<option value="San Marino">San Marino</option>
																	<option value="Sao Tome and Principe">Sao Tome and Principe</option>
																	<option value="Saudi Arabia">Saudi Arabia</option>
																	<option value="Senegal">Senegal</option>
																	<option value="Serbia">Serbia</option>
																	<option value="Seychelles">Seychelles</option>
																	<option value="Sierra Leone">Sierra Leone</option>
																	<option value="Singapore">Singapore</option>
																	<option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
																	<option value="Slovakia">Slovakia</option>
																	<option value="Slovenia">Slovenia</option>
																	<option value="Solomon Islands">Solomon Islands</option>
																	<option value="Somalia">Somalia</option>
																	<option value="South Africa">South Africa</option>
																	<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
																	<option value="South Sudan">South Sudan</option>
																	<option value="Spain">Spain</option>
																	<option value="Sri Lanka">Sri Lanka</option>
																	<option value="Sudan">Sudan</option>
																	<option value="Suriname">Suriname</option>
																	<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
																	<option value="Swaziland">Swaziland</option>
																	<option value="Sweden">Sweden</option>
																	<option value="Switzerland">Switzerland</option>
																	<option value="Syrian Arab Republic">Syrian Arab Republic</option>
																	<option value="Taiwan, Province of China">Taiwan, Province of China</option>
																	<option value="Tajikistan">Tajikistan</option>
																	<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
																	<option value="Thailand">Thailand</option>
																	<option value="Timor-leste">Timor-leste</option>
																	<option value="Togo">Togo</option>
																	<option value="Tokelau">Tokelau</option>
																	<option value="Tonga">Tonga</option>
																	<option value="Trinidad and Tobago">Trinidad and Tobago</option>
																	<option value="Tunisia">Tunisia</option>
																	<option value="Turkey">Turkey</option>
																	<option value="Turkmenistan">Turkmenistan</option>
																	<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
																	<option value="Tuvalu">Tuvalu</option>
																	<option value="Uganda">Uganda</option>
																	<option value="Ukraine">Ukraine</option>
																	<option value="United Arab Emirates">United Arab Emirates</option>
																	<option value="United Kingdom">United Kingdom</option>
																	<option value="United States">United States</option>
																	<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
																	<option value="Uruguay">Uruguay</option>
																	<option value="Uzbekistan">Uzbekistan</option>
																	<option value="Vanuatu">Vanuatu</option>
																	<option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
																	<option value="Viet Nam">Viet Nam</option>
																	<option value="Virgin Islands, British">Virgin Islands, British</option>
																	<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
																	<option value="Wallis and Futuna">Wallis and Futuna</option>
																	<option value="Western Sahara">Western Sahara</option>
																	<option value="Yemen">Yemen</option>
																	<option value="Zambia">Zambia</option>
																	<option value="Zimbabwe">Zimbabwe</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Date of Birth</th>
														<td><div class="form-group"><input class="form-control" placeholder="YYYY-MM-DD"></div></td>
													</tr>
													<tr>
														<th>Male/Female</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Male</option>
																	<option>Female</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Temporary<br>Regstration Date</th>
														<td><div class="form-group"><input class="form-control" placeholder="YYYY-MM-DD hh:mm"></div></td>
													</tr>
													<tr>
														<th>Signup Date</th>
														<td><div class="form-group"><input class="form-control" placeholder="YYYY-MM-DD hh:mm"></div></td>
													</tr>
													<tr>
														<th>Language</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>English</option>
																	<option>Chinese</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Comment</th>
														<td><div class="form-group"><textarea class="form-control"></textarea></div></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="t-info" role="tabpanel">
									<div class="panel-body">
										<h3>Account Info</h3>
										<div class="table-responsive">
											<table class="table table-bordered">
												<tbody>
													<tr>
														<th>Agent ID（Promo Code）</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Account Group</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Real</option>
																	<option>Demo</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Client Level</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Level-01</option>
																	<option>Level-02</option>
																	<option>Level-03</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Rank</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>Select</option>
																	<option>Trader</option>
																	<option>IB</option>
																	<option>MIB</option>
																	<option>PIB</option>
																</select>
															</div>
														</td>
													</tr>
													<tr>
														<th>Point</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>IP Address</th>
														<td><div class="form-group"><input class="form-control"></div></td>
													</tr>
													<tr>
														<th>Read Only</th>
														<td>
															<select class="form-control">
																<option selected>OFF</option>
																<option>ON</option>
															</select>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="leverage" role="tabpanel">
									<div class="panel-body">
										<h3>Leverage</h3>
										<div class="table-responsive">
											<table class="table table-bordered">
												<tbody>
													<tr>
														<th>Leverage Setting</th>
														<td>
															<div class="form-group">
																<select class="form-control">
																	<option selected>1:100</option>
																	<option>1:5</option>
																	<option>1:20</option>
																	<option>1:50</option>
																	<option>1:100</option>
																	<option>1:200</option>
																</select>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="sec" role="tabpanel">
									<div class="panel-body">
										<h3>Security</h3>
										<div class="table-responsive">
											<table class="table table-bordered">
												<tbody>
													<tr>
														<th>MT5 Password</th>
														<td><div class="form-group"><input class="form-control"></div>
															<span class="help-block m-b-none">Any alphanumeric 8 digits or more</span>
														</td>
													</tr>
													<tr>
														<th>Confirm Password</th>
														<td><div class="form-group"><input class="form-control"></div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<!-- tab-conent END-->
						</div>
					</div>
					<div class="ibox-footer">
						<div><button class="btn btn-warning">Submit</button></div>
					</div>
				</div>
				<!-- ibox End -->
			</div>
		</div>
	</div>
	

	<!-- Modal Client -->
	<div id="client" class="modal fade in client" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="wrapper-content">
						<div class="row m-b-lg">
							<div class="col-md-5">
								<div class="profile-image">
									<i class="fa fa-user-circle-o fa-5x"></i>
								</div>
								<div class="profile-info">
									<div class="m-b-sm">
										<h2 class="no-margins">Patrick Smith</h2>
										<h4><small>Client ID:</small> 22554499</h4>
										<small>
											<i class="fa fa-phone"></i> +852 44775522<br>
											<i class="fa fa-envelope-o"></i> smaple123@gmail.com
										</small>	
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<h4>Transaction Data <small>(This Month)</small></h4>
								<table class="table m-b-xs">
									<tbody>
										<tr>
											<td>Balance<strong> 15,800.50</strong></td>
											<td>Tran.Vol<strong> 54,000.00</strong></td>
										</tr>
										<tr>
											<td>Deposit<strong> 100,000.00</strong></td>
											<td>Withdrawal<strong> 2,000.00</strong></td>
										</tr>
										<tr>
											<td>Comm <strong>400.75</strong></td>
											<td>Point <strong> 150</strong></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-md-2">
								<div class="m-b-xs">
									<h4>Status</h4>
									<div class="statusbox p-w-xs">
										<label class="label label-info">Verified</label>
										<label class="label black-bg text-white">Black</label>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 col-md-6">
								<div class="ibox">
									<div class="ibox-content">
										<h3>Profile</h3>
										<div><label>Address</label><span>xxxxxxxxxxxx</span></div>
										<div><label>City</label><span>xxxxxxxxxxxx</span></div>
										<div><label>State/Province</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Zip/Postal Code</label><span>xxxxxxxxxxxx</span></div>
										<div><label>National ID</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Citizen</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Language</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Date of Birth</label><span>xxxxxxxxxxxx</span></div>
										<div><label>Male/Female</label><span>xxxx</span></div>
									</div>
								</div>

								<div class="ibox">
									<div class="ibox-content">
										<h3>Registration</h3>
										<div><label>Temporary Date</label><span>2017/03/20 15:20</span></div>
										<div><label>Signup Date</label><span>2017/03/20 15:30</span></div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="client-view-box">
									<h3>Account</h3>
									<div><label>Agent ID</label><span>33664488</span></div>
									<div><label>Account Group</label><span>Default</span></div>
									<div><label>Client Level</label><span></span></div>
									<div><label>Rank</label><span>MIB</span> <span class="pull-right"><label class="label label-default"><i class="fa fa-file-pdf-o"></i></label></span></div>
								</div>
								<div class="client-view-box">
									<h3>Transaction</h3>
									<div><label>Last Login</label><span></span></div>
									<div><label>Last Depoit</label><span>xxxxxxxxxxxx</span></div>
									<div><label>Read Only</label><span>OFF</span></div>
									<div><label>Leverage</label><span>1:100</span></div>
								</div>
								<div class="client-view-box">
									<p>Comment Sample Text</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Account -->
	<div id="account" class="modal fade in" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header text-center"><h3 class="modal-title">MT5 Account</h3><small>Client ID:22445577</small></div>
				<div class="modal-body">
					<table class="table setting-table">
					  <thead>
						  <tr>
							  <th>MT5 Login ID</th>
								<th>Blance</th>
								<th>Deposit/Withdrwal</th>
							</tr>
						</thead>
					  <tbody>
						  <tr>
							  <td>55889900</td>
								<td>1,879,55</td>
								<td><a href="#" class="btn btn-default btn-sm text-info" data-toggle="modal" data-target="#d-w"><i class="fa fa-briefcase fa-fw"></i>Add</a></td>
							</tr>
							<tr>
								<td>55005599</td>
								<td>800,25</td>
								<td><a href="#" class="btn btn-default btn-sm text-info" data-toggle="modal" data-target="#d-w"><i class="fa fa-briefcase fa-fw"></i>Add</a></td>
							</tr>
							<tr>
								<td>55112233</td>
								<td>0,00</td>
								<td><a href="#" class="btn btn-default btn-sm text-info" data-toggle="modal" data-target="#d-w"><i class="fa fa-briefcase fa-fw"></i>Add</a></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal D-W -->
	<div id="d-w" class="modal fade in inmodal m-t-md m-l-lg" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-briefcase modal-icon"></i><h3 class="modal-title">Deposit/Withdrawal</h3></div>
				<div class="modal-body">
					<div class="table-responsive">
						<table class="table table-bordered white-bg">
							<tbody>
								<tr>
									<th width="30%">Deposit Amount</th>
									<td><div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></div></td>
								</tr>
								<tr>
									<th width="30%">Withdrawal Amount</th>
									<td><div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></div></td>
								</tr>
								<tr>
									<th>Comment</th>
									<td><textarea class="form-control"></textarea></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Submit</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Bonus -->
	<div id="bonus" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-laptop modal-icon"></i><h3 class="modal-title">Add Bonus</h3></div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="col-sm-2 control-label">Amount</label>
							<div class="col-sm-10">
								<div class="input-group"><span class="input-group-addon">$</span> <input class="form-control" type="text"> <span class="input-group-addon">.00</span></div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">Comment</label>
							<div class="col-sm-10">
								<textarea class="form-control"></textarea>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Submit</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Point -->
	<div id="point" class="modal fade in inmodal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header"><i class="fa fa-tv modal-icon"></i><h3 class="modal-title">Add Point</h3></div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<label class="col-sm-2 control-label">Point</label>
							<div class="col-sm-10">
								<div class="input-group"><span class="input-group-addon">P</span> <input class="form-control" type="text"> </div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">Comment</label>
							<div class="col-sm-10">
								<textarea class="form-control"></textarea>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-warning">Submit</button>
				</div>
			</div>
		</div>
	</div>	
</div>    	
</template>
<script>
import '../../../assets/css/plugins/daterangepicker/daterangepicker-bs3.css'
import '../../../assets/css/plugins/datapicker/datepicker3.css'
import '../../../assets/css/plugins/footable/footable.core.css'
import '../../../assets/css/plugins/select/bootstrap-select.css'
import '../../../assets/css/plugins/jasny/jasny-bootstrap.min.css'

import Jasny from '../../../assets/js/plugins/jasny/jasny-bootstrap.min.js'
// import Select from '../../assets/js/plugins/select/bootstrap-select.min.js'
import Footable from '../../../assets/js/plugins/footable/footable.all.min.js'
import Datepicker from '../../../assets/js/plugins/datapicker/bootstrap-datepicker.js'
// import Cta from '../../assets/js/plugins/cta/cta.min.js'
export default {
    name: 'client-index',
	components:{
       Jasny,
    //    Select,
       Footable,
       Datepicker
    //    Cta
	},
    mounted: function(){
        $('.footable').footable({
				breakpoints: {
					phone: 640,
					tablet: 1024
				}
		});
        $('input[name="daterange"]').daterangepicker({
				timePicker: false,
		});
        $('.datepicker').datepicker({
			format: 'yyyy/dd/mm',
			startDate: '-3d'
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
    }
}
</script>