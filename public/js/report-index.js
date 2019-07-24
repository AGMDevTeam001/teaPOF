$(function(){
    $('#audit').DataTable({
        "bLengthChange": false,
        "pageLength": 25
    });

    $('#client').DataTable({
        
        "bLengthChange": false,
        "pageLength": 25
    });

    $('#event-table').DataTable({
        
        "bLengthChange": false,
        "pageLength": 25
    });

    $('#attendees-table').DataTable({
        
        "bLengthChange": false,
        "pageLength": 25
    });

    $('#payment-table').DataTable({
        "bLengthChange": false,
        "pageLength": 25
    });

    $('.modal table').DataTable({
        "bLengthChange": false,
        "pageLength": 25
    })
    
    $('#event_id').change(function(){
        let event_id = $(this).val();
        // $('.textboxes').html('');
        $.post(URL+'report/getEventSpeaker',{event_id : event_id}).done(function(data){
            // alert(data);
            let speakers = $.parseJSON(data);
            let options = "<option value='' selected disabled>Select Speaker</option>";
            $.each(speakers, function(i,el){
                options += '<option value="'+el.id+'">'+el.first_name+' '+el.last_name+'</option>';
            })
            $('#speaker_id').html(options);
            $('#speaker_id').selectpicker('refresh');
            // console.log(speakers);
            
        })
        return false;
    })

    $('#main-form').submit(function(){
        let form = $(this).serialize();
        $('.modal table').DataTable().destroy();
        $('.textboxes').html('');
        $.post(URL+'report/generateEvalSummary',form).done(function(data){
            // alert(data);
            let json_data = $.parseJSON(data);
            let eval_items = json_data[0];
            let eval_remarks = json_data[1];
            let eval_details = json_data[2];
            // console.log(eval_details);

            /* for ratings */
            let averages = [];
            $('.eval-item').each(function(i,el){
                let ave = eval_items[i].average != null ? eval_items[i].average : 0;
                averages.push(ave)	;
                $(this).html(ave);
            })

            let mott = parseFloat(attributes_total(averages, 0, 2, 20)).toFixed(2);
            let mop = parseFloat(attributes_total(averages, 3, 5, 10)).toFixed(2);
            let dst = parseFloat(attributes_total(averages, 6, 8, 10)).toFixed(2);
            let rwpt = parseFloat(attributes_total(averages, 9, 11, 10)).toFixed(2);
            let uoim = parseFloat(attributes_total(averages, 12, 14, 10)).toFixed(2);
            let sc = parseFloat(attributes_total(averages, 15, 17, 10)).toFixed(2);
            let pf = parseFloat(attributes_total(averages, 18, 20, 5)).toFixed(2);
            let ta = parseFloat(attributes_total(averages, 21, 23, 5)).toFixed(2);
            let la = parseFloat(attributes_total(averages, 24, 25, 10)).toFixed(2);
            let rp = parseFloat(attributes_total(averages, 26, 28, 10)).toFixed(2);
            let overall_total = parseFloat(mott) + parseFloat(mop) + parseFloat(dst) + parseFloat(rwpt) + parseFloat(uoim) + parseFloat(sc) + parseFloat(pf) + parseFloat(ta) + parseFloat(la) + parseFloat(rp);            
            let remarks = rating_remarks(overall_total);

            $('.total-content-mott').html(mott);
            $('.total-content-mop').html(mop);
            $('.total-content-dst').html(dst);
            $('.total-content-rwpt').html(rwpt);
            $('.total-content-uoim').html(uoim);
            $('.total-content-sc').html(sc);
            $('.total-content-pf').html(pf);
            $('.total-content-ta').html(ta);
            $('.total-content-la').html(la);
            $('.total-content-rp').html(rp);
            
            $('.overall-total').html(overall_total+' - '+remarks);
            
            /* for evaluation remarks */
            let cd_content = '', nc_content = '', u_content = '', nu_content = '', ai_content = '', tw_content = '', ot_content = '';

            $.each(eval_remarks, function(i, el){
                cd_content += tbody_content(el.clear, 'cd', el.id);
                nc_content += tbody_content(el.not_clear, 'nc', el.id);
                u_content += tbody_content(el.useful, 'u', el.id);
                nu_content += tbody_content(el.not_useful, 'nu', el.id);
                ai_content += tbody_content(el.area_improvement, 'ai', el.id);
                tw_content += tbody_content(el.to_whom, 'tw', el.id);
                ot_content += tbody_content(el.other_topic, 'ot', el.id);
            })

            $('#cd-modal table>tbody').html(cd_content);
            $('#nc-modal table>tbody').html(nc_content);
            $('#u-modal table>tbody').html(u_content);
            $('#nu-modal table>tbody').html(nu_content);
            $('#ai-modal table>tbody').html(ai_content);
            $('#tw-modal table>tbody').html(tw_content);
            $('#ot-modal table>tbody').html(ot_content);

            $('.modal table').DataTable({
                "bLengthChange": false,
                "pageLength": 25
            })

            /* for evaluation details */
            if(eval_details.length) {
                $('#training_title').html(eval_details[0].title);
                // $('#training_date').html(eval_details[0].start_date+' to '+eval_details[0].end_date);
                $('#training_date').html(formatMDY(eval_details[0].start_date)+' to '+formatMDY(eval_details[0].end_date));
                $('#training_speaker').html(eval_details[0].first_name+' '+eval_details[0].last_name);
            }
        });
        return false;
    })

    $('#cd-txt').click(function() {
        $('#cd-modal').modal('show');
    })
    
    $('#nc-txt').click(function() {
        $('#nc-modal').modal('show');
    })
    
    $('#u-txt').click(function() {
        $('#u-modal').modal('show');
    })
    
    $('#nu-txt').click(function() {
        $('#nu-modal').modal('show');
    })
    
    $('#ai-txt').click(function() {
        $('#ai-modal').modal('show');
    })
    
    $('#tw-txt').click(function() {
        $('#tw-modal').modal('show');
    })
    
    $('#ot-txt').click(function() {
        $('#ot-modal').modal('show');
    })

    $('body').on('click', '.btn-pick', function() {
        let id = $(this).attr('data-target');
        let data_id = $(this).val();
        let val = $(this).closest('tr').find('.remark-data').html();
        $(this).addClass('hidden');
        $(this).siblings('.btn-unpick').removeClass('hidden');
        $(id).find('ul').append('<li data-id="'+data_id+'">'+val+'</li>');
        // $('.modal').modal('hide');
    })
    
    $('body').on('click', '.btn-unpick', function() {
        let id = $(this).attr('data-target');
        let data_id = $(this).val();
        $(this).addClass('hidden');
        $(this).siblings('.btn-pick').removeClass('hidden');
        $(id).find('ul [data-id="'+data_id+'"]').remove();
        // $('.modal').modal('hide');
    })

    $('#report-type').change(function() {
        let that = $(this);
        let report_type = that.val();
        $('.training-report-holders').hide();
        $('.'+report_type+'-holder').fadeIn('slow');
    })

    $('#btn-generate-events').click(function(){
        let from = $('.event-dates[name="from"]').val();
        let to = $('.event-dates[name="to"]').val();
        
        if(is_empty_string(from) || is_empty_string(to)){
            toastr.warning('Event dates should be filled first!');
            // alert('Event dates should be filled first!');
        } else {
            $.post(URL+'report/generateEvents', { from : from, to : to}).done(function(data){
                $('#event-table').DataTable().destroy();
                let event_data = $.parseJSON(data);
                let content = '';
                let ctr = 0;
                $.each(event_data, function(i,el){
                    let time_start = formatAMPM(el.time_start);
                    let time_end = formatAMPM(el.time_end);

                    // explode competence 
                    let thematic = el.thematic.split("<^>");
                    let li_thematic = '';
                    $.each(thematic, function(o, tmtc) {
                        li_thematic += '<li>'+tmtc+'</li>';
                    })
                    let thematic_content = '<ul style="list-style-type:disc">'+li_thematic+'</ul>';

                    //explode speakers
                    let speakers = el.speakers.split("<^>");
                    let li_speakers = '';
                    $.each(speakers, function(o, spkr) {
                        li_speakers += '<li>'+spkr+'</li>';
                    })
                    let speakers_content = '<ul style="list-style-type:disc">'+li_speakers+'</ul>';
                    // console.log(speakers);

                    content += '<tr>'+
                                    '<td>'+(++ctr)+'</td>'+
                                    '<td>'+el.event_code+'</td>'+
                                    '<td>'+el.title+'</td>'+
                                    '<td>'+el.event_type+'</td>'+
                                    '<td>'+el.boa_reference_number+'</td>'+
                                    '<td>'+thematic_content+'</td>'+
                                    '<td>'+el.name+'</td>'+
                                    '<td>'+formatMDY(el.start_date)+' - '+formatMDY(el.end_date)+'</td>'+
                                    '<td>'+time_start+' - '+time_end+'</td>'+
                                    '<td>'+el.venue+'</td>'+
                                    '<td>'+el.city+'</td>'+
                                    '<td>'+speakers_content+'</td>'+
                                    '<td>'+formatMDY(el.date_created)+'</td>'+
                                '</tr>';
                });
                $('#event-table tbody').html(content);
                $('#event-table').DataTable({
                    "bLengthChange": false,
                    "pageLength": 25
                });
                // console.log(data);
            })
        }
    })

    $('#btn-generate-attendees').click(function(){
        let event_id = $('.attendees-holder [name="event_id"]').val();
        if(is_empty_string(event_id)){
            toastr.warning('Please choose event first.');
            // alert('Please choose event first.');
        } else {
            $.post(URL+'report/generateAttendees', { event_id : event_id }).done(function(data){
                $('#attendees-table').DataTable().destroy();
                let attendee_data = $.parseJSON(data);
                let content = '';
                let ctr = 0;
                
                $.each(attendee_data, function(i,el){
                    let speakers = el.speakers.split("<^>");
                    let li_speakers = '';
                    $.each(speakers, function(o, spkr) {
                        li_speakers += '<li>'+spkr+'</li>';
                    })
                    let speakers_content = '<ul style="list-style-type:disc">'+li_speakers+'</ul>';
                    content += '<tr>'+
                                    '<td>'+(++ctr)+'</td>'+
                                    '<td>'+el.event_date+'</td>'+
                                    '<td>'+el.event_code+'</td>'+
                                    '<td>'+el.title+'</td>'+
                                    '<td>'+speakers_content+'</td>'+
                                    '<td>'+el.first_name+' '+el.middle_name+' '+el.last_name+'</td>'+
                                    '<td>'+el.cpa_no+'</td>'+
                                    '<td>'+el.company+'</td>'+
                                    '<td>'+el.position+'</td>'+
                                    '<td>'+el.address+'</td>'+
                                    '<td>'+el.email+'</td>'+
                                    '<td>'+el.mobile+'</td>'+
                                '</tr>';
                })
                // console.log(data);
                $('#attendees-table tbody').html(content);
                $('#attendees-table').DataTable({
                    "bLengthChange": false,
                    "pageLength": 25
                });
            })
        }
    })
   
    $('.payments-holder #type').change(function(){
        let type = $(this).val();
        $.post(URL+'report/getTitle', {type : type}).done(function(data){
            // console.log(data); 
            // console.log(titles);
            let titles = $.parseJSON(data);
            let content = '<option value="">Select Title</option>';
            $.each(titles, function(i,el){
                content += '<option value="'+el.id+'">'+el.title+'</option>';
            })
            // $('.payments-holder [name="event_id"]').html(content);
            $('#getEventId').html(content);
            $('#getEventId').selectpicker('refresh');

        })
    })

    $('#btn-generate-payments').click(function(){
        let event_id = $('.payments-holder [name="event_id"]').val();
        let type = $('.payments-holder [name="type"]').val();
        if(is_empty_string(type)){
            toastr.warning('Please choose type first.');
            // alert('Please choose type first.');
        } 
        else if(is_empty_string(event_id)){
            toastr.warning('Please choose event first.');
            // alert('Please choose event first.');
        } else {
            $.post(URL+'report/generatePayments', {event_id : event_id, type : type}).done(function(data){
                $('#payment-table').DataTable().destroy();
                let ptrans_data = $.parseJSON(data);
                let content = '';
                let ctr = 0;
                $.each(ptrans_data, function(i,el){
                    let contacts = el.contact_nums.split(",").join('/ ');
                    content += '<tr>'+
                                    '<td>'+(++ctr)+'</td>'+
                                    '<td>'+el.event_code+'</td>'+
                                    '<td>'+el.first_name+' '+el.middle_name+' '+el.last_name+'</td>'+
                                    '<td>'+el.email+'</td>'+
                                    '<td>'+contacts+'</td>'+
                                    '<td>'+el.or_number+'</td>'+
                                    '<td>'+el.or_amount+'</td>'+
                                    '<td>'+el.cost+'</td>'+
                                    '<td>'+el.mop+'</td>'+
                                    '<td>'+formatMDY(el.date_created)+'</td>'+
                                '</tr>';
                })
                $('#payment-table tbody').html(content);
                $('#payment-table').DataTable({
                    "bLengthChange": false,
                    "pageLength": 25,
                    "footerCallback": function(row,data,start,end,display){
                        var api = this.api(), data;

                        var intVal = function(i){
                            return typeof i === 'string' ? i.replace(/[\$,]/g, '')*1 :
                                    typeof i === 'number' ? i : 0;
                        }

                        var totalCollect = api
                                            .column(6)
                                            .data()
                                            .reduce(function(a,b){
                                                return intVal(a) + intVal(b);
                                            }, 0);
                        $(api.column(8).footer()).html('Total Collections:');
                        $(api.column(9).footer()).html(formatNumber(parseFloat(totalCollect).toFixed(2)));
                    }
                });
                // console.log(ptrans_data);
            });
        }
    });

    $('.events-holder .btn-print').click(function(){
        let table = $('#event-table').html();
        let table_with_design = 
                            // '<style>tr th {background-color: #0D47A1; color: #ffffff;} td, th { border:1px solid black } table {border-collapse: collapse; border: 1px solid black;}</style>'+
                            '<table >'+table+'</table>';
        fnExcelReport('Event report',table_with_design);
    })
    
    $('.attendees-holder .btn-print').click(function(){
        let event_id = $('.attendees-holder [name="event_id"]').val();

        if(is_empty_string(event_id)){
            toastr.warning('Please choose event first.');
        } else {
            exportData(event_id);
        }

        // let table = $('#attendees-table').html();
        // let table_with_design = 
        //                     '<style>tr th {background-color: #0D47A1; color: #ffffff;} td, th { border:1px solid black } table {border-collapse: collapse; border: 1px solid black;}</style>'+
        //                     '<table >'+table+'</table>'
        // fnExcelReport('Attendees report',table_with_design);
    })
    
    $('.payments-holder .btn-print').click(function(){
        let table = $('#payment-table').html();
        let table_with_design = 
                            '<style>tr th {background-color: #0D47A1; color: #ffffff;} td, th { border:1px solid black } table {border-collapse: collapse; border: 1px solid black;}</style>'+
                            '<table >'+table+'</table>'
        fnExcelReport('Payments report',table_with_design);
    })

    function exportData(event_id) {
        $.post(URL+"report/generateAttendees",{ event_id : event_id })
        .done(function(returnData){
            let array_data = $.parseJSON(returnData);
            let ctr = 1;
            append = "<style>tr th {background-color: #0D47A1; color: #ffffff;} td, th { border:1px solid black } table {border-collapse: collapse; border: 1px solid black;}</style><table>";
            append += "<thead>"+
                        "<tr>"+
                            "<th>No.</th>"+
                            "<th>Event Code</th>"+
                            "<th>Topic / Event Title</th>"+
                            "<th>Event Type</th>"+
                            "<th>PRC Receipt Number</th>"+
                            "<th>Competence Area</th>"+
                            "<th>Name of Speaker</th>"+
                            "<th>Full Name</th>"+
                            "<th>CPA #</th>"+
                            "<th>Company Name</th>"+
                            "<th>Position</th>"+
                            "<th>Address</th>"+
                            "<th>Email Address</th>"+
                            "<th>Contact #</th>"+
                        "</tr>"+
                    "</thead>";
            append += "<tbody>";
            $.each(array_data, function(x, i){

                let thematic = i.thematic.split("<^>");
                let li_thematic = '';
                $.each(thematic, function(o, tmtc) {
                    li_thematic += '<li>'+tmtc+'</li>';
                })
                let thematic_content = '<ul style="list-style-type:disc">'+li_thematic+'</ul>';

                let speakers = i.speakers.split("<^>");
                let li_speakers = '';
                $.each(speakers, function(o, spkr) {
                    li_speakers += '<li>'+spkr+'</li>';
                })
                let speakers_content = '<ul style="list-style-type:disc">'+li_speakers+'</ul>';

                append += "<tr>"+
                                "<td>"+(ctr++)+"</td>"+
                                "<td>"+i.event_code+"</td>"+
                                "<td>"+i.title+"</td>"+
                                "<td>"+i.event_type+"</td>"+
                                "<td>"+i.boa_reference_number+"</td>"+
                                "<td>"+thematic_content+"</td>"+
                                "<td>"+speakers_content+"</td>"+
                                "<td>"+i.first_name+' '+i.middle_name+' '+i.last_name+"</td>"+
                                "<td>"+i.cpa_no+"</td>"+
                                "<td>"+i.company+"</td>"+
                                "<td>"+i.position+"</td>"+
                                "<td>"+i.address+"</td>"+
                                "<td>"+i.email+"</td>"+
                                "<td>"+i.mobile+"</td>"+
                        "</tr>";
            });
            append = append+"</tbody></table>";
            fnExcelReport('Attendees report',append);
        });
    }

    function is_empty_string(str) {
        if(str.trim() === '') {
            return true;
        } else {
            return false;
        }
    }
    
    function attributes_total(arr, start, end, percent){
        let sum = 0, ave = 0, percentage = 0, count = 0;
        for(i = start; i<=end; i++) {
            count++;
            sum += parseFloat(arr[i]);
        }
        ave = parseFloat(sum / (count));
        percentage = parseFloat(percent/100);

        let total = ave*percentage; 
        return total.toFixed(2);
    }

    function rating_remarks(grade) {
        let remark = '';
        if(grade >= 5) {
            remark = 'Outstanding';
        } else if(grade >= 4) {
            remark = 'Very Satisfactory';
        } else if(grade >= 3) {
            remark = 'Satisfactory';
        } else if(grade >= 2) {
            remark = 'Fair';
        } else if(grade < 2) {
            remark = 'Poor';
        }
        return remark;
    }

    function tbody_content(data, remark_type, id) {
        let tr = '';
        if(data!=''){
            tr = '<tr>'+
                        '<td class="remark-data">'+data+'</td>'+
                        '<td class="text-center">'+
                            '<button class="btn btn-xs btn-success btn-pick" value="'+id+'" data-target="#'+remark_type+'-txt">Select</button>'+
                            '<button class="btn btn-xs btn-warning btn-unpick hidden" value="'+id+'" data-target="#'+remark_type+'-txt">Unselect</button>'+
                        '</td>'+
                    '</tr>';
        }
        return tr;
    }

    function formatAMPM(time) { 
       // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }

    function fnExcelReport(filename,data){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE "); 
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // IE
            txtArea1.document.open("txt/html","replace");
            txtArea1.document.write(tab_text);
            txtArea1.document.close();
            txtArea1.focus(); 
            sa=txtArea1.document.execCommand("SaveAs",true,filename+".xls");
        } else {
            // var a = document.createElement('a');
            // var data_type = 'data:application/vnd.ms-excel';
            // a.href = data_type + ', ' + encodeURIComponent(data);
            // a.download = filename+'.xls';
            // a.click();

            // sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(data));  
            // sa.download = filename+'.xls';
            // return (sa);

            let a = $("<a />", {
                href: 'data:application/vnd.ms-excel,' + encodeURIComponent(data),
                download: filename+".xls"
            })
            .appendTo("body")
            .get(0)
            .click();
        }
    }

    function formatMDY(d, x = '/') {
        let dt = new Date(d);
        return (dt.getMonth() + 1)+x+dt.getDate()+x+dt.getFullYear();
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
})