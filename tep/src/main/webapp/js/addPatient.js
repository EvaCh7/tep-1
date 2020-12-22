'user strict';


function addPatient() {
    var selected = $("#symptoms :selected").val(); // The value of the selected option
    var data = new FormData();
    data.append('full_name', $("#FName").val());
    data.append('address', $("#address").val());
    data.append('amka', $("#AMKA").val());
    data.append('insurance', $("#insurance").val());
    data.append('diseases', $("#chDisease").val());
    data.append('symptoms', $("#symptoms option:selected").text());

    ajaxRequest('POST', 'http://localhost:8080/tep/addPatient', data, function (o) {
        var res = JSON.parse(o.responseText);
        console.lo
        $('#content_page').load('patientinfo.html', function () {
            $("#FName").val(res.full_name)
            $("#address").val(res.address);
            $("#AMKA").val(res.amka);
            $("#insurance").val(res.insurance);
            $("#chDisease").val(res.diseases);
            $("#symptoms").val(selected);





            if (selected == 1)
                $("#doctor").val("Surgeon");
            else if (selected == 2)
                $("#doctor").val("Surgeon");
            else if (selected == 3)
                $("#doctor").val("Surgeon");
            else if (selected == 4)
                $("#doctor").val("Pediatrician");
            else if (selected == 5)
                $("#doctor").val("Ophthalmologist");
            else if (selected == 6)
                $("#doctor").val("Ophthalmologist");
            else if (selected == 7)
                $("#doctor").val("Ophthalmologist");

            else if (selected == 8)
                $("#doctor").val("Pathologist");

            else if (selected == 9)
                $("#doctor").val("Pathologist");

            else if (selected == 10)
                $("#doctor").val("Pathologist");

            else if (selected == 11)
                $("#doctor").val("Orthopedician");

            else if (selected == 12)
                $("#doctor").val("Orthopedician");

            var data1 = new FormData();
            data1.append('doctor', $("#doctor").val());
            data1.append('amka', $("#AMKA").val());
            ajaxRequest('POST', 'http://localhost:8080/tep/setDoctor', data1, function (o) {});

            $('#doctor').css('display', 'inline');
            $('#doctorlabel').css('display', 'inline');
            $("#message").html("Succesfully added the patient");
            $('#message').css('color', 'green');
            $('#submitpatient').css('display', 'none');


        });


    }, function (o) {
        if (o.readyState == 4) {
            var res = JSON.parse(o.responseText);
            $('#content_page').load('patientinfo.html', function () {
                $("#FName").val(res.full_name)
                $("#address").val(res.address);
                $("#AMKA").val(res.amka);
                $("#insurance").val(res.insurance);
                $("#chDisease").val(res.diseases);
                $("#symptoms").val(res.symptoms);
                $("#message").html("Patient already exists");
                $('#message').css('color', 'red');
                if (selected == 1 || selected == 2 || selected == 3) {
                    $("#doctor").val("Surgeon");
                } else if (selected == 4) {
                    $("#doctor").val("Pediatrician");
                } else if (selected == 5 || selected == 6 || selected == 7) {
                    $("#doctor").val("Ophthalmologist");
                } else if (selected == 8 || selected == 9 || selected == 10) {
                    $("#doctor").val("Pathologist");
                } else if (selected == 11 || selected == 12) {
                    $("#doctor").val("Orthopedician");
                }
                $('#doctor').css('display', 'inline');
                $('#doctorlabel').css('display', 'inline');
                $("#message").html("Succesfully added the patient");
                $('#message').css('color', 'green');
                $('#submitpatient').css('display', 'none');



            });

        }
    });

}



function getUsers() {
    var data = new FormData();
    data.append('username', $("#username").val());
    ajaxRequest('GET', 'http://localhost:8080/tep/getTepUsers', data, function (ο) {
        var res = JSON.parse(ο.responseText);
        if (res == "patient") {
            $('#addPatient').css('display', 'inline');
            $('#logout').css('display', 'inline');
            $('#signin').css('display', 'none');
        }
    });
}