import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import RestaurantCategoryCopy from "./RestaurantCategoryCopy";
import { useState } from "react";

const RetaurantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  /* const [restInfo, setRestInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(MENU_LIST + restId);
    const json = await data.json();
    // console.log(
    //   "json => ",
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    // );
    setRestInfo(json?.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []); */
  // Writing the above code as a Custom HOOK

  const restInfo = useRestaurantMenu(restId);

  if (restInfo == null) {
    return <Shimmer />;
  }

  // console.log(
  //   "restInfo=>",
  //   restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  // );
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;
  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("categories=>", categories);
  return (
    <div className="resturantMenu rounded-lg p-2 text-center">
      <h2 className="restaurantName font-bold text-2xl py-2 my-3">{name}</h2>
      <span className="cuisines font-semibold text-sm py-1">
        {cuisines.join(", ")}
      </span>
      <span className="cost font-medium text-base py-1">
        - {costForTwoMessage}
      </span>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          category={category.card.card}
          showItem={index === showIndex ? true : false}
          showIndex={index}
          setShowIndex={(index) => setShowIndex(index)}
        />
      ))}
      {/* <ul className="px-[18px]">
        {itemCards
          ? itemCards.map((itemCard) => {
              const { id, name, price } = itemCard?.card?.info;
              return (
                <li className="" key={id}>
                  {name} - {"Rs. " + price / 100}
                </li>
              );
            })
          : []}
      </ul> */}
    </div>
  );
};

export default RetaurantMenu;
