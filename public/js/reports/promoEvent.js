	$(function(){
	$('.btnGenerate').click(function(){
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();

		$('.periodCovered').text(from+' - '+to);
		$('#promo-table').DataTable().destroy();
		$.post(URL + 'index/generatePromoEvent',{'from':from,'to':to})
		.done(function(returnData){
			
			var data = $.parseJSON(returnData);
			var append = "";
			$.each(data,function(key,a){
				amount = parseFloat(a.discount_amount);
				append += "<tr>"+
							"<td>"+a.promo_code+"</td>"+
							"<td>"+a.date_created+"</td>"+
							"<td>"+a.event+"</td>"+
							"<td>"+a.promo_title+"</td>"+
							"<td>"+a.promo_description+"</td>"+
							"<td>"+a.schedule+"</td>"+
							"<td>"+a.event_fee+"</td>"+
							"<td>"+a.discount+"</td>"+
							"<td>"+amount.toFixed(2)+"</td>"+
							"<td>"+a.discounted_amount+"</td>"+
							"<td>"+a.valid_from+"</td>"+
							"<td>"+a.valid_to+"</td>"+
						"</tr>";
			})
			$('.table-data').html(append);
			$('#promo-table').DataTable();
		});
	});

	$('.btnExport').click(function(){
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();
		window.location = URL +'index/exportPromoEvent?from='+from+'&to='+to;
	});
})