$(function () {
    $("#setup").on('change',function () {
        if ($("#setup").is(':checked')) {
                $('.checkAll').prop("checked", true);

        } else {
                $('.checkAll').prop("checked", false);
        }
    });
	$("#department").on('change',function () {
       $('#userType').attr('disabled', false)
    });
});

function checkdata(id) {
   
    $("#"+id).on('change',function () {
        if ($("#"+id).is(':checked')) {
                $('.checkPermi'+id).prop("checked", true);

        } else {
                $('.checkPermi'+id).prop("checked", false);
        }
    });
}