import axios from 'axios';

const SET_AUTH = 'SET_AUTH';

const setAuth = auth => ({type: SET_AUTH, auth})

export const me = () => {
  return async (dispatch) => {
    const res = (await axios.get('/auth/me')).data
    return dispatch(setAuth(res))
  }
}


export default function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}