// Habilitando a validação chamando enableValidation()
// Valide todas as configurações

function enableValidation(config) {
  const forrmElement = document.querySelector(config.formSelector);
  const inputs = forrmElement.querySelectorAll(config.inputSelector);
  const button = forrmElement.querySelector(config.submitButtonSelector);

  //----------------abre popup com o botão desabilitado-------------------
  function disableButtonPopup(config) {
    button.setAttribute("disabled", true);
    button.classList.add(config.inactiveButtonClass);
  }

  disableButtonPopup(config);
  //---valida todos os inputs
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      //---veerifica se o input é valido
      const isValid = input.checkValidity();

      //---se for invalido, mostra a mensagem de erro
      if (!isValid) {
        input.classList.add(config.inputErrorClass);
        const errorElement = forrmElement.querySelector(`#${input.id}-error`);
        errorElement.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
      } else {
        //---se for valido, oculta a mensagem de erro
        input.classList.remove(config.inputErrorClass);
        const errorElement = forrmElement.querySelector(`#${input.id}-error`);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = "";
      }

      const isInvalidInputs = Array.from(inputs).some(
        (input) => !input.validity.valid
      );
      console.log(isInvalidInputs);
      if (isInvalidInputs) {
        button.setAttribute("disabled", true);
        button.classList.add(config.inactiveButtonClass);
      } else {
        button.removeAttribute("disabled");
        button.classList.remove(config.inactiveButtonClass);
      }
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

enableValidation({
  formSelector: ".popup__form-card",
  inputSelector: ".popup__input-card-title, .popup__input-card-link-img",
  submitButtonSelector: ".popup__button-new-card",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
