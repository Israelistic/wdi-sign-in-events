document.addEventListener('DOMContentLoaded', function(event) {

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var input1 = document.querySelector('#user');
  var input2 = document.querySelector('#pass');

signIn.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

submit.addEventListener('click', function() {
  input1.classList.add('error')
  input2.classList.add('error')
});

input1.addEventListener('click', function() {
  if (input1.classList.contains('error')) {
     input1.classList.remove('error')
  }
});

input2.addEventListener('click', function() {
  if (input2.classList.contains('error')) {
    input2.classList.remove('error')
  }
});

modal.addEventListener('click', function() {
  modal.style.display = 'none';
});

});
