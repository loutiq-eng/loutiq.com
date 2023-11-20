const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      
      // Hide the submit button
      document.querySelector("#form-submit").style.display = "hidden";
      // Display the success message
      document.querySelector(".status-message.cc-success-message.w-form-done").style.display = "block";

      // Disable form fields
      const formFields = myForm.querySelectorAll("input, textarea, select");
      formFields.forEach((field) => {
        field.disabled = true;
      });
    })
    .catch((error) => {
      // Display the error message
      document.querySelector(".status-message.cc-error-message.w-form-fail").style.display = "block";

      console.log("Error while submitting form: ", error);
    });
};


window.onload = () => {
  document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
};
