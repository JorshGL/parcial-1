import React, { useRef, useState } from "react";
import Inputs from "./components/Inputs";
import BetsList from "./components/BetsList";
import NavigatorButton from "../../components/NavigatorButton";

const Home = () => {
  const [bets, setBets] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="flex flex-col bg-rose-600 h-screen items-center p-6 text-white gap-6">
      <h1 className="font-bold text-5xl">Chance</h1>
      <Inputs bets={bets} setBets={setBets} setTotal={setTotal} />
      <BetsList
        bets={bets}
        setBets={setBets}
        total={total}
        setTotal={setTotal}
        deleteButtonEnabled={true}
      />
      <NavigatorButton text={'Finalizar'} route={'/output'}/>
    </div>
  );
};

export default Home;
