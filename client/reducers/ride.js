// a reducer takes in two things: copy of the current state, action
function ride(state = [], action){
  switch (action.type) {
    case 'REQUEST_COMPLETE':
    case 'SET_RIDE':
      return action.value;
    default:
      return state;
  }
  return state;
}

export default ride;
