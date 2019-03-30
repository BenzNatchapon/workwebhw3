console.log('Hello maam');

//Play with form
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

const subjectInput = document.querySelector('#Subject');
const messageInput = document.querySelector('#Message');
const nameInput = document.querySelector('#Name');
const maleInput = document.querySelector('#Male');
const femaleInput = document.querySelector('#Female');
const phoneInput = document.querySelector('#Phone');
const emailInput = document.querySelector('#Email');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    //console.log(nameInput.value + ' ' + emailInput.value);

    if(subjectInput.value === '' || messageInput.value === '' || nameInput.value === '' || phoneInput.value === '' || emailInput.value === ''){
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML =  'Please enter all fields';
    }
    else if(maleInput.value === null || femaleInput.value === null ){
        msg.classList.add('error');
        msg.innerHTML =  'Please enter gender fields';
    }
    else{
        const li = document.createElement('li');
        const text = document.createTextNode(`${subjectInput.value}:${messageInput.value}:${nameInput.value}:${phoneInput.value}:${emailInput.value}`);
        li.appendChild(text);
        // console.log(li);

        userList.appendChild(li);

        subjectInput = '';
        messageInput = '';
        nameInput.value = '';
        maleInput = '';
        femaleInput = '';
        phoneInput = '';
        emailInput.value = '';
    }   
}