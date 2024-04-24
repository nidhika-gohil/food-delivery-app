import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="menuItem flex justify-between w-auto border-b py-4 px-2 text-left pb-8"
          key={item.card.info.id}
        >
          <div className="w-9/12 h-24">
            <span className="font-medium">{item.card.info.name}</span>
            <span className="font-medium">
              {" "}
              - ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div className="text-sm text-gray-400">
              {item.card.info.description}
            </div>
          </div>
          {item.card.info.imageId && (
            <div className="w-3/12">
              <img src={CDN_URL + item.card.info.imageId}></img>
              <div className="absolute mx-14">
                <button
                  className="border-gray border border-solid text-green-600 bg-white rounded-sm text-sm px-1"
                  onClick={(item) => handleClick(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
