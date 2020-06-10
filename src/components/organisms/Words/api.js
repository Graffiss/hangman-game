import axios from 'axios';

// require('dotenv').config();

const api = 'https://wordsapiv1.p.rapidapi.com/words/europe/hasMembers';
const apiParams = {
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': 'd79584ebbemsh79323851204ae88p1fd30cjsn728c8397c3d7',
  },
};

export const fetchData = async (dataSetter) => {
  try {
    const { data } = await axios.get(api, apiParams);

    dataSetter(data.hasMembers[Math.floor(Math.random() * data.hasMembers.length)]);
  } catch (err) {
    console.log(err);
  }
};
