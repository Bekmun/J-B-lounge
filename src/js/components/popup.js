const btnOpenModal = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal')
const aboutBtnOpenModal = document.querySelector('.about__btn')
const closeModalBtn = document.querySelector(".modal__close");
const header = document.querySelector('.header')
const heroSocial = document.querySelector(".hero__social");

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth
  document.body.classList.add("dis-scroll");
  document.body.style.paddingRight = paddingOffset + "px";
  header.style.paddingRight = 70 + paddingOffset + 'px';
  heroSocial.style.paddingRight = 60 + paddingOffset + "px";
  modal.style.paddingRight = 30 + paddingOffset + "px";
  if (window.matchMedia("(max-width: 1080px)").matches) {
    header.style.paddingRight = 20 + paddingOffset + "px";
  }
}

let enableScroll = function () {
  document.body.classList.remove("dis-scroll");
  document.body.style.paddingRight = '0px'
  heroSocial.style.paddingRight = "60px";
  modal.style.paddingRight = "30px";
  if (window.matchMedia("(max-width: 1080px)").matches) {
    header.style.paddingRight = '20px';
    console.log(window.matchMedia("(max-width: 1060px)").matches);
  } else {
    header.style.paddingRight = "70px";
  }
}

modal.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`
const closeModal = event => {
  const target = event.target

  if(target === modal ||
    target.closest('.modal__close') ||
    event.code === 'Escape') {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.visibility = 'hidden'
    }, 300)
    enableScroll()
  }

}
window.removeEventListener('keydown', closeModal)

const openModal = () => {
  modal.style.opacity = 1;
  modal.style.visibility = 'visible'
  window.addEventListener('keydown', closeModal)
  disableScroll()
}

btnOpenModal.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
aboutBtnOpenModal.addEventListener('click', openModal)
modal
  .querySelector(".modal__main")
  .addEventListener("click", (e) => (e._isClickWithinModal = true));

modal.addEventListener("click", (e) => {
  if (e._isClickWithinModal) return;
  closeModal(e);
});
