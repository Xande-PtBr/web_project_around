import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
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

//---- lidar com o informacoes de perfil
const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-sobre-mim",
});

//-------------------------popup profile------------------------------------
const popupEditForm = new PopupWithForm(
  ({ name, about }) => {
    userInfo.setUserInfo(name, about);

    popupEditForm.close();
  },
  ".popup_edit_profile",
  ".popup__form"
);
popupEditForm.setEventListeners();

//-------------------------popup image------------------------------------
const popupWithImage = new PopupWithImage(
  ".popup_show-image",
  ".popup__view-image",
  ".popup__title-image"
);

popupWithImage.setEventListeners();

//-------------------------sectionNewCardElement------------------------------------
const sectionNewCardElement = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      const card = new Card(items, "#cards-template", (card) =>
        popupWithImage.open(card)
      );
      sectionNewCardElement.addItem(card.generateCard());
    },
  },
  ".elements"
);

//--------------------------popup-Card------------------------------------

const popupCard = new PopupWithForm(
  ({ name, link }) => {
    const cardInfo = {
      name,
      link,
    };
    // nova variavel (newCarData) para criar o novo card (criateCard) com os dados digitado (cardInfo)
    const newCardData = new Card(cardInfo, "#cards-template", (card) =>
      popupWithImage.open(card)
    ).generateCard();
    sectionNewCardElement.addItem(newCardData);
    popupCard.close();
  },
  ".popup__new-cards",
  ".popup__form-card"
);

popupCard.setEventListeners();
sectionNewCardElement.rendererItems();
//
//
// -------------------------popup profile------------------------------------

const buttonEdit = document.querySelector(".profile__edit-button");

const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-sobre-mim");
buttonEdit.addEventListener("click", function () {
  popupEditForm.open();
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;

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
  popupEditForm.close();
});

/*-----------------------variaveis form popup----------------------aqui---*/
/* const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-sobre-mim");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-sobre-mim"); */

//--- lidar com o formulário de perfil Enviar e adiando o comportamento do event
/* function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  formElement.reset();
  closePopup(popup);
}

formElement.addEventListener("submit", handleProfileFormSubmit); */

/* -------------------------popup-Cards------------------------------------ */

/* const popupCards = document.querySelector(".popup__new-cards"); */
const buttonAddCards = document.querySelector(".profile__add-button");

buttonAddCards.addEventListener("click", function () {
  popupCard.open();
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

//---
const buttonCloseCard = document.querySelector(".popup__close-card");
buttonCloseCard.addEventListener("click", function () {
  popupCard.close();
});

// Fecha o popup de imagem zoom
const buttonCloseImage = document.querySelector(".popup__close-image");
buttonCloseImage.addEventListener("click", function () {
  popupWithImage.close();
});

//popup__form-card classe criada para manipular o popup para nao dar conflito entre os popups

//pegar dados digitados digitado popup__form add popup__form-card classe criada para manipular o popup
/* const formAddCard = document.querySelector(".popup__form-card");
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
  }; */

//----------------- Função para fechar os popups ----------------------------

/* document.addEventListener("click", (evt) => {
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
 */
