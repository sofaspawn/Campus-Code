import { useState } from 'react'
import './App.css'


function ThreeNameInput() {
  const [players, setplayers] = useState([
    {name: '', color: '#ECE6CE'}, //off white
    {name: '', color: '#73BDA8'},  //blue
    {name: '', color: '#D2A24C'}  //yellow
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Players: ${players.map(p => p.name).join(', ')}`);
  };

  return (
    <>
    <div>
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

export default ThreeNameInput;
