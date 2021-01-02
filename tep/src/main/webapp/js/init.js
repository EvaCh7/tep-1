function signInClicked() {
    $('#content_page').load('signin.html');
}

function logOutClicked() {
    $('#logout').css('display', 'none');
    $('#addPatient').css('display', 'none');
    $('#searchPatient').css('display', 'none');
    $('#signin').css('display', 'inline');
    $('#seePatients').css('display', 'none');
    $('#content_page').load('signin.html');
    $('#addShift').css('display', 'none');
    $('#seeShift').css('display', 'none');
}


function addPatientInfoClicked() {
    $('#content_page').load('patientinfo.html', function () {
        $('#report').css('display', 'none');
        $('#reportlabel').css('display', 'none');
        $('#doctor').css('display', 'none');
        $('#doctorlabel').css('display', 'none');
        $('#therapy').css('display', 'none');
        $('#diagnose').css('display', 'none');
        $('#therapylabel').css('display', 'none');
        $('#diagnoselabel').css('display', 'none');
        $('#prescription').css('display', 'none');
        $('#examinations').css('display', 'none');
        $('#prescriptionlabel').css('display', 'none');
        $('#examinationslabel').css('display', 'none');
        $('#submitdiagnose').css('display', 'none');
        $('#submitexam').css('display', 'none');
    });
}

function addShiftClicked() {
    $('#content_page').load('addShift.html');
}

function seeShiftClicked() {
    seeShift();
}

function seePatientsClicked() {
    $('#content_page').load('patientinfo.html', function () {
        getPatient();
        $('#address').css('display', 'none');
        $('#addresslabel').css('display', 'none');
        $('#doctor').css('display', 'none');
        $('#doctorlabel').css('display', 'none');
        $('#submitdiagnose').css('display', 'inline');
        $('#submitexam').css('display', 'none');
        $('#submitpatient').css('display', 'none');

    });
}

function searchPatientInfoClicked() {
    $('#content_page').load('searchAmka.html', function () {
        ajaxRequest('GET', 'http://localhost:8080/tep/getAllPatientsForExams', undefined, function (ο) {
            var res = JSON.parse(ο.responseText);
            var content = "<table><tr><th>AMKA</th><th>Exam</th></tr>"
            for (i = 0; i < res.length; i++) {
                content += '<tr>';
                content += '<td>' + res[i].amka + '</td>';
                content += '<td>' + res[i].exam_order + '</td>';
                content += '<td>' + res[i].date + '</td>';
                content += '</tr>';
            }
            content += "</table>"
            $('#showPatients').append(content);
        });

    });
}



window.addEventListener('load', (event) => {
    $('#content_page').load('signin.html');
});
$('#searchPatient').css('display', 'none');
$('#seePatients').css('display', 'none');
$('#addPatient').css('display', 'none');
$('#addShift').css('display', 'none');
$('#seeShift').css('display', 'none');
$('#logout').css('display', 'none');


$(document).on('DOMNodeInserted', function (e) {
    if ($(e.target).hasClass('container')) {
        $('#signinbtn').on('click', getUsers);
    }
});


$(document).on('DOMNodeInserted', function (e) {
    if ($(e.target).hasClass('addpatient')) {
        $('#submitpatient').on('click', addPatient);
        $('#submitdiagnose').on('click', addDiagnose);
        $('#submitexam').on('click', addReport);

    }
});

$(document).on('DOMNodeInserted', function (e) {
    if ($(e.target).hasClass('searchamkadiv')) {
        $('#searchbtn').on('click', searchPatient);
    }
});


$(document).on('DOMNodeInserted', function (e) {
    $('#shiftbtn').on('click', addShift);

});