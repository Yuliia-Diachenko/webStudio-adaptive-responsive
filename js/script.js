// ====================  mobile menu window open - close  =====================
const mobileBurger = document.querySelector(".mobile-menu-open-btn");
const mobileMenu = document.querySelector(".mobile-menu-wraper");
const isOpenBurger = mobileBurger.addEventListener("click", addClassIsOpen);
function addClassIsOpen() {
    return mobileMenu.classList.add("is-open");
};
const mobileMenuClose = document.querySelector(".mobile-menu-wraper-btn-close");
const menuCloseButton = mobileMenuClose.addEventListener("click", deleteClassIsOpen);
function deleteClassIsOpen() {
   return mobileMenu.classList.remove("is-open");
};
// =============================================================================== //
// =============================  modal window  ================================== //
const herroButton = document.querySelector(".hero-button");
const modalWindow = document.querySelector(".modal-window-container");
const isOpenModalWindow = herroButton.addEventListener("click", addClassIsOpenModal);
function addClassIsOpenModal() {
    return modalWindow.classList.add("is-open");
};
const modalWindowClose = document.querySelector(".modal-window-button");
const modalCloseButton = modalWindowClose.addEventListener("click", deleteClassIsOpenModal);
function deleteClassIsOpenModal() {
    return modalWindow.classList.remove("is-open");
} // modal window open - close //
