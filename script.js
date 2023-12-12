const D = document
const W = window
const para = D.createElement('p')
const displayField = D.querySelector('.termLike.displayField')
// const inputField = D.querySelector('.termLike.inputField')
const textarea = D.querySelector('.textarea')

function printPagePosition() {
  let currentPage = 'home'
  let websiteName = 'website'
  let pagePosition = currentPage + '@' + websiteName + ':' + '\u00A0'

  const newStrong = D.createElement('strong')
  newStrong.textContent = pagePosition

  const displayField = D.getElementById('displayField')
  displayField.appendChild(newStrong)
}

function handleKeyPress(event, inputElement) {
  if (event.key === 'Enter') {
    handleSubmit(inputElement)
  }
}

function handleSubmit(inputElement) {
  const inputValue = inputElement.value
  console.log(inputValue)

  printInput(inputValue)

  inputElement.value = ''
}

function printInput(inputValue) {
  printPagePosition()

  const newParagraph = D.createElement('p')
  newParagraph.textContent = inputValue
  newParagraph.style.display = 'inline-block'

  const displayField = D.getElementById('displayField')
  displayField.appendChild(newParagraph)

  leaveBreak()
  leaveBreak()
}

let message
let cntM = 20
let cntP = 20

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

function increaseWidth(inputElement) {
  var numberOfCharacters = inputElement.value.length
  if (numberOfCharacters >= 10) {
    var length = numberOfCharacters + 2 + 'ch'
    inputElement.style.width = length
    console.log(length)
  }
}

message = getDate()
console.log(message)
para.appendChild(D.createTextNode(message))
displayField.appendChild(para)
leaveBreak()

console.log('JS Loaded')

console.log('JS Loaded')
