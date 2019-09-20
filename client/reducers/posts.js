// a reducer takes in two things:

// 1. the action (info about what happened)

// 2. copy of the current state

export default function posts(state = [], action, updatedPost) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), //before the one we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ];
    // return the updated state
    default:
      return state;
  }
}
