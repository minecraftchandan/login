const signInForm = document.querySelector('.sign-in-container');
const signUpForm = document.querySelector('.sign-up-container');
const linkToSignUp = document.getElementById('linkToSignUp');
const linkToSignIn = document.getElementById('linkToSignIn');

linkToSignUp.addEventListener('click', (e) => {
	e.preventDefault();
	signInForm.classList.remove('active');
	signUpForm.classList.add('active');
});

linkToSignIn.addEventListener('click', (e) => {
	e.preventDefault();
	signUpForm.classList.remove('active');
	signInForm.classList.add('active');
});
