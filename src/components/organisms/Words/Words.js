const wordsFromApi = ['chelsea londyn', 'arsenal londyn'];

const randomWord = () => wordsFromApi[Math.floor(Math.random() * wordsFromApi.length)];

export { randomWord };
