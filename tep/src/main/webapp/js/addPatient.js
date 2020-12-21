'user strict';

function addPatient() {
    var data = new FormData();
    data.append('full_name', $("#FName").val());
    data.append('address', $("#address").val());
    data.append('amka', $("#AMKA").val());
    data.append('insurance', $("#insurance").val());
    data.append('diseases', $("#chDisease").val());
    data.append('symptoms', $("#symptoms").val());


    ajaxRequest('POST', 'http://localhost:8080/tep/addPatient', data, function (o) {
        var res = JSON.parse(o.responseText);
        if (res != null) {
            $('#content_page').load('patientinfo.html', function () {
                $("#FName").val(res.full_name)
                $("#address").val(res.address);
                $("#AMKA").val(res.amka);
                $("#insurance").val(res.insurance);
                $("#chDisease").val(res.diseases);
                $("#symptoms").val(res.symptoms);
            });

        } else {
            $('#content_page').append("<p>Already exist </p>")
        }
        console.log(res);
    });
}



function getUsers() {
    var data = new FormData();
    data.append('username', $("#username").val());
    ajaxRequest('GET', 'http://localhost:8080/tep/getTepUsers', data, function (ο) {
        var res = JSON.parse(ο.responseText);
        if (res == "patient") {
            $('#addPatient').css('display', 'inline');
            $('#signin').css('display', 'none');
        }
    });
}