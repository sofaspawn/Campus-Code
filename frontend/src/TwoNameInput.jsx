import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Footer from "./footer"
import Line1 from "./assets/Vector-1.png"
import Line2 from "./assets/Vector-2.png"
import burstBrown from "./assets/Burst-pucker-1.png"
import burstRed from "./assets/Burst-pucker-2.png"

function TwoNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#6F5643" }, // dark brown
    { name: "", color: "#CC6B49" }, // red
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex items-center justify-center ">
      <div>
        <h2 className="text-[70px] font-medium text-center absolute inset-x-0 top-30 h-20 text-[#73BDA8]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>

        <img src={Line1}
        className="absolute top-43 left-0"/>

        <img src={Line2}
        className="absolute top-43 right-0"/>

        <img src={burstBrown} 
        className="absolute top-75 left-110 w-25"/>

        <img src={burstRed} 
        className="absolute top-97 left-110 w-25"/>



        <form onSubmit={handleSubmit} className="space-y-8 absolute inset-x-120 top-80 h-30 tracking-[0.1em] text-[22px]" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-10">
              <div
                className="w-4 h-4 rounded-full "
                style={{ backgroundColor: player.color }}
              />
              <input
                type="text"
                value={player.name}
                onChange={(e) => {
                  const newPlayers = [...players];
                  newPlayers[index].name = e.target.value;
                  setPlayers(newPlayers);
                }}
                placeholder={`Player ${index + 1}`}
                required
                className="w-full px-8 py-2 rounded-[40px] border-2 focus:border-[#ECE6C2] focus:ring focus:ring-[#ECE6C2] focus:ring-opacity-50 transition-all outline-none tracking-[0.3em] placeholder-opacity-20" style={{ borderColor: player.color, placeholder: player.color }}
              />
            </div>
          ))}
          <button
            type="submit"
            className="absolute left-30 bg-[#73BDA8] tracking-[0.3em] text-[#1E1B1B] py-3 px-30 rounded-[30px] hover:from-[#7F6653] hover:to-[#DC7B59] transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default TwoNameInput;
