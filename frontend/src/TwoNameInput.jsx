import { useState } from 'react'
import './App.css'


function TwoNameInput() {
  const [players, setplayers] = useState([
    {name: '', color: '#6F5643'}, //dark brown
    {name: '', color: '#CC6B49'}  //red
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Players: ${players.map(p => p.name).join(', ')}`);
  };

  return (
    <>
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex flex-col items-center justify-center">
        <div>Player Setup</div>
        <form onSubmit={handleSubmit}>
          {players.map((player,index)=>(
            <div key={index}>
              <input
              type="text"
              value={player.name}
              onChange={(e) =>{
                const newPlayers = [...players];
                newPlayers[index].name = e.target.value;
                setplayers(newPlayers);
              }}
              placeholder={`Player ${index +1}`}
              required
              />
            </div>
          ))}
          <div type="submit">We're Ready</div>
        </form>
    </div>
    </>
  );
}

export default TwoNameInput;
