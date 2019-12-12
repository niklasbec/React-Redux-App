import * as types from './actionTypes';
import axios from 'axios';

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export const getKanyeWisdom = () => (dispatch) => {
    axios.get('https://api.kanye.rest?format=text')
      .then(response => {
          const kanyeWisdom = response.data
          console.log(response.data);
        dispatch({
            type: types.KANYE_WISDOM,
            payload: kanyeWisdom,
          });
      })
      .catch(error => {
        console.log(error);
      });
  };