removeAgeVerification();
window.onload = removeAgeVerification();

function removeAgeVerification() {
    var currentLocation = window.location.href.toLocaleLowerCase();
    if (currentLocation.includes("rt.pornhub.com") === false) return;

    var ageVerificationContainer = document.getElementById("age-verification-container");
    if (ageVerificationContainer !== null) ageVerificationContainer.remove();

    var ageVerificationWrapper = document.getElementById("age-verification-wrapper");
    if (ageVerificationWrapper !== null) ageVerificationWrapper.remove();
}

