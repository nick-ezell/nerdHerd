import { createContext } from "react";

//Create a context for skill lists to be shown/hidden
// const UserContext = createContext({});

const ApiContext = createContext();

// //Accessing context
// const useUserContext = () => {
//   return useContext(UserContext);
// };
// // console.log(useUserContext);

// const { Provider } = UserContext;

// function reducer(state, action) {
//   //Set a condition on the event target's name
//   switch (action.type) {
//     //the first two cases in our switch pertain to our "Front-End" and "Back-End" buttons
//     //if hide
//     case "login":
//       const { email, username, password } = action.payload;
//       return {
//         ...state,
//         email: email,
//         username: username,
//         password: password,
//       };

//     // case "email":
//     //   return {
//     //     ...state,
//     //     email: action.data,
//     //   };

//     default:
//       console.log("Black Lives Matter");
//   }
// }

// function UserProvider({ value = [], ...props }) {
//   const [state, dispatch] = useReducer(reducer, {
//     email: "",
//     username: "",
//     password: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// }

export { ApiContext };
