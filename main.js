const buttons = {
  'f': document.querySelector('.top-button'),
  'h': document.querySelector('.left-button'),
  't': document.querySelector('.right-button'),
  'b': document.querySelector('.bottom-button')
};

document.onkeypress = (keypress) => {
  try {
    const opacity = buttons[keypress.key].style.opacity;
    buttons[keypress.key].style.opacity = opacity === '1' || opacity === '' ? '0.1' : '1';
  } catch {}
}
