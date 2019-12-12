import * as types from './actionTypes'

const initialCount = 0

export function countReducer (count = initialCount, action) {
    switch(action.type) {
        case types.INCREMENT:
            return count + 1
        default:
            return count
    }
}

const initialKanyeWisdom = ['Click the button to generate kanye wisdom'];
export function kanyeReducer(wisdom = initialKanyeWisdom, action) {
  switch (action.type) {
    case types.KANYE_WISDOM:
      return action.payload;
    default:
      return wisdom;
  }
}