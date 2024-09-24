import React, { useState } from 'react'
import PlayerSection from './PlayerSection'

export default function BettingInterface() {
  const [totalBet, setTotalBet] = useState()
  const [player1Bet, setPlayer1Bet] = useState(0)
  const [player2Bet, setPlayer2Bet] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const handleBet = (player) => {
    console.log(`Player ${player} placed a bet`)
  }

  const handleStart = () => {
    console.log('Game started')
  }          

  const handleTotalBetChange = (e) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value)) {
      setTotalBet(value)
      setPlayer1Bet(value/2)
      setPlayer2Bet(value/2)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
      <div className="w-full max-w-5xl p-8 flex justify-between items-start">
        <PlayerSection player={1} betAmount={player1Bet} onBet={handleBet} />

        <div className="flex flex-col items-center justify-between">
          <div className="text-white text-2xl mb-4">TOTAL BET AMOUNT</div>
          <input
            type="number"
            value={totalBet.toFixed(9)}
            onChange={handleTotalBetChange}
            className="bg-slate-800 text-white text-center py-2 px-4 rounded mb-4 w-64"
          />
          <div className="flex justify-center gap-4 mb-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
              PLAYER 01
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
              PLAYER 02
            </button>
          </div>
          <button
            onClick={handleStart}
            className="bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600 transition-colors"
          >
            START
          </button>
          <div className="w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center mt-8">
            <div className="text-black font-bold">PLAYER 0{currentPlayer}</div>
          </div>
        </div>

        <PlayerSection player={2} betAmount={player2Bet} onBet={handleBet} />
      </div>
    </div>
  )
}
