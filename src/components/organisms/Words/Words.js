const wordsFromApi = ['chelsea', 'manchester', 'liverpool', 'arsenal'];

const randomWord = () => wordsFromApi[Math.floor(Math.random() * wordsFromApi.length)];

export { randomWord };
