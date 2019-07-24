<section class="margintop200">
	<div class="container-fluid">
		<div class="content-box-large">
			<div class="panel-heading">
				<div class="panel-title">
					<h3><i class="fa fa-folder" aria-hidden="true"></i> Package
					<div class="panel-options pull-right">
					<a href="" data-rel="collapse" class="btn btn-primary hidden"><i class="glyphicon glyphicon-plus"></i> Add Package</a>
					</div>
					</h3>
				</div>
			</div>
			<div class="panel-body">
					<div class="row">
					<div class="col-md-12">
						<div class="panel with-nav-tabs panel-default">
							<div class="panel-heading">
									<ul class="nav nav-tabs">
										<li class="active"><a href="#tab1default" data-toggle="tab">Package Event</a></li>
										<!-- <li class=""><a href="#tab2default" data-toggle="tab">Package on Package</a></li> -->
									</ul>
							</div>
							<div class="panel-body">
								<div class="tab-content">
									<div class="tab-pane fade in active" id="tab1default">
										<div class="panel-options pull-right">
											<a href="" data-rel="collapse" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> Add Package</a>
										</div>
										<div class="clearfix"></div><br>
											<div class="table-scroll">
												<table class="table table-striped table-bordered hover table-condensed dataTable no-footer dtr-inline table-mini-font" id="package">
													<thead>
														<tr>
															<th>Package Code</th>
															<th>Date Created</th>
															<th>Package Title</th>
															<th>Package Validity Period</th>
															<th class="text-center">Total Credit Units</th>
															<th>Total Amount</th>
															<!-- <th>Status</th> -->
															<th>Department</th>
															<th>Setup Status</th>
															<th class="text-center">Tools</th>
														</tr>
													</thead>
													<tbody class="table-condensed">
														
															<tr>
																<td>
																	
																</td>
																<td>
																	
																</td>
																<td>
																	
																</td>
																<td>
																	
																</td>
																<td class="text-center">
																	
																</td>
																<td>
																	
																</td>
																
																<td>
																	
																</td>
																<td class="text-center">
																	
																		<h5><span class="label label-info">Saved</span></h5>
																	
																		<h5><span class="label label-success">Posted</span></h5>
																</td>
																<td class="btn-mobile text-center"> 
																	
																		<a href=""><button type="submit" class="btn btn-xs  btn-info" >View</button></a> 
																		<a href="" title="Update">
																			<button type="submit" class="btn btn-sm btn-primary" >
																				<i class="fa fa-edit"></i>
																			</button>
																		</a>
																		<button type="submit" title="Post" class="btn btn-sm  btn-info btn-post">
																			<i class="fa fa-paper-plane-o"></i>
																		</button> 
																		<button type="submit" class="btn btn-sm btn-warning disabledPackage" title="Disable">
																			<i class="fa fa-ban"></i>
																		</button>
																		<input type="hidden" class="updateId" value="">
																		
																</td>
															</tr>
													</tbody>
												</table>
										</div>
									</div>
									<div class="tab-pane fade in " id="tab2default">
										<div class="panel-options pull-right">
											<a href="" data-rel="collapse" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> Add Package on Package</a>
										</div>
										<div class="clearfix"></div><br>
										<div class="table-scroll">
											<table class="table table-striped table-bordered hover table-condensed dataTable no-footer dtr-inline table-mini-font" id="packagePack">
												<thead>
													<tr>
														<th>PoP Code</th>
														<th>Schedule</th>
														<th >Package on Package</th>
														<th class="text-center">Total Credit Units</th>
														<th>Total Amount</th>
														<th>Status</th>
														<th class="text-center">Tools</th>
													</tr>
												</thead>
												<tbody class="table-condensed">
													<tr>
														<td>
														</td>
														<td>
														</td>
														<td>
														</td>
														<td class="text-center">
													</td>
														<td>
														</td>
														<td>
														</td>
														<td class="text-center">
															
																<a href=""><button type="submit" class="btn btn-xs  btn-info" >View</button></a> 
															<a href=""><button type="submit" class="btn  btn-xs btn-primary">Update</button></a>
															<button type="submit" title="Post" class="btn btn-xs  btn-info btn-post">Post</button> 
															<button type="submit" class="btn  btn-xs btn-warning disabledPackage" >Disable
															</button>
															<input type="hidden" class="updateId" value="">
															<button type="submit" title="delete" class="btn btn-sm  btn-danger deletePackage"><i class="fa fa-trash"></i></button> 	
														</td>
													</tr>
													<?php
													$ctr2++;
													endif;
													endforeach; ?>
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
			<p>Are you sure you want to disable this?</p>
			<input type="hidden" class="disabledID" name="disabledID" >
			<center>
			<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
			<button type="button" class="btn btn-success " id="disabled">Yes</button>
			</center>
		  </div>
		</div>
	 </div>
	 </div>
	<!-- Delete Modal -->
	<div class="modal fade" id="delete">
		  <div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
			  <div class="modal-body">
				<p>Are you sure you want to delete this?</p>
				<input type="hidden" class="disabledID" name="disabledID" >
				<center>
				<button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
				<button type="button" class="btn btn-success " id="deleted">Yes</button>
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
	 
	 
	 
	 
	<script>
	
	$(function(){
		$('#package').DataTable({
			"bLengthChange": false,
			"pageLength": 25,
			"order": [[ 0, "desc" ]] 
		});
		$('#packagePack').DataTable({
			"bLengthChange": false,
			"pageLength": 25,
			"order": [[ 0, "desc" ]] 
		});
		
	})
	//disabled code
	$('.disabledPackage').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		// alert(id);
		$('.disabledID').val(id);
		$('#disable').modal('show');
	})

	$('#disabled').click(function(){
		var id  = $('input[name="disabledID"]').val();
		// alert(id);
		$.post(URL+'package/disabledPackage',{'id':id}).done(function(returnData){
			// alert(returnData);return false;
			if(returnData==1){
				window.location.href=URL+"index/package";
			}
		})
	})
	// delete	
	$('.deletePackage').click(function(){
		var id = $(this).parent('td').find('.updateId').val();
		// alert(id); return false;
		$('.disabledID').val(id);
		$('#delete').modal('show');
	})

	$('#deleted').click(function(){
		var id  = $('input[name="disabledID"]').val();
		// alert(id);return false;
		$.post(URL+'package/deletePackage',{'id':id}).done(function(returnData){
			if(returnData==1){
				window.location.href=URL+"index/package";
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
		$.post(URL+'package/postPackage',{'id':id}).done(function(returnData){
			// alert(returnData); return false;
			if(returnData==1){
				window.location.href=URL+"index/package";
			}
		})
	})
	</script>
</section>