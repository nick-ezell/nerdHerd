import React, { createContext, useReducer, useContext } from "react";

//Create a context for skill lists to be shown/hidden

const GameContext = createContext([{}]);

const ApiContext = createContext();

const UserContext = createContext();

// //Accessing context
const useUserContext = () => {
  return useContext(UserContext);
};
// // console.log(useUserContext);

const { Provider } = UserContext;

function reducer(state, action) {
  //Set a condition on the event target's name
  switch (action.type) {
    //the first two cases in our switch pertain to our "Front-End" and "Back-End" buttons
    //if hide
    case "login":
      return {
        email: action.payload,
      };

    // case "email":
    //   return {
    //     ...state,
    //     email: action.data,
    //   };

    default:
      console.log("Black Lives Matter");
  }
}

function UserProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    user: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

export { ApiContext, GameContext, UserContext, useUserContext, UserProvider };
