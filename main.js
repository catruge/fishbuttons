const buttons = {
  'f': document.querySelector('.top-button'),
  'h': document.querySelector('.left-button'),
  't': document.querySelector('.right-button'),
  'b': document.querySelector('.bottom-button')
};

document.onkeypress = (keypress) => {
  if (keypress.key in buttons) {
    buttons[keypress.key].disabled = !buttons[keypress.key].disabled;
  }
}
