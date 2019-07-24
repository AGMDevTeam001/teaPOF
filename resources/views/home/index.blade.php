<html>
	<head>
		<link rel="stylesheet" type="text/css" href="{{asset("css/bootstrap.min.css")}}" />
		<link rel="stylesheet" type="text/css" href="{{asset("css/font-awesome.min.css")}}" />
		<link rel="stylesheet" type="text/css" href="{{asset("css/animate.css")}}" />
		<link rel="stylesheet" type="text/css" href="{{asset("css/universal.css")}}" />
		<link rel="stylesheet" type="text/css" href="{{asset("css/standard.css")}}" />
		<link rel="stylesheet" type="text/css" href="{{asset("toastr/toastr.min.css")}}" />
			
		<script src="{{asset("js/jquery-2.1.4.min.js")}}"></script>
		<script src="{{asset("js/animate.min.js")}}"></script>
		<script src="{{asset("bootstrap.min.js")}}"></script>
		<script src="{{asset("toastr/toastr.min.js")}}"></script>

		<style>
			.form-control:focus {
			  border-bottom: solid 3px #CC2C21;
			}
		</style>
	</head>
	<nav class="navbar navbar-default navbar-custom navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<img src="{{asset("img/tea1.png")}}" class="img-responsive ">
			</div>
		</div>
	</nav>
	<body>
		<div class="container-fluid mainBody">
			<div class="container spaceHeaderToBody"></div>
			<div class="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 borderline">
				<div class="panel panel-info" id="loginpanel">
					<div class="panel-body">
						<div class="app-title">
							<img src="{{asset("img/logo.png")}}" class="img-responsive">
							<h3>TEA-POF</h3>
						</div>
						<form  class="form-me" method="post" id="loginForm">
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12" id="usernamebox">
									<div class="form-group">
										<input type="text" tabindex="1" name="username" autofocus ="" autocomplete = "off" id="username" class="form-control input-sm" placeholder="Username" required ="">
									</div>
								</div>
								<div class="col-xs-12 col-sm-12 col-md-12" id = "passwordbox">
									<div class="form-group ">
										<input type="password" tabindex="2"  name="password" autocomplete = "off"  id="password" autofocus="" class="form-control input-sm" placeholder="Password" >
									</div>
								</div>
							</div>
							<input type="button"  value = 'NEXT'  class="btn btn-primary btn-block" id="nextbtn">
							<button type="submit" class="btn btn-login btn-primary btn-block text-center" name = 'submit' id='loginbtn'> <li class="fa fa-sign-in"></li> LOG IN</button>
						</form>
						<button class="btn btn-default" id="backLogin"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
						<!-- <a href="#" class="pull-right"  data-toggle="modal" data-target="#myModal" id="forgotPassword"><span>Forgot Password?</span></a> -->
						<a href="#" class="pull-right forgotModal"  data-toggle="modal" id="forgotPassword"><span>Forgot Password?</span></a>
					</div>
				</div>
			</div>
		</div>
		<div id="loading-wrapper">
			<div id="loading-content"></div>
		</div>
	</div>
	<!-- Footer -->
	<div  class="container-fluid col-xs-12 footer colored">
		<img src="{{asset("/img/violator.png")}}" class="img-responsive" id="footer1">
	</div>
	<!-- Modal -->
	<div class="modal fade" id="forgotModal"  tabindex="-1"   role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-body">
					<p  class="text-center text-success">Please enter your Email</p>
					<input class="form-control email" required type="email" placeholder="Enter Email" name="email">
				</div>
				<div class="modal-footer">
					<div class="btn-group btn-group-justified" role="group" aria-label="group button">
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-default" data-dismiss="modal"  role="button"><i class="fa fa-times"></i> Cancel</button>
						</div>
						<div class="btn-group" role="group">
							<button type="submit"  class="btn btn-success btn-hover-green forgotPass" data-action="save" role="button"><i class="fa fa-file"></i> Yes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</body>
</html>