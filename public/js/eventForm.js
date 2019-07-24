$(function () {

    var idUpdate = "";
    var ctr = 1;
    var count = $('#count').val();
    var row = $('#appendRow').html();
    var appendCpd = $('#appendMultiple').html();

    $('.speakerData').selectpicker('refresh');

    $('#competence').on('change', '#thematic', function () {
        var id = $(this).find(":selected").val();

        $.post(URL + 'event/getCPD', {id: id}).done(function (returnData) {
            $('.cpdCredit').val(returnData);
        });

    })

    if (countSpeaker() == count) {
        $('.speaker .btn-append').attr('disabled', '')
    } else {
        $('.speaker .btn-append').attr('disabled', false)
    }
    $('#data1').on('click', '.btn-append', function () {
        // let row = $('.toBeDuplicate').html();
        $('#data1').append(row);
        let that = $('#data1 .btn-append');
        removeRow();
        if (countSpeaker() >= count) {
            that.attr('disabled', true)
        } else {
            that.attr('disabled', false)
        }
        $('#data1 select:last').selectpicker('refresh');
        // $('#data1 select:last').removeClass('hidden');
    });
    
    $('#data1').on('change', 'select.speakerData', function () {
        // $('#appendRow .speakerData').selectpicker('refresh');
        that = $(this);
        var eventID = that.val();
        ctr = 0;
        $('#data1 select.speakerData').each(function () {
            var val = $(this).val();
            if (val == that.val()) {
                ctr++;
                if (ctr > 1) {
                    that.find('option').prop('selected', false);
                    that.find('.selectSpeaker').prop('selected', true);
                    toastr.error('Speaker already chosen. Please choose another.');
                    that.prop('selectedIndex',0);
                    that.selectpicker('refresh');

                    // $('#alertModal .mainTxt').text('Speaker already chosen. Please choose another.');
                    // $('#alertModal').modal('show');
                    return false;
                }
            }
        });

    })
	
    $('#multipleCpd').change(function(){
        let isChecked = $(this).prop('checked');
        if(isChecked) {
            $('.singleCpd').fadeOut(function() {
                $('.multipleCpd').fadeIn();
                $('.singleCpd select').prop('disabled',true);
                $('.singleCpd input').prop('disabled',true);
                $('.singleCpd input').prop('required',false);
                $('.multipleCpd input').prop('disabled',false);
                $('.multipleCpd input.require').prop('required',true);
                // $('.multipleCpd input').prop('required',true);
            });
        } else {
            $('.multipleCpd').fadeOut(function(){
                $('.singleCpd').fadeIn();
                $('.singleCpd select').prop('disabled',false);
                $('.singleCpd input').prop('disabled',false);
                $('.multipleCpd input').prop('disabled',true);
                $('.multipleCpd input').prop('required',false);
            })
        }
    })

    $('.multipleCpd').on('click', '.btn-append', function() {
        let appends = $(appendCpd);
            appends.find('select').selectpicker('refresh');
        
        $('.multipleCpd table tbody').append(appends);
        // $('.multipleCpd table tbody').append(
        //     '<tr>'+
        //             '<td><input type="text" name="thematic[]" class="form-control" required></td>'+
        //             '<td><input type="text" name="cpd_unit[]" class="form-control numeric" required></td>'+
        //             '<td>'+
        //                 '<button type="button" class="btn btn-danger btn-remove">'+
        //                     '<span class="glyphicon glyphicon-minus"></span>'+
        //                 '</button>'+
        //             '</td>'+
        //     '</tr>'
        // );
    })
    $('.multipleCpd').on('click', '.btn-remove', function() {
        $(this).closest('tr').remove();
    })
})

function countSpeaker() {
    let ctr = $('#saveEventForm select.speakerData').size();
    return ctr;
}

function removeRow() {
    $('.btn-remove').click(function () {
        if (countSpeaker() < count) {
            $('.speaker .btn-append').attr('disabled', false)
        }
        $(this).closest('#data').remove();
        // alert(ctr1);
    });
}
//add Event
$('.saveEvents').click(function () {
    $('#saveNotif').modal('toggle')
})

$('#saveEventForm').submit(function () {
    var data = $(this).serializeArray();
    if (!checkDates()) {
        $('#alertModal .mainTxt').text('Invalid start date and end date.');
        $('#alertModal').modal('show');
        return false
    }
    
    $('#loading-wrapper').fadeIn();
    $.post(URL + 'event/addEvent', data)
        .done(function (returnData) {
             // console.log(returnData); return false;
            $('#saveNotif').modal('hide');
            if(returnData == 1) {
                toastr.success('Successfully Added!');
                setTimeout(function () {
                    $('#loading-wrapper').fadeOut();
                    window.location.href = URL + "index/event";
                }, 1000)
            }
            else if (returnData == 'boa_number_exist'){
                $('#loading-wrapper').fadeOut();
                toastr.error('PRC Official Receipt number already exist!');
            } else if(returnData==0){
                toastr.error('Something went wrong! Please try again later.');
            }
        })
    return false;
})

function checkDates() {
    let start = $('#eventStart').val();
    let end = $('#eventEnd').val();
    if (getDate(start) > getDate(end)) {
        return false;
    } else {
        return true;
    }
}

function getDate(date) {
    d = new Date(date);
    return d.getTime();
}

/*
let Person = () => {
    const obj {
        name : ''
        age : '',
        setName : (name) => {
            this.name = name;
            return this;
        }
    }
    return obj;
}


let person1 = new Person;
person.setName('CHristian').setAge()
*/