import React from "react";
import "./index.css";
import image from "./gamesimage.png";
import { ApiContext } from "../../utils/UserState";

const GameList = () => {
  const apiData = React.useContext(ApiContext);
  console.log(apiData);

  return (
    <div className="gameContainer">
      <div className="gameImg">
        <img src={image} alt="games" width="320" height="160" />
      </div>
      <div className="gameListWrapper box">
        <div className="gameOfTheMonth box">
          <br />
          <button name="Pokémon" className="is-primary">
            Button
          </button>
        </div>
        <div className="gameListContainer box"></div>
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
