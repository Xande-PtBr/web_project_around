const cardList = document.querySelector(".elements");
let popup = document.querySelector(".popup_edit_profile");
let buttonEdit = document.querySelector(".profile__edit-button");

buttonEdit.addEventListener("click", function () {
  popup.classList.add("popup__opened");

  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

let buttonClose = document.querySelector(".popup__close");
buttonClose.addEventListener("click", function () {
  popup.classList.remove("popup__opened");
});

/*-----------------------variaveis form popup-----------------------*/
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-sobre-mim");
let profileName = document.querySelector(".profile__info-name");
let profileAbout = document.querySelector(".profile__info-sobre-mim");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  popup.classList.remove("popup__opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* -------------------------popup-Cards------------------------------------ */

let popupCards = document.querySelector(".popup_new-cards");
let buttonAddCards = document.querySelector(".profile__add-button");

buttonAddCards.addEventListener("click", function () {
  popupCards.classList.add("popup__opened");
});

let buttonCardClose = document.querySelector(".popup__card-close");
buttonCardClose.addEventListener("click", function () {
  popupCards.classList.remove("popup__opened");
});

//-------------------------Fim-popup-Cards------------------------------------ */

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

/*-------------------------criando card ----------------------------*/

function createCard(card) {
  const cardsTemplate = document.querySelector("#cards-template");
  //copia do Template card
  const cardElement = cardsTemplate.content
    .querySelector(".elements__box")
    .cloneNode(true);

  //pegar dados do template
  const cardImage = cardElement.querySelector(".elements__image");
  const cardLike = cardElement.querySelector(".elements__group-like");
  const cardTitle = cardElement.querySelector(".elements__title");

  //popular os cards
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  cardTitle.textContent = card.name;

  //pegar a lista de cards

  //add copia na lista de cards
  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardList.prepend(cardElement);
});
