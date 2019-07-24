<!-- Extends -->

@extends('headerFooter.header')
@extends('headerFooter.footer')

<!-- index.blade.php -->
	<section class="margintop200">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="page-header">Dashboard</h1>
					<div class="alert alert-info alert-dismissable">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
						Welcome to the  TEA-POF Setup!
					</div>
				</div>
				
			</div>
			<div class="row">
				<div class="col-lg-3">
					<div class="panel panel-info">
						<div class="panel-heading">
							<div class="row">
								<div class="col-xs-6">
									<i class="fa fa-calendar fa-5x"></i>
								</div>
								<div class="col-xs-6 text-right">
									<p class="announcement-heading"></p>
									<p class="announcement-text">Event</p>
								</div>
							</div>
						</div>
						<a href="#">
							<div class="panel-footer announcement-bottom">
								<div class="row">
									<div class="col-xs-6">
										<i class="fa fa-list "></i> Event List
									</div>
									<div class="col-xs-6 text-right">
										<i class="fa fa-arrow-circle-right"></i>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="panel panel-warning">
						<div class="panel-heading">
							<div class="row">
								<div class="col-xs-6">
									<i class="fa fa-folder fa-5x"></i>
								</div>
								<div class="col-xs-6 text-right">
									<p class="announcement-heading"></p>
									<p class="announcement-text">Package</p>
								</div>
							</div>
						</div>
						<a href="#">
							<div class="panel-footer announcement-bottom">
								<div class="row">
									<div class="col-xs-6">
										<i class="fa fa-list "></i>	Package List
									</div>
									<div class="col-xs-6 text-right">
										<i class="fa fa-arrow-circle-right"></i>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="panel panel-danger">
						<div class="panel-heading">
							<div class="row">
								<div class="col-xs-6">
									<i class="fa fa-tags fa-5x"></i>
								</div>
								<div class="col-xs-6 text-right">
									<p class="announcement-heading"></p>
									<p class="announcement-text">Promo</p>
								</div>
							</div>
						</div>
						<a href="#">
							<div class="panel-footer announcement-bottom">
								<div class="row">
									<div class="col-xs-6">
										<i class="fa fa-list "></i>	Promo List
									</div>
									<div class="col-xs-6 text-right">
										<i class="fa fa-arrow-circle-right"></i>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<div class="row">
								<div class="col-xs-6">
									<i class="fa fa-certificate fa-5x"></i>
								</div>
								<div class="col-xs-6 text-right">
									<p class="announcement-heading"></p>
									<p class="announcement-text">Certificate</p>
								</div>
							</div>
						</div>
						<a href="#">
							<div class="panel-footer announcement-bottom">
								<div class="row">
									<div class="col-xs-6">
										<i class="fa fa-list "></i>	Certificate
									</div>
									<div class="col-xs-6 text-right">
										<i class="fa fa-arrow-circle-right"></i>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		
	</section>