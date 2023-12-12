const D = document
const W = window
const para = D.createElement('p')
const displayField = D.querySelector('.termLike.displayField')
const inputField = D.querySelector('.termLike.inputField')
const textarea = document.querySelector('.textarea')

let message
let cm = 20,
  cp = 20

function autoResize() {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
}

function getDate() {
  return new Date()
}

function leaveBreak() {
  displayField.appendChild(D.createElement('br'))
}

function focusInput() {
  textarea.focus()
}

message = getDate()
console.log(message)
para.appendChild(D.createTextNode(message))
displayField.appendChild(para)
leaveBreak()

// document.addEventListener('DOMContentLoaded', function () {
//   // focusInput()

//   inputField.addEventListener('click', () => {
//     textarea.focus()
//     console.log('click')
//   })

//   textarea.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//       event.preventDefault()
//       console.log('Input value:', textarea.textContent)
//       // textarea.textContent = '\u200B' // Clear the input value
//     }
//   })

//   textarea.addEventListener('input', function () {
//     var availSpace = W.screen.availWidth - 2 * cm + 2 * cp

//     textarea.textContent.trim()
//     // Remove zero-width spaces without replacing
//     // textarea.textContent.split('\u200B').join('')

//     // if (textarea.textContent == '') {
//     //   textarea.textContent = ' '
//     // }

//     console.log('Input value:', textarea.textContent)

//     // focusInput()
//   })
// })

console.log('JS Loaded')




console.log('JS Loaded')
