import React, { useContext } from "react";
import "./index.css";
import image from "./gamesimage.png";
import { ApiContext, GameContext } from "../../utils/UserState";
// import Axios from "axios";

const GameList = () => {
  const apiData = useContext(ApiContext);
  const gameData = useContext(GameContext);
  console.log(gameData);
  const gameInfo = JSON.stringify(gameData);
  console.log(gameInfo);
  console.log(apiData);

  // Axios.get(
  //   `https://cors-anywhere.herokuapp.comhttps://www.giantbomb.com/api/images/${"yo"}/?api_key=${
  //     process.env.REACT_APP_API_KEY
  //   }`
  // );

  return (
    <div className="gameContainer">
      <div className="gameImg">
        <img src={image} alt="games" width="320" height="160" />
      </div>

      <div className="gameListWrapper box">
        {/* <div className="gameOfTheMonth box"></div> */}
        <div className="gameListContainer box">
          {apiData.map((i, index) => (
            // <div className={index}>
            <img key={index} className="game" src={i} alt="game" />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;

// class GameList extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       gameData: [],
//     };
//   }

//   componentWillMount() {
//     const sum = this.axiosCall();
//     console.log(sum);
//     this.setState({ gameData: sum });
//   }

//   axiosCall = async () => {
//     return axios
//       .get(
//         "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json"
//       )
//       .then((res) => {
//         const data = res.data.results;
//         return data;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   sumFunc = () => {
//     this.renderData(this.state.gameData);
//   };

//   renderData = (d) => {
//     console.log(d);
//     return d.map((d) => {
//       return (
//         <div>
//           <div>{d.aliases}</div>
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div className="gameContainer">
//         <div className="gameImg">
//           <img src={image} alt="games" width="320" height="160" />
//         </div>
//         <div className="gameListWrapper box">
//           <div className="gameOfTheMonth box">
//             <br />
//             <button name="Pokémon" className="is-primary">
//               Button
//             </button>
//           </div>
//           <div className="gameListContainer box">{this.sumFunc}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default GameList;
