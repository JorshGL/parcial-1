import React, { useState } from "react";

const Inputs = ({ bets, setBets, setTotal }) => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  const addBet = () => {
    if (bets.find((item) => item.number === number)) {
      setError("Ya agregaste este numero!");
      return;
    }
    if (number !== 0 && value > 0) {
      setError("");
      setBets((bets) => [...bets, { number: number, value: value }]);
      setTotal((total) => Number(total) + Number(value));
    }
  };

  const onTypingNumber = (number) => {
    if (number.length < 3 || number.length > 4) {
      setError("Numero invalido: Min 3. Max 4");
      return;
    }
    setError("");
    setNumber(number);
  };

  return (
    <div className="flex flex-col items-center w-2/5 gap-3">
      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center">
          <div className="font-semibold">Numero</div>
          <input
            type="number"
            className="bg-rose-100 rounded-md p-2 text-rose-900 focus:outline-dashed focus:outline-2"
            onChange={(e) => onTypingNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">Valor a apostar</div>
          <input
            type="number"
            className="bg-rose-100 rounded-md p-2 text-rose-900 focus:outline-dashed focus:outline-2"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-auto">
          <button
            className="bg-rose-900 rounded-md px-4 py-2"
            onClick={() => addBet()}
          >
            Agregar
          </button>
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Inputs;
