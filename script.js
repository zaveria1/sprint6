const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const firstnameValue=firstname.value.trim();
	const lastnameValue=lastname.value.trim();
	

	if( firstnameValue.length < 1) {
		setErrorFor(firstname, 'Firstname cannot be blank');
	} else {
		setSuccessFor(firstname);
	}

	

	if(lastnameValue.length <1) {
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}

	
	if(usernameValue.length < 5) {
		setErrorFor(username, 'Username must be 5 character long');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





