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

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__imput-name");
let jobInput = document.querySelector(".popup__imput-sobre-mim");
let profileName = document.querySelector(".profile__info-name");
let profileAbout = document.querySelector(".profile__info-sobre-mim");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;

  popup.classList.remove("popup__opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
