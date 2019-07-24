@extends('headerFooter.header')
@extends('headerFooter.footer')
<section class="margintop200">
	<div class="container-fluid">
		<div class="content-box-large">
			<div class="panel-heading">
				<div class="panel-title">
					<h3><i class="fa fa-calendar" aria-hidden="true"></i> Event
						<div class="panel-options pull-right">
							<a href="#" data-rel="collapse" class="btn btn-primary" ><i class="glyphicon glyphicon-plus"></i> Add Event</a>
						</div>
					</h3>
				</div>
			</div>
			<div class="panel-body">
				<div class="clearfix"></div>
				<div class="table-scroll">
					<table class="table table-striped table-bordered hover table-condensed dataTable no-footer dtr-inline table-mini-font " id="event">
						<thead>
							<tr>
								<th >#</th>
								<th >Event Code</th>
								<th >Title/Topic</th>
								<th >Event Schedule</th>
								<th>Speaker</th>
								<th >Competence Area</th>
								<th>Credit Units</th>
								<th>Department</th>
								<th>Status</th>
								<th  class="text-center" >Tools</th>
							</tr>
						</thead>
						<tbody class="table-condensed">
								<tr>
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
									<td class="text-center">
										
											<h6><span class="text-info">Saved</span></h6>
										
											<h6><span class="text-success">Approved</span></h6>
										
											<h6><span class="text-danger">Rejected</span></h6>
									

									</td>
									<td class="btn-mobile text-center"> 
											<a href="">
												<button type="submit" class="btn btn-xs  btn-info" >View</button>
											</a>										
										<a href="#">
											<button type="submit" class="btn btn-xs  btn-primary" >Update</button>
										</a>										
											<button type="submit" title="Post" class="btn btn-xs  btn-info btn-post">Submit</button> 
										<button type="submit" class="btn btn-xs btn-warning disableEvent">Disable
											<input type="hidden" class="updateId" value="">
										</button>
									</td>
								</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="disable">
		 <div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
			  <div class="modal-body">
				<p>Are you sure you want to disable this transaction?</p>
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
				<button type="button" class="btn btn-success" id="pending"  class="btn btn-success" id="rejected">Yes</button>
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
			<p>Are you sure you want to post this?</p>
			<input type="hidden" class="disabledID" name="disabledID" >
			<center>
			<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
			<button type="button" class="btn btn-success " id="posted">Yes</button>
			</center>
		  </div>
		</div>
	 </div>
	 </div>
	 	<!-- submit Modal -->
	<div class="modal fade" id="post">
	  <div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
		  <div class="modal-body">
			<p>Are you sure you want to post this?</p>
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
		
	})
		//disabled code
	$('.disableEvent').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		$('.updatedId').val(id);
		$('#disable').modal('show');
	})
	
	$('#disabled').click(function(){
		var id  = $('input[name="updatedId"]').val();
		$.post(URL+'event/disabledEvent',{'id':id})
			.done(function(returnData){
				if(returnData==1){
					window.location.href=URL+"index/event";
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
				window.location.href=URL+"index/event";
				}
			})
		})
		
	// post
	$('.btn-post').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		$('.disabledID').val(id);
		$('#post').modal('show');
	})
	
	$('#posted').click(function(){
		var id  = $('input[name="disabledID"]').val();
		$.post(URL+'event/submitEvent',{'id':id})
			.done(function(returnData){
				if(returnData==1){
					toastr.success('Successfully Posted!');
					setTimeout(function(){
					window.location.href=URL+"index/event";
						},1000)
				}
			})
		})	
	</script>
</section>