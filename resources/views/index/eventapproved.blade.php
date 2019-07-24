@extends('headerFooter.header')
@extends('headerFooter.footer')
<section class="margintop200">
	<div class="container-fluid">
		<div class="content-box-large">
			<div class="panel-heading">
				<div class="panel-title">
					<h3><i class="fa fa-calendar" aria-hidden="true"></i> Event Approval
					</h3>
				</div>
			</div>
			<div class="panel-body">
				<div class="row">
					<div class="col-md-12">
						<div class="panel with-nav-tabs panel-default">
							<div class="panel-heading">
								<ul class="nav nav-tabs">
									<li class="active relocate" data-urlto="tab1default"><a href="#tab1default" data-toggle="tab">Event for Approval</a></li>
									<li class="relocate"  data-urlto="tab2default"><a href="#tab2default" data-toggle="tab">Approved Events</a></li>
								</ul>
							</div>
							<div class="panel-body">
								<div class="tab-content">
									<div class="tab-pane fade in active" id="tab1default">
										<div class="clearfix"></div>
										<div class="table-scroll">
											<table class="table table-striped table-bordered hover table-condensed dataTable no-footer dtr-inline table-mini-font " id="event">
												<thead>
													<tr>
														<th>Event Code</th>
														<th>Title/Topic</th>
														<th>Department</th>
														<th>Schedule</th>
														<th>Speaker</th>
														<th>Competence Area</th>
														<th>CPD credit</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody class="table-condensed">
													<tr>
														<td></td>
														<td></td>
														<td></td>
														<td><td>
															<td>
																<ul style="list-style-type:disc">
																	<li></li>
																</ul>
															</td>
															<td>
																<li></li>
																
															</td>
															<td>
																<li></li>
															</td>
															<td></td>
															<td class="btn-mobile text-center">
																<button type="submit" title="Approve" class="btn btn-xs  btn-primary btn-post">Approve</button>
																<button type="submit" title="Reject" class="btn btn-xs btn-warning disableEvent">
																Reject
																<input type="hidden" class="updateId" value="">
																</button>
																<a href="">
																	<button type="submit" class="btn btn-xs  btn-info" >View</button>
																</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div class="tab-pane fade in " id="tab2default">
											<div class="clearfix"></div><br>
											<div class="table-resposive" >
												<table class="table table-striped table-bordered hover table-condensed dataTable no-footer dtr-inline table-mini-font" id="approvedEvent">
													<thead class="success">
														<tr>
															<th>#</th>
															<th>Event Code</th>
															<th>Title/Topic</th>
															<th>Department</th>
															<th>Schedule</th>
															<th>Speaker</th>
															<th>Competence Area</th>
															<th>CPD credit</th>
															<th>Status</th>
														</tr>
													</thead>
													<tbody class="table-condensed">
														<tr>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
															<td>
																<ul style="list-style-type:disc">
																	<li></li>
																</ul>
															</td>
															<td>
																<li></li>
															</td>
															<td>
																<li></li>
															</td>
															<td></td>
															<td>
																<a href="">
																	<button type="submit" class="btn btn-xs  btn-info" >View</button>
																</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Modal -->
		<div class="modal fade" id="disable">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<p>Are you sure you want to reject this event?</p>
						<input type="hidden" class="updatedId"  name="updatedId" >
						<center>
						<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
						<button type="button" class="btn btn-success" id="disabled">Yes</button>
						</center>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Delete Modal -->
	<div class="modal fade" id="delete">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<p>Are you sure you want to delete this transaction?</p>
					<input type="hidden" class="updatedId"  name="updatedId" >
					<center>
					<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
					<button type="button" class="btn btn-success" id="deleted">Yes</button>
					</center>
				</div>
			</div>
		</div>
	</div>
	<!-- Post Modal -->
	<div class="modal fade" id="post">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<p>Are you sure you want to approve this event?</p>
					<input type="hidden" class="disabledID" name="disabledID" >
					<center>
					<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
					<button type="button" class="btn btn-success " id="posted">Yes</button>
					</center>
				</div>
			</div>
		</div>
	</div>
	<script>
	
	$(function(){
		$('#event').DataTable({
			
			"bLengthChange": false,
			"pageLength": 25,
			"order": [[ 0, "desc" ]]
		});
		$('#approvedEvent').DataTable({
			
			"bLengthChange": false,
			"pageLength": 25,
			"order": [[ 0, "asc" ]]
		});
		
	})
		//disabled code
	$('.disableEvent').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		$('.updatedId').val(id);
		$('#disable').modal('show');
	})
	
	$('#disabled').click(function(){
		var id  = $('input[name="updatedId"]').val();
		$.post(URL+'event/rejectEvent',{'id':id})
			.done(function(returnData){
				// alert(returnData);
				if(returnData==1){
				window.location.href=URL+"index/appEvent";
				}
			})
		})
		
		$('.deleteEvent').click(function(){
			var id = $(this).parent('td').find('.updateId').val();
			$('.updatedId').val(id);
			$('#delete').modal('show');
		})
	$('#deleted').click(function(){
		var id  = $('input[name="updatedId"]').val();
		$.post(URL+'event/deleteEvent',{'id':id})
			.done(function(returnData){
				// alert(returnData);
				if(returnData==1){
				window.location.href=URL+"index/appEvent";
				}
			})
		})
		
	// post
	$('.btn-post').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		// alert(id); return false;
		$('.disabledID').val(id);
			$('#post').modal('show');
	})
	$('#posted').click(function(){
		var id  = $('input[name="disabledID"]').val();
		// alert(id);return false;
		$.post(URL+'event/postEvent',{'id':id})
			.done(function(returnData){
				if(returnData==1){
				window.location.href=URL+"index/appEvent&urlTo=tab2default";
				}
			})
			})
	</script>
</section>