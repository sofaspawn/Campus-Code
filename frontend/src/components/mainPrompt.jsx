import React, { useState, useEffect } from "react";
import { Home, User } from "lucide-react";
import Messy from "../assets/Vector-4.png"

function Quiz({ players }) {
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [generatedStory, setGeneratedStory] = useState("");
  const [currentTurnPlayer, setCurrentTurnPlayer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstStory, setIsFirstStory] = useState(true);


  useEffect(() => {
    const initializeGame = async () => {
      if (players && players.length > 0) {
        try {

          const playerNames = players.map((player) => player.name);

          const response = await fetch(
            "https://cc-interhack-backend.onrender.com/addplayers",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ player_names: playerNames }),
            }
          );

          const data = await response.json();
          console.log("Players added:", data);

          await generateInitialStory();
        } catch (error) {
          console.error("Error initializing game:", error);
          setIsLoading(false);
        }
      }
    };

    initializeGame();
  }, [players]);

  const generateInitialStory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cc-interhack-backend.onrender.com/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_input: "" }),
        }
      );

      const data = await response.json();

      if (data.error) {
        console.error("Error generating initial story:", data.error);
      } else {
        setGeneratedStory(data.character_story);
        setCurrentTurnPlayer(data.current_turn);
        setIsFirstStory(false);
        console.log(isFirstStory);
        console.log("Initial story generated for player:", data.current_turn);
      }
    } catch (error) {
      console.error("Error calling generate endpoint:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const continueStory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cc-interhack-backend.onrender.com/continue",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            previous_story: generatedStory,
            user_choice: selectedOption,
            end_story: "False",
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        console.error("Error continuing story:", data.error);
      } else {
        setGeneratedStory(data.character_story);
        setCurrentTurnPlayer(data.current_turn);
        console.log("Story continued for player:", data.current_turn);
      }
    } catch (error) {
      console.error("Error calling continue endpoint:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!players || players.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1E1B1B]">
        <div>
          <p className="text-white">Waiting for players...</p>
        </div>
      </div>
    );
  }

  const currentPlayer = players[currentPlayerIndex];

  const handleCustomInput = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
 
      setAnswers([
        ...answers,
        {
          player: currentPlayer.name,
          question: generatedStory,
          answer: selectedOption,
        },
      ]);

      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);

      setSelectedOption("");

      continueStory();
    }
  };

  const handleEndStory = () => {
    fetch("https://cc-interhack-backend.onrender.com/continue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        previous_story: generatedStory,
        user_choice: "End the story",
        end_story: "True",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Story ended:", data);
        setIsCompleted(true);
      })
      .catch((error) => {
        console.error("Error ending story:", error);
      });
  };

  const handleEnd = () => {
    window.location.href = "/";
  };

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1B1B]">
        <div className="bg-[#1E1B1B] p-8 rounded-[50px] max-w-md w-full">
          <button
            onClick={handleEnd}
            className="z-1000 absolute left-175 flex items-center text-[22px] justify-center gap-2 bg-white opacity-30 text-black py-4 tracking-[0.07em] px-7 rounded-[40px] hover:bg-white transition-colors"
            style={{ fontFamily: "Adamina-Regular" }}>
            Build a New Story
          </button>
          <img src={Messy}
        className="absolute inset-0 opacity-20"/>

        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1E1B1B]">
        <div>
          <p className="text-white text-[25px]" style={{ fontFamily: "Adamina-Regular" }}>Generating story...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className=" flex items-center text-[22px] justify-center min-h-screen bg-[#1E1B1B]"
      style={{ fontFamily: "CENTAUR" }}>
      <div className="max-w-2xl w-full">
        <div className="mb-6">
          <div className="z-1000 flex justify-between items-center mb-4">
            {currentTurnPlayer && (
              <p className="text-white">Current player: {currentTurnPlayer}</p>
            )}
          </div>
        </div>

        <div className=" z-1000 rounded-[20px] mb-6">
          <h2 className="w-full text-lg font-thin mb-6 text-white whitespace-pre-line">
            {generatedStory}
          </h2>
        </div>

        <div className=" z-1000 space-y-3">
          <div className="mt-3">
            <input
              type="text"
              placeholder="What will you do?"
              value={selectedOption}
              onChange={handleCustomInput}
              className=" z-1000 w-full py-3 px-6 rounded-[40px] border-2 outline-none transition-all duration-200"
              style={{
                color: currentPlayer.color,
                backgroundColor: "",
                borderColor: currentPlayer.color || "#ccc",
              }}
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="z-1000 w-full mt-6 py-3 px-6 rounded-[40px] transition-colors"
          style={{
            backgroundColor: selectedOption ? currentPlayer.color : "#6F5643",
            color: selectedOption ? "white" : "rgba(255,255,255,0.5)",
            cursor: selectedOption ? "pointer" : "not-allowed",
          }}
        >
          Continue Story
        </button>

        <div className="z-1000 mt-6 flex gap-2 justify-center">
          {players.map((player, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: player.color }}
              ></div>
              <span className="text-sm text-white">{player.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleEndStory}
          className="fixed bottom-7 right-10 text-sm px-4 py-2 rounded-[40px] bg-white bg-opacity-30 hover:opacity-30 transition-colors text-black">
          End Story
        </button>
      </div>
    </div>
  );
}

export default Quiz;
