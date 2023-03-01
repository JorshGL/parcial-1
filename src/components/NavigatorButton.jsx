import React from "react";
import { useNavigate } from "react-router-dom";

const NavigatorButton = ({text, route}) => {
  const navigate = useNavigate();
  return (
    <button
      className="p-4 rounded-md bg-green-600 text-xl font-bold"
      onClick={() => navigate(route)}
    >
      {text}
    </button>
  );
};

export default NavigatorButton;
