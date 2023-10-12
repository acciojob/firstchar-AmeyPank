function firstChar(text) {
  // Remove leading and trailing spaces
  text = text.trim();

  // Check if the string is empty or consists only of spaces
  if (text === '') {
    return '';
  }

  // Return the first character of the cleaned string
  return text[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
