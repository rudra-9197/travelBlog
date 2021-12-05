import React, { useState } from "react";
import "./styles.css";

var bangalorePlaces = ["Bangalorepalace", "cubbon park", "majestic"];
var tumkurPlaces = ["Devarayanadurga", "Tumkur", "Goravanahalli"];
var mysorePlaces = ["Shivanasamudra", "aramane", "mysorezoo"];

var cities = [
  {
    bengaluru: bangalorePlaces
  },
  { tumakuru: tumkurPlaces },
  { mysuru: mysorePlaces }
];

// var [bangaloreContent, setBangaloreContent]= useState();
export default function App() {
  const [placesArray, setplacesArray] = useState("");
  function bangaloreClick() {
    var placesArray = bangalorePlaces;
    setplacesArray(placesArray);
  }

  function tumkurClick() {
    var placesArray = tumkurPlaces;
    setplacesArray(placesArray);
  }

  return (
    <div className="App">
      <h1>Travelog</h1>
      <div>
        {cities.map(function (city) {
          return (
            <button
              onClick={(city) => {
                //placesArray=
              }}
              key={city}
            >
              {" "}
              {city}
            </button>
          );
        })}
      </div>

      <ul>
        <li>{placesArray}</li>
      </ul>

      <div>
        {" "}
        <ul>{placesArray}</ul>
      </div>
    </div>
  );
}
