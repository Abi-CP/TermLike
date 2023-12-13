const D = document
// const W = window
const displayField = D.querySelector('.termLike.displayField')
const textArea = D.querySelector('.textarea')

let websiteName = 'website'
let pagePosition = 'home@' + websiteName + ': '

let cntM = 20,
  cntP = 20

let previousMessages = [],
  nextMessages = []

let currentMessage = '',
  previousMessage = '',
  nextMessage = ''

printOutput(getDate())


let commandHistory = [];

function executeCommand(cmd, args) {
  switch (cmd.toLowerCase()) {
    case 'help':
      printOutput('Available commands: help, clear, date, echo, whoami, history, exit/quit');
      break;

    case 'clear':
      clearDisplay();
      break;

    case 'date':
      printOutput(new Date().toLocaleString());
      break;

    case 'echo':
      printOutput(args.join(' ')); // Concatenate arguments and print
      break;

    case 'whoami':
      printOutput('Current user: [Your username]'); // Replace [Your username] with the actual username
      break;

    case 'history':
      printOutput('Command history:\n' + commandHistory.join('\n'));
      break;

    case 'exit':
    case 'quit':
      printOutput('Exiting application...');
      // You can perform additional cleanup or exit the application as needed.
      break;

    default:
      printOutput(`Command not recognized: ${cmd}`);
      break;
  }

  // Add the executed command to history
  commandHistory.push(`${cmd} ${args.join(' ')}`);
}
function clearDisplay() {
  displayField.innerHTML = ''
}

function handleMessages(inputValue) {
  previousMessages.push(inputValue)
}

function handleArrowUp(inputElement) {
  if (previousMessages.length > 0) {
    nextMessages.push(inputElement.value)
    textArea.value = previousMessages.pop()
  }
  console.log(previousMessages)
  console.log(nextMessages)
}

function handleArrowDown(inputElement) {
  if (nextMessages.length > 0) {
    previousMessages.push(inputElement.value)
    inputElement.value = nextMessages.pop()
  }
  console.log(previousMessages + '\n' + nextMessages)
}

function printOutput(output) {
  const newParagraph = D.createElement('p')
  newParagraph.appendChild(D.createTextNode(output))
  displayField.appendChild(newParagraph)
  leaveBreak()
}

function getPagePosition() {
  let currentPage = 'home'
  return currentPage
}

function setPagePosition() {
  let currentPage = getPagePosition()
  return (pagePosition = currentPage + '@' + websiteName + ':' + '\u00A0')
}

function printPagePosition() {
  const newStrong = D.createElement('strong')
  newStrong.textContent = pagePosition

  displayField.appendChild(newStrong)
}

function handleKeyPress(event, inputElement) {
  if (event.key === 'Enter') {
    handleSubmit(inputElement)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    handleArrowUp(inputElement)
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    handleArrowDown(inputElement)
  }
}

function separateCmdAndArgs(inputValue) {
  currentMessage = inputValue
  console.log(currentMessage)
  let words = currentMessage.split(' ')
  let cmd = words[0],
    args = words.slice(1)

  return { cmd, args }
}

function handleCommand(inputValue) {
  let { cmd, args } = separateCmdAndArgs(inputValue)
  console.log('cmd' + cmd)
  console.log(args)
  executeCommand(cmd, args)
}

function handleSubmit(inputElement) {
  const inputValue = inputElement.value
  handleMessages(inputValue)
  console.log(inputValue)

  printInput(inputValue)

  handleCommand(inputValue)

  inputElement.value = ''
  inputElement.style.width = '20ch'
}

function printInput(inputValue) {
  printPagePosition()

  const newParagraph = D.createElement('p')
  // newParagraph.style.display = 'inl'
  newParagraph.textContent = inputValue
  newParagraph.style.display = 'inline'
  newParagraph.style.overflowWrap = 'break-word'
  // newParagraph.style.maxWidth = '100vw'

  displayField.appendChild(newParagraph)

  leaveBreak()
}

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
  if (numberOfCharacters >= 20) {
    var length = numberOfCharacters + 2 + 'ch'
    inputElement.style.width = length
    console.log(length)
  }
}

console.log('JS Loaded')
