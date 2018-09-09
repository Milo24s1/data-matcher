$(document).ready(function () {

    /**
     * this should call payment page and redirect the homepage
     * but for now it will get token from server and fill the token field automatically
     */
    $("#token_no").click(function (e) {
        $.ajax( {
            'url':'/getToken',
            'method':'post',
            'data':{
                
            },
            success: function (data) {
                $("#materialSubscriptionFormPasswords").val(data.token).next().addClass('active');
                $("#hdnAction").val('save');
            }
        });
    });


    /**
     *
     */
    $("#submitBtn").click(function (e) {
        e.preventDefault();
        var submitUrl = $("#hdnAction").val()=='save'?'/save':'/compare';
        $.ajax({
            'url':submitUrl,
            'method':'post',
            'data': {
                'token':$("#materialSubscriptionFormPasswords").val(),
                'data': $("#userText").val()
            },
            success: function (data) {
                 alert(data.message);
                $("#dataForm")[0].reset()
                $("form label").removeClass('active')
            },
            error : function (xhr, ajaxOptions, thrownError) {
                if(xhr.status != 200){
                    alert('Something went wrong');
                }
            }
        });
    });

});