$(function(){
	allMember();
	$('.btn-generate').click(function(){
		$('#event-table tbody').html('');
		name = $('select[name="name"]').val();
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();

		$.post(URL + 'report/allEventPerAttendee',{'name':name,'from':from,'to':to})
		.done(function(returnData){
			if(returnData !== '[]'){
				var data = $.parseJSON(returnData);
				var comp = "<td></td>";
				var comSpan = 0;
				var arr = [];
				$.each(data, function(i,x) {
					arr.push(x.THEMATIC);
					comSpan++;
					
					// comp += `<td class="td-competence">${x.THEMATIC}</td>`;
					comp += extractThematic(x.THEMATIC);
				});
				
				$('.competence-span').attr('colspan', comSpan);
				content = comp+'<td></td><td></td>';
				content = '<tr>'+content+'</tr>';
				
				$.each(data, function(i,x) {
					
					var con = '';
					$.each(arr, function(a,b) {
						if(b === x.THEMATIC) {

							con += `<td>${explode(x.CPD)}</td>`;
						} else {
							con += `<td></td>`;
						}
					});
					content += `
							<tr>
								<td>${x.TITLE}</td>
								${con}
								<td>${x.VENUE}</td>
								<td>${x.DATE_CONDUCTED}</td>
							</tr>`;
				});
				$('#event-table tbody').append(content);	
				$('#event-table tbody tr:first').find('.td-competence').css({'background-color':'#0D47A1', 'color': '#fff'});
				$('#event-table').DataTable();
			}else{
				// append = "<tr><td class='text-center' colspan='5'>No data available in table</td></tr>";
			}

			// $('.table-data').append(append);
		});
	});


	$('.btnExport').click(function(){

		name = $('select[name="name"]').val();

		window.location = URL +'index/exportTrainingSummaryPerAttendee&name='+name+'&from='+from+'&to='+to;
	});



	$('select[name=name]').change(function() {
		var cpa_no = $(this).find('option:selected').attr('data-cpa-no');
		$('input[name="prc"]').val(cpa_no);
	});
})

function extractThematic(data) {
	var d_val = data.split('<>');
	var res = "";
	$.each(d_val, function (c, d) {
		res += '<td class="td-competence hidden">'+d+'</td>';
	});
	return res;
}


function allMember($dep_id){
	$.post(URL+'report/allMember')
	.done(function(returnData){
		var data = $.parseJSON(returnData);
		var append = "<option selected disabled></option>";
		$.each(data, function(key,a){
			append += "<option value='"+a.id+"' data-cpa-no='"+a.cpa_no+"'>"+a.name+"</option>";

		})
		$('select[name=name]').html(append);
		$('select[name=name]').selectpicker('refresh');
	})
}

function explode(details) {
	var d_val = details.split('<>');
	var li = "";
	$.each(d_val, function (i, x) {
		if(x != '') {
			li += '<p>' + x + '</p>';
		}
	});
	return li;
}