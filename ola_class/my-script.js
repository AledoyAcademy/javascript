$(function(){

    $('#btn_submit').attr('disabled','true');

    $('#btn_submit').click(function(){
        var fname = $('#fname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var pass = $('#pass').val();
        var confirm = $('#confirm').val();

        if(!fname || !email || !phone || !pass || !confirm)
        {
            $('#result').html('All information are required');
            $('.txt_field').css('border-style','solid');
            $('.txt_field').css('border-weight','1');
            $('.txt_field').css('border-color','red');
            return false;
        }

        if(pass != confirm)
        {
            $('#result').html('Password and Confirmation are not the same');
            $('.txt_field').css('border-color','#ccc');
            $('#pass, #confirm').css('border-color','red');
            return false;
        }


    })

    $('.txt_field').keyup(function(){

    
        var fname = $('#fname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var pass = $('#pass').val();
        var confirm = $('#confirm').val();

        if(fname && email && phone && pass && confirm)
        {
            $('#btn_submit').removeAttr('disabled');

        }
        if(pass != confirm)
        {
            $('#result').html('Password and Confirmation are not the same');
            $('.txt_field').css('border-color','#ccc');
            $('#pass, #confirm').css('border-color','red');
        }
        else{
            $('#result').html('');
            $('#pass, #confirm').css('border-color','#ccc');
        }

    })

    $('.txt_field').blur(function(){
        $(this).css('border-color','green');
    })

})