//---------------- validação dos campos popup -------------------
//const formElement = document.querySelector(".popup__form");// ja exit esta variavel
/* const formInput = formElement.querySelector(".popup__form-input");

//mostra o erro de entrada
const showInputError = (element) => {
  element.classList.add("popup__form-input-error");
  // Mostrar a mensagem de erro
  formError.classList.add("popup__form-input-error_active");
};

//ocultar erro de entrada
const hideInputError = (element) => {
  element.classList.remove("popup__form-input-error");
  // Ocultar a mensagem de erro
  formError.classList.remove("popup__form-input-error_active");
  formError.textContent = "";
};

const isValid = () => {
  if (!formInput.validity.valid) {
    // Se NÃO (!), mostre o elemento de erro.
    showInputError(formInput);
  } else {
    // Se for válido, oculte o elemento de erro.
    hideInputError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  // Cancele a ação padrão do navegador, para que clicar no botão "Enviar" não atualize a página
  evt.preventDefault();
});

// Chame a função isValid() para cada entrada de caractere
formInput.addEventListener("input", isValid);
console.log(formInput.id);

// Selecione cada elemento da mensagem de erro usando seu nome de classe exclusivo
const formError = formElement.querySelector(`.${formInput.id}-error`);
//--------------------------------------------------------

/* 
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
 */
//------------------------------------------------------------------------- TESTE02
// Função que mostra a mensagem de erro
/* function showInputError(formElement, inputElement, config) {
  // Seleciona a span de erro associada ao input
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Adiciona a classe de erro ao input
  inputElement.classList.add(config.inputErrorClass);
  // Define a mensagem de erro na span correspondente
  errorElement.textContent = inputElement.validationMessage;
  // Adiciona a classe que torna a mensagem visível
  errorElement.classList.add(config.errorClass);
}

// Função que esconde a mensagem de erro
function hideInputError(formElement, inputElement, config) {
  // Seleciona a span de erro associada ao input
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Remove a classe de erro do input
  inputElement.classList.remove(config.inputErrorClass);
  // Remove a classe que torna a mensagem visível
  errorElement.classList.remove(config.errorClass);
  // Limpa a mensagem de erro
  errorElement.textContent = "";
}

// Função que verifica se o input é válido
function checkInputValidity(formElement, inputElement, config) {
  // Se o campo não for válido, exibe o erro
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    // Se for válido, esconde o erro
    hideInputError(formElement, inputElement, config);
  }
}

// Verifica se algum campo tem um valor inválido
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

// Função para habilitar/desabilitar o botão de envio
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}

// Função que define os event listeners para cada campo do formulário
function setEventListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // Inicia com o botão desabilitado
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}

// Função principal que habilita a validação
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Impede envio do formulário ao validar
    });

    setEventListeners(formElement, config);
  });
}

// Chamando a função de validação com o objeto de configuração
enableValidation({
  formSelector: ".popup__form", // Seleciona o formulário
  inputSelector: ".popup__form-input", // Seleciona todos os inputs
  submitButtonSelector: ".popup__button-save", // Seleciona o botão
  inactiveButtonClass: "popup__button_disabled", // Classe para desabilitar o botão
  inputErrorClass: "popup__input_type_error", // Classe para estilizar o input com erro
  errorClass: "popup__error_visible", // Classe para mostrar a mensagem de erro
});
 */
//----------------------------------------------------------------------Fim TESTE02

//----------------------------------------------------------------teste03
// Habilitando a validação chamando enableValidation()
// Valide todas as configurações

function enableValidation(config) {
  const forrmElement = document.querySelector(config.formSelector);
  const inputs = forrmElement.querySelectorAll(config.inputSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      //---veerifica se o input é valido
      const isValid = input.checkValidity();
      //---se for invalido, mostra a mensagem de erro
      if (!isValid) {
        input.classList.add(config.inputErrorClass);
        const errorElement = forrmElement.querySelector(`.${input.id}-error`);
        errorElement.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
      } else {
        //---se for valido, oculta a mensagem de erro
        input.classList.remove(config.inputErrorClass);
        const errorElement = forrmElement.querySelector(`.${input.id}-error`);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = "";
      }
    });
  });
}

//-- desabilita o botão salvar se o input estiver invalido
//---se for valido esconde a mensagem de erro
//--- se todos os campos forem validos habilita o botão salvar

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

//mostra o erro de entrada
/* const showInputError = (element) => {
  element.classList.add("popup__form-input-error");
  // Mostrar a mensagem de erro
  formError.classList.add("popup__form-input-error_active");
};

//ocultar erro de entrada
const hideInputError = (element) => {
  element.classList.remove("popup__form-input-error");
  // Ocultar a mensagem de erro
  formError.classList.remove("popup__form-input-error_active");
  formError.textContent = "";
};
 */
