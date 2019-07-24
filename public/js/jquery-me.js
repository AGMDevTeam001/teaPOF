
$( function() {
	eventChange();
	evntClassChange();
	thematicArea();
	title();
	venue();
	cpdCredit();
});
			
function eventChange() {
	$('#eventType').change(function(){
		var speaker = $(this).val();
		if(speaker == 'add_new'){
			$(this).find('option:first').prop('selected',true);
			$('#addEvent').modal('show');
		}		
	});
}
	$('#save').click(function(){
		$('#modalSave').modal('toggle');
	});

	$('#addEventType').unbind('submit');
	$('#addEventType').bind('submit',function(){
		var data = $('#addEventType').serialize();
		// alert(URL);
		$.post(URL+'event/addEventTypes', data)
			.done(function(returnData){
				if(returnData == 'exist') {
					toastr.error('Already exist!');
					return false;
				}
				$('#eventType').html(returnData);
				$('#eventType').selectpicker('refresh');
				eventChange();
				$('#modalSave').modal('toggle');
				$('#addEvent').modal('toggle');
			})
			return false;	
	})
	
	function evntClassChange() {
		$('#eventClass').change(function(){
			var speaker = $(this).val();
			if(speaker == 'add_new') {
				$(this).find('option:first').prop('selected',true);
				$('#addEventClassification').modal('show');
		
			}
		});
	}

	$('.saveEventClass').click(function() {
		$('#eventClassModal').modal('toggle');
	});

	$('#addEventClassifications').unbind('submit');
	$('#addEventClassifications').bind('submit',function(){
		var data = $('#addEventClassifications').serialize();
		// alert(URL);
		$.post(URL+'event/addEventClass', data).done(function(returnData){
			if(returnData == 'exist') {
				toastr.error('Already exist!');
				return false;
			}
			$('#eventClass').html(returnData);
			$('#eventClass').selectpicker('refresh');
			evntClassChange();
			$('#eventClassModal').modal('toggle');
			$('#addEventClassification').modal('toggle');
		})
		return false;	
	})
	
	function thematicArea() {
		$('#thematic').change(function(){
			var speaker = $(this).val();
			if(speaker == 'add_new') {
				$(this).find('option:first').prop('selected',true);
				$('#addCompetence').modal('show');
			}
		});
	}

	$('.saveCompetence').click(function(){
		$('#CompetenceArea').modal('toggle');
	});

	$('#saveCompetenceData').unbind('submit');

	$('#saveCompetenceData').bind('submit',function(){
		var data = $('#saveCompetenceData').serialize();
		$.post(URL+'event/addCompetence', data).done(function(returnData){
			thematicArea();
			$('#addCompetence').modal('toggle');
			$('#CompetenceArea').modal('toggle');
		})
		return false;	
	})
	
function title() {
	// $('#saveEventForm').on('change', '#title', function() {
	$('#title').change(function() {
		var speaker = $(this).val();
		if(speaker == 'add_new') {
			$(this).find('option:first').prop('selected',true);
			$('#addTitle').modal('show');
		}
	});
}	

$('.saveTitle').click(function(){
	$('#titleModal').modal('toggle');
});
	
$('#TitleForm').unbind('submit');

$('#TitleForm').bind('submit',function(){
	var data = $('#TitleForm').serialize();
	// alert(data); return false;
	$.post(URL+'event/addTitle', data)
		.done(function(returnData){
			if(returnData == 'exist') {
				toastr.error('Already exist!');
				return false;
			}
			$('#title').html(returnData);
			$('#title').selectpicker('refresh');
			$('#addTitle').modal('toggle');
			$('#titleModal').modal('toggle');
			$('#TitleForm input[name=title]').val('');
		})
		return false;	
})
	
function venue()
{
	$('#venue').change(function(){
		var speaker = $(this).val();
		if(speaker == 'add_new')
		{
			$(this).find('option:first').prop('selected',true);
			$('#addVenue').modal('show');
		}
	});
}
	$('.saveVenue').click(function(){
		$('#venueModal').modal('toggle');
	});
	$('#addvenueForm').submit(function(){
		var data = $('#addvenueForm').serialize();
		// alert(data); return false;
		$.post(URL+'event/addVenue', data)
			.done(function(returnData){
				// alert(returnData);
				// return false;
				if(returnData =='exist'){
					toastr.error('Already exist!');
					return false;	
				}
				$('#venue').html(returnData);
				$('#venue').selectpicker('refresh');
				venue();
				$('#addVenue').modal('toggle');
				$('#venueModal').modal('toggle');
			})
			return false;	
	})
	
function cpdCredit()
	{
	$('#cpdCredit').change(function(){
		var speaker = $(this).val();
			if(speaker == 'add_new')
			{
				$(this).find('option:first').prop('selected',true);
				$('#addCPD').modal('show');
				// savesalesPerson();
				
			}
			
		});
	}
	$('.saveCpd').click(function(){
		// alert();
			$('#cpdModal').modal('toggle');
	});
	$('#addCPDCredits').unbind('submit');
	$('#addCPDCredits').bind('submit',function(){
		var data = $('#addCPDCredits').serialize();
		// alert(data);  return false;
		$.post(URL+'event/addCPD', data)
			.done(function(returnData){
				// alert(returnData); 
					$('#cpdCredit').html(returnData);
					venue();
					$('#addCPD').modal('toggle');
					$('#cpdModal').modal('toggle');
			})
			return false;	
	})
	
function myFunction() {
	var text=0;
    var x = $('.cpdText').val();
	 var res = x.split(",");
	 for (i = 0; i < res.length; i++) {
			 text +=Number(res[i]) ;
			 // return text;
		}
   $('#totalCredit').val(text.toFixed());
     // alert(name);
}	