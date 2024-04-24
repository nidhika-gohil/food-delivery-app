import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    if (showItem === false) setShowItem(true);
    else setShowItem(false);
  };

  return (
    <div onClick={handleClick}>
      <div className="w-6/12 mx-auto my-4 p-3 bg-gray-50 shadow-lg">
        <div className="flex justify-between font-bold text-lg">
          <span className="category-name">
            {category.title} ({category?.itemCards?.length})
          </span>
          <span className="category-down-arrow">↓</span>
        </div>
        {showItem && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
