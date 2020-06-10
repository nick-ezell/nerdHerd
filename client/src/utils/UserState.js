import React, { createContext, useContext, useReducer } from "react";

//Create a context for skill lists to be shown/hidden
const UserContext = createContext({
  username: "",
  email: "",
  password: "",
  _id: "",
});

//Accessing context
const useUserContext = () => {
  return useContext(UserContext);
};
// console.log(useUserContext);

const { Provider } = UserContext;

function reducer(state, action) {
  //Set a condition on the event target's name
  switch (action.type) {
    //the first two cases in our switch pertain to our "Front-End" and "Back-End" buttons
    //if hide
    case "hide":
      return {
        ...state,
        //Change the context

        skills: "show",
        frontend: "show",
        backend: "show",
      };

    default:
      console.log("Black Lives Matter ");
  }
}

function SkillsProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
    _id: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

export { UserProvider, useUserContext };
