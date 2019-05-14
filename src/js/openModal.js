var modal = document.getElementsByClassName('modal')[0]
var modalCloseBtn = document.getElementsByClassName('modal__close-btn')[0]
var modal = document.getElementsByClassName('modal')[0]
var modalImage = document.getElementsByClassName('modal__img')[0]

const openModal = (event) => {
  const selctedImgParentHref = event.target.parentNode.getAttribute("href");
  modalImage.src = selctedImgParentHref;
  modal.style.display = "block";
  modal.addEventListener('click', closeModal);
}
export default openModal;

const closeModal = (event) => {
  if (event.target == modal || event.target == modalCloseBtn)
    modal.style.display = 'none';

}



