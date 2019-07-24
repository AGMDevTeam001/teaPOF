<!-- Footer -->
<div  class="container-fluid col-xs-12 footer colored print-disabled">
	<img src="{{asset("img/violator.png")}}" class="img-responsive" id="footer1">
</div>
<div class="modal fade" id="loaderModal">
	<div class="modal-dialog modal-sm text-center" role="document">
		<div class="lds-spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>
<div class="modal fade" id="UpdateExisting">
	<div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<p>Cannot Update, it has existing transaction</p>
				<center>
				<button type="button" class="btn btn-danger" data-dismiss="modal">Ok</button>
				</center>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="UpdateNotif" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-body">
				<p>Are you sure you want to save this transaction?</p>
			</div>
			<div class="modal-footer">
				<div class="btn-group btn-group-justified" role="group" aria-label="group button">
					<div class="btn-group" role="group">
						<button type="button" class="btn btn-danger" data-dismiss="modal"  role="button"><i class="fa fa-times"></i> Close</button>
					</div>
					<div class="btn-group" role="group">
						<button type="submit"  class="btn btn-default btn-hover-green updateBtn" data-action="save" role="button"><i class="fa fa-file"></i> Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
	$(".modal").attr('data-backdrop' ,"static");
	$(".modal").attr('data-keyboard' ,"false");
	
	function showLoader(isTrue = true) {
		$('#loaderModal').modal( isTrue ? 'show' : 'hide');
	}
</script>
</body>
</html>