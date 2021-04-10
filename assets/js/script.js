const emailButton = document
  .querySelector('.email-me')
  .addEventListener('click', () => {
    window.open('mailto:notprateeek@gmail.com')
  })

const emailText = document
  .querySelector('.contact-heading')
  .addEventListener('click', () => {
    window.open('mailto:notprateeek@gmail.com')
  })

const resume = document
  .querySelector('.resume')
  .addEventListener('click', () => {
    window.open(
      'https://drive.google.com/file/d/1cFK0xt9XOEjfQETjoQw8JxJHZ9UIgI9k/view?usp=sharing'
    )
  })

const project1 = document
  .querySelector('.project-1')
  .addEventListener('click', () => {
    window.open('https://notprateeek-humaaans.netlify.app/')
  })

const project2 = document
  .querySelector('.project-2')
  .addEventListener('click', () => {
    window.open('https://notprateeek-weather.netlify.app/')
  })

const project3 = document
  .querySelector('.project-3')
  .addEventListener('click', () => {
    window.open('https://notprateeek-meditation.netlify.app/')
  })

const project4 = document
  .querySelector('.project-4')
  .addEventListener('click', () => {
    window.open('https://notprateeek-rock-paper-scissors.netlify.app/')
  })

const project5 = document
  .querySelector('.project-5')
  .addEventListener('click', () => {
    window.open('https://notprateeek-tap-music.netlify.app/')
  })

const project6 = document
  .querySelector('.project-6')
  .addEventListener('click', () => {
    window.open('https://notprateeek-tic-tac-toe.netlify.app/')
  })

const scrollDown = document
  .querySelector('.scroll-down')
  .addEventListener('click', () => {
    location = '#about'
  })

const scrollUp = document
  .querySelector('.scroll-up')
  .addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
