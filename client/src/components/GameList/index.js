import React from "react";
import "./index.css";
import axios from "axios";

const GameList = () => {
  // const queryURL = process.env.API_URL;
  // const key = process.env.API_KEY;
  // const query = "elder scrolls online";
  // const gameSearch = () => {
  //   const request =
  //     `${process.env.API_URL}` +
  //     `${process.env.API_KEY}` +
  //     "&format=json&query=" +
  //     `${query}` +
  //     "&resources=game";
  //   return axios.get(request);
  // };

  // const gameSearch = () => {
  //   axios
  //     .get(
  //       "http://www.giantbomb.com/api/game/3030-38206/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=jsonp&field_list=name,description"
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const getPeople = () => {
  //   axios
  //     .get("https://randomuser.me/api/?results=200&nat=us")
  //     .then((res) => console.log(res));
  // };

  return (
    <div className="gameListWrapper box">
      <img src="./gamesimages.png" alt="games" width="60" height="30" />
      <div className="gameOfTheMonth box">
        Game of the Month
        <br />
        <button
          onClick={axios.get("/api/games/api")}
          name="Pokémon"
          className="is-primary"
        >
          Button
        </button>
      </div>
      <div className="gameListContainer box"></div>
    </div>
  );
};

export default GameList;

// const testData = [
//   {
//     _id: "5ee3ffd6ba603e4ca9c78f89",
//     index: 0,
//     guid: "7df6f591-7cbd-4ad8-878a-57f88192a5f7",
//     isActive: true,
//     balance: "$1,006.06",
//     picture: "http://placehold.it/32x32",
//     age: 29,
//     eyeColor: "green",
//     name: {
//       first: "Tia",
//       last: "Bush",
//     },
//     latitude: "24.577921",
//     longitude: "94.696341",
//     tags: ["labore", "et", "reprehenderit", "sint", "ad"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Melba Kirby",
//       },
//       {
//         id: 1,
//         name: "Kaufman Buckley",
//       },
//       {
//         id: 2,
//         name: "Gross Cote",
//       },
//     ],
//   },
//   {
//     _id: "5ee3ffd66e093ec2a71777d7",
//     index: 1,
//     guid: "406645dd-c61b-4015-a11d-2a5224639ac9",
//     isActive: false,
//     balance: "$2,361.07",
//     picture: "http://placehold.it/32x32",
//     age: 34,
//     eyeColor: "blue",
//     name: {
//       first: "Clarissa",
//       last: "Turner",
//     },
//     latitude: "58.740555",
//     longitude: "-116.976488",
//     tags: ["dolore", "enim", "excepteur", "qui", "ipsum"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Sybil Carroll",
//       },
//       {
//         id: 1,
//         name: "Dale Hodges",
//       },
//       {
//         id: 2,
//         name: "Benton Cline",
//       },
//     ],
//   },
//   {
//     _id: "5ee3ffd6d2d9fb5ab269ad57",
//     index: 2,
//     guid: "35e985a3-1cab-4436-8057-1dbdc88f763d",
//     isActive: true,
//     balance: "$3,298.15",
//     picture: "http://placehold.it/32x32",
//     age: 33,
//     eyeColor: "green",
//     name: {
//       first: "Sosa",
//       last: "Ratliff",
//     },
//     latitude: "-36.389421",
//     longitude: "-126.480931",
//     tags: ["voluptate", "non", "veniam", "officia", "ad"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Church Wilson",
//       },
//       {
//         id: 1,
//         name: "Reilly Berger",
//       },
//       {
//         id: 2,
//         name: "Manuela Witt",
//       },
//     ],
//   },
//   {
//     _id: "5ee3ffd63f332a567e321430",
//     index: 3,
//     guid: "355d0bcb-2cca-442f-b780-2640f90a58af",
//     isActive: false,
//     balance: "$1,212.24",
//     picture: "http://placehold.it/32x32",
//     age: 31,
//     eyeColor: "brown",
//     name: {
//       first: "Kasey",
//       last: "Scott",
//     },
//     latitude: "71.454541",
//     longitude: "118.294611",
//     tags: ["consectetur", "esse", "magna", "proident", "esse"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Joyce Mills",
//       },
//       {
//         id: 1,
//         name: "Leon Carver",
//       },
//       {
//         id: 2,
//         name: "Sullivan Barber",
//       },
//     ],
//   },
//   {
//     _id: "5ee3ffd638287408a5f9540c",
//     index: 4,
//     guid: "80928a58-cf19-4051-b0ba-d0309fa22dc9",
//     isActive: true,
//     balance: "$1,618.11",
//     picture: "http://placehold.it/32x32",
//     age: 20,
//     eyeColor: "green",
//     name: {
//       first: "Jana",
//       last: "Orr",
//     },
//     latitude: "-14.529134",
//     longitude: "145.646277",
//     tags: ["aliquip", "fugiat", "fugiat", "commodo", "veniam"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Dixie Gallegos",
//       },
//       {
//         id: 1,
//         name: "Dominguez Wilcox",
//       },
//       {
//         id: 2,
//         name: "Moses Irwin",
//       },
//     ],
//   },
//   {
//     _id: "5ee3ffd688744f12fd9baee9",
//     index: 5,
//     guid: "cdf96791-9c26-4a93-8e51-6d66cdf9211f",
//     isActive: false,
//     balance: "$3,808.35",
//     picture: "http://placehold.it/32x32",
//     age: 21,
//     eyeColor: "blue",
//     name: {
//       first: "Hayes",
//       last: "Rivers",
//     },
//     latitude: "67.536464",
//     longitude: "-143.340797",
//     tags: ["aute", "eu", "dolor", "ex", "mollit"],
//     range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     friends: [
//       {
//         id: 0,
//         name: "Marlene Brown",
//       },
//       {
//         id: 1,
//         name: "Luisa Chase",
//       },
//       {
//         id: 2,
//         name: "Sweet Conley",
//       },
//     ],
//   },
// ];
