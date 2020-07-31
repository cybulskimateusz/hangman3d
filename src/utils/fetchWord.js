const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const fetchWord = async () => {
  const url = 'https://api.datamuse.com/words?sp=';
  const questionTag = '?';
  const wordLength = getRandomArbitrary(6, 20);
  const api = url + questionTag.repeat(wordLength);

  const response = await fetch(api, {
    method: 'GET',
    'Access-Control-Allow-Origin': '*',
  });
  const json = await response.json();
  const { word } = json[getRandomArbitrary(1, 100)];

  return word;
};

export default fetchWord;
