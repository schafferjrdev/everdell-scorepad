import { useState, useEffect } from "react";
import {
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { MeepleIcon } from "./Icons";

function App() {
  const [gameStep, setGameStep] = useState(0);
  const [playerNumber, setPlayerNumber] = useState(0);
  const players = Array.from({ length: playerNumber });
  return (
    <div className='bg-primary w-screen h-screen  flex flex-col items-center overflow-scroll'>
      {gameStep === 0 && (
        <div className='flex flex-col items-center pt-6 gap-8'>
          <img
            className='rounded-xl max-w-xs'
            src='/logo_everdell.png'
            alt='logo everdell'
          />
          <div>
            <button
              onClick={() => setGameStep(1)}
              className='text-4xl bg-dark py-1 px-2 rounded-md text-light active:bg-primary active:text-dark'
            >
              Start
            </button>
          </div>
        </div>
      )}
      {gameStep === 1 && (
        <div className='h-full w-full flex flex-col justify-between items-center pt-2 gap-4'>
          <div className='flex flex-col p-4'>
            <h1 className='text-dark text-4xl font-bold mb-4'>
              How many players?
            </h1>
            <div className='max-w-5'>
              <Select
                placeholder='Number of players'
                onChange={(e) => setPlayerNumber(e.target.value)}
                bg='#e0c56e'
                borderColor='#483a23'
                color='#483a23'
                colorScheme='blackAlpha'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </Select>
            </div>
          </div>

          <button
            onClick={() => setGameStep(2)}
            disabled={!playerNumber}
            className='w-full text-3xl bg-dark py-1 px-2 text-light active:bg-primary active:text-dark disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
          >
            Next
          </button>
        </div>
      )}

      {gameStep === 2 && players.map((_, i) => <Player key={i} />)}
    </div>
  );
}

const Player = () => {
  const [sum, setSum] = useState(0);
  const [meeple, setMeeple] = useState("bg-orange-700");

  const [points, setPoints] = useState({
    basic: undefined,
    tokens: undefined,
    flower: undefined,
    events: undefined,
    journey: undefined,
  });

  const handleChange = (key, value) => {
    let num = Number(value);
    if (value === "0" || value === "") {
      num = 0;
    }
    setPoints((prev) => {
      return { ...prev, [key]: num };
    });
  };

  useEffect(() => {
    let soma = 0;
    for (const chave in points) {
      if (typeof points[chave] === "number") {
        soma += points[chave];
      }
    }

    setSum(soma);
  }, [points]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClick = () => {
    setInputValue("");
  };

  const textColor =
    meeple === "bg-yellow-950" || meeple === "bg-cyan-800"
      ? "text-light"
      : "text-dark";

  const placeholderColor =
    meeple === "bg-white" ? "placeholder-primary" : "placeholder-light";
  return (
    <div className='h-fit w-full flex flex-col items-center p-2 gap-4'>
      <div
        className={`${meeple} w-full p-4 ${textColor} font-bold gap-4 flex flex-col rounded-md`}
      >
        <div className='flex justify-between items-center'>
          <input
            className={`w-fit text-left text-xl bg-transparent ${placeholderColor}`}
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder='Set player name...'
          />
          <Menu>
            <MenuButton as={IconButton} variant='outline' colorScheme='#483a23'>
              <MeepleIcon className='text-dark' />
            </MenuButton>
            <MenuList onClick={(e) => setMeeple(e.target.value)}>
              <MenuItem value='bg-orange-700'>
                <MeepleIcon className='h-10 w-10 text-orange-700 mr-4' />
                Squirrel
              </MenuItem>
              <MenuItem value='bg-white'>
                <MeepleIcon className='h-10 w-10 text-white mr-4' />
                Rat
              </MenuItem>
              <MenuItem value='bg-cyan-800'>
                <MeepleIcon className='h-10 w-10 text-cyan-800 mr-4' />
                Tortoise
              </MenuItem>
              <MenuItem value='bg-yellow-950'>
                <MeepleIcon className='h-10 w-10 text-yellow-950 mr-4' />
                Hedgehog
              </MenuItem>
              <MenuItem value='bg-red-500'>
                <MeepleIcon className='h-10 w-10 text-red-500 mr-4' />
                Bird
              </MenuItem>
              <MenuItem value='bg-green-700'>
                <MeepleIcon className='h-10 w-10 text-green-700 mr-4' />
                Frog
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className='flex justify-center gap-4'>
          <input
            type='text'
            className='rounded-sm w-10 h-14 text-center bg-dark text-light'
            value={points.basic}
            onChange={(e) => handleChange("basic", e.target.value)}
          ></input>

          <input
            type='text'
            className='rounded-full w-14 h-14 text-center bg-tokens text-dark'
            value={points.tokens}
            onChange={(e) => handleChange("tokens", e.target.value)}
          ></input>

          <input
            type='text'
            className='rounded-full w-14 h-14 text-center bg-prosperity text-light'
            value={points.flower}
            onChange={(e) => handleChange("flower", e.target.value)}
          ></input>

          <input
            type='text'
            className='rounded-sm w-10 h-14 text-center bg-primary text-dark'
            value={points.events}
            onChange={(e) => handleChange("events", e.target.value)}
          ></input>

          <input
            type='text'
            className='rounded-sm w-14 h-14 text-center bg-slate-400 text-dark'
            value={points.journey}
            onChange={(e) => handleChange("journey", e.target.value)}
          ></input>
        </div>
        <p className='w-full text-center text-xl'>Total: {sum}</p>
      </div>
    </div>
  );
};

export default App;
