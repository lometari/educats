console.log('Let the party begins...');

let userForm = document.getElementById('userInfoID');

// console.log(userForm);

function takeData(event){
    event.preventDefault();
    userForm.submit();
}

userForm.addEventListener('submit', takeData);


