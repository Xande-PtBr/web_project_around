import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";
import FormValidator from "./FormValidator.js";
//
//
//------------------------- Arr de cards ------------------------------------ */
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
//
//

const cardList = document.querySelector(".elements");
const popup = document.querySelector(".popup_edit_profile");
const buttonEdit = document.querySelector(".profile__edit-button");

buttonEdit.addEventListener("click", function () {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  const validate = new FormValidator({
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });

  validate.enableValidation();
});

const buttonClose = document.querySelector(".popup__close");
buttonClose.addEventListener("click", function () {
  closePopup(popup);
});

/*-----------------------variaveis form popup-----------------------*/
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-sobre-mim");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-sobre-mim");

//--- lidar com o formulário de perfil Enviar e adiando o comportamento do event
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  formElement.reset();
  closePopup(popup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* -------------------------popup-Cards------------------------------------ */

const popupCards = document.querySelector(".popup__new-cards");
const buttonAddCards = document.querySelector(".profile__add-button");

buttonAddCards.addEventListener("click", function () {
  openPopup(popupCards);
  const validate = new FormValidator({
    formSelector: ".popup__form-card",
    inputSelector: ".popup__input-card-title, .popup__input-card-link-img",
    submitButtonSelector: ".popup__button-new-card",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
  validate.checkValiditybutton();
  validate.enableValidation();
});

const buttonCloseCard = document.querySelector(".popup__close-card");
buttonCloseCard.addEventListener("click", function () {
  closePopup(popupCards);
});

const popupShowImage = document.querySelector(".popup_show-image");
const popupImage = document.querySelector(".popup__view-image");
const poputTitle = document.querySelector(".popup__title-image");

function openImagePopup(card) {
  openPopup(popupShowImage);

  //pega as info dos campos
  popupImage.setAttribute("src", card.link);
  popupImage.setAttribute("Alt", card.name);
  poputTitle.textContent = card.name;
}

// Fecha o popup de imagem zoom
const buttonCloseImage = document.querySelector(".popup__close-image");
buttonCloseImage.addEventListener("click", function () {
  closePopup(popupShowImage);
});

//verifica cada elemento no array e adiciona os cartoes do array ao cartao

initialCards.forEach((card) => {
  const newCardElement = new Card(
    card,
    "#cards-template",
    openImagePopup
  ).generateCard();
  cardList.prepend(newCardElement);
});

//popup__form-card classe criada para manipular o popup para nao dar conflito entre os popups

//pegar dados digitados digitado popup__form add popup__form-card classe criada para manipular o popup
const formAddCard = document.querySelector(".popup__form-card");
const inputTitle = document.querySelector(".popup__input-card-title");
const inputLink = document.querySelector(".popup__input-card-link-img");

// pega a variavel e adiciona um evento quando o botão submit for acionado
formAddCard.addEventListener("submit", (evt) => {
  // atrasar o evendo dubmite ou click (atrasa o evento)
  evt.preventDefault();

  //variavel que recebe os valores digitado nos input name e link
  const cardInfo = {
    name: inputTitle.value,
    link: inputLink.value,
  };

  // nova variavel (newCarData) para criar o novo card (criateCard) com os dados digitado (cardInfo)
  const newCardData = new Card(cardInfo, "#cards-template").generateCard();
  //adiciona o cartao no inicio da lista
  cardList.prepend(newCardData);
  formAddCard.reset(); //reseta o form
  closePopup(popupCards); //fecha
});

document.addEventListener("click", (evt) => {
  const popupCloseOutside = document.querySelectorAll(".popup");

  popupCloseOutside.forEach((popup) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

document.addEventListener("keydown", (evt) => {
  const popupKeydown = document.querySelectorAll(".popup");

  popupKeydown.forEach((popup) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
});
