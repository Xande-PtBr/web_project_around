// -----------------Função para abrir os popups ----------------------------
export function openPopup(popup) {
  popup.classList.add("popup__opened");
}

//----------------- Função para fechar os popups ----------------------------
export function closePopup(popup) {
  popup.classList.remove("popup__opened");
}
