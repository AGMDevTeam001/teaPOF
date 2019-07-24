$(function(){
    $('#confirmationForm').submit(function(){
        var form = $(this).serialize();
        var npword = $('input[name="new_pword"]').val();
        var cpword = $('input[name="confirm_pword"]').val();

        if(npword === cpword){
            $.post(URL+'user/verifyUserAccount', form)
            .done(function(result){
                if(result === '1'){
                    toastr.success('Password successfully changed!');
                    setTimeout(function(){
                        window.location.href = URL+'index/index';
                    },1000);
                } else if(result === '2') {
                    toastr.error('Please use other password!');
                    return false;
                } else {
                    toastr.error('Current password is incorrect!');
                    return false;
                }
            });
            return false;
        } else {
            toastr.error('Confirm password is incorrect!');
            return false;
        }
    });
});