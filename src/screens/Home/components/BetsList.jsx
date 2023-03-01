import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const BetsList = ({ bets, setBets, total, setTotal, deleteButtonEnabled }) => {
  const removeBet = (index) => {
    setTotal((total) => Number(total) - Number(bets[index].value));
    setBets(bets.filter((_, i) => i !== index));
  };

  return (
    <div className="flex w-full flex-col gap-2 items-center">
      {bets.map((bet, index) => {
        return (
          <div key={index} className="flex w-2/5 text-3xl gap-5 justify-between border-b-2 p-2 border-white">
            <div>{bet.number}</div>
            <div>${bet.value}</div>
            {deleteButtonEnabled && (
              <button onClick={() => removeBet(index)}>
                <RiDeleteBin6Line />
              </button>
            )}
          </div>
        );
      })}
      {bets.length > 0 && (
        <div className="flex gap-2 items-center text-4xl font-bold mt-3">
          <div>Total:</div>
          <div>{total}</div>
        </div>
      )}
    </div>
  );
};

export default BetsList;
