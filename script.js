function imgButton() {
  let firstName = prompt('What is your first name?');
  let email = prompt('What is your email address?');

  if (firstName === null || firstName.trim() === '') {
    alert("You didn't enter your first name.");
  } else if (email === null || email.trim() === '') {
    alert("You didn't enter your email address.");
  } else {
    alert('Hi ' + firstName + '! Check your inbox for more Nebula images 🌌');
  }
}

let seeMoreButton = document.querySelector('button');
seeMoreButton.addEventListener('click', imgButton);
