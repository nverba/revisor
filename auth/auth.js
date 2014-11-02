var auth_input = document.getElementById('auth');
var signin     = document.getElementById('signin');
var ref        = new Firebase("https://revisor.firebaseio.com");
var authData   = ref.getAuth();


if (authData) {
  // user authenticated with Firebase
  console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
} else {

  console.log('none');

  auth_input.style.display = 'block';

  signin.addEventListener("click", function () {

    console.log('click');

    ref.authWithOAuthRedirect("google", function(error) {
      console.log('auth');
    });
  });

}