import * as types from './actionTypes';
import axios from 'axios';
import {Howl, Howler} from 'howler';
import thanks from '../sounds/thanks.mp3'

const kanyeSound = new Howl({
  src: [thanks]
})

export function increment() {
    return {
        type: types.INCREMENT
    }
}

export const getKanyeWisdom = () => (dispatch) => {
    kanyeSound.play()
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