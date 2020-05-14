const wordsFromApi = ['chelsea', 'manchester united', 'manchester city', 'arsenal londyn'];

const randomWord = () => wordsFromApi[Math.floor(Math.random() * wordsFromApi.length)];

export { randomWord };
