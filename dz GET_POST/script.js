console.log('Let the party begins...');
let userForm = document.getElementById('userInfoID');

userForm.addEventListener('submit', sendRequest);

function sendRequest() {
    let formData = new FormData(userForm);
    let request  = new XMLHttpRequest();
    request.open('POST', '/mailer.php');
    request.send(formData);
}



//Почему-то не собранное в кучку не работало О_о

// let formData = new FormData(userForm);
//
// let request  = new XMLHttpRequest();
// request.open('POST', '/mailer.php');
//
// function sendRequest() {
//     request.send(formData);
// }
