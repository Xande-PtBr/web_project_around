const cardList = document.querySelector(".elements");
const popup = document.querySelector(".popup_edit_profile");
const buttonEdit = document.querySelector(".profile__edit-button");

// -----------------Função para abrir os popups ----------------------------
function openPopup(popup) {
  popup.classList.add("popup__opened");
}

//----------------- Função para fechar os popups ----------------------------
function closePopup(popup) {
  popup.classList.remove("popup__opened");
}

buttonEdit.addEventListener("click", function () {
  openPopup(popup);

  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

//--------- fechando o popup
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  closePopup(popup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* -------------------------popup-Cards------------------------------------ */

const popupCards = document.querySelector(".popup_new-cards");
const buttonAddCards = document.querySelector(".profile__add-button");

buttonAddCards.addEventListener("click", function () {
  openPopup(popupCards);
});

const buttonCloseCard = document.querySelector(".popup__close-card");
buttonCloseCard.addEventListener("click", function () {
  closePopup(popupCards);
});

//-------------------------Fim-popup-Cards------------------------------------ */
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

//-------------------------criando card ----------------------------

function createCard(card) {
  const cardsTemplate = document.querySelector("#cards-template");

  //copia do Template card
  const cardElement = cardsTemplate.content
    .querySelector(".elements__box")
    .cloneNode(true);

  //pegar dados do template
  const cardImage = cardElement.querySelector(".elements__image");
  const trashCard = cardElement.querySelector(".elements__trash");
  const cardTitle = cardElement.querySelector(".elements__title");
  const likeButton = cardElement.querySelector(".elements__like");

  //--------------------   popup show image --------------------------------------------
  //
  const popupShowImage = document.querySelector(".popup_show-image");
  const imageSrc = document.querySelector(".popup__view-image");
  const imageAlt = document.querySelector(".popup__view-image");
  const imageTitle = document.querySelector(".popup__title-image");
  const viewImage = document.querySelector(".popup__view-image-container");

  cardImage.addEventListener("click", function () {
    openPopup(popupShowImage);

    imageSrc.setAttribute("src", card.link);
    imageAlt.setAttribute("Alt", card.name);
    imageTitle.textContent = card.name;

    const buttonCloseImage = document.querySelector(".popup__close-image");
    buttonCloseImage.addEventListener("click", function () {
      closePopup(popupShowImage);
    });
  });
  //
  //
  //-----------------------  Fim popup show image

  //---------------------Botao Lixeira-----------------
  trashCard.addEventListener("click", function () {
    cardElement.remove();
  });

  //---------------------Botao de curtir----------------
  let liked = false;

  // Função para alternar o estado do like
  likeButton.addEventListener("click", function () {
    if (liked) {
      likeButton.src = "./images/like.png";
      /* Liked = false; */
    } else {
      likeButton.src = "./images/liked.png";
      /* Liked = true */
    }

    liked = !liked;
  });

  //popular os cards = pegando dos campos do array

  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  cardTitle.textContent = card.name;

  return cardElement;
}

//verifica cada elemento no array e adiciona os cartoes do array ao cartao

initialCards.forEach((card) => {
  const newCardElement = createCard(card);
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

  //cria variavel que recebe os valores digitado nos input name e link
  const cardInfo = {
    name: inputTitle.value,
    link: inputLink.value,
  };

  // nova variavel (newCarData) para criar o novo card (criateCard) com os dados digitado (cardInfo)
  const newCardData = createCard(cardInfo);
  //adiciona o cartao no inicio da lista
  cardList.prepend(newCardData);
  formAddCard.reset(); //reseta o form
  closePopup(popupCards); //fecha
});
