import React from "react";
import NavigatorButton from "../../components/NavigatorButton";

const Output = () => {
  return (
    <div className="flex flex-col bg-rose-600 h-screen items-center p-6 text-white gap-6 justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl">Apuesta finalizada</h1>
        <h2 className="font-light text-3xl">¡Mucha suerte!</h2>
      </div>
      <NavigatorButton
        text={'Apostar de nuevo'}
        route={'/'}
      />
    </div>
  );
};

export default Output;
