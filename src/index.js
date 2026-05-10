const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const CHUNK_SIZE = 10;
  let decodedString = '';

  for (let i = 0; i < expr.length; i += CHUNK_SIZE) {
    const chunk = expr.slice(i, i + CHUNK_SIZE);

    if (chunk === '**********') {
      decodedString += ' ';
    } else {
      // Usuwamy wiodące zera, a następnie mapujemy 10 na kropkę i 11 na kreskę
      const morseCode = chunk
        .slice(chunk.indexOf('1')) // Znajduje początek faktycznych danych
        .replace(/10/g, '.')
        .replace(/11/g, '-');

      decodedString += MORSE_TABLE[morseCode];
    }
  }

  return decodedString;
};
