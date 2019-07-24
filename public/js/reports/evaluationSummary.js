	$(function(){
	$('.btnGenerate').click(function(){

		event = $('select[name="event"]').val();

		$.post(URL + 'index/getAllAttendee',{'event':event})
		.done(function(returnData){
			var data = $.parseJSON(returnData);
			var append = "";
			$.each(data,function(key,a){
				append += "<tr>"+
							"<td>"+a._+"</td>"+
						"</tr>";
			})	
			$('.table-data').html(append);
			$('#promo-table').DataTable();
		});
	});

	// $('.btnExport').click(function(){
	// 	from = $('input[name="from"]').val();
	// 	to = $('input[name="to"]').val();
	// 	window.location = URL +'index/exportPromoEvent?from='+from+'&to='+to;
	// });
})