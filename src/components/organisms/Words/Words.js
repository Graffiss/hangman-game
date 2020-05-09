const wordsFromApi = [
  'football',
  'soccer',
  'chelsea',
  'manchester',
  'liverpool',
  'everton',
  'arsenal',
  'leicester',
];

const randomWord = () => wordsFromApi[Math.floor(Math.random() * wordsFromApi.length)];

export { randomWord };
