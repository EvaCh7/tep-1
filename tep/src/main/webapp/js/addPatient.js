'user strict';

let user = "none";
function addPatient() {
    var selected = $("#symptoms :selected").val(); // The value of the selected option
    var data = new FormData();
    data.append('full_name', $("#FName").val());
    data.append('address', $("#address").val());
    data.append('amka', $("#AMKA").val());
    data.append('insurance', $("#insurance").val());
    data.append('diseases', $("#chDisease").val());
    data.append('selected_symptoms', selected);
    data.append('symptoms', $("#moresymptoms").val());

    ajaxRequest('POST', 'http://localhost:8080/tep/addPatient', data, function (o) {
        var res = JSON.parse(o.responseText);
        $('#content_page').load('patientinfo.html', function () {
            $("#FName").val(res.full_name)
            $("#address").val(res.address);
            $("#AMKA").val(res.amka);
            $("#insurance").val(res.insurance);
            $("#chDisease").val(res.diseases);
            $("#symptoms").val(selected);
            $("#moresymptoms").val($("#moresymptoms").val());

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


            $("#message").html("Succesfully added the patient");
            $('#message').css('color', 'green');
            $('#doctor').css('display', 'inline');
            $('#doctorlabel').css('display', 'inline');
            $('#submitpatient').css('display', 'none');
            $('#submitdiagnose').css('display', 'none');
            $('#submitexam').css('display', 'none');
            $('#therapy').css('display', 'none');
            $('#diagnose').css('display', 'none');
            $('#therapylabel').css('display', 'none');
            $('#diagnoselabel').css('display', 'none');
            $('#prescription').css('display', 'none');
            $('#examinations').css('display', 'none');
            $('#prescriptionlabel').css('display', 'none');
            $('#examinationslabel').css('display', 'none');
            $('#report').css('display', 'none');
            $('#reportlabel').css('display', 'none');


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
                $("#symptoms").val(selected);
                $("#moresymptoms").val(res.symptoms);


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
                ajaxRequest('GET', 'http://localhost:8080/tep/getHistory', data1, function (o) {
                    var history = JSON.parse(o.responseText);
                    var content = "<table><tr><th>Diagnose</th><th>Prescription</th><th>Therapy</th><th>Date</th></tr>"


                    for (i = 0; i < history.length; i++) {

                        content += '<tr>';
                        content += '<td>' + history[i].diagnose + '</td>';
                        content += '<td>' + history[i].prescription + '</td>';
                        content += '<td>' + history[i].therapy + '</td>';
                        content += '<td>' + history[i].date + '</td>';
                        content += '</tr>';

                    }
                    content += "</table>"
                    console.log(content)
                    $('#history').append(content);
                });



                $('#doctor').css('display', 'inline');
                $('#doctorlabel').css('display', 'inline');
                $("#message").html("Patient's folder already exist");
                $('#message').css('color', 'red');
                $('#submitpatient').css('display', 'inline');
                $('#submitdiagnose').css('display', 'none');
                $('#submitexam').css('display', 'none');
                $('#therapy').css('display', 'none');
                $('#diagnose').css('display', 'none');
                $('#therapylabel').css('display', 'none');
                $('#diagnoselabel').css('display', 'none');
                $('#prescription').css('display', 'none');
                $('#examinations').css('display', 'none');
                $('#prescriptionlabel').css('display', 'none');
                $('#examinationslabel').css('display', 'none');
                $('#report').css('display', 'none');
                $('#reportlabel').css('display', 'none');


            });

        }
    });

}


function addShift() {
    var data = new FormData();
    data.append('AT', $('#AT').val());
    data.append('full_name', $('#FullNameShift').val());
    data.append('profession', $('#profession').val());
    data.append('date', $('#date').val());
    data.append('hours', $('#shiftTime').val());

    ajaxRequest('POST', 'http://localhost:8080/tep/addShift', data, function (ο) {
        var res = JSON.parse(ο.responseText);
        console.log(res);

    });
}

function seeShift() {
    ajaxRequest('GET', 'http://localhost:8080/tep/seeShift', undefined, function (ο) {
        var res = JSON.parse(ο.responseText);
        $('#content_page').empty();
        var content = "<table style=" + "background:blue;" + "><tr><th>Name</th><th>Profession</th><th>Hours</th><th>Date</th></tr>"
        for (i = 0; i < res.length; i++) {
            content += '<tr>';
            content += '<td>' + res[i].full_name + '</td>';
            content += '<td>' + res[i].profession + '</td>';
            content += '<td>' + res[i].hours + '</td>';
            content += '<td>' + res[i].date + '</td>';
            content += '</tr>';

        }
        content += "</table>"
        $('#content_page').append(content);
    });
}

function getPatient() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    var data = new FormData();
    data.append('doctor', user);

    ajaxRequest('GET', 'http://localhost:8080/tep/getPatient', data, function (ο) {
        var res = JSON.parse(ο.responseText);
        $("#FName").val(res.full_name);
        $("#AMKA").val(res.amka);
        $("#insurance").val(res.insurance);
        $("#chDisease").val(res.diseases);
        $('#symptoms').val(res.selected_symptoms);
        $("#moresymptoms").val(res.symptoms);
        var data1 = new FormData();
        data1.append('amka', res.amka);
        ajaxRequest('GET', 'http://localhost:8080/tep/getExam', data1, function (ο) {
            var res1 = JSON.parse(ο.responseText);
            if (res.date == today) {
            $("#diagnose").val(res1.diagnose);
            $("#examinations").val(res1.exam_order);
            } else {
                $("#diagnose").val("");
                $("#examinations").val("");
            }
        });




        if (res.report != "" && res.date == today) {
            $('#report').val(res.report);
        } else {
            $('#reportlabel').css('display', 'none');
            $('#report').css('display', 'none');
        }
        $('#submitexam').css('display', 'none');

    });

}


function getUsers() {
    var data = new FormData();
    data.append('username', $("#username").val());
    ajaxRequest('GET', 'http://localhost:8080/tep/getTepUsers', data, function (ο) {
        var res = JSON.parse(ο.responseText);
        user = res;
        if (res == "patient") {
            $('#addPatient').css('display', 'inline');
            $('#seePatients').css('display', 'none');
            $('#logout').css('display', 'inline');
            $('#signin').css('display', 'none');
            $('#addShift').css('display', 'none');
            $('#seeShift').css('display', 'inline');
        } else if (res == "surgeon" || res == "pediatrician" || res == "cardiologist" || res == "ophthalmologist" || res == "pathologist") {
            $('#addPatient').css('display', 'none');
            $('#seePatients').css('display', 'inline');
            $('#logout').css('display', 'inline');
            $('#signin').css('display', 'none');
            $('#addShift').css('display', 'none');
            $('#seeShift').css('display', 'inline');
        } else if (res == "nurse") {
            $('#searchPatient').css('display', 'inline');
            $('#seePatients').css('display', 'none');
            $('#addPatient').css('display', 'none');
            $('#logout').css('display', 'inline');
            $('#signin').css('display', 'none');
            $('#addShift').css('display', 'none');
            $('#seeShift').css('display', 'inline');
        } else if (res == "employee") {
            $('#searchPatient').css('display', 'none');
            $('#seePatients').css('display', 'none');
            $('#addPatient').css('display', 'none');
            $('#logout').css('display', 'inline');
            $('#signin').css('display', 'none');
            $('#addShift').css('display', 'inline');
            $('#seeShift').css('display', 'inline');
        }
    });
}