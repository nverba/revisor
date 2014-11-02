var ref = new Firebase("https://revisor.firebaseio.com");
var authData = ref.getAuth();
if (authData) {
  // user authenticated with Firebase
  console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
} else {
  ref.authWithOAuthRedirect("google", function(error) {});
}