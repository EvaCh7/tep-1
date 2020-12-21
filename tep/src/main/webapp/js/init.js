function signInClicked() {
    $('#content_page').load('signin.html');
}
function addPatientInfoClicked() {
    $('#content_page').load('patientinfo.html');

}

$('#addPatient').css('display', 'none');

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