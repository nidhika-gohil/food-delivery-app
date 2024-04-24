import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwoString, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card m-2 p-2 w-[170px] h-80 bg-gray-200 rounded-lg hover:bg-slate-100">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="name font-bold py-2 text-lg">{name}</h3>
      <h3 className="cuisines">{cuisines.join(", ")}</h3>
      <h3 className="rating">{avgRating} </h3>
      <h3 className="costForTwo">{costForTwoString}</h3>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-2 px-2 rounded bg-black text-gray-50 text-sm">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
};

export default RestaurantCard;
