import { useEffect, useState } from "react";
import { MENU_LIST } from "./constants";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_LIST + restId);
    const json = await data.json();
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
