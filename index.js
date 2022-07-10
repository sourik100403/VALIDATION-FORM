console.log('from validation');
const name =document.getElementById('name');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

//event
//nameevent
name.addEventListener('blur',()=>{
    console.log('name is blure');
    //validation
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validUser=true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})
//email
//emailevent
email.addEventListener('blur',()=>{
    console.log('email is blure');
    //validation
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
        
    }
})

//phone
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('you click submit');
    console.log(validEmail,validPhone,validUser);
    if(validEmail && validPhone && validUser){
        let failure=document.getElementById('failure');
        let travelform=document.getElementsByName('travelform')[0];
        console.log('phone,email and user is valid , now submit the form');
        let success=document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();//for j query
        $('#success').show();
        setTimeout(() => {
            travelform.reset();
            success.classList.remove('show');
        }, 3000);
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();//for j query
        $('#failure').show();
        setTimeout(() => {
            failure.classList.remove('show');
        }, 4000);
        }


})