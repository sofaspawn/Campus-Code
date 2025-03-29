import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex flex-col items-center justify-center">
      <h1 className="text-[70px] mb-10 tracking-[0.35em]">campus code</h1>

      <div className="flex gap-15 mb-30 text-[30px]">
        <Link to="/2player" className="bg-[#73BDA8] px-15 py-8 rounded-[35px]">
          2 Player
        </Link>
        <Link to="/3player" className="bg-[#CC6B49] px-15 py-8 rounded-[35px]">
          3 Player
        </Link>
        <Link to="/4player" className="bg-[#D2A24C] px-15 py-8 rounded-[35px]">
          4 Player
        </Link>
      </div>
    </div>
  );
}

export default App;
