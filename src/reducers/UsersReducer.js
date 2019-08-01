const initialState = {
  users: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_LOAD":
      return {
        ...state,
        users: action.data
      };
    default:
      return state;
  }
};

export default UserReducer;
