<html>
	<head>
		<link rel="icon" type="image/png" href="{{asset("/img/titleimg.png")}}" />
		<title>
		TEA-POF
		</title>
		
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<link rel="stylesheet" type="text/css" href="{{asset("/css/bootstrap.min.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("/css/standard.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("/css/font-awesome.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("/css/universal.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("/css/animate.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("/DataTables/datatables.min.css")}}"/>
		<link rel="stylesheet" href="{{asset("/datepicker/datepicker.css")}}">
		<link rel="stylesheet" href="{{asset("/timepicker/css/bootstrap-timepicker.css")}}">
		<link rel="stylesheet" href="{{asset("/timepicker/css/bootstrap-timepicker.min.css")}}">
		<link rel="stylesheet" href="{{asset("/css/bootstrap-select.min.css")}}">
		<link rel="stylesheet" type="text/css" href="{{asset("toastr/toastr.min.css")}}"/>
		<link rel="stylesheet" type="text/css" href="{{asset("css/for-media-print.css")}}">
		
		<script src="{{asset("/js/jquery-2.1.4.min.js")}}"></script>
		<script src="{{asset("/js/bootstrap.js")}}"></script>
		<script src="{{asset("/datepicker/bootstrap-datepicker.js")}}"></script>
		<script src="{{asset("/toastr/toastr.min.js")}}></script>
		
		<script type="text/javascript" src="{{asset("/DataTables/datatables.min.js")}}"></script>
		<script src="{{asset("/timepicker/js/bootstrap-timepicker.min.js")}}"></script>
		<script src="{{asset("/js/bootstrap-select.min.js")}}"></script>
		<script src="{{asset("/js/validation.js")}}""></script>
		<style>
			.show-on-hover:hover > ul.dropdown-menu {
				display: block;
			}
			.nav-bar{
				background: #FFF;
				border-radius: 0px;
				border: none;
			}
			.dropdown-nav{
				background: #FFF;
			}
		</style>
	</head>
	<nav class="navbar navbar-default navbar-custom navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="#">
					<img src="{{asset("img/tea1.png")}}" class="img-responsive">
				</a>
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a class="headerNav" href="/" >Dashboard</a>
					</li>
					<li>
						<a class="headerNav" href="/dev_tea_pof_v3/index/appEvent">Event for Approval 
						</span></a>
					</li>
					<li>
						<a href="/dev_tea_pof_v3/index/event" >Event</a>
					</li>
					<li>
						<a class="headerNav" href="/dev_tea_pof_v3/index/package">Package</a>
					</li>
					<li>
						<a class="headerNav" href="#">Promo</a>
					</li>
					<li>
						<a class="headerNav" href="#">Payments
						</a>
					</li>
					<li>
						<a class="headerNav" href="#">Certificate</a>
					</li>
					<li>
						<a class="headerNav" href="#" >Evaluation</a>
					</li>
					
					<li>
						<a class="headerNav" href="#">Reports</a>
					</li>
					<
					<!-- /// REPORTS NILA JOAN -->
					<li class="dropdown">
						<a class="headerNav" href="#" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false">Reports<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li>
								<a class="headerNav" href="#">Promo Event Reports</a>
							</li>
							<li>
								<a class="headerNav" href="#">Promo Package Reports</a>
							</li>
							<li>
								<a class="headerNav" href="#">Package Report</a>
							</li>
							<li>
								<a class="headerNav" href="#">Attendance Sheet for Accountancy</a>
							</li>
							<li>
								<a class="headerNav" href="#" >Training Summary per Attendee</a>
							</li>
							<li>
								<a class="headerNav" href="#" >Evaluation Summary Result</a>
							</li>
							<li>
								<a class="headerNav" href="#" >Training Rating Tabulation</a>
							</li>
						</ul>
					</li>
					<li class="dropdown">
						<a class="headerNav" href="#" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false">Settings<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li>
								<a class="headerNav" href="#">CPD Credits</a>
							</li>
							<li>
								<a class="headerNav" href="#">Competence</a>
							</li>
							<li>
								<a class="headerNav" href="#">Speaker</a>
							</li>
							<li>
								<a class="headerNav" href="#">Venue</a>
							</li>
							<li>
								<a class="headerNav" href="#">Department</a>
							</li>
							<li>
								<a class="headerNav" href="#">Event Type</a>
							</li>
							<li>
								<a class="headerNav" href="#">Event Classification</a>
							</li>
							<li>
								<a class="headerNav" href="#">Member</a>
							</li>
							<li>
								<a class="headerNav" href="#">Services</a>
							</li>
							<li class="hidden">
								<a class="headerNav" href="">Granfathering Setup</a>
							</li>
						</ul>
					</li>
					<li class="dropdown">
						<a class="headerNav" href="#" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false"> Superadmin<b class="caret"></b></a>
						<ul class="dropdown-menu">
							
							<li>
								<a href="https://training.professionalsofthefuture.com/" target="_blank"><i class="glyphicon glyphicon-book"></i>Public Training</a>
							</li>
							<li>
								<a href="#"><i class="glyphicon glyphicon-user"></i> Profile</a>
							</li>
							<li>
								<a href="#"><i class="glyphicon glyphicon-edit"></i> Change Password</a>
							</li>
							<li>
								<a href="#"><i class="glyphicon glyphicon-user"></i> Users</a>
							</li>
							<li>
								<a href="#"><i class="glyphicon glyphicon-log-out"></i> Logout</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
		</div><!-- /.navbar-collapse -->
	</div>
</nav>
<body>
	<div id="loading-wrapper">
		<div id="loading-content"></div>
	</div>
	<div class="fillScreen hidden"></div>