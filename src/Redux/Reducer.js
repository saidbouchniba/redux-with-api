import { GETUSERES } from "./Actiontype"

const initialState = {
    users:[]
}

export const userreducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSERES:
    return { ...state,users:payload }

  default:
    return state
  }
}
