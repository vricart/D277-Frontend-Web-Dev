  function validateEmail() {
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
      alert("Emails do not match! Please re-enter.");
      return false;
    }
    return true;
  }