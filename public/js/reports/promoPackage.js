	$(function(){
	$('.btnGenerate').click(function(){
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();

		$('.periodCovered').text(from+' - '+to);
		$('#package-table').DataTable().destroy();
		$.post(URL + 'index/generatePromoPackage',{'from':from,'to':to})
		.done(function(returnData){
			var data = $.parseJSON(returnData);
			var append = "";
			$.each(data,function(key,a){
				amount = parseFloat(a.discount_amount);
				append += "<tr>"+
							"<td>"+a.package_code+"</td>"+
							"<td>"+a.date_created+"</td>"+
							"<td>"+a.package_title+"</td>"+
							"<td>"+a.promo_title+"</td>"+
							"<td>"+a.description+"</td>"+
							"<td>"+a.package_period+"</td>"+
							"<td>"+a.package_fee+"</td>"+
							"<td>"+a.discount_percent+"</td>"+
							"<td>"+amount.toFixed(2)+"</td>"+
							"<td>"+a.discounted_amount+"</td>"+
							"<td>"+a.valid_from+"</td>"+
							"<td>"+a.valid_to+"</td>"+
						"</tr>";
			})
			$('.table-data').html(append);
			$('#package-table').DataTable();
		});
	});

	$('.btnExport').click(function(){
		from = $('input[name="from"]').val();
		to = $('input[name="to"]').val();
		window.location = URL +'index/exportPromoPackage?from='+from+'&to='+to;
	});
})