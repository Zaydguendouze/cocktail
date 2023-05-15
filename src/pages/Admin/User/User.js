import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  let navigate = useNavigate();

  const zayd = (userId) => {
    console.log("click");
    navigate("../edit/" + userId);
  };

  return (
    <div className="User">
      User List
      <button onClick={() => zayd(4)}>User 4</button>
    </div>
  );
};

export default User;
