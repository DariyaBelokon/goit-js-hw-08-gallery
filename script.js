import galleryItems from "./app.js"
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  galleryImage: document.querySelector('.gallery__image'),
  modalCard: document.querySelector('.js-lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
  modalBtn: document.querySelector('.lightbox__button'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
}
const images = galleryItems.map(image => {
    refs.galleryList.insertAdjacentHTML('afterbegin', `<li class='gallery__item'><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" ></a></li>`)
});

refs.galleryList.addEventListener("click", openModal);
function openModal(event) {
    event.preventDefault();
    window.addEventListener('keydown', EscPress);
    const isImage = event.target.classList.contains("gallery__image");
    if (!isImage) { return };
    refs.modalCard.classList.add("is-open");
    const source = event.target.dataset.source;
    const alt = event.target.getAttribute('alt');
    refs.modalImg.setAttribute('src', source);
    refs.modalImg.setAttribute('alt', alt);
};

refs.modalBtn.insertAdjacentHTML('afterbegin', `<svg class="btn-socials__icon" width="20" height="20"><use href="./images/btn-close.svg#btn-close"></use></svg>`);
refs.modalBtn.addEventListener('click', toCloseModal);
refs.modalOverlay.addEventListener('click', toCloseModal);
function toCloseModal() {  
  refs.modalCard.classList.remove('is-open');
  refs.modalImg.setAttribute('src', '');
    refs.modalImg.setAttribute('alt', '');
    window.removeEventListener('keydown', EscPress);
};
function EscPress(event) {
    const escCode = 'Escape';
    if (event.code === escCode) {
        toCloseModal();
    };
}

