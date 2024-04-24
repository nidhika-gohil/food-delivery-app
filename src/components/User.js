import { useState } from "react";

const User = ({ name, location }) => {
  const [count1] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count1: {count1}</h2>
      <h2>Count1: {count2}</h2>
      <h3>Name: {name}</h3>
      <h3>Description: {location}</h3>
    </div>
  );
};

export default User;
