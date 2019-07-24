	$(function(){
	getEventsAttendee();
	$('.btn-generate').click(function(){

		event = $('select[name="event"]').val();
		
		$('#table-temp').DataTable().destroy();
		$.post(URL + 'report/getAllAttendee',{'event':event})
		.done(function(returnData){
			// console.log(returnData);
			if(returnData !== '[]'){
			var data = $.parseJSON(returnData);
			var append = "";
			$.each(data,function(key,a){
				append += "<tr>"+
							"<td class='text-center'>"+a.attendee+"</td>"+
							"<td class='text-center'>"+a.company+"</td>"+
							"<td class='text-center'>"+a.contact_no+"</td>"+
							"<td class='text-center'>"+a.email+"</td>"+
							"<td class='text-center'>"+a.cpa_no+"</td>"+
							"<td></td>"+
							"<td></td>"+
						"</tr>";
			})

			}else{
				append = "<tr><td class='text-center' colspan='7'>No data available in table</td></tr>";
			}

			$('.table-data').html(append);
			$('#table-temp').DataTable();
		});
	});

	$('.btnExport').click(function(){

		event = $('select[name="event"]').val();

		window.location = URL +'index/exportEventAttendee&event='+event;
		
	});


})

function getEventsAttendee(){
	$.post(URL+'report/getEventsAttendee')
	.done(function(returnData){
		var data = $.parseJSON(returnData);
		var append = "<option selected disabled></option>";
		$.each(data, function(key,a){
			append += "<option value='"+a.id+"'>"+a.title+"</option>";
		})	
		$('select[name=event]').html(append);
		$('select[name=event]').selectpicker('refresh');
	})
}