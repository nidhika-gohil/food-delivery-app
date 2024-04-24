import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let initialListOfRestaurants = [
    {
      data: {
        type: "F",
        id: "200193",
        name: "Bebe Di Rasoi - Punjabi",
        uuid: "72a41fbe-920c-43c9-983a-ae74ff0e5df7",
        city: "6",
        area: "Senapati Bapat Road",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "qwokyvfzdond2snolvzw",
        cuisines: [
          "North Indian",
          "Punjabi",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts",
          "Beverages",
        ],
        tags: [],
        costForTwo: 30000,
        avgRating: "4.1",
      },
    },
    {
      data: {
        type: "F",
        id: "16968",
        name: "PK Biryani House (Kothrud)",
        uuid: "3df7e3ae-b9d2-4714-bed7-b1ec67916f68",
        city: "6",
        area: "Kothrud",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "fkepojauuk2dwkmeefpc",
        cuisines: ["Biryani", "Maharashtrian", "Seafood", "North Indian"],
        tags: [],
        costForTwo: 40000,
        promoted: false,
        avgRating: "3.1",
      },
    },
    {
      data: {
        type: "F",
        id: "14548",
        name: "Burger King",
        uuid: "e9ec48cc-4b02-483b-b0ca-8b3b3059dfff",
        city: "6",
        area: "Kothrud",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Burgers", "American"],
        costForTwo: 35000,
        avgRating: "4.1",
      },
    },
  ];
  //let [ listOfRest , setListOfRest] = useState(initialListOfRestaurants);
  // let [listOfRest, setListOfRest] = useState(resList);
  let [listOfRest, setListOfRest] = useState([]);
  let [filteredListOfRest, setFilteredListOfRest] = useState([]);
  let [searchText, setsearchText] = useState("");
  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5059636&lng=73.805881&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "json==============>",
      json
      // ?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      // ?.restaurants[0]
    );
    // Optional chaining
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  //considtional rendering
  // if (listOfRest.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }
  console.log("listOfRest=>", listOfRest);
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-start p-4">
        <div className="search">
          <input
            className="searchInputBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-button px-2 ml-3 bg-orange-400 text-white text-lg font-medium rounded-md"
            onClick={() => {
              const searchedRest = listOfRest.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredListOfRest(searchedRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-2 mx-3 bg-green-400 rounded-md text-lg text-gray-600"
          onClick={() => {
            const filteredList = listOfRest.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setFilteredListOfRest(filteredList);
          }}
        >
          To Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap m-1">
        {filteredListOfRest.map((resObj) => {
          return (
            <Link key={resObj.info.id} to={"/restaurants/" + resObj.info.id}>
              {resObj.info.areaName === "Kothrud" ? (
                <RestaurantWithPromotedLabel resData={resObj} />
              ) : (
                <RestaurantCard resData={resObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
