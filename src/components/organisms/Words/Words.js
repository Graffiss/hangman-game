const wordsFromApi = [
  'chelsea londyn',
  'arsenal londyn',
  'everton',
  'leicester',
  'liverpool fc',
  'watford',
];

const randomWord = () => wordsFromApi[Math.floor(Math.random() * wordsFromApi.length)];

export { randomWord };
