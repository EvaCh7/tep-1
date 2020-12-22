function signInClicked() {
    $('#content_page').load('signin.html');
}

function logOutClicked() {
    $('#logout').css('display', 'none');
    $('#addPatient').css('display', 'none');
    $('#signin').css('display', 'inline');

    $('#content_page').load('signin.html');
}
function addPatientInfoClicked() {
    $('#content_page').load('patientinfo.html', function () {
        $('#doctor').css('display', 'none');
        $('#doctorlabel').css('display', 'none');
    });
}

$('#addPatient').css('display', 'none');
$('#logout').css('display', 'none');


$(document).on('DOMNodeInserted', function (e) {
    if ($(e.target).hasClass('container')) {
        $('#signinbtn').on('click', getUsers);
    }
});


$(document).on('DOMNodeInserted', function (e) {
    if ($(e.target).hasClass('addpatient')) {
        $('#submitpatient').on('click', addPatient);
    }
});