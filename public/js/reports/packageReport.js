$(function(){
	$('.btn-generate').click(function(){

		var from = $('input[name="from"]').val();
		var to = $('input[name="to"]').val();

		var fromDate = getDate(from);
		var fromYear = from.split('/');
		var toDate = getDate(to);
		var toYear = to.split('/');

		var date_header = fromDate + ' - '+toDate;

		$('#package-table').DataTable().destroy();
		$.post(URL + 'report/packageReportResult',{'from':from,'to':to})
		.done(function(returnData){
			if(returnData !== '[]'){
			var data = $.parseJSON(returnData);
			var append = "";
			$.each(data,function(key,a){
				append += "<tr>"+
							"<td>"+a.p_code+"</td>"+
							"<td>"+a.date_created+"</td>"+
							"<td>"+a.p_title+"</td>"+
							// "<td>"+a.pay_link+"</td>"+
							"<td>"+a.val_from+"</td>"+
							"<td>"+a.val_to+"</td>"+
							"<td>"+explode(a.eve_title)+"</td>"+
							"<td>"+explode(a.schedule)+"</td>"+
							"<td>"+explode(a.comp_area)+"</td>"+
							"<td>"+explode(a.cpd)+"</td>"+
							"<td>"+explode(a.speak)+"</td>"+
						"</tr>";
			})

			}else{
				append = "<tr><td class='text-center' colspan='10'>No data available in table</td></tr>";
			}

			$('.table-data').html(append);
			$('.date-from-to').html(date_header);
			$('#package-table').DataTable();
		});
	});

	$('.btnExport').click(function(){
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();
		window.location = URL +'index/exportPackageReport?from='+from+'&to='+to;
	});


})


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

function getDate(date) {

  var date = date.split(' ');
  var date = date[0];
  var month = date.split('/')[0];
 
  var year = date.split('/')[2];
  var day = date.split('/')[1];

  var monthName = new Array();
  monthName[0] = "January";
  monthName[1] = "February";
  monthName[2] = "March";
  monthName[3] = "April";
  monthName[4] = "May";
  monthName[5] = "June";
  monthName[6] = "July";
  monthName[7] = "August";
  monthName[8] = "September";
  monthName[9] = "October";
  monthName[10] = "November";
  monthName[11] = "December";
 
  return monthName[month-1]+' '+day+', '+year;
}

