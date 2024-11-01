import likedIcon from "../images/liked.png";
import likeIcon from "../images/like.png";
export default class Card {
  constructor(cardData, templateCard, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateCard = templateCard;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardsTemplate = document.querySelector(this._templateCard);

    const cardElement = cardsTemplate.content
      .querySelector(".elements__box")
      .cloneNode(true);

    return cardElement;
  }
  _setEventListeners() {
    this._likeButton();
    this._remove();
  }

  _likeButton() {
    let liked = false;

    //---------------------Botao de curtir----------------
    this._likeButtonElement = this._element.querySelector(".elements__like");

    // Função para alternar o estado do like
    this._likeButtonElement.addEventListener("click", () => {
      if (liked) {
        this._likeButtonElement.setAttribute("src", likeIcon);
        /* Liked = false; */
      } else {
        this._likeButtonElement.setAttribute("src", likedIcon);
        /* Liked = true */
      }

      liked = !liked;
    });
  }

  _remove() {
    //---------------------Botao Lixeira-----------------
    const trashCard = this._element.querySelector(".elements__trash");
    trashCard.addEventListener("click", () => {
      this._element.remove();
    });
  }

  //
  generateCard() {
    // Armazena a marcação no campo privado _element
    // para que outros elementos possam acessá-lo
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".elements__image");
    const cardTitle = this._element.querySelector(".elements__title");

    cardImage.setAttribute("src", this._link);
    cardImage.setAttribute("alt", this._name);
    cardTitle.textContent = this._name;
    cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });

    // Retorna o elemento
    this._setEventListeners();
    return this._element;
  }
}
