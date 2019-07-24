var $_GET = $_GETS();
var redirect_url = '';

$(function() {
	
	$(document).on('click', '.nav-corporate', function () {
		var activeTab = $('.nav-corporate li.active').attr('id');
		if (activeTab == "corporate") {
			$('.companyName').text('Company Name');
		}
	})

	// Event Onchange
	$("body").on("change", ".EventTitle", function () {
		$('#loading-wrapper').fadeIn();
		var eventID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate li.active').attr('id');

		$.post(URL + 'index/getEventPayment', { eventID: eventID})
		.done(function (returnData) {
			// $('.schedule').html('<strong>'+returnData+'</strong>');
			var duce = $.parseJSON(returnData);
			$('.eventFrom').val(duce.key1);
			$('.eventTo').val(duce.key2);
			onMember();
			// onCorporate();
			if (activeTab == "individual") {
				
			} else if (activeTab == "corporate") {
				// {}	
				$('.companyName').text('Company Name');
			}

		});
	})

	$("body").on("change", ".packageTitle", function () {
		$('#loading-wrapper').fadeIn();
		var eventID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate1 li.active').attr('id');
		$.post(URL + 'index/getPackagePayment', {eventID: eventID}).done(function (returnData) {
			var duce = jQuery.parseJSON(returnData);
			$('.from').val(duce.key1);
			$('.to').val(duce.key2);
			onPackage();
			// onCorporatePackage();
		});
	})

	
	$("body").on("change", ".pop", function () {
		$('#loading-wrapper').fadeIn();
		var eventID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate-pop li.active').attr('id');
		$.post(URL + 'index/getPOPPayment', {
				eventID: eventID
			})
			.done(function (returnData) {
				var duce = jQuery.parseJSON(returnData);
				$('.fromDate').val(duce.key1);
				$('.toDate').val(duce.key2);
				onPOP();
				onCorporatePOP();
			});

	})

	
	$("body").on("change", ".promoEvent", function () {
		$('#loading-wrapper').fadeIn();
		var ID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate2 li.active').attr('id');
		$.post(URL + 'index/getPromoEventPayment', {ID: ID})
		.done(function (returnData) {
			// $('.promoEventSchedule').val(returnData);
			var duce = $.parseJSON(returnData);
			$('.promoeveFrom').val(duce.key1);
			$('.promoeveTo').val(duce.key2);
			onPromoEvent();
			// onCorporatePromoEvent();
		});
	})

	$("body").on("change", ".promoPackage", function () {
		$('#loading-wrapper').fadeIn();
		var ID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate3 li.active').attr('id');
		
		$.post(URL + 'index/getPromoPackagePayment', { ID: ID })
		.done(function (returnData) {
			var duce = $.parseJSON(returnData);
			$('.promopackFrom').val(duce.key1);
			$('.promopackTo').val(duce.key2);
			// $('.promoPackageSchedule').val(returnData);
			onPromoPackage();
			// onCorporatePromoPackage();
		});
	})

		
	$("body").on("change", ".promoPOP", function () {
		$('#loading-wrapper').fadeIn();
		var ID = $(this).find(":selected").val();
		var activeTab = $('.nav-corporate4 li.active').attr('id');
		$.post(URL + 'index/getPromoPOPPayment', {
				ID: ID
			})
			.done(function (returnData) {
				$('.promoPOPSchedule').val(returnData);
				onPromoPOP();
				onCorporatePromoPOP();
				if (activeTab == "individual") {} else if (activeTab == "corporate") {}
			});

	})

	$('.viewPaymentPackage2').on('click', '.btnViewAttendees', function () {
		that = $(this);
		event_id = that.closest('td').find('.eventId').val();
		$.post(URL + 'index/getAttendees', {
			event_id: event_id
		}).done(function (data) {
			json_data = $.parseJSON(data);
			console.log(json_data);
			$('#modalAttendees table tbody').html('');
			$.each(json_data, function (index, el) {
				$('#modalAttendees table tbody').append(
					'<tr>' +
						'<td style="font-weight:bold">' + el.first_name + ' ' + el.middle_name + ' ' + el.last_name + '</td>' +
					'</tr>'
				);
			})
			$('#modalAttendees').modal('show');
		});
		return false;
	})


	const tab = $_GET['tab'];
	const e_id = $_GET['e_id'];
	const tabs = {
		eventTab : { 
			select : 'select.EventTitle'
		}, 
		packageTab : {
			select : 'select.packageTitle'
		},
		promoeventTab : {
			select : 'select.promoEvent'
		},
		promopackageTab : {
			select : 'select.promoPackage'
		},
	};
	
	const tab_obj =  tabs[tab];

	activeTab(tab);
	activeSelect(tab_obj, e_id);

	$('#eventTypeTabs li>a').click(function() {
		let that = $(this);
		let tab = that.attr('href').substring(1);
		window.history.pushState({}, null, URL+'index/payment?tab='+tab);
	})

	$('table').on("click", ".btn_post_payment", function() {
		$('#postPayment').modal('show');
		payid = $(this).attr('payId');
		$('#postPayment').find('#posted').attr('payId',payid);
		alert();

		return false;
		// let that = $(this);
		// let id = that.val();
		
		// $.post(URL+'index/postPayment', {id:id}).done(function(data){
		// 	if(data == 1) {
		// 		location.href = URL+'index/payment';
		// 	};
		// })
	})

	$('#posted').click(function(){
		// var id  = $('.btn_post_payment').val();
		id = $(this).attr('payId');
		let r_url = setQueryString(id, 'eventTab');

		$.post(URL+'index/postPayment', {id:id}).done(function(data){
			// alert(data); return false;
			if(data == 1) {
				location.href = decodeURIComponent(r_url);
				// location.href = URL+'index/payment';
			};
		})
	})

	$('table').on("click",".btn_cancel_payment", function(){
		$('#cancelPayment').modal('show');
	});

	$('#cancelled').click(function(){
		var id = $('.btn_cancel_payment').val();
		let r_url = setQueryString(id, 'eventTab');
		$.post(URL+'index/cancelPayment',{id:id})
		.done(function(result){
			location.href = decodeURIComponent(r_url);
		});
	});
})

	
function onMember() {
	// var id = $('.EventTitle').val();
	var id = [];
    id = $('.EventTitle.selectpicker').val();
	// alert(id); return false;
	let r_url = setQueryString(id, 'eventTab');
	$.post(URL + 'index/getPaymentEvent', { id: id, r_url: r_url}).done(function (returnData) {
		$('#loading-wrapper').fadeOut();
		$('.viewPaymentList').closest('table').DataTable().destroy();
		$('.viewPaymentList').html(returnData);
		$('.viewPaymentList').closest('table').DataTable();
	});
}

function onCorporate() {
	var id = $('.EventTitle').val();
	$.post(URL + 'index/getPaymentCorporateEvent', {id: id})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentList2').closest('table').DataTable().destroy();
				$('.viewPaymentList2').html(returnData);
				$('.viewPaymentList2').closest('table').DataTable();
			})
		});
}

function onPackage() {
	// var id = $('.packageTitle').val();
	var id = [];
    id = $('.packageTitle.selectpicker').val();
	// alert(id); return false;
	let r_url = setQueryString(id, 'packageTab');
	$.post(URL + 'index/getPaymentPackage', {id: id, r_url: r_url})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPackage').closest('table').DataTable().destroy();
				$('.viewPaymentPackage').html(returnData);
				$('.viewPaymentPackage').closest('table').DataTable();
			})
		});
}

function onCorporatePackage() {
	var id = $('.packageTitle').val();
	$.post(URL + 'index/getPaymentCorporatePackage', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPackage2').html(returnData);
			})
		});
}


function onPOP() {
	var id = $('.pop').val();
	$.post(URL + 'index/getPaymentPOP', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPOP').html(returnData);
			})
		});
}

function onCorporatePOP() {
	var id = $('.pop').val();
	$.post(URL + 'index/getPaymentCorporatePackageOnPackage', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPOP2').html(returnData);
			})
		});
}

function onPromoEvent() {
	// var id = $('.promoEvent').val();
	var id = [];
	id = $('.promoEvent.selectpicker').val();
	let r_url = setQueryString(id, 'promoeventTab');
	$.post(URL + 'index/getPaymentPromoEvent', {id: id, r_url : r_url})
		.done(function (returnData) {
			$('#loading-wrapper').fadeOut();
			$('.viewPaymentPromoEvent').closest('table').DataTable().destroy();
			$('.viewPaymentPromoEvent').html(returnData);
			$('.viewPaymentPromoEvent').closest('table').DataTable();
		}
	);
	// setQueryString(id, 'promoeventTab');
}

function onCorporatePromoEvent() {
	var id = $('.promoEvent').val();
	$.post(URL + 'index/getPaymentCorporatePromoEvent', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPromoEvent2').html(returnData);
			})
		});
}

function onPromoPackage() {
	var id = [];
	id = $('.promoPackage.selectpicker').val();
	let r_url = setQueryString(id, 'promopackageTab');
	$.post(URL + 'index/getPaymentPromoPackage', {id: id, r_url: r_url})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPromoPackage').closest('table').DataTable().destroy();
				$('.viewPaymentPromoPackage').html(returnData);
				$('.viewPaymentPromoPackage').closest('table').DataTable();
			})
		}
	);
	
	// setQueryString(id, 'promopackageTab');
}

function onCorporatePromoPackage() {
	var id = $('.promoPackage').val();
	$.post(URL + 'index/getPaymentCorporatePromoPackage', {id: id})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPromoPackage2').html(returnData);
			})
		});
}

function onPromoPOP() {
	var id = $('.promoPOP').val();
	$.post(URL + 'index/getPaymentPromoPOP', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPromoPOP').html(returnData);
			})
		});
}

function onCorporatePromoPOP() {
	var id = $('.promoPOP').val();
	$.post(URL + 'index/getPaymentCorporatePromoPOP', {
			id: id
		})
		.done(function (returnData) {
			setTimeout(function () {
				$('#loading-wrapper').fadeOut();
				$('.viewPaymentPromoPOP2').html(returnData);
			})
		});
}
	
	function $_GETS(param) {
		var vars = {};
		window.location.href.replace( location.hash, '' ).replace( 
			/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
			function( m, key, value ) { // callback
				vars[key] = value !== undefined ? value : '';
			}
		);

		if ( param ) {
			return vars[param] ? vars[param] : null;	
		}
		return vars;
	}

	function activeTab(tab) {
		if( ! $('#eventTypeTabs [href=#'+tab+']').length ) {
			tab ='eventTab';
		}
		$('#eventTypeTabs [href=#'+tab+']').closest('li').addClass('active');
		$('#'+tab).addClass('in active');
	}

	function activeSelect(obj, id) {
		if(obj!=undefined && id !=undefined && id != null){
			let existing = false;
			
			$(obj.select+ ' option').each(function(){
				let val = $(this).val();
				if(val == id) {
					existing = true;
					return;
				}
			})
			
			if(existing) {
				$(obj.select).val(id).trigger('change');
			}
		}
	}

	function setQueryString(id, tab = $_GET['tab'] ) {
		let e_id = id;
		redirect_url = URL+'index/payment?tab='+tab+'&e_id='+e_id;
		window.history.pushState({}, null, redirect_url);
		return redirect_url;
	} 
	
