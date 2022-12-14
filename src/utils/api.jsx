import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://alexs-nc-games.herokuapp.com/api/',
});

export const customGetRequest = (url, params) => {
  return gamesApi.get(url, params).then((response) => {
    return response.data;
  });
};

export const customPatchRequest = (reviewId, votes) => {
    return gamesApi.patch(`reviews/${reviewId}`, { inc_votes: votes }).then((response) => {
      return response.data;
    });
  };


