import { useState } from 'react'
import './App.css'


function FourNameInput() {
  const [players, setplayers] = useState([
    {name: '', color: '#6F5643'}, //dark brown
    {name: '', color: '#CC6B49'},  //red
    {name: '', color: '#ECE6C2'}, //off white
    {name: '', color: '#73BDA8'}  //blue
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Players: ${players.map(p => p.name).join(', ')}');
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

export default FourNameInput;