import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Heading = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //subscribing to the selectore
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between items-center shadow-lg bg-pink-50">
      <div className="logo-container">
        <img className="logo w-48" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex m-2 text-lg font-medium">
          <li className="nav-list p-3">
            <span>Online Status:</span>
            <span
              className={
                onlineStatus
                  ? "logged-in text-green-600"
                  : "logged-out text-red-600"
              }
            >
              ●
            </span>
          </li>
          <li className="nav-list p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-list p-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="nav-list p-3">Cart ({cartItems.length} items)</li>
          <button
            className="login px-3 m-2 bg-yellow-400 text-white rounded-md"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
