const trigger = document.querySelector('.hero__lable')
const social = document.querySelector('.hero__social')
const svg1 = document.querySelector('.hero__svg-1')
const svg2 = document.querySelector('.hero__svg-2')

trigger.addEventListener('click', (e) => {
  social.classList.toggle('social-opened')
  svg1.classList.toggle('opacity')
  svg2.classList.toggle('opacity-2')
  trigger.classList.toggle('none')
})
trigger.addEventListener('blur', () => {
  setTimeout(() => {
    social.classList.remove('social-opened')
    svg1.classList.remove('opacity')
    svg2.classList.remove('opacity-2')
    trigger.classList.remove('none')
  }, 100)
})
