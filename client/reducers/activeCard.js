// a reducer takes in two things: copy of the current state, action
function activeCard(state = [], action){
  switch (action.type) {
    case 'SELECT_ACTIVITY':
      return {
        index: action.index
      };
    default:
      return state;

  }
  return state;
}

export default activeCard;
