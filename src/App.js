import React, { useState } from "react";
import "./styles.css";

// const cuisineList = ["English", "Indian", "Italian"];

const restaurantDictionary = {
  American: {
    restaurantInfo: {
      "Mc Donald's": "5",
      "Burger King": "6",
      "Chili's American Grill & Bar": "9",
      "Jughead's": "8",
      "Jamjar Diner Restaurant": "8.5",
      "Hard Rock Cafe Mumbai": "8",
      "Splash ": "7",
      "The American Joint": "6.5"
    }
  },
  Indian: {
    restaurantInfo: {
      "Persian Darbar": "5",
      "Urban Tadka": "6",
      "Cafe Madras": "9",
      "Bombay Vintage": "8",
      "Ram Ashraya": "9.5",
      "Mirchi & Mime": "8.5",
      "Butterfly High": "8",
      "The Bohri Kitchen": "7.5"
    }
  },
  Italian: {
    restaurantInfo: {
      "Grand Mama's": "5",
      "Joey's Pizza": "6",
      "Celini ": "7",
      "CinCin ": "8.5",
      "Pizza By the Bay": "10",
      "Riso ": "9",
      "Smoke House Deli": "9",
      "Oven Fresh": "8"
    }
  }
};
const cuisineList = Object.keys(restaurantDictionary);

export default function App() {
  const [restaurantsAndratings, setrestaurantsAndratings] = useState({});
  // const [ratings, setratings] = useState([]);
  function cuisineClickHandler(item) {
    var cuisineDictionary = restaurantDictionary[item].restaurantInfo;
    const restaurantList = Object.keys(cuisineDictionary);
    const ratingList = Object.values(cuisineDictionary);
    // console.log(restroList);
    var restaurantsAndratings = {};
    restaurantList.forEach(
      (key1, key2) => (restaurantsAndratings[key1] = ratingList[key2])
    );
    setrestaurantsAndratings(restaurantsAndratings);
    // console.log(restaurantsAndratings);
    // console.log(Object.keys(restaurantsAndratings));
    // setratings(ratingList)
  }

  return (
    <div className="App">
      <h2> 🥘 Restaurant recommender</h2>
      <h4>Checkout my favourite restaurants. Select a cuisine to know more</h4>
      {cuisineList.map((item) => {
        return (
          <button
            onClick={() => {
              cuisineClickHandler(item);
            }}
          >
            {" "}
            {item}{" "}
          </button>
        );
      })}
      <hr></hr>

      {Object.keys(restaurantsAndratings).map((restaurant) => {
        return (
          <div className="div-list-item">
            <div className="div-large-text">{restaurant}</div>
            <div className="div-small-text">
              {" "}
              {restaurantsAndratings[restaurant]} / 10{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
